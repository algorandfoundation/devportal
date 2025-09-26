---
title: SendTransactionResult
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/) / SendTransactionResult

[types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/).SendTransactionResult

The result of sending a transaction

## Hierarchy

- **`SendTransactionResult`**

  ↳ [`AppCallTransactionResultOfType`](types_app.AppCallTransactionResultOfType.md)

  ↳ [`ConfirmedTransactionResult`](types_transaction.ConfirmedTransactionResult.md)

  ↳ [`ConfirmedTransactionResults`](types_transaction.ConfirmedTransactionResults.md)

## Table of contents

### Properties

- [confirmation](types_transaction.SendTransactionResult.md#confirmation)
- [transaction](types_transaction.SendTransactionResult.md#transaction)

## Properties

### confirmation

• `Optional` **confirmation**: `PendingTransactionResponse`

The response if the transaction was sent and waited for

#### Defined in

[src/types/transaction.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L57)

---

### transaction

• **transaction**: `Transaction`

The transaction

#### Defined in

[src/types/transaction.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L55)
