---
editUrl: false
next: false
prev: false
title: "ClientManager"
---

Defined in: [src/client-manager.ts:47](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L47)

Exposes access to various API clients.

## Constructors

### Constructor

> **new ClientManager**(`clientsOrConfig`, `algorandClient?`): `ClientManager`

Defined in: [src/client-manager.ts:73](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L73)

algosdk clients or config for interacting with the official Algorand APIs.

#### Parameters

##### clientsOrConfig

The clients or config to use

[`AlgoConfig`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/algoconfig/) | [`AlgoSdkClients`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/algosdkclients/)

##### algorandClient?

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algorandclient/)

#### Returns

`ClientManager`

#### Examples

```typescript
const clientManager = new ClientManager({ algod: algodClient })
```

```typescript
const clientManager = new ClientManager({ algod: algodClient, indexer: indexerClient, kmd: kmdClient })
```

```typescript
const clientManager = new ClientManager({ algodConfig })
```

```typescript
const clientManager = new ClientManager({ algodConfig, indexerConfig, kmdConfig })
```

## Accessors

### algod

#### Get Signature

> **get** **algod**(): [`AlgodClient`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodclient/)

Defined in: [src/client-manager.ts:92](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L92)

Returns an Algod API client.

##### Returns

[`AlgodClient`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodclient/)

The Algod client

***

### indexer

#### Get Signature

> **get** **indexer**(): [`IndexerClient`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerclient/)

Defined in: [src/client-manager.ts:101](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L101)

Returns an Indexer API client or throws an error if it's not been provided.

##### Throws

Error if no Indexer client is configured

##### Returns

[`IndexerClient`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerclient/)

The Indexer client

***

### indexerIfPresent

#### Get Signature

> **get** **indexerIfPresent**(): [`IndexerClient`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerclient/) \| `undefined`

Defined in: [src/client-manager.ts:110](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L110)

Returns an Indexer API client or `undefined` if it's not been provided.

##### Returns

[`IndexerClient`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerclient/) \| `undefined`

The Indexer client or `undefined`

***

### kmd

#### Get Signature

> **get** **kmd**(): [`KmdClient`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/classes/kmdclient/)

Defined in: [src/client-manager.ts:119](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L119)

Returns a KMD API client or throws an error if it's not been provided.

##### Throws

Error if no KMD client is configured

##### Returns

[`KmdClient`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/classes/kmdclient/)

The KMD client

## Methods

### getAppClientByCreatorAndName()

> **getAppClientByCreatorAndName**(`params`): `Promise`\<[`AppClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/appclient/)\>

Defined in: [src/client-manager.ts:283](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L283)

Returns a new `AppClient` client for managing calls and state for an ARC-32/ARC-56 app.
This method resolves the app ID by looking up the creator address and name
using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).

#### Parameters

##### params

The parameters to create the app client

###### appLookupCache?

[`AppLookup`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/applookup/)

An optional cached app lookup that matches a name to on-chain details;
either this is needed or indexer is required to be passed in to this `ClientManager` on construction.

###### appName?

`string`

Optional override for the app name; used for on-chain metadata and lookups.
Defaults to the ARC-32/ARC-56 app spec name

###### approvalSourceMap?

`ProgramSourceMap`

Optional source map for the approval program

###### appSpec

`string` \| [`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/arc56contract/) \| `AppSpec`

The ARC-56 or ARC-32 application spec as either:
 * Parsed JSON ARC-56 `Contract`
 * Parsed JSON ARC-32 `AppSpec`
 * Raw JSON string (in either ARC-56 or ARC-32 format)

###### clearSourceMap?

`ProgramSourceMap`

Optional source map for the clear state program

###### creatorAddress

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

The address of the creator account for the app

###### defaultSender?

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

[`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

###### ignoreCache?

`boolean`

Whether or not to ignore the `AppDeployer` lookup cache and force an on-chain lookup, default: use any cached value

#### Returns

`Promise`\<[`AppClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/appclient/)\>

The `AppClient` instance

#### Example

```typescript
const appClient = clientManager.getAppClientByCreatorAndName({
  appSpec: '{/* ARC-56 or ARC-32 compatible JSON *\}',
  // appId resolved by looking for app ID of named app by this creator
  creatorAddress: 'CREATORADDRESS',
})
```

***

### getAppClientById()

> **getAppClientById**(`params`): [`AppClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/appclient/)

Defined in: [src/client-manager.ts:306](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L306)

Returns a new `AppClient` client for managing calls and state for an ARC-32/ARC-56 app.

#### Parameters

##### params

The parameters to create the app client

###### appId

`bigint`

The ID of the app instance this client should make calls against.

###### appName?

`string`

Optional override for the app name; used for on-chain metadata and lookups.
Defaults to the ARC-32/ARC-56 app spec name

###### approvalSourceMap?

`ProgramSourceMap`

Optional source map for the approval program

###### appSpec

`string` \| [`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/arc56contract/) \| `AppSpec`

The ARC-56 or ARC-32 application spec as either:
 * Parsed JSON ARC-56 `Contract`
 * Parsed JSON ARC-32 `AppSpec`
 * Raw JSON string (in either ARC-56 or ARC-32 format)

###### clearSourceMap?

`ProgramSourceMap`

Optional source map for the clear state program

###### defaultSender?

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

[`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

#### Returns

[`AppClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/appclient/)

The `AppClient` instance

#### Example

```typescript
const appClient = clientManager.getAppClientById({
  appSpec: '{/* ARC-56 or ARC-32 compatible JSON *\}',
  appId: 12345n,
})
```

***

### getAppClientByNetwork()

> **getAppClientByNetwork**(`params`): `Promise`\<[`AppClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/appclient/)\>

Defined in: [src/client-manager.ts:329](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L329)

Returns a new `AppClient` client for managing calls and state for an ARC-56 app.
This method resolves the app ID for the current network based on
pre-determined network-specific app IDs specified in the ARC-56 app spec.

If no IDs are in the app spec or the network isn't recognised, an error is thrown.

#### Parameters

##### params

The parameters to create the app client

###### appName?

`string`

Optional override for the app name; used for on-chain metadata and lookups.
Defaults to the ARC-32/ARC-56 app spec name

###### approvalSourceMap?

`ProgramSourceMap`

Optional source map for the approval program

###### appSpec

`string` \| [`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/arc56contract/) \| `AppSpec`

The ARC-56 or ARC-32 application spec as either:
 * Parsed JSON ARC-56 `Contract`
 * Parsed JSON ARC-32 `AppSpec`
 * Raw JSON string (in either ARC-56 or ARC-32 format)

###### clearSourceMap?

`ProgramSourceMap`

Optional source map for the clear state program

###### defaultSender?

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

[`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

#### Returns

`Promise`\<[`AppClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/appclient/)\>

The `AppClient` instance

#### Example

```typescript
const appClient = clientManager.getAppClientByNetwork({
  appSpec: '{/* ARC-56 or ARC-32 compatible JSON *\}',
  // appId resolved by using ARC-56 spec to find app ID for current network
})
```

***

### getAppFactory()

> **getAppFactory**(`params`): [`AppFactory`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/appfactory/)

Defined in: [src/client-manager.ts:260](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L260)

Returns a new `AppFactory` client

#### Parameters

##### params

The parameters to create the app factory

###### appName?

`string`

Optional override for the app name; used for on-chain metadata and lookups.
Defaults to the ARC-32/ARC-56 app spec name.

###### appSpec

`string` \| [`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/arc56contract/) \| `AppSpec`

The ARC-56 or ARC-32 application spec as either:
 * Parsed JSON ARC-56 `Contract`
 * Parsed JSON ARC-32 `AppSpec`
 * Raw JSON string (in either ARC-56 or ARC-32 format)

###### defaultSender?

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

[`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

###### deletable?

`boolean`

Whether or not the contract should have deploy-time permanence control set, undefined = ignore.
If specified here will get used in calls to `deploy` and `create` calls unless overridden in those calls.

Useful if you want to vend multiple contracts from the same factory without specifying this value
for each call.

###### deployTimeParams?

[`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/tealtemplateparams/)

Optional deploy-time TEAL template replacement parameters.
If specified here will get used in calls to `deploy` and `create` calls unless overridden in those calls.

Useful if you want to vend multiple contracts from the same factory without specifying this value
for each call.

###### updatable?

`boolean`

Whether or not the contract should have deploy-time immutability control set, undefined = ignore.
If specified here will get used in calls to `deploy` and `create` calls unless overridden in those calls.

Useful if you want to vend multiple contracts from the same factory without specifying this value
for each call.

###### version?

`string`

The version of app that is / will be deployed; defaults to 1.0

#### Returns

[`AppFactory`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/appfactory/)

The `AppFactory` instance

#### Examples

```typescript
const factory = clientManager.getAppFactory({
  appSpec: '{/* ARC-56 or ARC-32 compatible JSON */}',
})
```

```typescript
const factory = clientManager.getAppFactory({
  appSpec: parsedAppSpec_AppSpec_or_Arc56Contract,
  defaultSender: "SENDERADDRESS",
  appName: "OverriddenAppName",
  version: "2.0.0",
  updatable: true,
  deletable: false,
  deployTimeParams: { ONE: 1, TWO: 'value' }
})
```

***

### getTestNetDispenser()

> **getTestNetDispenser**(`params`): [`TestNetDispenserApiClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/testnetdispenserapiclient/)

Defined in: [src/client-manager.ts:214](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L214)

Returns a TestNet Dispenser API client.

Refer to [docs](https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md) on guidance to obtain an access token.

#### Parameters

##### params

`TestNetDispenserApiClientParams`

An object containing parameters for the TestNetDispenserApiClient class.

#### Returns

[`TestNetDispenserApiClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/testnetdispenserapiclient/)

An instance of the TestNetDispenserApiClient class.

#### Example

```ts
const client = clientManager.getTestNetDispenser(
    {
      authToken: 'your_auth_token',
      requestTimeout: 15,
    }
)
```

***

### getTestNetDispenserFromEnvironment()

> **getTestNetDispenserFromEnvironment**(`params?`): [`TestNetDispenserApiClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/testnetdispenserapiclient/)

Defined in: [src/client-manager.ts:233](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L233)

Returns a TestNet Dispenser API client, loading the auth token from `process.env.ALGOKIT_DISPENSER_ACCESS_TOKEN`.

Refer to [docs](https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md) on guidance to obtain an access token.

#### Parameters

##### params?

`Omit`\<`TestNetDispenserApiClientParams`, `"authToken"`\>

An object containing parameters for the TestNetDispenserApiClient class.

#### Returns

[`TestNetDispenserApiClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/testnetdispenserapiclient/)

An instance of the TestNetDispenserApiClient class.

#### Example

```ts
const client = clientManager.getTestNetDispenserFromEnvironment(
    {
      requestTimeout: 15,
    }
)
```

***

### getTypedAppClientByCreatorAndName()

> **getTypedAppClientByCreatorAndName**\<`TClient`\>(`typedClient`, `params`): `Promise`\<`InstanceType`\<`TClient`\>\>

Defined in: [src/client-manager.ts:357](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L357)

Returns a new typed client, resolving the app by creator address and name.

#### Type Parameters

##### TClient

`TClient` *extends* [`TypedAppClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/typedappclient/)\<`InstanceType`\<`TClient`\>\>

#### Parameters

##### typedClient

`TClient`

The typed client type to use

##### params

The params to resolve the app by creator address and name

###### appLookupCache?

[`AppLookup`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/applookup/)

An optional cached app lookup that matches a name to on-chain details;
either this is needed or indexer is required to be passed in to this `ClientManager` on construction.

###### appName?

`string`

Optional override for the app name; used for on-chain metadata and lookups.
Defaults to the ARC-32/ARC-56 app spec name

###### approvalSourceMap?

`ProgramSourceMap`

Optional source map for the approval program

###### clearSourceMap?

`ProgramSourceMap`

Optional source map for the clear state program

###### creatorAddress

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

The address of the creator account for the app

###### defaultSender?

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

[`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

###### ignoreCache?

`boolean`

Whether or not to ignore the `AppDeployer` lookup cache and force an on-chain lookup, default: use any cached value

#### Returns

`Promise`\<`InstanceType`\<`TClient`\>\>

The typed client instance

#### Examples

```typescript
const appClient = clientManager.getTypedAppClientByCreatorAndName(MyContractClient, {
  creatorAddress: "CREATORADDRESS",
  defaultSender: alice,
})
```

```typescript
const appClient = clientManager.getTypedAppClientByCreatorAndName(MyContractClient, {
  creatorAddress: "CREATORADDRESS",
  name: "contract-name",
  defaultSender: alice,
})
```

***

### getTypedAppClientById()

> **getTypedAppClientById**\<`TClient`\>(`typedClient`, `params`): `InstanceType`\<`TClient`\>

Defined in: [src/client-manager.ts:381](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L381)

Returns a new typed client, resolving the app by app ID.

#### Type Parameters

##### TClient

`TClient` *extends* [`TypedAppClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/typedappclient/)\<`InstanceType`\<`TClient`\>\>

#### Parameters

##### typedClient

`TClient`

The typed client type to use

##### params

The params to resolve the app by ID

###### appId

`bigint`

The ID of the app instance this client should make calls against.

###### appName?

`string`

Optional override for the app name; used for on-chain metadata and lookups.
Defaults to the ARC-32/ARC-56 app spec name

###### approvalSourceMap?

`ProgramSourceMap`

Optional source map for the approval program

###### clearSourceMap?

`ProgramSourceMap`

Optional source map for the clear state program

###### defaultSender?

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

[`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

#### Returns

`InstanceType`\<`TClient`\>

The typed client instance

#### Example

```typescript
const appClient = clientManager.getTypedAppClientById(MyContractClient, {
  appId: 12345n,
  defaultSender: alice,
})
```

***

### getTypedAppClientByNetwork()

> **getTypedAppClientByNetwork**\<`TClient`\>(`typedClient`, `params?`): `Promise`\<`InstanceType`\<`TClient`\>\>

Defined in: [src/client-manager.ts:407](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L407)

Returns a new typed client, resolves the app ID for the current network based on
pre-determined network-specific app IDs specified in the ARC-56 app spec.

If no IDs are in the app spec or the network isn't recognised, an error is thrown.

#### Type Parameters

##### TClient

`TClient` *extends* [`TypedAppClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/typedappclient/)\<`InstanceType`\<`TClient`\>\>

#### Parameters

##### typedClient

`TClient`

The typed client type to use

##### params?

The params to resolve the app by network

###### appName?

`string`

Optional override for the app name; used for on-chain metadata and lookups.
Defaults to the ARC-32/ARC-56 app spec name

###### approvalSourceMap?

`ProgramSourceMap`

Optional source map for the approval program

###### clearSourceMap?

`ProgramSourceMap`

Optional source map for the clear state program

###### defaultSender?

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

[`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

#### Returns

`Promise`\<`InstanceType`\<`TClient`\>\>

The typed client instance

#### Example

```typescript
const appClient = clientManager.getTypedAppClientByNetwork(MyContractClient, {
  defaultSender: alice,
})
```

***

### getTypedAppFactory()

> **getTypedAppFactory**\<`TClient`\>(`typedFactory`, `params?`): `TClient`

Defined in: [src/client-manager.ts:430](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L430)

Returns a new typed app factory.

#### Type Parameters

##### TClient

`TClient`

#### Parameters

##### typedFactory

[`TypedAppFactory`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/typedappfactory/)\<`TClient`\>

The typed factory type to use

##### params?

The params to resolve the factory by

###### appName?

`string`

Optional override for the app name; used for on-chain metadata and lookups.
Defaults to the ARC-32/ARC-56 app spec name.

###### defaultSender?

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

[`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

###### deletable?

`boolean`

Whether or not the contract should have deploy-time permanence control set, undefined = ignore.
If specified here will get used in calls to `deploy` and `create` calls unless overridden in those calls.

Useful if you want to vend multiple contracts from the same factory without specifying this value
for each call.

###### deployTimeParams?

[`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/tealtemplateparams/)

Optional deploy-time TEAL template replacement parameters.
If specified here will get used in calls to `deploy` and `create` calls unless overridden in those calls.

Useful if you want to vend multiple contracts from the same factory without specifying this value
for each call.

###### updatable?

`boolean`

Whether or not the contract should have deploy-time immutability control set, undefined = ignore.
If specified here will get used in calls to `deploy` and `create` calls unless overridden in those calls.

Useful if you want to vend multiple contracts from the same factory without specifying this value
for each call.

###### version?

`string`

The version of app that is / will be deployed; defaults to 1.0

#### Returns

`TClient`

The typed client instance

#### Example

```typescript
const appFactory = clientManager.getTypedAppFactory(MyContractClient, {
  sender: alice,
})
```

***

### isLocalNet()

> **isLocalNet**(): `Promise`\<`boolean`\>

Defined in: [src/client-manager.ts:170](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L170)

Returns true if the current network is LocalNet.

#### Returns

`Promise`\<`boolean`\>

True if the current network is LocalNet.

#### Example

```typescript
const isLocalNet = await clientManager.isLocalNet()
```

***

### isMainNet()

> **isMainNet**(): `Promise`\<`boolean`\>

Defined in: [src/client-manager.ts:194](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L194)

Returns true if the current network is MainNet.

#### Returns

`Promise`\<`boolean`\>

True if the current network is MainNet.

#### Example

```typescript
const isMainNet = await clientManager.isMainNet()
```

***

### isTestNet()

> **isTestNet**(): `Promise`\<`boolean`\>

Defined in: [src/client-manager.ts:182](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L182)

Returns true if the current network is TestNet.

#### Returns

`Promise`\<`boolean`\>

True if the current network is TestNet.

#### Example

```typescript
const isTestNet = await clientManager.isTestNet()
```

***

### network()

> **network**(): `Promise`\<[`NetworkDetails`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/networkdetails/)\>

Defined in: [src/client-manager.ts:134](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L134)

Get details about the current network.

#### Returns

`Promise`\<[`NetworkDetails`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/networkdetails/)\>

The current network details

#### Example

```typescript
const network = await networkClient.network()
const genesisId = network.genesisId
```

***

### genesisIdIsLocalNet()

> `static` **genesisIdIsLocalNet**(`genesisId`): genesisId is "devnet-v1" \| "sandnet-v1" \| "dockernet-v1"

Defined in: [src/client-manager.ts:158](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L158)

Returns true if the given network genesisId is associated with a LocalNet network.

#### Parameters

##### genesisId

`string`

The network genesis ID

#### Returns

genesisId is "devnet-v1" \| "sandnet-v1" \| "dockernet-v1"

Whether the given genesis ID is associated with a LocalNet network

#### Example

```typescript
const isLocalNet = ClientManager.genesisIdIsLocalNet('testnet-v1.0')
```

***

### getAlgodClient()

> `static` **getAlgodClient**(`config`): [`AlgodClient`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodclient/)

Defined in: [src/client-manager.ts:589](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L589)

Returns an algod SDK client that automatically retries on idempotent calls.

#### Parameters

##### config

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/algoclientconfig/)

The config of the client

#### Returns

[`AlgodClient`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodclient/)

The Algod client

#### Examples

```typescript
 const algod = ClientManager.getAlgodClient(ClientManager.getAlgoNodeConfig('testnet', 'algod'))
 await algod.healthCheck().do()
```

```typescript
 const algod = ClientManager.getAlgodClient(ClientManager.getAlgoNodeConfig('mainnet', 'algod'))
 await algod.healthCheck().do()
```

```typescript
 const algod = ClientManager.getAlgodClient({server: 'http://localhost', port: '4001', token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'})
 await algod.healthCheck().do()
```

***

### getAlgodClientFromEnvironment()

> `static` **getAlgodClientFromEnvironment**(): [`AlgodClient`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodclient/)

Defined in: [src/client-manager.ts:610](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L610)

Returns an algod SDK client that automatically retries on idempotent calls loaded from environment variables (expects to be called from a Node.js environment).

#### Returns

[`AlgodClient`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodclient/)

The Algod client

#### Example

```typescript
 // Uses process.env.ALGOD_SERVER, process.env.ALGOD_PORT and process.env.ALGOD_TOKEN
 const algod = ClientManager.getAlgodClientFromEnvironment()
 await algod.healthCheck().do()
 ```

***

### getAlgodConfigFromEnvironment()

> `static` **getAlgodConfigFromEnvironment**(): [`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/algoclientconfig/)

Defined in: [src/client-manager.ts:491](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L491)

Retrieve the algod configuration from environment variables (expects to be called from a Node.js environment)

Expects `process.env.ALGOD_SERVER` to be defined, and you can also specify `process.env.ALGOD_PORT` and `process.env.ALGOD_TOKEN`.

#### Returns

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/algoclientconfig/)

The Algod client configuration

#### Throws

Error if `process.env.ALGOD_SERVER` is not defined

#### Example

```typescript
const config = ClientManager.getAlgodConfigFromEnvironment()
```

***

### getAlgoNodeConfig()

> `static` **getAlgoNodeConfig**(`network`, `config`): [`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/algoclientconfig/)

Defined in: [src/client-manager.ts:544](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L544)

Returns the Algorand configuration to point to the free tier of the AlgoNode service.

#### Parameters

##### network

Which network to connect to - TestNet or MainNet

`"testnet"` | `"mainnet"`

##### config

Which algod config to return - Algod or Indexer

`"algod"` | `"indexer"`

#### Returns

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/algoclientconfig/)

The AlgoNode client configuration

#### Example

```typescript
const config = ClientManager.getAlgoNodeConfig('testnet', 'algod')
```

***

### getConfigFromEnvironmentOrLocalNet()

> `static` **getConfigFromEnvironmentOrLocalNet**(): [`AlgoConfig`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/algoconfig/)

Defined in: [src/client-manager.ts:455](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L455)

Retrieve client configurations from environment variables when defined or get defaults (expects to be called from a Node.js environment)

If both `process.env.INDEXER_SERVER` and `process.env.ALGOD_SERVER` is defined it will use both along with optional `process.env.ALGOD_PORT`, `process.env.ALGOD_TOKEN`, `process.env.INDEXER_PORT` and `process.env.INDEXER_TOKEN`.

If only `process.env.ALGOD_SERVER` is defined it will use this along with optional `process.env.ALGOD_PORT` and `process.env.ALGOD_TOKEN` and leave indexer as `undefined`.

If only `process.env.INDEXER_SERVER` is defined it will use the default (LocalNet) configuration for both algod and indexer.

It will return a KMD configuration that uses `process.env.KMD_PORT` (or port 4002) if `process.env.ALGOD_SERVER` is defined,
otherwise it will use the default LocalNet config unless it detects testnet or mainnet.

#### Returns

[`AlgoConfig`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/algoconfig/)

The config for algod, indexer and kmd

#### Example

```typescript
const config = ClientManager.getConfigFromEnvironmentOrLocalNet()
```

***

### getDefaultLocalNetConfig()

> `static` **getDefaultLocalNetConfig**(`configOrPort`): [`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/algoclientconfig/)

Defined in: [src/client-manager.ts:560](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L560)

Returns the Algorand configuration to point to the default LocalNet.

#### Parameters

##### configOrPort

Which algod config to return - algod, kmd, or indexer OR a port number

`number` | `"algod"` | `"indexer"` | `"kmd"`

#### Returns

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/algoclientconfig/)

The LocalNet client configuration

#### Example

```typescript
const config = ClientManager.getDefaultLocalNetConfig('algod')
```

***

### getIndexerClient()

> `static` **getIndexerClient**(`config`): [`IndexerClient`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerclient/)

Defined in: [src/client-manager.ts:635](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L635)

Returns an indexer SDK client that automatically retries on idempotent calls

#### Parameters

##### config

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/algoclientconfig/)

The config of the client

#### Returns

[`IndexerClient`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerclient/)

The Indexer client

#### Examples

```typescript
 const indexer = ClientManager.getIndexerClient(ClientManager.getAlgoNodeConfig('testnet', 'indexer'))
 await indexer.makeHealthCheck().do()
```

```typescript
 const indexer = ClientManager.getIndexerClient(ClientManager.getAlgoNodeConfig('mainnet', 'indexer'))
 await indexer.makeHealthCheck().do()
```

```typescript
 const indexer = ClientManager.getIndexerClient({server: 'http://localhost', port: '8980', token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'})
 await indexer.makeHealthCheck().do()
```

***

### getIndexerClientFromEnvironment()

> `static` **getIndexerClientFromEnvironment**(): [`IndexerClient`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerclient/)

Defined in: [src/client-manager.ts:657](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L657)

Returns an indexer SDK client that automatically retries on idempotent calls loaded from environment variables (expects to be called from a Node.js environment).

#### Returns

[`IndexerClient`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerclient/)

The Indexer client

#### Example

```typescript
 // Uses process.env.INDEXER_SERVER, process.env.INDEXER_PORT and process.env.INDEXER_TOKEN
 const indexer = ClientManager.getIndexerClientFromEnvironment()
 await indexer.makeHealthCheck().do()
 ```

***

### getIndexerConfigFromEnvironment()

> `static` **getIndexerConfigFromEnvironment**(): [`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/algoclientconfig/)

Defined in: [src/client-manager.ts:518](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L518)

Retrieve the indexer configuration from environment variables (expects to be called from a Node.js environment).

Expects `process.env.INDEXER_SERVER` to be defined, and you can also specify `process.env.INDEXER_PORT` and `process.env.INDEXER_TOKEN`.

#### Returns

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/algoclientconfig/)

The Indexer client configuration

#### Throws

Error if `process.env.INDEXER_SERVER` is not defined

#### Example

```typescript
const config = ClientManager.getIndexerConfigFromEnvironment()
```

***

### getKmdClient()

> `static` **getKmdClient**(`config`): [`KmdClient`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/classes/kmdclient/)

Defined in: [src/client-manager.ts:673](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L673)

Returns a KMD SDK client.

KMD client allows you to export private keys, which is useful to (for instance) get the default account in a LocalNet network.

#### Parameters

##### config

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/algoclientconfig/)

The config for the client

#### Returns

[`KmdClient`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/classes/kmdclient/)

The KMD client

#### Example

```typescript
 const kmd = ClientManager.getKmdClient({server: 'http://localhost', port: '4002', token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'})
```

***

### getKmdClientFromEnvironment()

> `static` **getKmdClientFromEnvironment**(): [`KmdClient`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/classes/kmdclient/)

Defined in: [src/client-manager.ts:693](https://github.com/larkiny/algokit-utils-ts/blob/main/src/client-manager.ts#L693)

Returns a KMD SDK client that automatically retries on idempotent calls loaded from environment variables (expects to be called from a Node.js environment).

#### Returns

[`KmdClient`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/classes/kmdclient/)

The KMD client

#### Example

```typescript
 // Uses process.env.ALGOD_SERVER, process.env.KMD_PORT (or if not specified: port 4002) and process.env.ALGOD_TOKEN
 const kmd = ClientManager.getKmdClientFromEnvironment()
 ```
