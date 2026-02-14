---
title: AppCallTransactionResultOfType\<T\>
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/) / AppCallTransactionResultOfType

[types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/).AppCallTransactionResultOfType

The result of preparing and/or sending multiple transactions

## Type parameters

| Name |
| :--- |
| `T`  |

## Hierarchy

- [`SendTransactionResults`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresults/)

- [`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/)

  ↳ **`AppCallTransactionResultOfType`**

## Table of contents

### Properties

- [confirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappcalltransactionresultoftype/#confirmation)
- [confirmations](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappcalltransactionresultoftype/#confirmations)
- [return](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappcalltransactionresultoftype/#return)
- [transaction](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappcalltransactionresultoftype/#transaction)
- [transactions](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappcalltransactionresultoftype/#transactions)

## Properties

### confirmation

• `Optional` **confirmation**: `PendingTransactionResponse`

The response if the transaction was sent and waited for

#### Inherited from

[SendTransactionResult](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/).[confirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/#confirmation)

#### Defined in

[src/types/transaction.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L57)

---

### confirmations

• `Optional` **confirmations**: `PendingTransactionResponse`[]

The responses if the transactions were sent and waited for,
the index of the confirmation will match the index of the underlying transaction

#### Inherited from

[SendTransactionResults](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresults/).[confirmations](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresults/#confirmations)

#### Defined in

[src/types/transaction.ts:67](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L67)

---

### return

• `Optional` **return**: `T`

If an ABI method was called the processed return value

#### Defined in

[src/types/app.ts:228](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L228)

---

### transaction

• **transaction**: `Transaction`

The transaction

#### Inherited from

[SendTransactionResult](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/).[transaction](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/#transaction)

#### Defined in

[src/types/transaction.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L55)

---

### transactions

• **transactions**: `Transaction`[]

The transactions that have been prepared and/or sent

#### Inherited from

[SendTransactionResults](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresults/).[transactions](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresults/#transactions)

#### Defined in

[src/types/transaction.ts:63](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L63)
