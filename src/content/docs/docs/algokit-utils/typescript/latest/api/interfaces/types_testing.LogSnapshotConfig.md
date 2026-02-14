---
title: LogSnapshotConfig
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/testing](/docs/algokit-utils/typescript/latest/api/modules/types_testing/) / LogSnapshotConfig

[types/testing](/docs/algokit-utils/typescript/latest/api/modules/types_testing/).LogSnapshotConfig

Configuration for preparing a captured log snapshot.
This helps ensure that the provided configuration items won't appear
with random values in the log snapshot, but rather will get substituted with predictable ids.

## Table of contents

### Properties

- [accounts](/docs/algokit-utils/typescript/latest/api/interfaces/types_testinglogsnapshotconfig/#accounts)
- [apps](/docs/algokit-utils/typescript/latest/api/interfaces/types_testinglogsnapshotconfig/#apps)
- [filterPredicate](/docs/algokit-utils/typescript/latest/api/interfaces/types_testinglogsnapshotconfig/#filterpredicate)
- [transactions](/docs/algokit-utils/typescript/latest/api/interfaces/types_testinglogsnapshotconfig/#transactions)

## Properties

### accounts

• `Optional` **accounts**: (`string` \| [`MultisigAccount`](/docs/algokit-utils/typescript/latest/api/classes/types_accountmultisigaccount/) \| `default` \| [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/) \| `Address` \| [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_accounttransactionsigneraccount/) \| `LogicSigAccount`)[]

Any accounts/addresses to replace the address for predictably

#### Defined in

[src/types/testing.ts:141](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L141)

---

### apps

• `Optional` **apps**: (`string` \| `number` \| `bigint`)[]

Any app IDs to replace predictably

#### Defined in

[src/types/testing.ts:143](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L143)

---

### filterPredicate

• `Optional` **filterPredicate**: (`log`: `string`) => `boolean`

Optional filter predicate to filter out logs

#### Type declaration

▸ (`log`): `boolean`

##### Parameters

| Name  | Type     |
| :---- | :------- |
| `log` | `string` |

##### Returns

`boolean`

#### Defined in

[src/types/testing.ts:145](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L145)

---

### transactions

• `Optional` **transactions**: (`string` \| `Transaction`)[]

Any transaction IDs or transactions to replace the ID for predictably

#### Defined in

[src/types/testing.ts:139](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L139)
