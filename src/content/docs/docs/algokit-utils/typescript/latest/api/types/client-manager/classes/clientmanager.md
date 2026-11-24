---
editUrl: false
next: false
prev: false
title: "ClientManager"
---

Defined in: [src/types/client-manager.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L48)

Exposes access to various API clients.

## Constructors

### Constructor

> **new ClientManager**(`clientsOrConfig`, `algorandClient?`): `ClientManager`

Defined in: [src/types/client-manager.ts:74](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L74)

algosdk clients or config for interacting with the official Algorand APIs.

#### Parameters

##### clientsOrConfig

[`AlgoConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoconfig/) \| [`AlgoSdkClients`](/docs/algokit-utils/typescript/latest/api/types/client-manager/interfaces/algosdkclients/)

The clients or config to use

##### algorandClient?

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/types/algorand-client/classes/algorandclient/)

#### Returns

`ClientManager`

#### Examples

**Algod client only**

```typescript
const clientManager = new ClientManager({ algod: algodClient })
```

**All clients**

```typescript
const clientManager = new ClientManager({ algod: algodClient, indexer: indexerClient, kmd: kmdClient })
```

**Algod config only**

```typescript
const clientManager = new ClientManager({ algodConfig })
```

**All client configs**

```typescript
const clientManager = new ClientManager({ algodConfig, indexerConfig, kmdConfig })
```

## Accessors

### algod

#### Get Signature

> **get** **algod**(): `AlgodClient`

Defined in: [src/types/client-manager.ts:93](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L93)

Returns an algosdk Algod API client.

##### Returns

`AlgodClient`

The Algod client

***

### indexer

#### Get Signature

> **get** **indexer**(): `IndexerClient`

Defined in: [src/types/client-manager.ts:102](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L102)

Returns an algosdk Indexer API client or throws an error if it's not been provided.

##### Throws

Error if no Indexer client is configured

##### Returns

`IndexerClient`

The Indexer client

***

### indexerIfPresent

#### Get Signature

> **get** **indexerIfPresent**(): `IndexerClient` \| `undefined`

Defined in: [src/types/client-manager.ts:111](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L111)

Returns an algosdk Indexer API client or `undefined` if it's not been provided.

##### Returns

`IndexerClient` \| `undefined`

The Indexer client or `undefined`

***

### kmd

#### Get Signature

> **get** **kmd**(): `KmdClient`

Defined in: [src/types/client-manager.ts:120](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L120)

Returns an algosdk KMD API client or throws an error if it's not been provided.

##### Throws

Error if no KMD client is configured

##### Returns

`KmdClient`

The KMD client

## Methods

### getAppClientByCreatorAndName()

> **getAppClientByCreatorAndName**(`params`): `Promise`\<[`AppClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/appclient/)\>

Defined in: [src/types/client-manager.ts:284](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L284)

Returns a new `AppClient` client for managing calls and state for an ARC-32/ARC-56 app.
This method resolves the app ID by looking up the creator address and name
using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).

#### Parameters

##### params

The parameters to create the app client

###### appLookupCache?

[`AppLookup`](/docs/algokit-utils/typescript/latest/api/types/app-deployer/interfaces/applookup/)

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

`string` \| [`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/arc56contract/) \| [`AppSpec`](/docs/algokit-utils/typescript/latest/api/types/app-spec/interfaces/appspec/)

The ARC-56 or ARC-32 application spec as either:
 * Parsed JSON ARC-56 `Contract`
 * Parsed JSON ARC-32 `AppSpec`
 * Raw JSON string (in either ARC-56 or ARC-32 format)

###### clearSourceMap?

`ProgramSourceMap`

Optional source map for the clear state program

###### creatorAddress

`string` \| `Address`

The address of the creator account for the app

###### defaultSender?

`string` \| `Address`

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

`TransactionSigner`

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

###### ignoreCache?

`boolean`

Whether or not to ignore the `AppDeployer` lookup cache and force an on-chain lookup, default: use any cached value

#### Returns

`Promise`\<[`AppClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/appclient/)\>

The `AppClient` instance

#### Example

**Basic**

```typescript
const appClient = clientManager.getAppClientByCreatorAndName({
  appSpec: '{/* ARC-56 or ARC-32 compatible JSON *\}',
  // appId resolved by looking for app ID of named app by this creator
  creatorAddress: 'CREATORADDRESS',
})
```

***

### getAppClientById()

> **getAppClientById**(`params`): [`AppClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/appclient/)

Defined in: [src/types/client-manager.ts:307](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L307)

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

`string` \| [`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/arc56contract/) \| [`AppSpec`](/docs/algokit-utils/typescript/latest/api/types/app-spec/interfaces/appspec/)

The ARC-56 or ARC-32 application spec as either:
 * Parsed JSON ARC-56 `Contract`
 * Parsed JSON ARC-32 `AppSpec`
 * Raw JSON string (in either ARC-56 or ARC-32 format)

###### clearSourceMap?

`ProgramSourceMap`

Optional source map for the clear state program

###### defaultSender?

`string` \| `Address`

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

`TransactionSigner`

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

#### Returns

[`AppClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/appclient/)

The `AppClient` instance

#### Example

**Basic**

```typescript
const appClient = clientManager.getAppClientById({
  appSpec: '{/* ARC-56 or ARC-32 compatible JSON *\}',
  appId: 12345n,
})
```

***

### getAppClientByNetwork()

> **getAppClientByNetwork**(`params`): `Promise`\<[`AppClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/appclient/)\>

Defined in: [src/types/client-manager.ts:330](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L330)

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

`string` \| [`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/arc56contract/) \| [`AppSpec`](/docs/algokit-utils/typescript/latest/api/types/app-spec/interfaces/appspec/)

The ARC-56 or ARC-32 application spec as either:
 * Parsed JSON ARC-56 `Contract`
 * Parsed JSON ARC-32 `AppSpec`
 * Raw JSON string (in either ARC-56 or ARC-32 format)

###### clearSourceMap?

`ProgramSourceMap`

Optional source map for the clear state program

###### defaultSender?

`string` \| `Address`

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

`TransactionSigner`

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

#### Returns

`Promise`\<[`AppClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/appclient/)\>

The `AppClient` instance

#### Example

**Basic**

```typescript
const appClient = clientManager.getAppClientByNetwork({
  appSpec: '{/* ARC-56 or ARC-32 compatible JSON *\}',
  // appId resolved by using ARC-56 spec to find app ID for current network
})
```

***

### getAppFactory()

> **getAppFactory**(`params`): [`AppFactory`](/docs/algokit-utils/typescript/latest/api/types/app-factory/classes/appfactory/)

Defined in: [src/types/client-manager.ts:261](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L261)

Returns a new `AppFactory` client

#### Parameters

##### params

The parameters to create the app factory

###### appName?

`string`

Optional override for the app name; used for on-chain metadata and lookups.
Defaults to the ARC-32/ARC-56 app spec name.

###### appSpec

`string` \| [`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/arc56contract/) \| [`AppSpec`](/docs/algokit-utils/typescript/latest/api/types/app-spec/interfaces/appspec/)

The ARC-56 or ARC-32 application spec as either:
 * Parsed JSON ARC-56 `Contract`
 * Parsed JSON ARC-32 `AppSpec`
 * Raw JSON string (in either ARC-56 or ARC-32 format)

###### defaultSender?

`string` \| `Address`

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

`TransactionSigner`

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

###### deletable?

`boolean`

Whether or not the contract should have deploy-time permanence control set, undefined = ignore.
If specified here will get used in calls to `deploy` and `create` calls unless overridden in those calls.

Useful if you want to vend multiple contracts from the same factory without specifying this value
for each call.

###### deployTimeParams?

[`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/tealtemplateparams/)

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

[`AppFactory`](/docs/algokit-utils/typescript/latest/api/types/app-factory/classes/appfactory/)

The `AppFactory` instance

#### Examples

**Basic example**

```typescript
const factory = clientManager.getAppFactory({
  appSpec: '{/* ARC-56 or ARC-32 compatible JSON */}',
})
```

**Advanced example**

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

> **getTestNetDispenser**(`params`): [`TestNetDispenserApiClient`](/docs/algokit-utils/typescript/latest/api/types/dispenser-client/classes/testnetdispenserapiclient/)

Defined in: [src/types/client-manager.ts:215](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L215)

Returns a TestNet Dispenser API client.

Refer to [docs](https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md) on guidance to obtain an access token.

#### Parameters

##### params

[`TestNetDispenserApiClientParams`](/docs/algokit-utils/typescript/latest/api/types/dispenser-client/interfaces/testnetdispenserapiclientparams/)

An object containing parameters for the TestNetDispenserApiClient class.

#### Returns

[`TestNetDispenserApiClient`](/docs/algokit-utils/typescript/latest/api/types/dispenser-client/classes/testnetdispenserapiclient/)

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

> **getTestNetDispenserFromEnvironment**(`params?`): [`TestNetDispenserApiClient`](/docs/algokit-utils/typescript/latest/api/types/dispenser-client/classes/testnetdispenserapiclient/)

Defined in: [src/types/client-manager.ts:234](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L234)

Returns a TestNet Dispenser API client, loading the auth token from `process.env.ALGOKIT_DISPENSER_ACCESS_TOKEN`.

Refer to [docs](https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md) on guidance to obtain an access token.

#### Parameters

##### params?

`Omit`\<[`TestNetDispenserApiClientParams`](/docs/algokit-utils/typescript/latest/api/types/dispenser-client/interfaces/testnetdispenserapiclientparams/), `"authToken"`\>

An object containing parameters for the TestNetDispenserApiClient class.

#### Returns

[`TestNetDispenserApiClient`](/docs/algokit-utils/typescript/latest/api/types/dispenser-client/classes/testnetdispenserapiclient/)

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

Defined in: [src/types/client-manager.ts:358](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L358)

Returns a new typed client, resolving the app by creator address and name.

#### Type Parameters

##### TClient

`TClient` *extends* [`TypedAppClient`](/docs/algokit-utils/typescript/latest/api/types/client-manager/interfaces/typedappclient/)\<`InstanceType`\<`TClient`\>\>

#### Parameters

##### typedClient

`TClient`

The typed client type to use

##### params

The params to resolve the app by creator address and name

###### appLookupCache?

[`AppLookup`](/docs/algokit-utils/typescript/latest/api/types/app-deployer/interfaces/applookup/)

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

`string` \| `Address`

The address of the creator account for the app

###### defaultSender?

`string` \| `Address`

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

`TransactionSigner`

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

###### ignoreCache?

`boolean`

Whether or not to ignore the `AppDeployer` lookup cache and force an on-chain lookup, default: use any cached value

#### Returns

`Promise`\<`InstanceType`\<`TClient`\>\>

The typed client instance

#### Examples

**Use name in ARC-32 / ARC-56 app spec**

```typescript
const appClient = clientManager.getTypedAppClientByCreatorAndName(MyContractClient, {
  creatorAddress: "CREATORADDRESS",
  defaultSender: alice,
})
```

**Specify name**

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

Defined in: [src/types/client-manager.ts:382](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L382)

Returns a new typed client, resolving the app by app ID.

#### Type Parameters

##### TClient

`TClient` *extends* [`TypedAppClient`](/docs/algokit-utils/typescript/latest/api/types/client-manager/interfaces/typedappclient/)\<`InstanceType`\<`TClient`\>\>

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

`string` \| `Address`

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

`TransactionSigner`

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

Defined in: [src/types/client-manager.ts:408](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L408)

Returns a new typed client, resolves the app ID for the current network based on
pre-determined network-specific app IDs specified in the ARC-56 app spec.

If no IDs are in the app spec or the network isn't recognised, an error is thrown.

#### Type Parameters

##### TClient

`TClient` *extends* [`TypedAppClient`](/docs/algokit-utils/typescript/latest/api/types/client-manager/interfaces/typedappclient/)\<`InstanceType`\<`TClient`\>\>

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

`string` \| `Address`

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

`TransactionSigner`

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

Defined in: [src/types/client-manager.ts:431](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L431)

Returns a new typed app factory.

#### Type Parameters

##### TClient

`TClient`

#### Parameters

##### typedFactory

[`TypedAppFactory`](/docs/algokit-utils/typescript/latest/api/types/client-manager/interfaces/typedappfactory/)\<`TClient`\>

The typed factory type to use

##### params?

The params to resolve the factory by

###### appName?

`string`

Optional override for the app name; used for on-chain metadata and lookups.
Defaults to the ARC-32/ARC-56 app spec name.

###### defaultSender?

`string` \| `Address`

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

`TransactionSigner`

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

###### deletable?

`boolean`

Whether or not the contract should have deploy-time permanence control set, undefined = ignore.
If specified here will get used in calls to `deploy` and `create` calls unless overridden in those calls.

Useful if you want to vend multiple contracts from the same factory without specifying this value
for each call.

###### deployTimeParams?

[`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/tealtemplateparams/)

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

Defined in: [src/types/client-manager.ts:171](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L171)

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

Defined in: [src/types/client-manager.ts:195](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L195)

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

Defined in: [src/types/client-manager.ts:183](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L183)

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

> **network**(): `Promise`\<[`NetworkDetails`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/networkdetails/)\>

Defined in: [src/types/client-manager.ts:135](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L135)

Get details about the current network.

#### Returns

`Promise`\<[`NetworkDetails`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/networkdetails/)\>

The current network details

#### Example

**Getting genesis ID**

```typescript
const network = await networkClient.network()
const genesisId = network.genesisId
```

***

### genesisIdIsLocalNet()

> `static` **genesisIdIsLocalNet**(`genesisId`): genesisId is "devnet-v1" \| "sandnet-v1" \| "dockernet-v1"

Defined in: [src/types/client-manager.ts:159](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L159)

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

> `static` **getAlgodClient**(`config`): `AlgodClient`

Defined in: [src/types/client-manager.ts:590](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L590)

Returns an algod SDK client that automatically retries on idempotent calls.

#### Parameters

##### config

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

The config of the client

#### Returns

`AlgodClient`

The Algod client

#### Examples

**AlgoNode (testnet)**

```typescript
 const algod = ClientManager.getAlgodClient(ClientManager.getAlgoNodeConfig('testnet', 'algod'))
 await algod.healthCheck().do()
```

**AlgoNode (mainnet)**

```typescript
 const algod = ClientManager.getAlgodClient(ClientManager.getAlgoNodeConfig('mainnet', 'algod'))
 await algod.healthCheck().do()
```

**Custom (e.g. default LocalNet)**

```typescript
 const algod = ClientManager.getAlgodClient({server: 'http://localhost', port: '4001', token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'})
 await algod.healthCheck().do()
```

***

### getAlgodClientFromEnvironment()

> `static` **getAlgodClientFromEnvironment**(): `AlgodClient`

Defined in: [src/types/client-manager.ts:608](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L608)

Returns an algod SDK client that automatically retries on idempotent calls loaded from environment variables (expects to be called from a Node.js environment).

#### Returns

`AlgodClient`

The Algod client

#### Example

```typescript
 // Uses process.env.ALGOD_SERVER, process.env.ALGOD_PORT and process.env.ALGOD_TOKEN
 const algod = ClientManager.getAlgodClientFromEnvironment()
 await algod.healthCheck().do()
 ```

***

### getAlgodConfigFromEnvironment()

> `static` **getAlgodConfigFromEnvironment**(): [`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

Defined in: [src/types/client-manager.ts:492](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L492)

Retrieve the algod configuration from environment variables (expects to be called from a Node.js environment)

Expects `process.env.ALGOD_SERVER` to be defined, and you can also specify `process.env.ALGOD_PORT` and `process.env.ALGOD_TOKEN`.

#### Returns

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

The Algod client configuration

#### Throws

Error if `process.env.ALGOD_SERVER` is not defined

#### Example

```typescript
const config = ClientManager.getAlgodConfigFromEnvironment()
```

***

### getAlgoNodeConfig()

> `static` **getAlgoNodeConfig**(`network`, `config`): [`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

Defined in: [src/types/client-manager.ts:545](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L545)

Returns the Algorand configuration to point to the free tier of the AlgoNode service.

#### Parameters

##### network

`"testnet"` \| `"mainnet"`

Which network to connect to - TestNet or MainNet

##### config

`"algod"` \| `"indexer"`

Which algod config to return - Algod or Indexer

#### Returns

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

The AlgoNode client configuration

#### Example

```typescript
const config = ClientManager.getAlgoNodeConfig('testnet', 'algod')
```

***

### getConfigFromEnvironmentOrLocalNet()

> `static` **getConfigFromEnvironmentOrLocalNet**(): [`AlgoConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoconfig/)

Defined in: [src/types/client-manager.ts:456](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L456)

Retrieve client configurations from environment variables when defined or get defaults (expects to be called from a Node.js environment)

If both `process.env.INDEXER_SERVER` and `process.env.ALGOD_SERVER` is defined it will use both along with optional `process.env.ALGOD_PORT`, `process.env.ALGOD_TOKEN`, `process.env.INDEXER_PORT` and `process.env.INDEXER_TOKEN`.

If only `process.env.ALGOD_SERVER` is defined it will use this along with optional `process.env.ALGOD_PORT` and `process.env.ALGOD_TOKEN` and leave indexer as `undefined`.

If only `process.env.INDEXER_SERVER` is defined it will use the default (LocalNet) configuration for both algod and indexer.

It will return a KMD configuration that uses `process.env.KMD_PORT` (or port 4002) if `process.env.ALGOD_SERVER` is defined,
otherwise it will use the default LocalNet config unless it detects testnet or mainnet.

#### Returns

[`AlgoConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoconfig/)

The config for algod, indexer and kmd

#### Example

```typescript
const config = ClientManager.getConfigFromEnvironmentOrLocalNet()
```

***

### getDefaultLocalNetConfig()

> `static` **getDefaultLocalNetConfig**(`configOrPort`): [`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

Defined in: [src/types/client-manager.ts:561](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L561)

Returns the Algorand configuration to point to the default LocalNet.

#### Parameters

##### configOrPort

`number` \| `"algod"` \| `"indexer"` \| `"kmd"`

Which algod config to return - algod, kmd, or indexer OR a port number

#### Returns

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

The LocalNet client configuration

#### Example

```typescript
const config = ClientManager.getDefaultLocalNetConfig('algod')
```

***

### getIndexerClient()

> `static` **getIndexerClient**(`config`): `IndexerClient`

Defined in: [src/types/client-manager.ts:633](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L633)

Returns an indexer SDK client that automatically retries on idempotent calls

#### Parameters

##### config

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

The config of the client

#### Returns

`IndexerClient`

The Indexer client

#### Examples

**AlgoNode (testnet)**

```typescript
 const indexer = ClientManager.getIndexerClient(ClientManager.getAlgoNodeConfig('testnet', 'indexer'))
 await indexer.makeHealthCheck().do()
```

**AlgoNode (mainnet)**

```typescript
 const indexer = ClientManager.getIndexerClient(ClientManager.getAlgoNodeConfig('mainnet', 'indexer'))
 await indexer.makeHealthCheck().do()
```

**Custom (e.g. default LocalNet, although we recommend loading this into a .env and using the Default option instead)**

```typescript
 const indexer = ClientManager.getIndexerClient({server: 'http://localhost', port: '8980', token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'})
 await indexer.makeHealthCheck().do()
```

***

### getIndexerClientFromEnvironment()

> `static` **getIndexerClientFromEnvironment**(): `IndexerClient`

Defined in: [src/types/client-manager.ts:652](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L652)

Returns an indexer SDK client that automatically retries on idempotent calls loaded from environment variables (expects to be called from a Node.js environment).

#### Returns

`IndexerClient`

The Indexer client

#### Example

```typescript
 // Uses process.env.INDEXER_SERVER, process.env.INDEXER_PORT and process.env.INDEXER_TOKEN
 const indexer = ClientManager.getIndexerClientFromEnvironment()
 await indexer.makeHealthCheck().do()
 ```

***

### getIndexerConfigFromEnvironment()

> `static` **getIndexerConfigFromEnvironment**(): [`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

Defined in: [src/types/client-manager.ts:519](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L519)

Retrieve the indexer configuration from environment variables (expects to be called from a Node.js environment).

Expects `process.env.INDEXER_SERVER` to be defined, and you can also specify `process.env.INDEXER_PORT` and `process.env.INDEXER_TOKEN`.

#### Returns

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

The Indexer client configuration

#### Throws

Error if `process.env.INDEXER_SERVER` is not defined

#### Example

```typescript
const config = ClientManager.getIndexerConfigFromEnvironment()
```

***

### getKmdClient()

> `static` **getKmdClient**(`config`): `KmdClient`

Defined in: [src/types/client-manager.ts:668](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L668)

Returns a KMD SDK client.

KMD client allows you to export private keys, which is useful to (for instance) get the default account in a LocalNet network.

#### Parameters

##### config

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

The config for the client

#### Returns

`KmdClient`

The KMD client

#### Example

**Custom (e.g. default LocalNet, although we recommend loading this into a .env and using the Default option instead)**

```typescript
 const kmd = ClientManager.getKmdClient({server: 'http://localhost', port: '4002', token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'})
```

***

### getKmdClientFromEnvironment()

> `static` **getKmdClientFromEnvironment**(): `KmdClient`

Defined in: [src/types/client-manager.ts:683](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L683)

Returns a KMD SDK client that automatically retries on idempotent calls loaded from environment variables (expects to be called from a Node.js environment).

#### Returns

`KmdClient`

The KMD client

#### Example

```typescript
 // Uses process.env.ALGOD_SERVER, process.env.KMD_PORT (or if not specified: port 4002) and process.env.ALGOD_TOKEN
 const kmd = ClientManager.getKmdClientFromEnvironment()
 ```
