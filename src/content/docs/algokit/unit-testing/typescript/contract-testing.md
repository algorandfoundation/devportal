---
title: Smart Contract Testing
---

This guide provides an overview of how to test smart contracts using the [Algorand Typescript Testing package](https://www.npmjs.com/package/@algorandfoundation/algorand-typescript-testing). We will cover the basics of testing `arc4.Contract` and `BaseContract` classes, focusing on `abimethod` and `baremethod` decorators.

```{note}
The code snippets showcasing the contract testing capabilities are using [vitest](https://vitest.dev/) as the test framework. However, note that the `algorand-typescript-testing` package can be used with any other test framework that supports TypeScript. `vitest` is used for demonstration purposes in this documentation.
```

```ts
import { arc4 } from '@algorandfoundation/algorand-typescript'
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing'

// Create the context manager for snippets below
const ctx = new TestExecutionContext()
```

## `arc4.Contract`

Subclasses of `arc4.Contract` are **required** to be instantiated with an active test context. As part of instantiation, the test context will automatically create a matching `Application` object instance.

Within the class implementation, methods decorated with `arc4.abimethod` and `arc4.baremethod` will automatically assemble an `gtxn.ApplicationTxn` transaction to emulate the AVM application call. This behavior can be overriden by setting the transaction group manually as part of test setup, this is done via implicit invocation of `ctx.any.txn.applicationCall` _value generator_ (refer to [APIs](../apis) for more details).

```ts
class SimpleVotingContract extends arc4.Contract {
  topic = GlobalState({ initialValue: Bytes('default_topic'), key: 'topic' })
  votes = GlobalState({
    initialValue: Uint64(0),
    key: 'votes',
  })
  voted = LocalState<uint64>({ key: 'voted' })

  @arc4.abimethod({ onCreate: 'require' })
  create(initialTopic: bytes) {
    this.topic.value = initialTopic
    this.votes.value = Uint64(0)
  }

  @arc4.abimethod()
  vote(): uint64 {
    assert(this.voted(Txn.sender).value === 0, 'Account has already voted')
    this.votes.value = this.votes.value + 1
    this.voted(Txn.sender).value = Uint64(1)
    return this.votes.value
  }

  @arc4.abimethod({ readonly: true })
  getVotes(): uint64 {
    return this.votes.value
  }

  @arc4.abimethod()
  changeTopic(newTopic: bytes) {
    assert(Txn.sender === Txn.applicationId.creator, 'Only creator can change topic')
    this.topic.value = newTopic
    this.votes.value = Uint64(0)
    // Reset user's vote (this is simplified per single user for the sake of example)
    this.voted(Txn.sender).value = Uint64(0)
  }
}

// Arrange
const initialTopic = Bytes('initial_topic')
const contract = ctx.contract.create(SimpleVotingContract)
contract.voted(ctx.defaultSender).value = Uint64(0)

// Act - Create the topic
contract.create(initialTopic)

// Assert - Check initial state
expect(contract.topic.value).toEqual(initialTopic)
expect(contract.votes.value).toEqual(Uint64(0))

// Act - Vote
// The method `.vote()` is decorated with `algopy.arc4.abimethod`, which means it will assemble a transaction to emulate the AVM application call
const result = contract.vote()

// Assert - you can access the corresponding auto generated application call transaction via test context
expect(ctx.txn.lastGroup.transactions.length).toEqual(1)

// Assert - Note how local and global state are accessed via regular python instance attributes
expect(result).toEqual(1)
expect(contract.votes.value).toEqual(1)
expect(contract.voted(ctx.defaultSender).value).toEqual(1)

// Act - Change topic
const newTopic = Bytes('new_topic')
contract.changeTopic(newTopic)

// Assert - Check topic changed and votes reset
expect(contract.topic.value).toEqual(newTopic)
expect(contract.votes.value).toEqual(0)
expect(contract.voted(ctx.defaultSender).value).toEqual(0)

// Act - Get votes (should be 0 after reset)
const votes = contract.getVotes()

// Assert - Check votes
expect(votes).toEqual(0)
```

For more examples of tests using `arc4.Contract`, see the [examples](../examples) section.

## `BaseContract``

Subclasses of `BaseContract` are **required** to be instantiated with an active test context. As part of instantiation, the test context will automatically create a matching `Application` object instance. This behavior is identical to `arc4.Contract` class instances.

Unlike `arc4.Contract`, `BaseContract` requires manual setup of the transaction context and explicit method calls.

Here's an updated example demonstrating how to test a `BaseContract` class:

```ts
import { BaseContract, Bytes, GlobalState, Uint64 } from '@algorandfoundation/algorand-typescript'
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing'
import { afterEach, expect, test } from 'vitest'

class CounterContract extends BaseContract {
  counter = GlobalState({ initialValue: Uint64(0) })

  increment() {
    this.counter.value = this.counter.value + 1
    return Uint64(1)
  }

  approvalProgram() {
    return this.increment()
  }

  clearStateProgram() {
    return Uint64(1)
  }
}

const ctx = new TestExecutionContext()
afterEach(() => {
  ctx.reset()
})

test('increment', () => {
  // Instantiate contract
  const contract = ctx.contract.create(CounterContract)

  // Set up the transaction context using active_txn_overrides
  ctx.txn
    .createScope([ctx.any.txn.applicationCall({ appId: contract, sender: ctx.defaultSender, appArgs: [Bytes('increment')] })])
    .execute(() => {
      // Invoke approval program
      const result = contract.approvalProgram()

      // Assert approval program result
      expect(result).toEqual(1)

      // Assert counter value
      expect(contract.counter.value).toEqual(1)
    })
  // Test clear state program
  expect(contract.clearStateProgram()).toEqual(1)
})

test('increment with multiple txns', () => {
  const contract = ctx.contract.create(CounterContract)

  // For scenarios with multiple transactions, you can still use gtxns
  const extraPayment = ctx.any.txn.payment()

  ctx.txn
    .createScope(
      [
        extraPayment,
        ctx.any.txn.applicationCall({
          sender: ctx.defaultSender,
          appId: contract,
          appArgs: [Bytes('increment')],
        }),
      ],

      1, // Set the application call as the active transaction
    )
    .execute(() => {
      const result = contract.approvalProgram()

      expect(result).toEqual(1)
      expect(contract.counter.value).toEqual(1)
    })
  expect(ctx.txn.lastGroup.transactions.length).toEqual(2)
})
```

In this updated example:

1. We use `ctx.txn.createScope()` with `ctx.any.txn.applicationCall` to set up the transaction context for a single application call.

2. For scenarios involving multiple transactions, you can still use the `group` parameter to create a transaction group, as shown in the `test('increment with multiple txns', () => {})` function.

This approach provides more flexibility in setting up the transaction context for testing `Contract` classes, allowing for both simple single-transaction scenarios and more complex multi-transaction tests.

## Defer contract method invocation

You can create deferred application calls for more complex testing scenarios where order of transactions needs to be controlled:

```ts
class MyARC4Contract extends arc4.Contract {
  someMethod(payment: gtxn.PaymentTxn) {
    return Uint64(1)
  }
}

const ctx = new TestExecutionContext()

test('deferred call', () => {
  const contract = ctx.contract.create(MyARC4Contract)

  const extraPayment = ctx.any.txn.payment()
  const extraAssetTransfer = ctx.any.txn.assetTransfer()
  const implicitPayment = ctx.any.txn.payment()
  const deferredCall = ctx.txn.deferAppCall(contract, contract.someMethod, 'someMethod', implicitPayment)

  ctx.txn.createScope([extraPayment, deferredCall, extraAssetTransfer]).execute(() => {
    const result = deferredCall.submit()
  })
  console.log(ctx.txn.lastGroup) // [extra_payment, implicit_payment, app call, extra_asset_transfer]
})
```

A deferred application call prepares the application call transaction without immediately executing it. The call can be executed later by invoking the `.submit()` method on the deferred application call instance. As demonstrated in the example, you can also include the deferred call in a transaction group creation context manager to execute it as part of a larger transaction group. When `.submit()` is called, only the specific method passed to `defer_app_call()` will be executed.

```ts
// test cleanup
ctx.reset()
```