---
title: types/app-client
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / types/app-client

## Table of contents

### Classes

- [AppClient](/docs/algokit-utils/typescript/latest/api/classes/types_app_client.AppClient/)
- [ApplicationClient](/docs/algokit-utils/typescript/latest/api/classes/types_app_client.ApplicationClient/)

### Interfaces

- [AppClientCallABIArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientCallABIArgs/)
- [AppClientCallCoreParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientCallCoreParams/)
- [AppClientCompilationParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientCompilationParams/)
- [AppClientCompilationResult](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientCompilationResult/)
- [AppClientDeployCallInterfaceParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientDeployCallInterfaceParams/)
- [AppClientDeployCoreParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientDeployCoreParams/)
- [AppClientDeployParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientDeployParams/)
- [AppClientParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientParams/)
- [AppSourceMaps](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppSourceMaps/)
- [FundAppAccountParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.FundAppAccountParams/)
- [ResolveAppById](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.ResolveAppById/)
- [ResolveAppByIdBase](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.ResolveAppByIdBase/)
- [SourceMapExport](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.SourceMapExport/)

### Type Aliases

- [AppClientBareCallParams](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientbarecallparams)
- [AppClientCallArgs](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientcallargs)
- [AppClientCallParams](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientcallparams)
- [AppClientCallRawArgs](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientcallrawargs)
- [AppClientClearStateParams](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientclearstateparams)
- [AppClientCreateOnComplete](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientcreateoncomplete)
- [AppClientCreateParams](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientcreateparams)
- [AppClientMethodCallParams](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientmethodcallparams)
- [AppClientUpdateParams](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientupdateparams)
- [AppDetails](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appdetails)
- [AppDetailsBase](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appdetailsbase)
- [AppSpecAppDetails](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appspecappdetails)
- [AppSpecAppDetailsBase](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appspecappdetailsbase)
- [AppSpecAppDetailsByCreatorAndName](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appspecappdetailsbycreatorandname)
- [AppSpecAppDetailsById](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appspecappdetailsbyid)
- [CallOnComplete](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#calloncomplete)
- [CloneAppClientParams](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#cloneappclientparams)
- [FundAppParams](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#fundappparams)
- [ResolveAppByCreatorAndName](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#resolveappbycreatorandname)
- [ResolveAppByCreatorAndNameBase](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#resolveappbycreatorandnamebase)
- [ResolveAppClientByCreatorAndName](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#resolveappclientbycreatorandname)
- [ResolveAppClientByNetwork](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#resolveappclientbynetwork)

## Type Aliases

### AppClientBareCallParams

Ƭ **AppClientBareCallParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`CommonAppCallParams`](/docs/algokit-utils/typescript/latest/api/modules/types_composer/#commonappcallparams), `"appId"` \| `"sender"` \| `"onComplete"`\> & \{ `sender?`: `Address` \| `string` }\>

AppClient common parameters for a bare app call

#### Defined in

[src/types/app-client.ts:358](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L358)

---

### AppClientCallArgs

Ƭ **AppClientCallArgs**: [`AppClientCallRawArgs`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientcallrawargs) \| [`AppClientCallABIArgs`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientCallABIArgs/)

The arguments to pass to an Application Client smart contract call

#### Defined in

[src/types/app-client.ts:208](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L208)

---

### AppClientCallParams

Ƭ **AppClientCallParams**: [`AppClientCallArgs`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientcallargs) & [`AppClientCallCoreParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientCallCoreParams/)

Parameters to construct a ApplicationClient contract call

#### Defined in

[src/types/app-client.ts:221](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L221)

---

### AppClientCallRawArgs

Ƭ **AppClientCallRawArgs**: [`RawAppCallArgs`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.RawAppCallArgs/)

#### Defined in

[src/types/app-client.ts:200](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L200)

---

### AppClientClearStateParams

Ƭ **AppClientClearStateParams**: [`AppClientCallRawArgs`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientcallrawargs) & [`AppClientCallCoreParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientCallCoreParams/)

Parameters to construct a ApplicationClient clear state contract call

#### Defined in

[src/types/app-client.ts:224](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L224)

---

### AppClientCreateOnComplete

Ƭ **AppClientCreateOnComplete**: `Object`

On-complete action parameter for creating a contract using ApplicationClient

#### Type declaration

| Name                | Type                                                                                                                                                                                                  | Description                                                             |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| `onCompleteAction?` | `Exclude`\<[`AppCallType`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#appcalltype), `"clear_state"`\> \| `Exclude`\<`OnApplicationComplete`, `OnApplicationComplete.ClearStateOC`\> | Override the on-completion action for the create call; defaults to NoOp |

#### Defined in

[src/types/app-client.ts:236](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L236)

---

### AppClientCreateParams

Ƭ **AppClientCreateParams**: [`AppClientCallParams`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientcallparams) & [`AppClientCompilationParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientCompilationParams/) & [`AppClientCreateOnComplete`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientcreateoncomplete) & \{ `schema?`: `Partial`\<[`AppStorageSchema`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppStorageSchema/)\> }

Parameters for creating a contract using ApplicationClient

#### Defined in

[src/types/app-client.ts:242](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L242)

---

### AppClientMethodCallParams

Ƭ **AppClientMethodCallParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`CommonAppCallParams`](/docs/algokit-utils/typescript/latest/api/modules/types_composer/#commonappcallparams), `"appId"` \| `"sender"` \| `"method"` \| `"args"`\> & \{ `args?`: (`ABIValue` \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/modules/types_app_arc56/#abistruct) \| [`AppMethodCallTransactionArgument`](/docs/algokit-utils/typescript/latest/api/modules/types_composer/#appmethodcalltransactionargument) \| `undefined`)[] ; `method`: `string` ; `sender?`: `Address` \| `string` }\>

AppClient common parameters for an ABI method call

#### Defined in

[src/types/app-client.ts:366](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L366)

---

### AppClientUpdateParams

Ƭ **AppClientUpdateParams**: [`AppClientCallParams`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientcallparams) & [`AppClientCompilationParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientCompilationParams/)

Parameters for updating a contract using ApplicationClient

#### Defined in

[src/types/app-client.ts:250](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L250)

---

### AppDetails

Ƭ **AppDetails**: [`AppDetailsBase`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appdetailsbase) & [`ResolveAppById`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.ResolveAppById/) \| [`ResolveAppByCreatorAndName`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#resolveappbycreatorandname)

The details of an AlgoKit Utils deployed app

#### Defined in

[src/types/app-client.ts:138](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L138)

---

### AppDetailsBase

Ƭ **AppDetailsBase**: `Object`

The details of an AlgoKit Utils deployed app

#### Type declaration

| Name                | Type                                                                                                              | Description                                                                                                                                                                             |
| :------------------ | :---------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deployTimeParams?` | [`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.TealTemplateParams/)        | Optionally provide any deploy-time parameters to replace in the TEAL code; if specified here will get used in calls to `deploy`, `create` and `update` unless overridden in those calls |
| `params?`           | `SuggestedParams`                                                                                                 | Default suggested params object to use                                                                                                                                                  |
| `sender?`           | [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom) | Default sender to use for transactions issued by this application client                                                                                                                |

#### Defined in

[src/types/app-client.ts:126](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L126)

---

### AppSpecAppDetails

Ƭ **AppSpecAppDetails**: [`AppSpecAppDetailsBase`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appspecappdetailsbase) & [`AppDetails`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appdetails)

The details of an ARC-0032 app spec specified, AlgoKit Utils deployed app

#### Defined in

[src/types/app-client.ts:156](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L156)

---

### AppSpecAppDetailsBase

Ƭ **AppSpecAppDetailsBase**: `Object`

The details of an ARC-0032 app spec specified, AlgoKit Utils deployed app

#### Type declaration

| Name  | Type                                                                                                  | Description                                                                        |
| :---- | :---------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------- |
| `app` | [`AppSpec`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_spec.AppSpec/) \| `string` | The ARC-0032 application spec as either: _ Parsed JSON `AppSpec` _ Raw JSON string |

#### Defined in

[src/types/app-client.ts:141](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L141)

---

### AppSpecAppDetailsByCreatorAndName

Ƭ **AppSpecAppDetailsByCreatorAndName**: [`AppSpecAppDetailsBase`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appspecappdetailsbase) & [`AppDetailsBase`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appdetailsbase) & [`ResolveAppByCreatorAndNameBase`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#resolveappbycreatorandnamebase)

The details of an ARC-0032 app spec specified, AlgoKit Utils deployed app by creator and name

#### Defined in

[src/types/app-client.ts:153](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L153)

---

### AppSpecAppDetailsById

Ƭ **AppSpecAppDetailsById**: [`AppSpecAppDetailsBase`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appspecappdetailsbase) & [`AppDetailsBase`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appdetailsbase) & [`ResolveAppByIdBase`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.ResolveAppByIdBase/)

The details of an ARC-0032 app spec specified, AlgoKit Utils deployed app by id

#### Defined in

[src/types/app-client.ts:150](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L150)

---

### CallOnComplete

Ƭ **CallOnComplete**: `Object`

onComplete parameter for a non-update app call

#### Type declaration

| Name          | Type                                                                              | Description                                |
| :------------ | :-------------------------------------------------------------------------------- | :----------------------------------------- |
| `onComplete?` | `Exclude`\<`OnApplicationComplete`, `OnApplicationComplete.UpdateApplicationOC`\> | On-complete of the call; defaults to no-op |

#### Defined in

[src/types/app-client.ts:352](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L352)

---

### CloneAppClientParams

Ƭ **CloneAppClientParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Partial`\<`Omit`\<[`AppClientParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientParams/), `"algorand"` \| `"appSpec"`\>\>\>

Parameters to clone an app client

#### Defined in

[src/types/app-client.ts:349](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L349)

---

### FundAppParams

Ƭ **FundAppParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`PaymentParams`](/docs/algokit-utils/typescript/latest/api/modules/types_composer/#paymentparams), `"receiver"` \| `"sender"`\> & [`SendParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendParams/) & \{ `sender?`: `Address` \| `string` }\>

Parameters for funding an app account

#### Defined in

[src/types/app-client.ts:391](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L391)

---

### ResolveAppByCreatorAndName

Ƭ **ResolveAppByCreatorAndName**: [`ResolveAppByCreatorAndNameBase`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#resolveappbycreatorandnamebase) & \{ `resolveBy`: `"creatorAndName"` }

Configuration to resolve app by creator and name `getCreatorAppsByName`

#### Defined in

[src/types/app-client.ts:107](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L107)

---

### ResolveAppByCreatorAndNameBase

Ƭ **ResolveAppByCreatorAndNameBase**: `Object`

Configuration to resolve app by creator and name `getCreatorAppsByName`

#### Type declaration

| Name                | Type                                                                                                  | Description                                                                                                                                                                                                                                            |
| :------------------ | :---------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `creatorAddress`    | `Address` \| `string`                                                                                 | The address of the app creator account to resolve the app by                                                                                                                                                                                           |
| `findExistingUsing` | `Indexer` \| [`AppLookup`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppLookup/) | The mechanism to find an existing app instance metadata for the given creator and name; either: _ An indexer instance to search the creator account apps; or _ The cached value of the existing apps for the given creator from `getCreatorAppsByName` |
| `name?`             | `string`                                                                                              | The optional name override to resolve the app by within the creator account (default: uses the name in the ABI contract)                                                                                                                               |

#### Defined in

[src/types/app-client.ts:94](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L94)

---

### ResolveAppClientByCreatorAndName

Ƭ **ResolveAppClientByCreatorAndName**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`AppClientParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientParams/), `"appId"`\> & \{ `appLookupCache?`: [`AppLookup`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployer.AppLookup/) ; `creatorAddress`: `Address` \| `string` ; `ignoreCache?`: `boolean` }\>

Resolve an app client instance by looking up an app created by the given creator with the given name

#### Defined in

[src/types/app-client.ts:400](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L400)

---

### ResolveAppClientByNetwork

Ƭ **ResolveAppClientByNetwork**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`AppClientParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientParams/), `"appId"`\>\>

Resolve an app client instance by looking up the current network.

#### Defined in

[src/types/app-client.ts:414](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L414)
