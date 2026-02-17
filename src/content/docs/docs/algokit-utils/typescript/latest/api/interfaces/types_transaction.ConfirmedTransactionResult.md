---
title: ConfirmedTransactionResult
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/) / ConfirmedTransactionResult

[types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/).ConfirmedTransactionResult

The result of sending and confirming a transaction

## Hierarchy

- [`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionResult/)

  ↳ **`ConfirmedTransactionResult`**

## Table of contents

### Properties

- [confirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.ConfirmedTransactionResult/#confirmation)
- [transaction](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.ConfirmedTransactionResult/#transaction)

## Properties

### confirmation

• **confirmation**: `PendingTransactionResponse`

The response from sending and waiting for the transaction

#### Overrides

[SendTransactionResult](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionResult/).[confirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionResult/#confirmation)

#### Defined in

[src/types/transaction.ts:87](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L87)

---

### transaction

• **transaction**: `Transaction`

The transaction

#### Inherited from

[SendTransactionResult](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionResult/).[transaction](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionResult/#transaction)

#### Defined in

[src/types/transaction.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L55)
