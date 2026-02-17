---
title: SendAtomicTransactionComposerResults
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/) / SendAtomicTransactionComposerResults

[types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/).SendAtomicTransactionComposerResults

The result of preparing and/or sending multiple transactions using an `AtomicTransactionComposer`

## Hierarchy

- [`SendTransactionResults`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionResults/)

  ↳ **`SendAtomicTransactionComposerResults`**

## Table of contents

### Properties

- [confirmations](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendAtomicTransactionComposerResults/#confirmations)
- [groupId](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendAtomicTransactionComposerResults/#groupid)
- [returns](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendAtomicTransactionComposerResults/#returns)
- [transactions](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendAtomicTransactionComposerResults/#transactions)
- [txIds](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendAtomicTransactionComposerResults/#txids)

## Properties

### confirmations

• **confirmations**: `PendingTransactionResponse`[]

The responses if the transactions were sent and waited for,
the index of the confirmation will match the index of the underlying transaction

#### Overrides

[SendTransactionResults](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionResults/).[confirmations](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionResults/#confirmations)

#### Defined in

[src/types/transaction.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L81)

---

### groupId

• **groupId**: `string`

base64 encoded representation of the group ID of the atomic group

#### Defined in

[src/types/transaction.ts:73](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L73)

---

### returns

• `Optional` **returns**: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#abireturn)[]

If ABI method(s) were called the processed return values

#### Defined in

[src/types/transaction.ts:77](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L77)

---

### transactions

• **transactions**: `Transaction`[]

The transactions that have been prepared and/or sent

#### Inherited from

[SendTransactionResults](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionResults/).[transactions](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionResults/#transactions)

#### Defined in

[src/types/transaction.ts:63](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L63)

---

### txIds

• **txIds**: `string`[]

The transaction IDs that have been prepared and/or sent

#### Defined in

[src/types/transaction.ts:75](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L75)
