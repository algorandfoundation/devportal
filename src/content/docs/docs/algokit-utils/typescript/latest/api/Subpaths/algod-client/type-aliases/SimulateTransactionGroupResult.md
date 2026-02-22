---
editUrl: false
next: false
prev: false
title: "SimulateTransactionGroupResult"
---

> **SimulateTransactionGroupResult** = `object`

Defined in: [packages/algod\_client/src/models/simulate-transaction-group-result.ts:11](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-transaction-group-result.ts#L11)

Simulation result for an atomic transaction group

## Properties

### appBudgetAdded?

> `optional` **appBudgetAdded**: `number`

Defined in: [packages/algod\_client/src/models/simulate-transaction-group-result.ts:30](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-transaction-group-result.ts#L30)

Total budget added during execution of app calls in the transaction group.

***

### appBudgetConsumed?

> `optional` **appBudgetConsumed**: `number`

Defined in: [packages/algod\_client/src/models/simulate-transaction-group-result.ts:35](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-transaction-group-result.ts#L35)

Total budget consumed during execution of app calls in the transaction group.

***

### failedAt?

> `optional` **failedAt**: `number`[]

Defined in: [packages/algod\_client/src/models/simulate-transaction-group-result.ts:25](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-transaction-group-result.ts#L25)

If present, indicates which transaction in this group caused the failure. This array represents the path to the failing transaction. Indexes are zero based, the first element indicates the top-level transaction, and successive elements indicate deeper inner transactions.

***

### failureMessage?

> `optional` **failureMessage**: `string`

Defined in: [packages/algod\_client/src/models/simulate-transaction-group-result.ts:20](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-transaction-group-result.ts#L20)

If present, indicates that the transaction group failed and specifies why that happened

***

### txnResults

> **txnResults**: [`SimulateTransactionResult`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/simulatetransactionresult/)[]

Defined in: [packages/algod\_client/src/models/simulate-transaction-group-result.ts:15](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-transaction-group-result.ts#L15)

Simulation result for individual transactions

***

### unnamedResourcesAccessed?

> `optional` **unnamedResourcesAccessed**: [`SimulateUnnamedResourcesAccessed`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/simulateunnamedresourcesaccessed/)

Defined in: [packages/algod\_client/src/models/simulate-transaction-group-result.ts:36](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-transaction-group-result.ts#L36)
