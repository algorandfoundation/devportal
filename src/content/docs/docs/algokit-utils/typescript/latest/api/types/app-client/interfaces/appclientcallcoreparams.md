---
editUrl: false
next: false
prev: false
title: "AppClientCallCoreParams"
---

Defined in: [src/types/app-client.ts:211](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L211)

Common (core) parameters to construct a ApplicationClient contract call

## Properties

### note?

> `optional` **note?**: [`TransactionNote`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/transactionnote/)

Defined in: [src/types/app-client.ts:215](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L215)

The transaction note for the smart contract call

***

### sender?

> `optional` **sender?**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/app-client.ts:213](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L213)

The optional sender to send the transaction from, will use the application client's default sender by default if specified

***

### sendParams?

> `optional` **sendParams?**: [`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/)

Defined in: [src/types/app-client.ts:217](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L217)

Parameters to control transaction sending
