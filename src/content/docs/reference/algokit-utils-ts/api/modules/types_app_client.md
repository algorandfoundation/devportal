---
title: types/app-client
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / types/app-client

## Table of contents

### Classes

- [AppClient](/reference/algokit-utils-ts/api/classes/types_app_clientappclient/)
- [ApplicationClient](/reference/algokit-utils-ts/api/classes/types_app_clientapplicationclient/)

### Interfaces

- [AppClientCallABIArgs](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcallabiargs/)
- [AppClientCallCoreParams](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcallcoreparams/)
- [AppClientCompilationParams](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcompilationparams/)
- [AppClientCompilationResult](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcompilationresult/)
- [AppClientDeployCallInterfaceParams](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientdeploycallinterfaceparams/)
- [AppClientDeployCoreParams](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientdeploycoreparams/)
- [AppClientDeployParams](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientdeployparams/)
- [AppClientParams](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientparams/)
- [AppSourceMaps](/reference/algokit-utils-ts/api/interfaces/types_app_clientappsourcemaps/)
- [FundAppAccountParams](/reference/algokit-utils-ts/api/interfaces/types_app_clientfundappaccountparams/)
- [ResolveAppById](/reference/algokit-utils-ts/api/interfaces/types_app_clientresolveappbyid/)
- [ResolveAppByIdBase](/reference/algokit-utils-ts/api/interfaces/types_app_clientresolveappbyidbase/)
- [SourceMapExport](/reference/algokit-utils-ts/api/interfaces/types_app_clientsourcemapexport/)

### Type Aliases

- [AppClientBareCallParams](types_app_client.md#appclientbarecallparams)
- [AppClientCallArgs](types_app_client.md#appclientcallargs)
- [AppClientCallParams](types_app_client.md#appclientcallparams)
- [AppClientCallRawArgs](types_app_client.md#appclientcallrawargs)
- [AppClientClearStateParams](types_app_client.md#appclientclearstateparams)
- [AppClientCreateOnComplete](types_app_client.md#appclientcreateoncomplete)
- [AppClientCreateParams](types_app_client.md#appclientcreateparams)
- [AppClientMethodCallParams](types_app_client.md#appclientmethodcallparams)
- [AppClientUpdateParams](types_app_client.md#appclientupdateparams)
- [AppDetails](types_app_client.md#appdetails)
- [AppDetailsBase](types_app_client.md#appdetailsbase)
- [AppSpecAppDetails](types_app_client.md#appspecappdetails)
- [AppSpecAppDetailsBase](types_app_client.md#appspecappdetailsbase)
- [AppSpecAppDetailsByCreatorAndName](types_app_client.md#appspecappdetailsbycreatorandname)
- [AppSpecAppDetailsById](types_app_client.md#appspecappdetailsbyid)
- [CallOnComplete](types_app_client.md#calloncomplete)
- [CloneAppClientParams](types_app_client.md#cloneappclientparams)
- [FundAppParams](types_app_client.md#fundappparams)
- [ResolveAppByCreatorAndName](types_app_client.md#resolveappbycreatorandname)
- [ResolveAppByCreatorAndNameBase](types_app_client.md#resolveappbycreatorandnamebase)
- [ResolveAppClientByCreatorAndName](types_app_client.md#resolveappclientbycreatorandname)
- [ResolveAppClientByNetwork](types_app_client.md#resolveappclientbynetwork)

## Type Aliases

### AppClientBareCallParams

Ƭ **AppClientBareCallParams**: [`Expand`](types_expand.md#expand)\<`Omit`\<[`CommonAppCallParams`](types_composer.md#commonappcallparams), `"appId"` \| `"sender"` \| `"onComplete"`\> & \{ `sender?`: `Address` \| `string` }\>

AppClient common parameters for a bare app call

#### Defined in

[src/types/app-client.ts:358](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L358)

---

### AppClientCallArgs

Ƭ **AppClientCallArgs**: [`AppClientCallRawArgs`](types_app_client.md#appclientcallrawargs) \| [`AppClientCallABIArgs`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcallabiargs/)

The arguments to pass to an Application Client smart contract call

#### Defined in

[src/types/app-client.ts:208](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L208)

---

### AppClientCallParams

Ƭ **AppClientCallParams**: [`AppClientCallArgs`](types_app_client.md#appclientcallargs) & [`AppClientCallCoreParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcallcoreparams/)

Parameters to construct a ApplicationClient contract call

#### Defined in

[src/types/app-client.ts:221](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L221)

---

### AppClientCallRawArgs

Ƭ **AppClientCallRawArgs**: [`RawAppCallArgs`](/reference/algokit-utils-ts/api/interfaces/types_apprawappcallargs/)

#### Defined in

[src/types/app-client.ts:200](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L200)

---

### AppClientClearStateParams

Ƭ **AppClientClearStateParams**: [`AppClientCallRawArgs`](types_app_client.md#appclientcallrawargs) & [`AppClientCallCoreParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcallcoreparams/)

Parameters to construct a ApplicationClient clear state contract call

#### Defined in

[src/types/app-client.ts:224](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L224)

---

### AppClientCreateOnComplete

Ƭ **AppClientCreateOnComplete**: `Object`

On-complete action parameter for creating a contract using ApplicationClient

#### Type declaration

| Name                | Type                                                                                                                                                  | Description                                                             |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| `onCompleteAction?` | `Exclude`\<[`AppCallType`](types_app.md#appcalltype), `"clear_state"`\> \| `Exclude`\<`OnApplicationComplete`, `OnApplicationComplete.ClearStateOC`\> | Override the on-completion action for the create call; defaults to NoOp |

#### Defined in

[src/types/app-client.ts:236](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L236)

---

### AppClientCreateParams

Ƭ **AppClientCreateParams**: [`AppClientCallParams`](types_app_client.md#appclientcallparams) & [`AppClientCompilationParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcompilationparams/) & [`AppClientCreateOnComplete`](types_app_client.md#appclientcreateoncomplete) & \{ `schema?`: `Partial`\<[`AppStorageSchema`](/reference/algokit-utils-ts/api/interfaces/types_appappstorageschema/)\> }

Parameters for creating a contract using ApplicationClient

#### Defined in

[src/types/app-client.ts:242](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L242)

---

### AppClientMethodCallParams

Ƭ **AppClientMethodCallParams**: [`Expand`](types_expand.md#expand)\<`Omit`\<[`CommonAppCallParams`](types_composer.md#commonappcallparams), `"appId"` \| `"sender"` \| `"method"` \| `"args"`\> & \{ `args?`: (`ABIValue` \| [`ABIStruct`](types_app_arc56.md#abistruct) \| [`AppMethodCallTransactionArgument`](types_composer.md#appmethodcalltransactionargument) \| `undefined`)[] ; `method`: `string` ; `sender?`: `Address` \| `string` }\>

AppClient common parameters for an ABI method call

#### Defined in

[src/types/app-client.ts:366](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L366)

---

### AppClientUpdateParams

Ƭ **AppClientUpdateParams**: [`AppClientCallParams`](types_app_client.md#appclientcallparams) & [`AppClientCompilationParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcompilationparams/)

Parameters for updating a contract using ApplicationClient

#### Defined in

[src/types/app-client.ts:250](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L250)

---

### AppDetails

Ƭ **AppDetails**: [`AppDetailsBase`](types_app_client.md#appdetailsbase) & [`ResolveAppById`](/reference/algokit-utils-ts/api/interfaces/types_app_clientresolveappbyid/) \| [`ResolveAppByCreatorAndName`](types_app_client.md#resolveappbycreatorandname)

The details of an AlgoKit Utils deployed app

#### Defined in

[src/types/app-client.ts:138](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L138)

---

### AppDetailsBase

Ƭ **AppDetailsBase**: `Object`

The details of an AlgoKit Utils deployed app

#### Type declaration

| Name                | Type                                                                                            | Description                                                                                                                                                                             |
| :------------------ | :---------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deployTimeParams?` | [`TealTemplateParams`](/reference/algokit-utils-ts/api/interfaces/types_apptealtemplateparams/) | Optionally provide any deploy-time parameters to replace in the TEAL code; if specified here will get used in calls to `deploy`, `create` and `update` unless overridden in those calls |
| `params?`           | `SuggestedParams`                                                                               | Default suggested params object to use                                                                                                                                                  |
| `sender?`           | [`SendTransactionFrom`](types_transaction.md#sendtransactionfrom)                               | Default sender to use for transactions issued by this application client                                                                                                                |

#### Defined in

[src/types/app-client.ts:126](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L126)

---

### AppSpecAppDetails

Ƭ **AppSpecAppDetails**: [`AppSpecAppDetailsBase`](types_app_client.md#appspecappdetailsbase) & [`AppDetails`](types_app_client.md#appdetails)

The details of an ARC-0032 app spec specified, AlgoKit Utils deployed app

#### Defined in

[src/types/app-client.ts:156](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L156)

---

### AppSpecAppDetailsBase

Ƭ **AppSpecAppDetailsBase**: `Object`

The details of an ARC-0032 app spec specified, AlgoKit Utils deployed app

#### Type declaration

| Name  | Type                                                                                       | Description                                                                        |
| :---- | :----------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------- |
| `app` | [`AppSpec`](/reference/algokit-utils-ts/api/interfaces/types_app_specappspec/) \| `string` | The ARC-0032 application spec as either: _ Parsed JSON `AppSpec` _ Raw JSON string |

#### Defined in

[src/types/app-client.ts:141](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L141)

---

### AppSpecAppDetailsByCreatorAndName

Ƭ **AppSpecAppDetailsByCreatorAndName**: [`AppSpecAppDetailsBase`](types_app_client.md#appspecappdetailsbase) & [`AppDetailsBase`](types_app_client.md#appdetailsbase) & [`ResolveAppByCreatorAndNameBase`](types_app_client.md#resolveappbycreatorandnamebase)

The details of an ARC-0032 app spec specified, AlgoKit Utils deployed app by creator and name

#### Defined in

[src/types/app-client.ts:153](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L153)

---

### AppSpecAppDetailsById

Ƭ **AppSpecAppDetailsById**: [`AppSpecAppDetailsBase`](types_app_client.md#appspecappdetailsbase) & [`AppDetailsBase`](types_app_client.md#appdetailsbase) & [`ResolveAppByIdBase`](/reference/algokit-utils-ts/api/interfaces/types_app_clientresolveappbyidbase/)

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

Ƭ **CloneAppClientParams**: [`Expand`](types_expand.md#expand)\<`Partial`\<`Omit`\<[`AppClientParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientparams/), `"algorand"` \| `"appSpec"`\>\>\>

Parameters to clone an app client

#### Defined in

[src/types/app-client.ts:349](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L349)

---

### FundAppParams

Ƭ **FundAppParams**: [`Expand`](types_expand.md#expand)\<`Omit`\<[`PaymentParams`](types_composer.md#paymentparams), `"receiver"` \| `"sender"`\> & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) & \{ `sender?`: `Address` \| `string` }\>

Parameters for funding an app account

#### Defined in

[src/types/app-client.ts:391](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L391)

---

### ResolveAppByCreatorAndName

Ƭ **ResolveAppByCreatorAndName**: [`ResolveAppByCreatorAndNameBase`](types_app_client.md#resolveappbycreatorandnamebase) & \{ `resolveBy`: `"creatorAndName"` }

Configuration to resolve app by creator and name `getCreatorAppsByName`

#### Defined in

[src/types/app-client.ts:107](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L107)

---

### ResolveAppByCreatorAndNameBase

Ƭ **ResolveAppByCreatorAndNameBase**: `Object`

Configuration to resolve app by creator and name `getCreatorAppsByName`

#### Type declaration

| Name                | Type                                                                                       | Description                                                                                                                                                                                                                                            |
| :------------------ | :----------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `creatorAddress`    | `Address` \| `string`                                                                      | The address of the app creator account to resolve the app by                                                                                                                                                                                           |
| `findExistingUsing` | `Indexer` \| [`AppLookup`](/reference/algokit-utils-ts/api/interfaces/types_appapplookup/) | The mechanism to find an existing app instance metadata for the given creator and name; either: _ An indexer instance to search the creator account apps; or _ The cached value of the existing apps for the given creator from `getCreatorAppsByName` |
| `name?`             | `string`                                                                                   | The optional name override to resolve the app by within the creator account (default: uses the name in the ABI contract)                                                                                                                               |

#### Defined in

[src/types/app-client.ts:94](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L94)

---

### ResolveAppClientByCreatorAndName

Ƭ **ResolveAppClientByCreatorAndName**: [`Expand`](types_expand.md#expand)\<`Omit`\<[`AppClientParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientparams/), `"appId"`\> & \{ `appLookupCache?`: [`AppLookup`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerapplookup/) ; `creatorAddress`: `Address` \| `string` ; `ignoreCache?`: `boolean` }\>

Resolve an app client instance by looking up an app created by the given creator with the given name

#### Defined in

[src/types/app-client.ts:400](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L400)

---

### ResolveAppClientByNetwork

Ƭ **ResolveAppClientByNetwork**: [`Expand`](types_expand.md#expand)\<`Omit`\<[`AppClientParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientparams/), `"appId"`\>\>

Resolve an app client instance by looking up the current network.

#### Defined in

[src/types/app-client.ts:414](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L414)
