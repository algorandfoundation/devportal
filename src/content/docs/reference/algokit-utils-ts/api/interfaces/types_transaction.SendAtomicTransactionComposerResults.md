---
title: SendAtomicTransactionComposerResults
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/) / SendAtomicTransactionComposerResults

[types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/).SendAtomicTransactionComposerResults

The result of preparing and/or sending multiple transactions using an `AtomicTransactionComposer`

## Hierarchy

- [`SendTransactionResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresults/)

  ↳ **`SendAtomicTransactionComposerResults`**

## Table of contents

### Properties

- [confirmations](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/#confirmations)
- [groupId](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/#groupid)
- [returns](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/#returns)
- [transactions](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/#transactions)
- [txIds](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/#txids)

## Properties

### confirmations

• **confirmations**: `PendingTransactionResponse`[]

The responses if the transactions were sent and waited for,
the index of the confirmation will match the index of the underlying transaction

#### Overrides

[SendTransactionResults](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresults/).[confirmations](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresults/#confirmations)

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

• `Optional` **returns**: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[]

If ABI method(s) were called the processed return values

#### Defined in

[src/types/transaction.ts:77](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L77)

---

### transactions

• **transactions**: `Transaction`[]

The transactions that have been prepared and/or sent

#### Inherited from

[SendTransactionResults](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresults/).[transactions](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresults/#transactions)

#### Defined in

[src/types/transaction.ts:63](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L63)

---

### txIds

• **txIds**: `string`[]

The transaction IDs that have been prepared and/or sent

#### Defined in

[src/types/transaction.ts:75](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L75)
