---
title: LogSnapshotConfig
slug: reference/algokit-utils-ts/api/interfaces/types_testinglogsnapshotconfig
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/testing](/reference/algokit-utils-ts/api/modules/types_testing/) / LogSnapshotConfig



[types/testing](/reference/algokit-utils-ts/api/modules/types_testing/).LogSnapshotConfig

Configuration for preparing a captured log snapshot.
This helps ensure that the provided configuration items won't appear
 with random values in the log snapshot, but rather will get substituted with predictable ids.

## Table of contents

### Properties

- [accounts](#accounts)
- [apps](#apps)
- [filterPredicate](#filterpredicate)
- [transactions](#transactions)

## Properties

### accounts

• `Optional` **accounts**: (`string` \| [`MultisigAccount`](/reference/algokit-utils-ts/api/classes/types_accountmultisigaccount/) \| `default` \| [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/) \| `Address` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) \| `LogicSigAccount`)[]

Any accounts/addresses to replace the address for predictably

#### Defined in

[src/types/testing.ts:141](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L141)

___

### apps

• `Optional` **apps**: (`string` \| `number` \| `bigint`)[]

Any app IDs to replace predictably

#### Defined in

[src/types/testing.ts:143](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L143)

___

### filterPredicate

• `Optional` **filterPredicate**: (`log`: `string`) => `boolean`

Optional filter predicate to filter out logs

#### Type declaration

▸ (`log`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `log` | `string` |

##### Returns

`boolean`

#### Defined in

[src/types/testing.ts:145](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L145)

___

### transactions

• `Optional` **transactions**: (`string` \| `Transaction`)[]

Any transaction IDs or transactions to replace the ID for predictably

#### Defined in

[src/types/testing.ts:139](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L139)