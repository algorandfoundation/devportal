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

- [AppClientBareCallParams](#appclientbarecallparams)
- [AppClientCallArgs](#appclientcallargs)
- [AppClientCallParams](#appclientcallparams)
- [AppClientCallRawArgs](#appclientcallrawargs)
- [AppClientClearStateParams](#appclientclearstateparams)
- [AppClientCreateOnComplete](#appclientcreateoncomplete)
- [AppClientCreateParams](#appclientcreateparams)
- [AppClientMethodCallParams](#appclientmethodcallparams)
- [AppClientUpdateParams](#appclientupdateparams)
- [AppDetails](#appdetails)
- [AppDetailsBase](#appdetailsbase)
- [AppSpecAppDetails](#appspecappdetails)
- [AppSpecAppDetailsBase](#appspecappdetailsbase)
- [AppSpecAppDetailsByCreatorAndName](#appspecappdetailsbycreatorandname)
- [AppSpecAppDetailsById](#appspecappdetailsbyid)
- [CallOnComplete](#calloncomplete)
- [CloneAppClientParams](#cloneappclientparams)
- [FundAppParams](#fundappparams)
- [ResolveAppByCreatorAndName](#resolveappbycreatorandname)
- [ResolveAppByCreatorAndNameBase](#resolveappbycreatorandnamebase)
- [ResolveAppClientByCreatorAndName](#resolveappclientbycreatorandname)
- [ResolveAppClientByNetwork](#resolveappclientbynetwork)

## Type Aliases

### AppClientBareCallParams

Ƭ **AppClientBareCallParams**: [`Expand`](#expand)\<`Omit`\<[`CommonAppCallParams`](#commonappcallparams), ``"appId"`` \| ``"sender"`` \| ``"onComplete"``\> & \{ `sender?`: `Address` \| `string`  }\>

AppClient common parameters for a bare app call

#### Defined in

[src/types/app-client.ts:358](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L358)

___

### AppClientCallArgs

Ƭ **AppClientCallArgs**: [`AppClientCallRawArgs`](#appclientcallrawargs) \| [`AppClientCallABIArgs`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcallabiargs/)

The arguments to pass to an Application Client smart contract call

#### Defined in

[src/types/app-client.ts:208](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L208)

___

### AppClientCallParams

Ƭ **AppClientCallParams**: [`AppClientCallArgs`](#appclientcallargs) & [`AppClientCallCoreParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcallcoreparams/)

Parameters to construct a ApplicationClient contract call

#### Defined in

[src/types/app-client.ts:221](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L221)

___

### AppClientCallRawArgs

Ƭ **AppClientCallRawArgs**: [`RawAppCallArgs`](/reference/algokit-utils-ts/api/interfaces/types_apprawappcallargs/)

#### Defined in

[src/types/app-client.ts:200](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L200)

___

### AppClientClearStateParams

Ƭ **AppClientClearStateParams**: [`AppClientCallRawArgs`](#appclientcallrawargs) & [`AppClientCallCoreParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcallcoreparams/)

Parameters to construct a ApplicationClient clear state contract call

#### Defined in

[src/types/app-client.ts:224](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L224)

___

### AppClientCreateOnComplete

Ƭ **AppClientCreateOnComplete**: `Object`

On-complete action parameter for creating a contract using ApplicationClient

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `onCompleteAction?` | `Exclude`\<[`AppCallType`](#appcalltype), ``"clear_state"``\> \| `Exclude`\<`OnApplicationComplete`, `OnApplicationComplete.ClearStateOC`\> | Override the on-completion action for the create call; defaults to NoOp |

#### Defined in

[src/types/app-client.ts:236](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L236)

___

### AppClientCreateParams

Ƭ **AppClientCreateParams**: [`AppClientCallParams`](#appclientcallparams) & [`AppClientCompilationParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcompilationparams/) & [`AppClientCreateOnComplete`](#appclientcreateoncomplete) & \{ `schema?`: `Partial`\<[`AppStorageSchema`](/reference/algokit-utils-ts/api/interfaces/types_appappstorageschema/)\>  }

Parameters for creating a contract using ApplicationClient

#### Defined in

[src/types/app-client.ts:242](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L242)

___

### AppClientMethodCallParams

Ƭ **AppClientMethodCallParams**: [`Expand`](#expand)\<`Omit`\<[`CommonAppCallParams`](#commonappcallparams), ``"appId"`` \| ``"sender"`` \| ``"method"`` \| ``"args"``\> & \{ `args?`: (`ABIValue` \| [`ABIStruct`](#abistruct) \| [`AppMethodCallTransactionArgument`](#appmethodcalltransactionargument) \| `undefined`)[] ; `method`: `string` ; `sender?`: `Address` \| `string`  }\>

AppClient common parameters for an ABI method call

#### Defined in

[src/types/app-client.ts:366](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L366)

___

### AppClientUpdateParams

Ƭ **AppClientUpdateParams**: [`AppClientCallParams`](#appclientcallparams) & [`AppClientCompilationParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcompilationparams/)

Parameters for updating a contract using ApplicationClient

#### Defined in

[src/types/app-client.ts:250](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L250)

___

### AppDetails

Ƭ **AppDetails**: [`AppDetailsBase`](#appdetailsbase) & [`ResolveAppById`](/reference/algokit-utils-ts/api/interfaces/types_app_clientresolveappbyid/) \| [`ResolveAppByCreatorAndName`](#resolveappbycreatorandname)

The details of an AlgoKit Utils deployed app

#### Defined in

[src/types/app-client.ts:138](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L138)

___

### AppDetailsBase

Ƭ **AppDetailsBase**: `Object`

The details of an AlgoKit Utils deployed app

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `deployTimeParams?` | [`TealTemplateParams`](/reference/algokit-utils-ts/api/interfaces/types_apptealtemplateparams/) | Optionally provide any deploy-time parameters to replace in the TEAL code; if specified here will get used in calls to `deploy`, `create` and `update` unless overridden in those calls |
| `params?` | `SuggestedParams` | Default suggested params object to use |
| `sender?` | [`SendTransactionFrom`](#sendtransactionfrom) | Default sender to use for transactions issued by this application client |

#### Defined in

[src/types/app-client.ts:126](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L126)

___

### AppSpecAppDetails

Ƭ **AppSpecAppDetails**: [`AppSpecAppDetailsBase`](#appspecappdetailsbase) & [`AppDetails`](#appdetails)

The details of an ARC-0032 app spec specified, AlgoKit Utils deployed app

#### Defined in

[src/types/app-client.ts:156](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L156)

___

### AppSpecAppDetailsBase

Ƭ **AppSpecAppDetailsBase**: `Object`

The details of an ARC-0032 app spec specified, AlgoKit Utils deployed app

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | [`AppSpec`](/reference/algokit-utils-ts/api/interfaces/types_app_specappspec/) \| `string` | The ARC-0032 application spec as either: * Parsed JSON `AppSpec` * Raw JSON string |

#### Defined in

[src/types/app-client.ts:141](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L141)

___

### AppSpecAppDetailsByCreatorAndName

Ƭ **AppSpecAppDetailsByCreatorAndName**: [`AppSpecAppDetailsBase`](#appspecappdetailsbase) & [`AppDetailsBase`](#appdetailsbase) & [`ResolveAppByCreatorAndNameBase`](#resolveappbycreatorandnamebase)

The details of an ARC-0032 app spec specified, AlgoKit Utils deployed app by creator and name

#### Defined in

[src/types/app-client.ts:153](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L153)

___

### AppSpecAppDetailsById

Ƭ **AppSpecAppDetailsById**: [`AppSpecAppDetailsBase`](#appspecappdetailsbase) & [`AppDetailsBase`](#appdetailsbase) & [`ResolveAppByIdBase`](/reference/algokit-utils-ts/api/interfaces/types_app_clientresolveappbyidbase/)

The details of an ARC-0032 app spec specified, AlgoKit Utils deployed app by id

#### Defined in

[src/types/app-client.ts:150](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L150)

___

### CallOnComplete

Ƭ **CallOnComplete**: `Object`

onComplete parameter for a non-update app call

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `onComplete?` | `Exclude`\<`OnApplicationComplete`, `OnApplicationComplete.UpdateApplicationOC`\> | On-complete of the call; defaults to no-op |

#### Defined in

[src/types/app-client.ts:352](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L352)

___

### CloneAppClientParams

Ƭ **CloneAppClientParams**: [`Expand`](#expand)\<`Partial`\<`Omit`\<[`AppClientParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientparams/), ``"algorand"`` \| ``"appSpec"``\>\>\>

Parameters to clone an app client

#### Defined in

[src/types/app-client.ts:349](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L349)

___

### FundAppParams

Ƭ **FundAppParams**: [`Expand`](#expand)\<`Omit`\<[`PaymentParams`](#paymentparams), ``"receiver"`` \| ``"sender"``\> & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) & \{ `sender?`: `Address` \| `string`  }\>

Parameters for funding an app account

#### Defined in

[src/types/app-client.ts:391](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L391)

___

### ResolveAppByCreatorAndName

Ƭ **ResolveAppByCreatorAndName**: [`ResolveAppByCreatorAndNameBase`](#resolveappbycreatorandnamebase) & \{ `resolveBy`: ``"creatorAndName"``  }

Configuration to resolve app by creator and name `getCreatorAppsByName`

#### Defined in

[src/types/app-client.ts:107](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L107)

___

### ResolveAppByCreatorAndNameBase

Ƭ **ResolveAppByCreatorAndNameBase**: `Object`

Configuration to resolve app by creator and name `getCreatorAppsByName`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `creatorAddress` | `Address` \| `string` | The address of the app creator account to resolve the app by |
| `findExistingUsing` | `Indexer` \| [`AppLookup`](/reference/algokit-utils-ts/api/interfaces/types_appapplookup/) | The mechanism to find an existing app instance metadata for the given creator and name; either: * An indexer instance to search the creator account apps; or * The cached value of the existing apps for the given creator from `getCreatorAppsByName` |
| `name?` | `string` | The optional name override to resolve the app by within the creator account (default: uses the name in the ABI contract) |

#### Defined in

[src/types/app-client.ts:94](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L94)

___

### ResolveAppClientByCreatorAndName

Ƭ **ResolveAppClientByCreatorAndName**: [`Expand`](#expand)\<`Omit`\<[`AppClientParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientparams/), ``"appId"``\> & \{ `appLookupCache?`: [`AppLookup`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerapplookup/) ; `creatorAddress`: `Address` \| `string` ; `ignoreCache?`: `boolean`  }\>

Resolve an app client instance by looking up an app created by the given creator with the given name

#### Defined in

[src/types/app-client.ts:400](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L400)

___

### ResolveAppClientByNetwork

Ƭ **ResolveAppClientByNetwork**: [`Expand`](#expand)\<`Omit`\<[`AppClientParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientparams/), ``"appId"``\>\>

Resolve an app client instance by looking up the current network.

#### Defined in

[src/types/app-client.ts:414](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L414)