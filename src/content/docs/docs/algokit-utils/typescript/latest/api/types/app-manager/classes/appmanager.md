---
editUrl: false
next: false
prev: false
title: "AppManager"
---

Defined in: [src/types/app-manager.ts:138](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L138)

Allows management of application information.

## Constructors

### Constructor

> **new AppManager**(`algod`): `AppManager`

Defined in: [src/types/app-manager.ts:146](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L146)

Creates an `AppManager`

#### Parameters

##### algod

`AlgodClient`

An algod instance

#### Returns

`AppManager`

## Methods

### compileTeal()

> **compileTeal**(`tealCode`): `Promise`\<[`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/)\>

Defined in: [src/types/app-manager.ts:165](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L165)

Compiles the given TEAL using algod and returns the result, including source map.

The result of this compilation is also cached keyed by the TEAL
 code so it can be retrieved via `getCompilationResult`.

This function is re-entrant; it will only compile the same code once.

#### Parameters

##### tealCode

`string`

The TEAL code

#### Returns

`Promise`\<[`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/)\>

The information about the compiled file

#### Example

```typescript
const compiled = await appManager.compileTeal(tealProgram)
```

***

### compileTealTemplate()

> **compileTealTemplate**(`tealTemplateCode`, `templateParams?`, `deploymentMetadata?`): `Promise`\<[`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/)\>

Defined in: [src/types/app-manager.ts:201](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L201)

Performs template substitution of a teal template and compiles it, returning the compiled result.

Looks for `TMPL_{parameter}` for template replacements and replaces AlgoKit deploy-time control parameters
if deployment metadata is specified.

* `TMPL_UPDATABLE` for updatability / immutability control
* `TMPL_DELETABLE` for deletability / permanence control

#### Parameters

##### tealTemplateCode

`string`

The TEAL logic to compile

##### templateParams?

[`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/tealtemplateparams/)

Any parameters to replace in the .teal file before compiling

##### deploymentMetadata?

The deployment metadata the app will be deployed with

###### deletable?

`boolean`

###### updatable?

`boolean`

#### Returns

`Promise`\<[`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/)\>

The information about the compiled code

#### Example

```typescript
const compiled = await appManager.compileTealTemplate(tealTemplate, { TMPL_APP_ID: 12345n }, { updatable: true, deletable: false })
```

***

### getBoxNames()

> **getBoxNames**(`appId`): `Promise`\<[`BoxName`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/boxname/)[]\>

Defined in: [src/types/app-manager.ts:305](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L305)

Returns the names of the current boxes for the given app.

#### Parameters

##### appId

`bigint`

The ID of the app return box names for

#### Returns

`Promise`\<[`BoxName`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/boxname/)[]\>

The current box names

#### Example

```typescript
const boxNames = await appManager.getBoxNames(12353n);
```

***

### getBoxValue()

> **getBoxValue**(`appId`, `boxName`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [src/types/app-manager.ts:326](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L326)

Returns the value of the given box name for the given app.

#### Parameters

##### appId

`bigint`

The ID of the app return box names for

##### boxName

[`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/) \| [`BoxName`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/boxname/)

The name of the box to return either as a string, binary array or `BoxName`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The current box value as a byte array

#### Example

```typescript
const boxValue = await appManager.getBoxValue(12353n, 'boxName');
```

***

### getBoxValueFromABIType()

> **getBoxValueFromABIType**(`request`): `Promise`\<`ABIValue`\>

Defined in: [src/types/app-manager.ts:356](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L356)

Returns the value of the given box name for the given app decoded based on the given ABI type.

#### Parameters

##### request

[`BoxValueRequestParams`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxvaluerequestparams/)

The parameters for the box value request

#### Returns

`Promise`\<`ABIValue`\>

The current box value as an ABI value

#### Example

```typescript
const boxValue = await appManager.getBoxValueFromABIType({ appId: 12353n, boxName: 'boxName', type: new ABIUintType(32) });
```

***

### getBoxValues()

> **getBoxValues**(`appId`, `boxNames`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>[]\>

Defined in: [src/types/app-manager.ts:343](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L343)

Returns the value of the given box names for the given app.

#### Parameters

##### appId

`bigint`

The ID of the app return box names for

##### boxNames

([`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/) \| [`BoxName`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/boxname/))[]

The names of the boxes to return either as a string, binary array or `BoxName`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>[]\>

The current box values as a byte array in the same order as the passed in box names

#### Example

```typescript
const boxValues = await appManager.getBoxValues(12353n, ['boxName1', 'boxName2']);
```

***

### getBoxValuesFromABIType()

> **getBoxValuesFromABIType**(`request`): `Promise`\<`ABIValue`[]\>

Defined in: [src/types/app-manager.ts:371](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L371)

Returns the value of the given box names for the given app decoded based on the given ABI type.

#### Parameters

##### request

[`BoxValuesRequestParams`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxvaluesrequestparams/)

The parameters for the box value request

#### Returns

`Promise`\<`ABIValue`[]\>

The current box values as an ABI value in the same order as the passed in box names

#### Example

```typescript
const boxValues = await appManager.getBoxValuesFromABIType({ appId: 12353n, boxNames: ['boxName1', 'boxName2'], type: new ABIUintType(32) });
```

***

### getById()

> **getById**(`appId`): `Promise`\<[`AppInformation`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/appinformation/)\>

Defined in: [src/types/app-manager.ts:242](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L242)

Returns the current app information for the app with the given ID.

#### Parameters

##### appId

`bigint`

The ID of the app

#### Returns

`Promise`\<[`AppInformation`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/appinformation/)\>

The app information

#### Example

```typescript
const appInfo = await appManager.getById(12353n);
```

***

### getCompilationResult()

> **getCompilationResult**(`tealCode`): [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/) \| `undefined`

Defined in: [src/types/app-manager.ts:227](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L227)

Returns a previous compilation result.

#### Parameters

##### tealCode

`string`

The TEAL code

#### Returns

[`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/) \| `undefined`

The information about the previously compiled file
 or `undefined` if that TEAL code wasn't previously compiled

#### Example

```typescript
const compiled = appManager.getCompilationResult(tealProgram)
```

***

### getGlobalState()

> **getGlobalState**(`appId`): `Promise`\<[`AppState`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appstate/)\>

Defined in: [src/types/app-manager.ts:271](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L271)

Returns the current global state values for the given app ID and account address

#### Parameters

##### appId

`bigint`

The ID of the app to return global state for

#### Returns

`Promise`\<[`AppState`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appstate/)\>

The current global state for the given app

#### Example

```typescript
const globalState = await appManager.getGlobalState(12353n);
```

***

### getLocalState()

> **getLocalState**(`appId`, `address`): `Promise`\<[`AppState`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appstate/)\>

Defined in: [src/types/app-manager.ts:286](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L286)

Returns the current local state values for the given app ID and account address

#### Parameters

##### appId

`bigint`

The ID of the app to return local state for

##### address

`string` \| `Address`

The string address of the account to get local state for the given app

#### Returns

`Promise`\<[`AppState`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appstate/)\>

The current local state for the given (app, account) combination

#### Example

```typescript
const localState = await appManager.getLocalState(12353n, 'ACCOUNTADDRESS');
```

***

### decodeAppState()

> `static` **decodeAppState**(`state`): [`AppState`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appstate/)

Defined in: [src/types/app-manager.ts:403](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L403)

Converts an array of global/local state values from the algod api to a more friendly
generic object keyed by the UTF-8 value of the key.

#### Parameters

##### state

`object`[]

A `global-state`, `local-state`, `global-state-deltas` or `local-state-deltas`

#### Returns

[`AppState`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appstate/)

An object keyeed by the UTF-8 representation of the key with various parsings of the values

#### Example

```typescript
const stateValues = AppManager.decodeAppState(state);
```

***

### getABIReturn()

> `static` **getABIReturn**(`confirmation`, `method`): [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/) \| `undefined`

Defined in: [src/types/app-manager.ts:456](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L456)

Returns any ABI return values for the given app call arguments and transaction confirmation.

#### Parameters

##### confirmation

`PendingTransactionResponse` \| `undefined`

The transaction confirmation from algod

##### method

`ABIMethod` \| `undefined`

The ABI method

#### Returns

[`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/) \| `undefined`

The return value for the method call

#### Example

```typescript
const returnValue = AppManager.getABIReturn(confirmation, ABIMethod.fromSignature('hello(string)void'));
```

***

### getBoxReference()

> `static` **getBoxReference**(`boxId`): `BoxReference`

Defined in: [src/types/app-manager.ts:385](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L385)

Returns a `algosdk.BoxReference` given a `BoxIdentifier` or `BoxReference`.

#### Parameters

##### boxId

[`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/)

The box to return a reference for

#### Returns

`BoxReference`

The box reference ready to pass into a `algosdk.Transaction`

#### Example

```typescript
const boxRef = AppManager.getBoxReference('boxName');
```

***

### replaceTealTemplateDeployTimeControlParams()

> `static` **replaceTealTemplateDeployTimeControlParams**(`tealTemplateCode`, `params`): `string`

Defined in: [src/types/app-manager.ts:490](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L490)

Replaces AlgoKit deploy-time deployment control parameters within the given TEAL template code.

* `TMPL_UPDATABLE` for updatability / immutability control
* `TMPL_DELETABLE` for deletability / permanence control

Note: If these values are defined, but the corresponding `TMPL_*` value
 isn't in the teal code it will throw an exception.

#### Parameters

##### tealTemplateCode

`string`

The TEAL template code to substitute

##### params

The deploy-time deployment control parameter value to replace

###### deletable?

`boolean`

###### updatable?

`boolean`

#### Returns

`string`

The replaced TEAL code

#### Example

```typescript
const tealCode = AppManager.replaceTealTemplateDeployTimeControlParams(tealTemplate, { updatable: true, deletable: false });
```

***

### replaceTealTemplateParams()

> `static` **replaceTealTemplateParams**(`tealTemplateCode`, `templateParams?`): `string`

Defined in: [src/types/app-manager.ts:525](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L525)

Performs template substitution of a teal file.

Looks for `TMPL_{parameter}` for template replacements.

#### Parameters

##### tealTemplateCode

`string`

The TEAL template code to make parameter replacements in

##### templateParams?

[`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/tealtemplateparams/)

Any parameters to replace in the teal code

#### Returns

`string`

The TEAL code with replacements

#### Example

```typescript
const tealCode = AppManager.replaceTealTemplateParams(tealTemplate, { TMPL_APP_ID: 12345n });
```

***

### stripTealComments()

> `static` **stripTealComments**(`tealCode`): `string`

Defined in: [src/types/app-manager.ts:564](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L564)

Remove comments from TEAL code (useful to reduce code size before compilation).

#### Parameters

##### tealCode

`string`

The TEAL logic to strip

#### Returns

`string`

The TEAL without comments

#### Example

```typescript
const stripped = AppManager.stripTealComments(tealProgram);
```
