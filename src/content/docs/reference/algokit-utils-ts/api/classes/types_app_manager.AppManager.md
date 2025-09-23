---
title: AppManager
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app-manager](/reference/algokit-utils-ts/api/modules/types_app_manager/) / AppManager

[types/app-manager](/reference/algokit-utils-ts/api/modules/types_app_manager/).AppManager

Allows management of application information.

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [\_algod](#_algod)
- [\_compilationResults](#_compilationresults)

### Methods

- [compileTeal](#compileteal)
- [compileTealTemplate](#compiletealtemplate)
- [getBoxNames](#getboxnames)
- [getBoxValue](#getboxvalue)
- [getBoxValueFromABIType](#getboxvaluefromabitype)
- [getBoxValues](#getboxvalues)
- [getBoxValuesFromABIType](#getboxvaluesfromabitype)
- [getById](#getbyid)
- [getCompilationResult](#getcompilationresult)
- [getGlobalState](#getglobalstate)
- [getLocalState](#getlocalstate)
- [decodeAppState](#decodeappstate)
- [getABIReturn](#getabireturn)
- [getBoxReference](#getboxreference)
- [replaceTealTemplateDeployTimeControlParams](#replacetealtemplatedeploytimecontrolparams)
- [replaceTealTemplateParams](#replacetealtemplateparams)
- [stripTealComments](#striptealcomments)

## Constructors

### constructor

• **new AppManager**(`algod`): [`AppManager`]()

Creates an `AppManager`

#### Parameters

| Name    | Type          | Description       |
| :------ | :------------ | :---------------- |
| `algod` | `AlgodClient` | An algod instance |

#### Returns

[`AppManager`]()

#### Defined in

[src/types/app-manager.ts:106](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L106)

## Properties

### \_algod

• `Private` **\_algod**: `AlgodClient`

#### Defined in

[src/types/app-manager.ts:99](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L99)

---

### \_compilationResults

• `Private` **\_compilationResults**: `Record`\<`string`, [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/)\> = `{}`

#### Defined in

[src/types/app-manager.ts:100](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L100)

## Methods

### compileTeal

▸ **compileTeal**(`tealCode`): `Promise`\<[`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/)\>

Compiles the given TEAL using algod and returns the result, including source map.

The result of this compilation is also cached keyed by the TEAL
code so it can be retrieved via `getCompilationResult`.

This function is re-entrant; it will only compile the same code once.

#### Parameters

| Name       | Type     | Description   |
| :--------- | :------- | :------------ |
| `tealCode` | `string` | The TEAL code |

#### Returns

`Promise`\<[`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/)\>

The information about the compiled file

**`Example`**

```typescript
const compiled = await appManager.compileTeal(tealProgram);
```

#### Defined in

[src/types/app-manager.ts:125](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L125)

---

### compileTealTemplate

▸ **compileTealTemplate**(`tealTemplateCode`, `templateParams?`, `deploymentMetadata?`): `Promise`\<[`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/)\>

Performs template substitution of a teal template and compiles it, returning the compiled result.

Looks for `TMPL_{parameter}` for template replacements and replaces AlgoKit deploy-time control parameters
if deployment metadata is specified.

- `TMPL_UPDATABLE` for updatability / immutability control
- `TMPL_DELETABLE` for deletability / permanence control

#### Parameters

| Name                            | Type                                                                                            | Description                                                  |
| :------------------------------ | :---------------------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| `tealTemplateCode`              | `string`                                                                                        | The TEAL logic to compile                                    |
| `templateParams?`               | [`TealTemplateParams`](/reference/algokit-utils-ts/api/interfaces/types_apptealtemplateparams/) | Any parameters to replace in the .teal file before compiling |
| `deploymentMetadata?`           | `Object`                                                                                        | The deployment metadata the app will be deployed with        |
| `deploymentMetadata.deletable?` | `boolean`                                                                                       | -                                                            |
| `deploymentMetadata.updatable?` | `boolean`                                                                                       | -                                                            |

#### Returns

`Promise`\<[`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/)\>

The information about the compiled code

**`Example`**

```typescript
const compiled = await appManager.compileTealTemplate(
  tealTemplate,
  { TMPL_APP_ID: 12345n },
  { updatable: true, deletable: false },
);
```

#### Defined in

[src/types/app-manager.ts:161](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L161)

---

### getBoxNames

▸ **getBoxNames**(`appId`): `Promise`\<[`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/)[]\>

Returns the names of the current boxes for the given app.

#### Parameters

| Name    | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `appId` | `bigint` | The ID of the app return box names for |

#### Returns

`Promise`\<[`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/)[]\>

The current box names

**`Example`**

```typescript
const boxNames = await appManager.getBoxNames(12353n);
```

#### Defined in

[src/types/app-manager.ts:263](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L263)

---

### getBoxValue

▸ **getBoxValue**(`appId`, `boxName`): `Promise`\<`Uint8Array`\>

Returns the value of the given box name for the given app.

#### Parameters

| Name      | Type                                                                                                                                                                     | Description                                                                 |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| `appId`   | `bigint`                                                                                                                                                                 | The ID of the app return box names for                                      |
| `boxName` | [`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/) \| [`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) | The name of the box to return either as a string, binary array or `BoxName` |

#### Returns

`Promise`\<`Uint8Array`\>

The current box value as a byte array

**`Example`**

```typescript
const boxValue = await appManager.getBoxValue(12353n, 'boxName');
```

#### Defined in

[src/types/app-manager.ts:284](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L284)

---

### getBoxValueFromABIType

▸ **getBoxValueFromABIType**(`request`): `Promise`\<`ABIValue`\>

Returns the value of the given box name for the given app decoded based on the given ABI type.

#### Parameters

| Name      | Type                                                                                                          | Description                              |
| :-------- | :------------------------------------------------------------------------------------------------------------ | :--------------------------------------- |
| `request` | [`BoxValueRequestParams`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxvaluerequestparams/) | The parameters for the box value request |

#### Returns

`Promise`\<`ABIValue`\>

The current box value as an ABI value

**`Example`**

```typescript
const boxValue = await appManager.getBoxValueFromABIType({
  appId: 12353n,
  boxName: 'boxName',
  type: new ABIUintType(32),
});
```

#### Defined in

[src/types/app-manager.ts:314](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L314)

---

### getBoxValues

▸ **getBoxValues**(`appId`, `boxNames`): `Promise`\<`Uint8Array`[]\>

Returns the value of the given box names for the given app.

#### Parameters

| Name       | Type                                                                                                                                                                         | Description                                                                    |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| `appId`    | `bigint`                                                                                                                                                                     | The ID of the app return box names for                                         |
| `boxNames` | ([`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/) \| [`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier))[] | The names of the boxes to return either as a string, binary array or `BoxName` |

#### Returns

`Promise`\<`Uint8Array`[]\>

The current box values as a byte array in the same order as the passed in box names

**`Example`**

```typescript
const boxValues = await appManager.getBoxValues(12353n, ['boxName1', 'boxName2']);
```

#### Defined in

[src/types/app-manager.ts:301](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L301)

---

### getBoxValuesFromABIType

▸ **getBoxValuesFromABIType**(`request`): `Promise`\<`ABIValue`[]\>

Returns the value of the given box names for the given app decoded based on the given ABI type.

#### Parameters

| Name      | Type                                                                                                            | Description                              |
| :-------- | :-------------------------------------------------------------------------------------------------------------- | :--------------------------------------- |
| `request` | [`BoxValuesRequestParams`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxvaluesrequestparams/) | The parameters for the box value request |

#### Returns

`Promise`\<`ABIValue`[]\>

The current box values as an ABI value in the same order as the passed in box names

**`Example`**

```typescript
const boxValues = await appManager.getBoxValuesFromABIType({
  appId: 12353n,
  boxNames: ['boxName1', 'boxName2'],
  type: new ABIUintType(32),
});
```

#### Defined in

[src/types/app-manager.ts:329](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L329)

---

### getById

▸ **getById**(`appId`): `Promise`\<[`AppInformation`](/reference/algokit-utils-ts/api/interfaces/types_app_managerappinformation/)\>

Returns the current app information for the app with the given ID.

#### Parameters

| Name    | Type     | Description       |
| :------ | :------- | :---------------- |
| `appId` | `bigint` | The ID of the app |

#### Returns

`Promise`\<[`AppInformation`](/reference/algokit-utils-ts/api/interfaces/types_app_managerappinformation/)\>

The app information

**`Example`**

```typescript
const appInfo = await appManager.getById(12353n);
```

#### Defined in

[src/types/app-manager.ts:202](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L202)

---

### getCompilationResult

▸ **getCompilationResult**(`tealCode`): `undefined` \| [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/)

Returns a previous compilation result.

#### Parameters

| Name       | Type     | Description   |
| :--------- | :------- | :------------ |
| `tealCode` | `string` | The TEAL code |

#### Returns

`undefined` \| [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/)

The information about the previously compiled file
or `undefined` if that TEAL code wasn't previously compiled

**`Example`**

```typescript
const compiled = appManager.getCompilationResult(tealProgram);
```

#### Defined in

[src/types/app-manager.ts:187](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L187)

---

### getGlobalState

▸ **getGlobalState**(`appId`): `Promise`\<[`AppState`](/reference/algokit-utils-ts/api/interfaces/types_appappstate/)\>

Returns the current global state values for the given app ID and account address

#### Parameters

| Name    | Type     | Description                                  |
| :------ | :------- | :------------------------------------------- |
| `appId` | `bigint` | The ID of the app to return global state for |

#### Returns

`Promise`\<[`AppState`](/reference/algokit-utils-ts/api/interfaces/types_appappstate/)\>

The current global state for the given app

**`Example`**

```typescript
const globalState = await appManager.getGlobalState(12353n);
```

#### Defined in

[src/types/app-manager.ts:229](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L229)

---

### getLocalState

▸ **getLocalState**(`appId`, `address`): `Promise`\<[`AppState`](/reference/algokit-utils-ts/api/interfaces/types_appappstate/)\>

Returns the current local state values for the given app ID and account address

#### Parameters

| Name      | Type                  | Description                                                            |
| :-------- | :-------------------- | :--------------------------------------------------------------------- |
| `appId`   | `bigint`              | The ID of the app to return local state for                            |
| `address` | `string` \| `Address` | The string address of the account to get local state for the given app |

#### Returns

`Promise`\<[`AppState`](/reference/algokit-utils-ts/api/interfaces/types_appappstate/)\>

The current local state for the given (app, account) combination

**`Example`**

```typescript
const localState = await appManager.getLocalState(12353n, 'ACCOUNTADDRESS');
```

#### Defined in

[src/types/app-manager.ts:244](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L244)

---

### decodeAppState

▸ **decodeAppState**(`state`): [`AppState`](/reference/algokit-utils-ts/api/interfaces/types_appappstate/)

Converts an array of global/local state values from the algod api to a more friendly
generic object keyed by the UTF-8 value of the key.

#### Parameters

| Name    | Type                                                             | Description                                                                    |
| :------ | :--------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| `state` | \{ `key`: `Uint8Array` ; `value`: `TealValue` \| `EvalDelta` }[] | A `global-state`, `local-state`, `global-state-deltas` or `local-state-deltas` |

#### Returns

[`AppState`](/reference/algokit-utils-ts/api/interfaces/types_appappstate/)

An object keyeed by the UTF-8 representation of the key with various parsings of the values

**`Example`**

```typescript
const stateValues = AppManager.decodeAppState(state);
```

#### Defined in

[src/types/app-manager.ts:361](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L361)

---

### getABIReturn

▸ **getABIReturn**(`confirmation`, `method`): `undefined` \| [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)

Returns any ABI return values for the given app call arguments and transaction confirmation.

#### Parameters

| Name           | Type                                        | Description                             |
| :------------- | :------------------------------------------ | :-------------------------------------- |
| `confirmation` | `undefined` \| `PendingTransactionResponse` | The transaction confirmation from algod |
| `method`       | `undefined` \| `ABIMethod`                  | The ABI method                          |

#### Returns

`undefined` \| [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)

The return value for the method call

**`Example`**

```typescript
const returnValue = AppManager.getABIReturn(
  confirmation,
  ABIMethod.fromSignature('hello(string)void'),
);
```

#### Defined in

[src/types/app-manager.ts:414](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L414)

---

### getBoxReference

▸ **getBoxReference**(`boxId`): `BoxReference`

Returns a `algosdk.BoxReference` given a `BoxIdentifier` or `BoxReference`.

#### Parameters

| Name    | Type                                                                                                                                                                                       | Description                       |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |
| `boxId` | [`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/) | The box to return a reference for |

#### Returns

`BoxReference`

The box reference ready to pass into a `algosdk.Transaction`

**`Example`**

```typescript
const boxRef = AppManager.getBoxReference('boxName');
```

#### Defined in

[src/types/app-manager.ts:343](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L343)

---

### replaceTealTemplateDeployTimeControlParams

▸ **replaceTealTemplateDeployTimeControlParams**(`tealTemplateCode`, `params`): `string`

Replaces AlgoKit deploy-time deployment control parameters within the given TEAL template code.

- `TMPL_UPDATABLE` for updatability / immutability control
- `TMPL_DELETABLE` for deletability / permanence control

Note: If these values are defined, but the corresponding `TMPL_*` value
isn't in the teal code it will throw an exception.

#### Parameters

| Name                | Type      | Description                                                   |
| :------------------ | :-------- | :------------------------------------------------------------ |
| `tealTemplateCode`  | `string`  | The TEAL template code to substitute                          |
| `params`            | `Object`  | The deploy-time deployment control parameter value to replace |
| `params.deletable?` | `boolean` | -                                                             |
| `params.updatable?` | `boolean` | -                                                             |

#### Returns

`string`

The replaced TEAL code

**`Example`**

```typescript
const tealCode = AppManager.replaceTealTemplateDeployTimeControlParams(tealTemplate, {
  updatable: true,
  deletable: false,
});
```

#### Defined in

[src/types/app-manager.ts:448](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L448)

---

### replaceTealTemplateParams

▸ **replaceTealTemplateParams**(`tealTemplateCode`, `templateParams?`): `string`

Performs template substitution of a teal file.

Looks for `TMPL_{parameter}` for template replacements.

#### Parameters

| Name               | Type                                                                                            | Description                                              |
| :----------------- | :---------------------------------------------------------------------------------------------- | :------------------------------------------------------- |
| `tealTemplateCode` | `string`                                                                                        | The TEAL template code to make parameter replacements in |
| `templateParams?`  | [`TealTemplateParams`](/reference/algokit-utils-ts/api/interfaces/types_apptealtemplateparams/) | Any parameters to replace in the teal code               |

#### Returns

`string`

The TEAL code with replacements

**`Example`**

```typescript
const tealCode = AppManager.replaceTealTemplateParams(tealTemplate, { TMPL_APP_ID: 12345n });
```

#### Defined in

[src/types/app-manager.ts:483](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L483)

---

### stripTealComments

▸ **stripTealComments**(`tealCode`): `string`

Remove comments from TEAL code (useful to reduce code size before compilation).

#### Parameters

| Name       | Type     | Description             |
| :--------- | :------- | :---------------------- |
| `tealCode` | `string` | The TEAL logic to strip |

#### Returns

`string`

The TEAL without comments

**`Example`**

```typescript
const stripped = AppManager.stripTealComments(tealProgram);
```

#### Defined in

[src/types/app-manager.ts:522](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L522)
