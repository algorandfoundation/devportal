---
editUrl: false
next: false
prev: false
title: 'TransactionPayment'
---

> **TransactionPayment** = `object`

Defined in: [packages/indexer_client/src/models/transaction-payment.ts:10](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-payment.ts#L10)

Fields for a payment transaction.

Definition:
data/transactions/payment.go : PaymentTxnFields

## Properties

### amount

> **amount**: `bigint`

Defined in: [packages/indexer_client/src/models/transaction-payment.ts:14](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-payment.ts#L14)

\[amt\] number of MicroAlgos intended to be transferred.

---

### closeAmount?

> `optional` **closeAmount**: `bigint`

Defined in: [packages/indexer_client/src/models/transaction-payment.ts:19](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-payment.ts#L19)

Number of MicroAlgos that were sent to the close-remainder-to address when closing the sender account.

---

### closeRemainderTo?

> `optional` **closeRemainderTo**: `string`

Defined in: [packages/indexer_client/src/models/transaction-payment.ts:24](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-payment.ts#L24)

\[close\] when set, indicates that the sending account should be closed and all remaining funds be transferred to this address.

---

### receiver

> **receiver**: `string`

Defined in: [packages/indexer_client/src/models/transaction-payment.ts:29](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-payment.ts#L29)

\[rcv\] receiver's address.
