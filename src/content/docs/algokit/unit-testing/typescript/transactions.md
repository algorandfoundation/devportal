---
title: Transactions
---

The testing framework follows the Transaction definitions described in [`algorand-typescript` docs](https://github.com/algorandfoundation/puya-ts/blob/main/docs/lg-transactions). This section focuses on _value generators_ and interactions with inner transactions, it also explains how the framework identifies _active_ transaction group during contract method/subroutine/logicsig invocation.

```ts
import * as algots from '@algorandfoundation/algorand-typescript';
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing';

// Create the context manager for snippets below
const ctx = new TestExecutionContext();
```

## Group Transactions

Refers to test implementation of transaction stubs available under `algots.gtxn.*` namespace. Available under [`TxnValueGenerator`](../code/value-generators/txn/classes/TxnValueGenerator) instance accessible via `ctx.any.txn` property:

```ts
// Generate a random payment transaction
const payTxn = ctx.any.txn.payment({
  sender: ctx.any.account(), // Optional: Defaults to context's default sender if not provided
  receiver: ctx.any.account(), // Required
  amount: 1000000, // Required
});

// Generate a random asset transfer transaction
const assetTransferTxn = ctx.any.txn.assetTransfer({
  sender: ctx.any.account(), // Optional: Defaults to context's default sender if not provided
  assetReceiver: ctx.any.account(), // Required
  xferAsset: ctx.any.asset({ assetId: 1 }), // Required
  assetAmount: 1000, // Required
});

// Generate a random application call transaction
const appCallTxn = ctx.any.txn.applicationCall({
  appId: ctx.any.application(), // Required
  appArgs: [algots.Bytes('arg1'), algots.Bytes('arg2')], // Optional: Defaults to empty list if not provided
  accounts: [ctx.any.account()], // Optional: Defaults to empty list if not provided
  assets: [ctx.any.asset()], // Optional: Defaults to empty list if not provided
  apps: [ctx.any.application()], // Optional: Defaults to empty list if not provided
  approvalProgramPages: [algots.Bytes('approval_code')], // Optional: Defaults to empty list if not provided
  clearStateProgramPages: [algots.Bytes('clear_code')], // Optional: Defaults to empty list if not provided
  scratchSpace: { 0: algots.Bytes('scratch') }, // Optional: Defaults to empty dict if not provided
});

// Generate a random asset config transaction
const assetConfigTxn = ctx.any.txn.assetConfig({
  sender: ctx.any.account(), // Optional: Defaults to context's default sender if not provided
  configAsset: undefined, // Optional: If not provided, creates a new asset
  total: 1000000, // Required for new assets
  decimals: 0, // Required for new assets
  defaultFrozen: false, // Optional: Defaults to False if not provided
  unitName: algots.Bytes('UNIT'), // Optional: Defaults to empty string if not provided
  assetName: algots.Bytes('Asset'), // Optional: Defaults to empty string if not provided
  url: algots.Bytes('http://asset-url'), // Optional: Defaults to empty string if not provided
  metadataHash: algots.Bytes('metadata_hash'), // Optional: Defaults to empty bytes if not provided
  manager: ctx.any.account(), // Optional: Defaults to sender if not provided
  reserve: ctx.any.account(), // Optional: Defaults to zero address if not provided
  freeze: ctx.any.account(), // Optional: Defaults to zero address if not provided
  clawback: ctx.any.account(), // Optional: Defaults to zero address if not provided
});

// Generate a random key registration transaction
const keyRegTxn = ctx.any.txn.keyRegistration({
  sender: ctx.any.account(), // Optional: Defaults to context's default sender if not provided
  voteKey: algots.Bytes('vote_pk'), // Optional: Defaults to empty bytes if not provided
  selectionKey: algots.Bytes('selection_pk'), // Optional: Defaults to empty bytes if not provided
  voteFirst: 1, // Optional: Defaults to 0 if not provided
  voteLast: 1000, // Optional: Defaults to 0 if not provided
  voteKeyDilution: 10000, // Optional: Defaults to 0 if not provided
});

// Generate a random asset freeze transaction
const assetFreezeTxn = ctx.any.txn.assetFreeze({
  sender: ctx.any.account(), // Optional: Defaults to context's default sender if not provided
  freezeAsset: ctx.ledger.getAsset(algots.Uint64(1)), // Required
  freezeAccount: ctx.any.account(), // Required
  frozen: true, // Required
});
```

## Preparing for execution

When a smart contract instance (application) is interacted with on the Algorand network, it must be performed in relation to a specific transaction or transaction group where one or many transactions are application calls to target smart contract instances.

To emulate this behaviour, the `createScope` context manager is available on [`TransactionContext`](../code/subcontexts/transaction-context/classes/TransactionContext) instance that allows setting temporary transaction fields within a specific scope, passing in emulated transaction objects and identifying the active transaction index within the transaction group

```ts
import { arc4, Txn } from '@algorandfoundation/algorand-typescript';
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing';

class SimpleContract extends arc4.Contract {
  @arc4.abimethod()
  checkSender(): arc4.Address {
    return new arc4.Address(Txn.sender);
  }
}

const ctx = new TestExecutionContext();

// Create a contract instance
const contract = ctx.contract.create(SimpleContract);

// Use active_txn_overrides to change the sender
const testSender = ctx.any.account();

ctx.txn
  .createScope([ctx.any.txn.applicationCall({ appId: contract, sender: testSender })])
  .execute(() => {
    // Call the contract method
    const result = contract.checkSender();
    expect(result).toEqual(testSender);
  });

// Assert that the sender is the test_sender after exiting the
// transaction group context
expect(ctx.txn.lastActive.sender).toEqual(testSender);

// Assert the size of last transaction group
expect(ctx.txn.lastGroup.transactions.length).toEqual(1);
```

## Inner Transaction

Inner transactions are AVM transactions that are signed and executed by AVM applications (instances of deployed smart contracts or signatures).

When testing smart contracts, to stay consistent with AVM, the framework \_does not allow you to submit inner transactions outside of contract/subroutine invocation, but you can interact with and manage inner transactions using the test execution context as follows:

```ts
import { arc4, Asset, itxn, Txn, Uint64 } from '@algorandfoundation/algorand-typescript';
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing';

class MyContract extends arc4.Contract {
  @arc4.abimethod()
  payViaItxn(asset: Asset) {
    itxn
      .payment({
        receiver: Txn.sender,
        amount: 1,
      })
      .submit();
  }
}

// setup context
const ctx = new TestExecutionContext();

// Create a contract instance
const contract = ctx.contract.create(MyContract);

// Generate a random asset
const asset = ctx.any.asset();

// Execute the contract method
contract.payViaItxn(asset);

// Access the last submitted inner transaction
const paymentTxn = ctx.txn.lastGroup.lastItxnGroup().getPaymentInnerTxn();

// Assert properties of the inner transaction
expect(paymentTxn.receiver).toEqual(ctx.txn.lastActive.sender);
expect(paymentTxn.amount).toEqual(1);

// Access all inner transactions in the last group
ctx.txn.lastGroup.itxnGroups.at(-1)?.itxns.forEach(itxn => {
  // Perform assertions on each inner transaction
  expect(itxn.type).toEqual(TransactionType.Payment);
});

// Access a specific inner transaction group
const firstItxnGroup = ctx.txn.lastGroup.getItxnGroup(0);
const firstPaymentTxn = firstItxnGroup.getPaymentInnerTxn(0);
expect(firstPaymentTxn.type).toEqual(TransactionType.Payment);
```

In this example, we define a contract method `payViaItxn` that creates and submits an inner payment transaction. The test execution context automatically captures and stores the inner transactions submitted by the contract method.

Note that we don't need to wrap the execution in a `createScope` context manager because the method is decorated with `@arc4.abimethod`, which automatically creates a transaction group for the method. The `createScope` context manager is only needed when you want to create more complex transaction groups or patch transaction fields for various transaction-related opcodes in AVM.

To access the submitted inner transactions:

1. Use `ctx.txn.lastGroup.lastItxnGroup().getPaymentInnerTxn()` to access the last submitted inner transaction of a specific type, in this case payment transaction.
2. Iterate over all inner transactions in the last group using `ctx.txn.lastGroup.itxnGroups.at(-1)?.itxns`.
3. Access a specific inner transaction group using `ctx.txn.lastGroup.getItxnGroup(index)`.

These methods provide type validation and will raise an error if the requested transaction type doesn't match the actual type of the inner transaction.

## References

- [API](../api) for more details on the test context manager and inner transactions related methods that perform implicit inner transaction type validation.
- [Examples](../examples) for more examples of smart contracts and associated tests that interact with inner transactions.

```ts
// test cleanup
ctx.reset();
```
