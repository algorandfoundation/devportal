---
title: ConfirmedTransactionResult
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/) / ConfirmedTransactionResult

[types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/).ConfirmedTransactionResult

The result of sending and confirming a transaction

## Hierarchy

- [`SendTransactionResult`](types_transaction.SendTransactionResult.md)

  ↳ **`ConfirmedTransactionResult`**

## Table of contents

### Properties

- [confirmation](types_transaction.ConfirmedTransactionResult.md#confirmation)
- [transaction](types_transaction.ConfirmedTransactionResult.md#transaction)

## Properties

### confirmation

• **confirmation**: `PendingTransactionResponse`

The response from sending and waiting for the transaction

#### Overrides

[SendTransactionResult](types_transaction.SendTransactionResult.md).[confirmation](types_transaction.SendTransactionResult.md#confirmation)

#### Defined in

[src/types/transaction.ts:87](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L87)

---

### transaction

• **transaction**: `Transaction`

The transaction

#### Inherited from

[SendTransactionResult](types_transaction.SendTransactionResult.md).[transaction](types_transaction.SendTransactionResult.md#transaction)

#### Defined in

[src/types/transaction.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L55)
