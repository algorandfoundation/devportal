---
editUrl: false
next: false
prev: false
title: "ABIAppCallArg"
---

> **ABIAppCallArg** = `ABIArgument` \| [`TransactionToSign`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/transactiontosign/) \| `Transaction` \| `Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/)\> \| [`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/) \| `undefined`

Defined in: [src/types/app.ts:102](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L102)

An argument for an ABI method, either a primitive value, or a transaction with or without signer, or the unawaited async return value of an algokit method that returns a `SendTransactionResult`
