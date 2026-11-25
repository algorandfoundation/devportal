---
editUrl: false
next: false
prev: false
title: "TransactionGroupToSend"
---

Defined in: [src/types/transaction.ts:121](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L121)

A group of transactions to send together as an atomic group
https://dev.algorand.co/concepts/transactions/atomic-txn-groups/

## Properties

### sendParams?

> `optional` **sendParams?**: `Omit`\<[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/), `"maxFee"` \| `"skipSending"` \| `"atc"` \| `"fee"`\>

Defined in: [src/types/transaction.ts:123](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L123)

Any parameters to control the semantics of the send to the network

***

### signer?

> `optional` **signer?**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/transaction.ts:130](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L130)

Optional signer to pass in, required if at least one transaction provided is just the transaction, ignored otherwise

***

### transactions

> **transactions**: (`Transaction` \| [`TransactionToSign`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/transactiontosign/) \| `Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/)\>)[]

Defined in: [src/types/transaction.ts:128](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L128)

The list of transactions to send, which can either be a raw transaction (in which case `signer` is required),
  the async result of an AlgoKit utils method that returns a `SendTransactionResult` (saves unwrapping the promise, be sure to pass `skipSending: true`, `signer` is also required)
  or the transaction with its signer (`signer` is ignored)
