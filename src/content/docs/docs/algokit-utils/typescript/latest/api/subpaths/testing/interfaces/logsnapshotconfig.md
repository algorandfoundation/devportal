---
editUrl: false
next: false
prev: false
title: 'LogSnapshotConfig'
---

Defined in: [src/testing/types.ts:140](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L140)

Configuration for preparing a captured log snapshot.
This helps ensure that the provided configuration items won't appear
with random values in the log snapshot, but rather will get substituted with predictable ids.

## Properties

### accounts?

> `optional` **accounts**: (`string` \| [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) \| [`MultisigAccount`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/multisigaccount/) \| [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| [`LogicSigAccount`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsigaccount/))[]

Defined in: [src/testing/types.ts:144](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L144)

Any accounts/addresses to replace the address for predictably

---

### apps?

> `optional` **apps**: (`string` \| `number` \| `bigint`)[]

Defined in: [src/testing/types.ts:146](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L146)

Any app IDs to replace predictably

---

### filterPredicate()?

> `optional` **filterPredicate**: (`log`) => `boolean`

Defined in: [src/testing/types.ts:148](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L148)

Optional filter predicate to filter out logs

#### Parameters

##### log

`string`

#### Returns

`boolean`

---

### transactions?

> `optional` **transactions**: (`string` \| [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/))[]

Defined in: [src/testing/types.ts:142](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L142)

Any transaction IDs or transactions to replace the ID for predictably
