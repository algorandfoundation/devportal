---
editUrl: false
next: false
prev: false
title: "FundAppAccountParams"
---

Defined in: [src/types/app-client.ts:253](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L253)

Parameters for funding an app account

## Properties

### amount

> **amount**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/app-client.ts:254](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L254)

***

### note?

> `optional` **note?**: [`TransactionNote`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/transactionnote/)

Defined in: [src/types/app-client.ts:258](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L258)

The transaction note for the smart contract call

***

### sender?

> `optional` **sender?**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/app-client.ts:256](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L256)

The optional sender to send the transaction from, will use the application client's default sender by default if specified

***

### sendParams?

> `optional` **sendParams?**: [`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/)

Defined in: [src/types/app-client.ts:260](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L260)

Parameters to control transaction sending
