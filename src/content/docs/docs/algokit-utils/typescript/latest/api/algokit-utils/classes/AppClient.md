---
editUrl: false
next: false
prev: false
title: "AppClient"
---

Defined in: [src/app-client.ts:434](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L434)

ARC-56/ARC-32 application client that allows you to manage calls and
state for a specific deployed instance of an app (with a known app ID).

## See

[AppFactory](/algokit-utils-ts/api/algokit-utils/classes/appfactory/) for creating and deploying apps

## Constructors

### Constructor

> **new AppClient**(`params`): `AppClient`

Defined in: [src/app-client.ts:473](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L473)

Create a new app client.

#### Parameters

##### params

[`AppClientParams`](/algokit-utils-ts/api/algokit-utils/interfaces/appclientparams/)

The parameters to create the app client

#### Returns

`AppClient`

The `AppClient` instance

#### Example

```typescript
const appClient = new AppClient({
  appId: 12345678n,
  appSpec: appSpec,
  algorand: AlgorandClient.mainNet(),
})

## Accessors

### algorand

#### Get Signature

> **get** **algorand**(): [`AlgorandClient`](/algokit-utils-ts/api/algokit-utils/classes/algorandclient/)

Defined in: [src/app-client.ts:640](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L640)

A reference to the underlying `AlgorandClient` this app client is using.

##### Returns

[`AlgorandClient`](/algokit-utils-ts/api/algokit-utils/classes/algorandclient/)

***

### appAddress

#### Get Signature

> **get** **appAddress**(): [`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/)

Defined in: [src/app-client.ts:625](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L625)

The app address of the app instance this client is linked to.

##### Returns

[`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/)

***

### appId

#### Get Signature

> **get** **appId**(): `bigint`

Defined in: [src/app-client.ts:620](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L620)

The ID of the app instance this client is linked to.

##### Returns

`bigint`

***

### appName

#### Get Signature

> **get** **appName**(): `string`

Defined in: [src/app-client.ts:630](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L630)

The name of the app (from the ARC-32 / ARC-56 app spec or override).

##### Returns

`string`

***

### appSpec

#### Get Signature

> **get** **appSpec**(): [`Arc56Contract`](/algokit-utils-ts/api/subpaths/abi/type-aliases/arc56contract/)

Defined in: [src/app-client.ts:635](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L635)

The ARC-56 app spec being used

##### Returns

[`Arc56Contract`](/algokit-utils-ts/api/subpaths/abi/type-aliases/arc56contract/)

***

### createTransaction

#### Get Signature

> **get** **createTransaction**(): `object` & `object`

Defined in: [src/app-client.ts:664](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L664)

Create transactions for the current app

##### Returns

***

### params

#### Get Signature

> **get** **params**(): `object` & `object`

Defined in: [src/app-client.ts:659](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L659)

Get parameters to create transactions for the current app.

A good mental model for this is that these parameters represent a deferred transaction creation.

##### Examples

```typescript
const myMethodCall = appClient.params.call({method: 'my_method', args: [123, 'hello']})
// ...
await algorand.send.AppMethodCall(myMethodCall)
```

```typescript
const myMethodCall = appClient.params.call({method: 'my_method', args: [123, 'hello']})
await appClient.send.call({method: 'my_method2', args: [myMethodCall]})
```

##### Returns

***

### send

#### Get Signature

> **get** **send**(): `object` & `object`

Defined in: [src/app-client.ts:669](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L669)

Send transactions to the current app

##### Returns

***

### state

#### Get Signature

> **get** **state**(): `object`

Defined in: [src/app-client.ts:674](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L674)

Get state (local, global, box) from the current app

##### Returns

###### box

> **box**: `object`

Methods to access box storage for the current app

###### box.getAll()

> **getAll**: () => `Promise`\<`Record`\<`string`, `any`\>\>

Returns all single-key state values in a record keyed by the key name and the value a decoded ABI value.

###### Returns

`Promise`\<`Record`\<`string`, `any`\>\>

###### box.getMap()

> **getMap**: (`mapName`) => `Promise`\<`Map`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/), [`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)\>\>

Returns all map values for the given map from box storage.

###### Parameters

###### mapName

`string`

The name of the map to read from

###### Returns

`Promise`\<`Map`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/), [`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)\>\>

###### box.getMapValue()

> **getMapValue**: (`mapName`, `key`) => `Promise`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)\>

###### Parameters

###### mapName

`string`

The name of the map to read from

###### key

`any`

The key within the map (without any map prefix) as either a Buffer with the bytes or a value
 that will be converted to bytes by encoding it using the specified ABI key type
 in the ARC-56 spec

###### Returns

`Promise`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)\>

###### box.getValue()

> **getValue**: (`name`) => `Promise`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)\>

Returns a single state value for the current app with the value a decoded ABI value.

###### Parameters

###### name

`string`

The name of the state value to retrieve the value for

###### Returns

`Promise`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)\>

###### global

> **global**: `object`

Methods to access global state for the current app

###### global.getAll()

> **getAll**: () => `Promise`\<`Record`\<`string`, `any`\>\>

Returns all single-key state values in a record keyed by the key name and the value a decoded ABI value.

###### Returns

`Promise`\<`Record`\<`string`, `any`\>\>

###### global.getMap()

> **getMap**: (`mapName`) => `Promise`\<`Map`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/), [`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)\>\>

Returns all map values for the given map.

###### Parameters

###### mapName

`string`

The name of the map to read from

###### Returns

`Promise`\<`Map`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/), [`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)\>\>

A map of all key-value pairs in the map as a `Record<string, ABIValue>`

###### global.getMapValue()

> **getMapValue**: (`mapName`, `key`, `appState?`) => `Promise`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/) \| `undefined`\>

Returns a single value from the given map for the current app with the value a decoded ABI value.

###### Parameters

###### mapName

`string`

The name of the map to read from

###### key

`any`

The key within the map (without any map prefix) as either a Buffer with the bytes or a value
 that will be converted to bytes by encoding it using the specified ABI key type
 in the ARC-56 spec

###### appState?

[`AppState`](/algokit-utils-ts/api/algokit-utils/interfaces/appstate/)

Optional cached value of the current state

###### Returns

`Promise`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/) \| `undefined`\>

###### global.getValue()

> **getValue**: (`name`, `appState?`) => `Promise`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/) \| `undefined`\>

Returns a single state value for the current app with the value a decoded ABI value.

###### Parameters

###### name

`string`

The name of the state value to retrieve the value for

###### appState?

[`AppState`](/algokit-utils-ts/api/algokit-utils/interfaces/appstate/)

Optional cached value of the current state

###### Returns

`Promise`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/) \| `undefined`\>

###### local()

> **local**: (`address`) => `object`

Methods to access local state for the current app

###### Parameters

###### address

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

The address of the account to get the local state for

###### Returns

###### getAll()

> **getAll**: () => `Promise`\<`Record`\<`string`, `any`\>\>

Returns all single-key state values in a record keyed by the key name and the value a decoded ABI value.

###### Returns

`Promise`\<`Record`\<`string`, `any`\>\>

###### getMap()

> **getMap**: (`mapName`) => `Promise`\<`Map`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/), [`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)\>\>

Returns all map values for the given map.

###### Parameters

###### mapName

`string`

The name of the map to read from

###### Returns

`Promise`\<`Map`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/), [`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)\>\>

A map of all key-value pairs in the map as a `Record<string, ABIValue>`

###### getMapValue()

> **getMapValue**: (`mapName`, `key`, `appState?`) => `Promise`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/) \| `undefined`\>

Returns a single value from the given map for the current app with the value a decoded ABI value.

###### Parameters

###### mapName

`string`

The name of the map to read from

###### key

`any`

The key within the map (without any map prefix) as either a Buffer with the bytes or a value
 that will be converted to bytes by encoding it using the specified ABI key type
 in the ARC-56 spec

###### appState?

[`AppState`](/algokit-utils-ts/api/algokit-utils/interfaces/appstate/)

Optional cached value of the current state

###### Returns

`Promise`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/) \| `undefined`\>

###### getValue()

> **getValue**: (`name`, `appState?`) => `Promise`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/) \| `undefined`\>

Returns a single state value for the current app with the value a decoded ABI value.

###### Parameters

###### name

`string`

The name of the state value to retrieve the value for

###### appState?

[`AppState`](/algokit-utils-ts/api/algokit-utils/interfaces/appstate/)

Optional cached value of the current state

###### Returns

`Promise`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/) \| `undefined`\>

## Methods

### clone()

> **clone**(`params`): `AppClient`

Defined in: [src/app-client.ts:528](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L528)

Clone this app client with different params

#### Parameters

##### params

The params to use for the the cloned app client. Omit a param to keep the original value. Set a param to override the original value. Setting to undefined will clear the original value.

###### appId?

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

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

[`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

#### Returns

`AppClient`

A new app client with the altered params

#### Example

```typescript
const appClient2 = appClient.clone({ defaultSender: 'NEW_SENDER_ADDRESS' })
```

***

### compile()

> **compile**(`compilation?`): `Promise`\<`AppClientCompilationResult`\>

Defined in: [src/app-client.ts:904](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L904)

Compiles the approval and clear state programs (if TEAL templates provided),
performing any provided deploy-time parameter replacement and stores
the source maps.

If no TEAL templates provided it will use any byte code provided in the app spec.

Will store any generated source maps for later use in debugging.

#### Parameters

##### compilation?

`AppClientCompilationParams`

Any compilation parameters to use

#### Returns

`Promise`\<`AppClientCompilationResult`\>

The compiled code and any compilation results (including source maps)

***

### exportSourceMaps()

> **exportSourceMaps**(): `AppSourceMaps`

Defined in: [src/app-client.ts:844](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L844)

Export the current source maps for the app.

#### Returns

`AppSourceMaps`

The source maps

***

### exposeLogicError()

> **exposeLogicError**(`e`, `isClearStateProgram?`): `Promise`\<`Error`\>

Defined in: [src/app-client.ts:822](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L822)

Takes an error that may include a logic error from a call to the current app and re-exposes the
error to include source code information via the source map and ARC-56 spec.

#### Parameters

##### e

`Error`

The error to parse

##### isClearStateProgram?

`boolean`

Whether or not the code was running the clear state program (defaults to approval program)

#### Returns

`Promise`\<`Error`\>

The new error, or if there was no logic error or source map then the wrapped error with source details

***

### fundAppAccount()

> **fundAppAccount**(`params`): `Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/app-client.ts:703](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L703)

Funds Algo into the app account for this app.

An alias for `appClient.send.fundAppAccount(params)`.

#### Parameters

##### params

The parameters for the funding transaction

###### amount

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

Amount to send

###### closeRemainderTo?

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

If given, close the sender account and send the remaining balance to this address

*Warning:* Be careful with this parameter as it can lead to loss of funds if not used correctly.

###### coverAppCallInnerTransactionFees?

`boolean`

Whether to use simulate to automatically calculate required app call inner transaction fees and cover them in the parent app call transaction fee

###### extraFee?

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

The fee to pay IN ADDITION to the suggested fee. Useful for manually covering inner transaction fees.

###### firstValidRound?

`bigint`

Set the first round this transaction is valid.
If left undefined, the value from algod will be used.

We recommend you only set this when you intentionally want this to be some time in the future.

###### lastValidRound?

`bigint`

The last round this transaction is valid. It is recommended to use `validityWindow` instead.

###### lease?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Prevent multiple transactions with the same lease being included within the validity window.

A [lease](https://dev.algorand.co/concepts/transactions/leases)
 enforces a mutually exclusive transaction (useful to prevent double-posting and other scenarios).

###### maxFee?

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.

###### maxRoundsToWaitForConfirmation?

`number`

The number of rounds to wait for confirmation. By default until the latest lastValid has past.

###### note?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Note to attach to the transaction. Max of 1000 bytes.

###### populateAppCallResources?

`boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to `Config.populateAppCallResources`.

###### rekeyTo?

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

Change the signing key of the sender to the given address.

**Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

###### sender?

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

The optional sender to send the transaction from, will use the application client's default sender by default if specified

###### signer?

[`AddressWithTransactionSigner`](/algokit-utils-ts/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)

The function used to sign transaction(s); if not specified then
 an attempt will be made to find a registered signer for the
 given `sender` or use a default signer (if configured).

###### staticFee?

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction.

###### suppressLog?

`boolean`

Whether to suppress log messages from transaction send, default: do not suppress.

###### validityWindow?

`number` \| `bigint`

How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.

#### Returns

`Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the funding

#### Example

```typescript
await appClient.fundAppAccount({ amount: algo(1) })
```

***

### getABIMethod()

> **getABIMethod**(`methodNameOrSignature`): [`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)

Defined in: [src/app-client.ts:872](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L872)

Returns the ABI Method spec for the given method string for the app represented by this application client instance

#### Parameters

##### methodNameOrSignature

`string`

The method name or method signature to call if an ABI call is being emitted.
e.g. `my_method` or `my_method(unit64,string)bytes`

#### Returns

[`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)

A tuple with: [ARC-56 `Method`, algosdk `ABIMethod`]

***

### getBoxNames()

> **getBoxNames**(): `Promise`\<[`BoxName`](/algokit-utils-ts/api/algokit-utils/interfaces/boxname/)[]\>

Defined in: [src/app-client.ts:740](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L740)

Returns the names of all current boxes for the current app.

#### Returns

`Promise`\<[`BoxName`](/algokit-utils-ts/api/algokit-utils/interfaces/boxname/)[]\>

The names of the boxes

#### Example

```typescript
const boxNames = await appClient.getBoxNames()
```

***

### getBoxValue()

> **getBoxValue**(`name`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [src/app-client.ts:753](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L753)

Returns the value of the given box for the current app.

#### Parameters

##### name

[`BoxIdentifier`](/algokit-utils-ts/api/algokit-utils/type-aliases/boxidentifier/)

The identifier of the box to return

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The current box value as a byte array

#### Example

```typescript
const boxValue = await appClient.getBoxValue('boxName')
```

***

### getBoxValueFromABIType()

> **getBoxValueFromABIType**(`name`, `type`): `Promise`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)\>

Defined in: [src/app-client.ts:767](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L767)

Returns the value of the given box for the current app.

#### Parameters

##### name

[`BoxIdentifier`](/algokit-utils-ts/api/algokit-utils/type-aliases/boxidentifier/)

The identifier of the box to return

##### type

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/)

#### Returns

`Promise`\<[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)\>

The current box value as a byte array

#### Example

```typescript
const boxValue = await appClient.getBoxValueFromABIType('boxName', new ABIUintType(32))
```

***

### getBoxValues()

> **getBoxValues**(`filter?`): `Promise`\<`object`[]\>

Defined in: [src/app-client.ts:785](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L785)

Returns the values of all current boxes for the current app.
Note: This will issue multiple HTTP requests (one per box) and it's not an atomic operation so values may be out of sync.

#### Parameters

##### filter?

(`name`) => `boolean`

Optional filter to filter which boxes' values are returned

#### Returns

`Promise`\<`object`[]\>

The (name, value) pair of the boxes with values as raw byte arrays

#### Example

```typescript
const boxValues = await appClient.getBoxValues()
```

***

### getBoxValuesFromABIType()

> **getBoxValuesFromABIType**(`type`, `filter?`): `Promise`\<`object`[]\>

Defined in: [src/app-client.ts:805](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L805)

Returns the values of all current boxes for the current app decoded using an ABI Type.
Note: This will issue multiple HTTP requests (one per box) and it's not an atomic operation so values may be out of sync.

#### Parameters

##### type

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/)

The ABI type to decode the values with

##### filter?

(`name`) => `boolean`

Optional filter to filter which boxes' values are returned

#### Returns

`Promise`\<`object`[]\>

The (name, value) pair of the boxes with values as the ABI Value

#### Example

```typescript
const boxValues = await appClient.getBoxValuesFromABIType(new ABIUintType(32))
```

***

### getGlobalState()

> **getGlobalState**(): `Promise`\<[`AppState`](/algokit-utils-ts/api/algokit-utils/interfaces/appstate/)\>

Defined in: [src/app-client.ts:715](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L715)

Returns raw global state for the current app.

#### Returns

`Promise`\<[`AppState`](/algokit-utils-ts/api/algokit-utils/interfaces/appstate/)\>

The global state

#### Example

```typescript
const globalState = await appClient.getGlobalState()
```

***

### getLocalState()

> **getLocalState**(`address`): `Promise`\<[`AppState`](/algokit-utils-ts/api/algokit-utils/interfaces/appstate/)\>

Defined in: [src/app-client.ts:728](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L728)

Returns raw local state for the given account address.

#### Parameters

##### address

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

The address of the account to get the local state for

#### Returns

`Promise`\<[`AppState`](/algokit-utils-ts/api/algokit-utils/interfaces/appstate/)\>

The local state

#### Example

```typescript
const localState = await appClient.getLocalState('ACCOUNT_ADDRESS')
```

***

### importSourceMaps()

> **importSourceMaps**(`sourceMaps`): `void`

Defined in: [src/app-client.ts:861](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L861)

Import source maps for the app.

#### Parameters

##### sourceMaps

`AppSourceMaps`

The source maps to import

#### Returns

`void`

***

### processMethodCallReturn()

> **processMethodCallReturn**\<`TReturn`, `TResult`\>(`result`): `Promise`\<`Omit`\<`TResult`, `"return"`\> & `AppReturn`\<`TReturn`\>\>

Defined in: [src/app-client.ts:885](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L885)

Checks for decode errors on the SendAppTransactionResult and maps the return value to the specified type
on the ARC-56 method, replacing the `return` property with the decoded type.

If the return type is an ARC-56 struct then the struct will be returned.

#### Type Parameters

##### TReturn

`TReturn` *extends* [`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/) \| `undefined`

##### TResult

`TResult` *extends* `object` = \{ `confirmation`: [`PendingTransactionResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `return?`: [`ABIReturn`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}

#### Parameters

##### result

The SendAppTransactionResult to be mapped

`TResult` | `Promise`\<`TResult`\>

#### Returns

`Promise`\<`Omit`\<`TResult`, `"return"`\> & `AppReturn`\<`TReturn`\>\>

The smart contract response with an updated return value

***

### compile()

> `static` **compile**(`appSpec`, `appManager`, `compilation?`): `Promise`\<`AppClientCompilationResult`\>

Defined in: [src/app-client.ts:1012](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L1012)

Compiles the approval and clear state programs (if TEAL templates provided),
performing any provided deploy-time parameter replacement and returns
the compiled code and any compilation results (including source maps).

If no TEAL templates provided it will use any byte code provided in the app spec.

Will store any generated source maps for later use in debugging.

#### Parameters

##### appSpec

[`Arc56Contract`](/algokit-utils-ts/api/subpaths/abi/type-aliases/arc56contract/)

The app spec for the app

##### appManager

[`AppManager`](/algokit-utils-ts/api/algokit-utils/classes/appmanager/)

The app manager to use for compilation

##### compilation?

`AppClientCompilationParams`

Any compilation parameters to use

#### Returns

`Promise`\<`AppClientCompilationResult`\>

The compiled code and any compilation results (including source maps)

***

### exposeLogicError()

> `static` **exposeLogicError**(`e`, `appSpec`, `details`): `Error`

Defined in: [src/app-client.ts:928](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L928)

Takes an error that may include a logic error from a call to the current app and re-exposes the
error to include source code information via the source map and ARC-56 spec.

#### Parameters

##### e

`Error`

The error to parse

##### appSpec

[`Arc56Contract`](/algokit-utils-ts/api/subpaths/abi/type-aliases/arc56contract/)

The app spec for the app

##### details

Additional information to inform the error

###### approvalSourceInfo?

[`ProgramSourceInfo`](/algokit-utils-ts/api/subpaths/abi/type-aliases/programsourceinfo/)

ARC56 approval source info

###### approvalSourceMap?

`ProgramSourceMap`

Approval program source map

###### clearSourceInfo?

[`ProgramSourceInfo`](/algokit-utils-ts/api/subpaths/abi/type-aliases/programsourceinfo/)

ARC56 clear source info

###### clearSourceMap?

`ProgramSourceMap`

Clear state program source map

###### isClearStateProgram?

`boolean`

Whether or not the code was running the clear state program (defaults to approval program)

###### program?

`Uint8Array`\<`ArrayBufferLike`\>

program bytes

#### Returns

`Error`

The new error, or if there was no logic error or source map then the wrapped error with source details

***

### fromCreatorAndName()

> `static` **fromCreatorAndName**(`params`): `Promise`\<`AppClient`\>

Defined in: [src/app-client.ts:556](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L556)

Returns a new `AppClient` client, resolving the app by creator address and name
using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).

#### Parameters

##### params

The parameters to create the app client

###### algorand

[`AlgorandClient`](/algokit-utils-ts/api/algokit-utils/classes/algorandclient/)

An `AlgorandClient` instance

###### appLookupCache?

[`AppLookup`](/algokit-utils-ts/api/algokit-utils/interfaces/applookup/)

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

`string` \| [`Arc56Contract`](/algokit-utils-ts/api/subpaths/abi/type-aliases/arc56contract/) \| `AppSpec`

The ARC-56 or ARC-32 application spec as either:
 * Parsed JSON ARC-56 `Contract`
 * Parsed JSON ARC-32 `AppSpec`
 * Raw JSON string (in either ARC-56 or ARC-32 format)

###### clearSourceMap?

`ProgramSourceMap`

Optional source map for the clear state program

###### creatorAddress

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

The address of the creator account for the app

###### defaultSender?

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

[`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

###### ignoreCache?

`boolean`

Whether or not to ignore the `AppDeployer` lookup cache and force an on-chain lookup, default: use any cached value

#### Returns

`Promise`\<`AppClient`\>

The `AppClient` instance

#### Example

```typescript
const appClient = await AppClient.fromCreatorAndName({
  creatorAddress: 'CREATOR_ADDRESS',
  name: 'APP_NAME',
  appSpec: appSpec,
  algorand: AlgorandClient.mainNet(),
})

***

### fromNetwork()

> `static` **fromNetwork**(`params`): `Promise`\<`AppClient`\>

Defined in: [src/app-client.ts:585](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L585)

Returns an `AppClient` instance for the current network based on
pre-determined network-specific app IDs specified in the ARC-56 app spec.

If no IDs are in the app spec or the network isn't recognised, an error is thrown.

#### Parameters

##### params

The parameters to create the app client

###### algorand

[`AlgorandClient`](/algokit-utils-ts/api/algokit-utils/classes/algorandclient/)

An `AlgorandClient` instance

###### appName?

`string`

Optional override for the app name; used for on-chain metadata and lookups.
Defaults to the ARC-32/ARC-56 app spec name

###### approvalSourceMap?

`ProgramSourceMap`

Optional source map for the approval program

###### appSpec

`string` \| [`Arc56Contract`](/algokit-utils-ts/api/subpaths/abi/type-aliases/arc56contract/) \| `AppSpec`

The ARC-56 or ARC-32 application spec as either:
 * Parsed JSON ARC-56 `Contract`
 * Parsed JSON ARC-32 `AppSpec`
 * Raw JSON string (in either ARC-56 or ARC-32 format)

###### clearSourceMap?

`ProgramSourceMap`

Optional source map for the clear state program

###### defaultSender?

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

[`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

#### Returns

`Promise`\<`AppClient`\>

The `AppClient` instance

#### Example

```typescript
const appClient = await AppClient.fromNetwork({
  appSpec: appSpec,
  algorand: AlgorandClient.mainNet(),
})

***

### normaliseAppSpec()

> `static` **normaliseAppSpec**(`spec`): [`Arc56Contract`](/algokit-utils-ts/api/subpaths/abi/type-aliases/arc56contract/)

Defined in: [src/app-client.ts:613](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L613)

Takes a string or parsed JSON object that could be ARC-32 or ARC-56 format and
normalises it into a parsed ARC-56 contract object.

#### Parameters

##### spec

The spec to normalise

`string` | [`Arc56Contract`](/algokit-utils-ts/api/subpaths/abi/type-aliases/arc56contract/) | `AppSpec`

#### Returns

[`Arc56Contract`](/algokit-utils-ts/api/subpaths/abi/type-aliases/arc56contract/)

The normalised ARC-56 contract object

#### Example

```typescript
const arc56AppSpec = AppClient.normaliseAppSpec(appSpec)
```
