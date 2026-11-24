---
editUrl: false
next: false
prev: false
title: "AppClientDeployCoreParams"
---

Defined in: [src/types/app-client.ts:159](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L159)

Core parameters to pass into ApplicationClient.deploy

## Extended by

- [`AppClientDeployParams`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/appclientdeployparams/)

## Properties

### allowDelete?

> `optional` **allowDelete?**: `boolean`

Defined in: [src/types/app-client.ts:173](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L173)

Whether or not to allow deletes in the contract using the deploy-time deletability control if present in your contract.
If this is not specified then it will automatically be determined based on the AppSpec definition

***

### allowUpdate?

> `optional` **allowUpdate?**: `boolean`

Defined in: [src/types/app-client.ts:169](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L169)

Whether or not to allow updates in the contract using the deploy-time updatability control if present in your contract.
If this is not specified then it will automatically be determined based on the AppSpec definition

***

### onSchemaBreak?

> `optional` **onSchemaBreak?**: `"replace"` \| `"fail"` \| `"append"` \| [`OnSchemaBreak`](/docs/algokit-utils/typescript/latest/api/types/app/enumerations/onschemabreak/)

Defined in: [src/types/app-client.ts:175](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L175)

What action to perform if a schema break is detected

***

### onUpdate?

> `optional` **onUpdate?**: `"replace"` \| `"fail"` \| `"append"` \| `"update"` \| [`OnUpdate`](/docs/algokit-utils/typescript/latest/api/types/app/enumerations/onupdate/)

Defined in: [src/types/app-client.ts:177](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L177)

What action to perform if a TEAL update is detected

***

### sender?

> `optional` **sender?**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/app-client.ts:163](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L163)

The optional sender to send the transaction from, will use the application client's default sender by default if specified

***

### sendParams?

> `optional` **sendParams?**: `Omit`\<[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/), `"skipSending"` \| `"skipWaiting"`\>

Defined in: [src/types/app-client.ts:165](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L165)

Parameters to control transaction sending

***

### version?

> `optional` **version?**: `string`

Defined in: [src/types/app-client.ts:161](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L161)

The version of the contract, uses "1.0" by default
