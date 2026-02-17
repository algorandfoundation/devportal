---
title: AppClientDeployCallInterfaceParams
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/app-client](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/) / AppClientDeployCallInterfaceParams

[types/app-client](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/).AppClientDeployCallInterfaceParams

Call interface parameters to pass into ApplicationClient.deploy

## Hierarchy

- **`AppClientDeployCallInterfaceParams`**

  ↳ [`AppClientDeployParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientDeployParams/)

## Table of contents

### Properties

- [createArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientDeployCallInterfaceParams/#createargs)
- [createOnCompleteAction](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientDeployCallInterfaceParams/#createoncompleteaction)
- [deleteArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientDeployCallInterfaceParams/#deleteargs)
- [deployTimeParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientDeployCallInterfaceParams/#deploytimeparams)
- [updateArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientDeployCallInterfaceParams/#updateargs)

## Properties

### createArgs

• `Optional` **createArgs**: [`AppClientCallArgs`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientcallargs)

Any args to pass to any create transaction that is issued as part of deployment

#### Defined in

[src/types/app-client.ts:185](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L185)

---

### createOnCompleteAction

• `Optional` **createOnCompleteAction**: `"no_op"` \| `"opt_in"` \| `"close_out"` \| `"update_application"` \| `"delete_application"` \| `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC`

Override the on-completion action for the create call; defaults to NoOp

#### Defined in

[src/types/app-client.ts:187](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L187)

---

### deleteArgs

• `Optional` **deleteArgs**: [`AppClientCallArgs`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientcallargs)

Any args to pass to any delete transaction that is issued as part of deployment

#### Defined in

[src/types/app-client.ts:191](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L191)

---

### deployTimeParams

• `Optional` **deployTimeParams**: [`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.TealTemplateParams/)

Any deploy-time parameters to replace in the TEAL code

#### Defined in

[src/types/app-client.ts:183](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L183)

---

### updateArgs

• `Optional` **updateArgs**: [`AppClientCallArgs`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientcallargs)

Any args to pass to any update transaction that is issued as part of deployment

#### Defined in

[src/types/app-client.ts:189](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L189)
