---
title: State Management
---

`algorand-typescript-testing` provides tools to test state-related abstractions in Algorand smart contracts. This guide covers global state, local state, boxes, and scratch space management.

```ts
import * as algots from '@algorandfoundation/algorand-typescript'
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing'

// Create the context manager for snippets below
const ctx = new TestExecutionContext()
```

## Global State

Global state is represented as instance attributes on `algots.Contract` and `algots.arc4.Contract` classes.

```ts
class MyContract extends algots.arc4.Contract {
  stateA = algots.GlobalState<algots.uint64>({ key: 'globalStateA' })
  stateB = algots.GlobalState({ initialValue: algots.Uint64(1), key: 'globalStateB' })
}

// In your test
const contract = ctx.contract.create(MyContract)
contract.stateA.value = algots.Uint64(10)
contract.stateB.value = algots.Uint64(20)
```

## Local State

Local state is defined similarly to global state, but accessed using account addresses as keys.

```ts
class MyContract extends algots.arc4.Contract {
  localStateA = algots.LocalState<algots.uint64>({ key: 'localStateA' })
}

// In your test
const contract = ctx.contract.create(MyContract)
const account = ctx.any.account()
contract.localStateA(account).value = algots.Uint64(10)
```

## Boxes

The framework supports various Box abstractions available in `algorand-typescript`.

```ts
class MyContract extends algots.arc4.Contract {
  box: algots.Box<algots.uint64> | undefined
  boxMap = algots.BoxMap<algots.bytes, algots.uint64>({ keyPrefix: 'boxMap' })

  @algots.arc4.abimethod()
  someMethod(keyA: algots.bytes, keyB: algots.bytes, keyC: algots.bytes) {
    this.box = algots.Box<algots.uint64>({ key: keyA })
    this.box.value = algots.Uint64(1)
    this.boxMap.set(keyB, algots.Uint64(1))
    this.boxMap.set(keyC, algots.Uint64(2))
  }
}

// In your test
const contract = ctx.contract.create(MyContract)
const keyA = algots.Bytes('keyA')
const keyB = algots.Bytes('keyB')
const keyC = algots.Bytes('keyC')

contract.someMethod(keyA, keyB, keyC)

// Access boxes
const boxContent = ctx.ledger.getBox(contract, keyA)
expect(ctx.ledger.boxExists(contract, keyA)).toBe(true)

// Set box content manually
ctx.ledger.setBox(contract, keyA, algots.op.itob(algots.Uint64(1)))
```

## Scratch Space

Scratch space is represented as a list of 256 slots for each transaction.

```ts
@algots.contract({ scratchSlots: [1, 2, { from: 3, to: 20 }] })
class MyContract extends algots.Contract {
  approvalProgram(): boolean {
    algots.op.Scratch.store(1, algots.Uint64(5))
    algots.assert(algots.op.Scratch.loadUint64(1) === algots.Uint64(5))
    return true
  }
}

// In your test
const contract = ctx.contract.create(MyContract)
const result = contract.approvalProgram()

expect(result).toBe(true)
const scratchSpace = ctx.txn.lastGroup.getScratchSpace()
expect(scratchSpace[1]).toEqual(5)
```

For more detailed information, explore the example contracts in the `examples/` directory, the [coverage](../coverage) page, and the [API documentation](../api).

```ts
// test cleanup
ctx.reset()
```