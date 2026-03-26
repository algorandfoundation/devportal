---
editUrl: false
next: false
prev: false
title: 'SimulateTransactionResult'
---

> **SimulateTransactionResult** = `object`

Defined in: [packages/algod_client/src/models/simulate-transaction-result.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-transaction-result.ts#L13)

Simulation result for an individual transaction

## Properties

### appBudgetConsumed?

> `optional` **appBudgetConsumed**: `number`

Defined in: [packages/algod_client/src/models/simulate-transaction-result.ts:19](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-transaction-result.ts#L19)

Budget used during execution of an app call transaction. This value includes budged used by inner app calls spawned by this transaction.

---

### execTrace?

> `optional` **execTrace**: [`SimulationTransactionExecTrace`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/simulationtransactionexectrace/)

Defined in: [packages/algod_client/src/models/simulate-transaction-result.ts:25](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-transaction-result.ts#L25)

---

### fixedSigner?

> `optional` **fixedSigner**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/algod_client/src/models/simulate-transaction-result.ts:31](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-transaction-result.ts#L31)

The account that needed to sign this transaction when no signature was provided and the provided signer was incorrect.

---

### logicSigBudgetConsumed?

> `optional` **logicSigBudgetConsumed**: `number`

Defined in: [packages/algod_client/src/models/simulate-transaction-result.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-transaction-result.ts#L24)

Budget used during execution of a logic sig transaction.

---

### txnResult

> **txnResult**: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)

Defined in: [packages/algod_client/src/models/simulate-transaction-result.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-transaction-result.ts#L14)

---

### unnamedResourcesAccessed?

> `optional` **unnamedResourcesAccessed**: [`SimulateUnnamedResourcesAccessed`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/simulateunnamedresourcesaccessed/)

Defined in: [packages/algod_client/src/models/simulate-transaction-result.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-transaction-result.ts#L26)
