---
editUrl: false
next: false
prev: false
title: "AppClientDeployCallInterfaceParams"
---

Defined in: [src/types/app-client.ts:181](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L181)

Call interface parameters to pass into ApplicationClient.deploy

## Extended by

- [`AppClientDeployParams`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/appclientdeployparams/)

## Properties

### createArgs?

> `optional` **createArgs?**: [`AppClientCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app-client/type-aliases/appclientcallargs/)

Defined in: [src/types/app-client.ts:185](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L185)

Any args to pass to any create transaction that is issued as part of deployment

***

### createOnCompleteAction?

> `optional` **createOnCompleteAction?**: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` \| `"no_op"` \| `"opt_in"` \| `"close_out"` \| `"update_application"` \| `"delete_application"`

Defined in: [src/types/app-client.ts:187](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L187)

Override the on-completion action for the create call; defaults to NoOp

***

### deleteArgs?

> `optional` **deleteArgs?**: [`AppClientCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app-client/type-aliases/appclientcallargs/)

Defined in: [src/types/app-client.ts:191](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L191)

Any args to pass to any delete transaction that is issued as part of deployment

***

### deployTimeParams?

> `optional` **deployTimeParams?**: [`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/tealtemplateparams/)

Defined in: [src/types/app-client.ts:183](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L183)

Any deploy-time parameters to replace in the TEAL code

***

### updateArgs?

> `optional` **updateArgs?**: [`AppClientCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app-client/type-aliases/appclientcallargs/)

Defined in: [src/types/app-client.ts:189](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L189)

Any args to pass to any update transaction that is issued as part of deployment
