---
title: TransactionGroupToSend
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/) / TransactionGroupToSend



[types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/).TransactionGroupToSend

A group of transactions to send together as an atomic group
https://dev.algorand.co/concepts/transactions/atomic-txn-groups/

## Table of contents

### Properties

- [sendParams](#sendparams)
- [signer](#signer)
- [transactions](#transactions)

## Properties

### sendParams

• `Optional` **sendParams**: `Omit`\<[`SendTransactionParams`](), ``"fee"`` \| ``"maxFee"`` \| ``"skipSending"`` \| ``"atc"``\>

Any parameters to control the semantics of the send to the network

#### Defined in

[src/types/transaction.ts:123](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L123)

___

### signer

• `Optional` **signer**: [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

Optional signer to pass in, required if at least one transaction provided is just the transaction, ignored otherwise

#### Defined in

[src/types/transaction.ts:130](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L130)

___

### transactions

• **transactions**: (`Transaction` \| [`TransactionToSign`]() \| `Promise`\<[`SendTransactionResult`]()\>)[]

The list of transactions to send, which can either be a raw transaction (in which case `signer` is required),
  the async result of an AlgoKit utils method that returns a `SendTransactionResult` (saves unwrapping the promise, be sure to pass `skipSending: true`, `signer` is also required)
  or the transaction with its signer (`signer` is ignored)

#### Defined in

[src/types/transaction.ts:128](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L128)