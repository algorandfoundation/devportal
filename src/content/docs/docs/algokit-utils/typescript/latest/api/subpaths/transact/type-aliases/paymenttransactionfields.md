---
editUrl: false
next: false
prev: false
title: 'PaymentTransactionFields'
---

> **PaymentTransactionFields** = `object`

Defined in: [packages/transact/src/transactions/payment.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/payment.ts#L8)

Represents a payment transaction that transfers ALGO between accounts.

Payment transactions are used to transfer ALGO between accounts.

## Properties

### amount

> **amount**: `bigint`

Defined in: [packages/transact/src/transactions/payment.ts:19](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/payment.ts#L19)

The amount of microALGO to send.

Specified in microALGO (1 ALGO = 1,000,000 microALGO).

---

### closeRemainderTo?

> `optional` **closeRemainderTo**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/transactions/payment.ts:28](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/payment.ts#L28)

Optional address to send all remaining funds to after the transfer.

If specified, this indicates that the sender account should be closed after the transaction,
and all remaining funds (minus fees) should be transferred to the specified address.
This effectively removes the sender account from the ledger.

---

### receiver

> **receiver**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/transactions/payment.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/payment.ts#L12)

The address of the account receiving the ALGO payment.
