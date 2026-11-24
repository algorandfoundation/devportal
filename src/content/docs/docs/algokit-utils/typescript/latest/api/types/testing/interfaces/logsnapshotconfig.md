---
editUrl: false
next: false
prev: false
title: "LogSnapshotConfig"
---

Defined in: [src/types/testing.ts:137](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L137)

Configuration for preparing a captured log snapshot.
This helps ensure that the provided configuration items won't appear
 with random values in the log snapshot, but rather will get substituted with predictable ids.

## Properties

### accounts?

> `optional` **accounts?**: (`string` \| [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `Account` \| [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/types/account/classes/signingaccount/) \| `LogicSigAccount` \| [`MultisigAccount`](/docs/algokit-utils/typescript/latest/api/types/account/classes/multisigaccount/) \| `Address`)[]

Defined in: [src/types/testing.ts:141](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L141)

Any accounts/addresses to replace the address for predictably

***

### apps?

> `optional` **apps?**: (`string` \| `number` \| `bigint`)[]

Defined in: [src/types/testing.ts:143](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L143)

Any app IDs to replace predictably

***

### filterPredicate?

> `optional` **filterPredicate?**: (`log`) => `boolean`

Defined in: [src/types/testing.ts:145](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L145)

Optional filter predicate to filter out logs

#### Parameters

##### log

`string`

#### Returns

`boolean`

***

### transactions?

> `optional` **transactions?**: (`string` \| `Transaction`)[]

Defined in: [src/types/testing.ts:139](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L139)

Any transaction IDs or transactions to replace the ID for predictably
