---
editUrl: false
next: false
prev: false
title: "AppDetailsBase"
---

> **AppDetailsBase** = `object`

Defined in: [src/types/app-client.ts:126](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L126)

The details of an AlgoKit Utils deployed app

## Properties

### deployTimeParams?

> `optional` **deployTimeParams?**: [`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/tealtemplateparams/)

Defined in: [src/types/app-client.ts:134](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L134)

Optionally provide any deploy-time parameters to replace in the TEAL code; if specified here will get
used in calls to `deploy`, `create` and `update` unless overridden in those calls

***

### params?

> `optional` **params?**: `SuggestedParams`

Defined in: [src/types/app-client.ts:130](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L130)

Default suggested params object to use

***

### sender?

> `optional` **sender?**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/app-client.ts:128](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L128)

Default sender to use for transactions issued by this application client
