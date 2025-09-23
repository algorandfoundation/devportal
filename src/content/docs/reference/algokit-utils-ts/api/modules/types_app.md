---
title: types/app
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / types/app

## Table of contents

### Enumerations

- [OnSchemaBreak](/reference/algokit-utils-ts/api/enums/types_apponschemabreak/)
- [OnUpdate](/reference/algokit-utils-ts/api/enums/types_apponupdate/)

### Interfaces

- [AppCallParams](/reference/algokit-utils-ts/api/interfaces/types_appappcallparams/)
- [AppCallTransactionResultOfType](/reference/algokit-utils-ts/api/interfaces/types_appappcalltransactionresultoftype/)
- [AppCompilationResult](/reference/algokit-utils-ts/api/interfaces/types_appappcompilationresult/)
- [AppDeployMetadata](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/)
- [AppDeploymentParams](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymentparams/)
- [AppLookup](/reference/algokit-utils-ts/api/interfaces/types_appapplookup/)
- [AppMetadata](/reference/algokit-utils-ts/api/interfaces/types_appappmetadata/)
- [AppReference](/reference/algokit-utils-ts/api/interfaces/types_appappreference/)
- [AppState](/reference/algokit-utils-ts/api/interfaces/types_appappstate/)
- [AppStorageSchema](/reference/algokit-utils-ts/api/interfaces/types_appappstorageschema/)
- [BoxName](/reference/algokit-utils-ts/api/interfaces/types_appboxname/)
- [BoxReference](/reference/algokit-utils-ts/api/interfaces/types_appboxreference/)
- [BoxValueRequestParams](/reference/algokit-utils-ts/api/interfaces/types_appboxvaluerequestparams/)
- [BoxValuesRequestParams](/reference/algokit-utils-ts/api/interfaces/types_appboxvaluesrequestparams/)
- [CompiledTeal](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/)
- [CoreAppCallArgs](/reference/algokit-utils-ts/api/interfaces/types_appcoreappcallargs/)
- [CreateAppParams](/reference/algokit-utils-ts/api/interfaces/types_appcreateappparams/)
- [RawAppCallArgs](/reference/algokit-utils-ts/api/interfaces/types_apprawappcallargs/)
- [TealTemplateParams](/reference/algokit-utils-ts/api/interfaces/types_apptealtemplateparams/)
- [UpdateAppParams](/reference/algokit-utils-ts/api/interfaces/types_appupdateappparams/)

### Type Aliases

- [ABIAppCallArg](#abiappcallarg)
- [ABIAppCallArgs](#abiappcallargs)
- [ABIReturn](#abireturn)
- [AppCallArgs](#appcallargs)
- [AppCallTransactionResult](#appcalltransactionresult)
- [AppCallType](#appcalltype)
- [AppReturn](#appreturn)
- [BoxIdentifier](#boxidentifier)
- [SendAppCreateTransactionResult](#sendappcreatetransactionresult)
- [SendAppTransactionResult](#sendapptransactionresult)
- [SendAppUpdateTransactionResult](#sendappupdatetransactionresult)

### Variables

- [ABI_RETURN_PREFIX](#abi_return_prefix)
- [APP_DEPLOY_NOTE_DAPP](#app_deploy_note_dapp)
- [APP_PAGE_MAX_SIZE](#app_page_max_size)
- [DELETABLE_TEMPLATE_NAME](#deletable_template_name)
- [UPDATABLE_TEMPLATE_NAME](#updatable_template_name)

## Type Aliases

### ABIAppCallArg

Ƭ **ABIAppCallArg**: `ABIArgument` \| [`TransactionToSign`](/reference/algokit-utils-ts/api/interfaces/types_transactiontransactiontosign/) \| `Transaction` \| `Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)\> \| [`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/) \| `undefined`

An argument for an ABI method, either a primitive value, or a transaction with or without signer, or the unawaited async return value of an algokit method that returns a `SendTransactionResult`

#### Defined in

[src/types/app.ts:102](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L102)

---

### ABIAppCallArgs

Ƭ **ABIAppCallArgs**: [`CoreAppCallArgs`](/reference/algokit-utils-ts/api/interfaces/types_appcoreappcallargs/) & \{ `method`: `ABIMethodParams` \| `ABIMethod` ; `methodArgs`: [`ABIAppCallArg`](#abiappcallarg)[] }

App call args for an ABI call

#### Defined in

[src/types/app.ts:113](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L113)

---

### ABIReturn

Ƭ **ABIReturn**: \{ `decodeError`: `undefined` ; `method`: `ABIMethod` ; `rawReturnValue`: `Uint8Array` ; `returnValue`: `ABIValue` } \| \{ `decodeError`: `Error` ; `method?`: `undefined` ; `rawReturnValue?`: `undefined` ; `returnValue?`: `undefined` }

The return value of an ABI method call

#### Defined in

[src/types/app.ts:235](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L235)

---

### AppCallArgs

Ƭ **AppCallArgs**: [`RawAppCallArgs`](/reference/algokit-utils-ts/api/interfaces/types_apprawappcallargs/) \| [`ABIAppCallArgs`](#abiappcallargs)

Arguments to pass to an app call either:

- The raw app call values to pass through into the transaction (after processing); or
- An ABI method definition (method and args)

#### Defined in

[src/types/app.ts:124](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L124)

---

### AppCallTransactionResult

Ƭ **AppCallTransactionResult**: [`AppCallTransactionResultOfType`](/reference/algokit-utils-ts/api/interfaces/types_appappcalltransactionresultoftype/)\<[`ABIReturn`](#abireturn)\>

Result from calling an app

#### Defined in

[src/types/app.ts:232](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L232)

---

### AppCallType

Ƭ **AppCallType**: `"no_op"` \| `"opt_in"` \| `"close_out"` \| `"clear_state"` \| `"update_application"` \| `"delete_application"`

**`Deprecated`**

Use `algosdk.OnApplicationComplete` directly instead.

The type of call / [on-completion action](https://dev.algorand.co/concepts/smart-contracts/overview#smart-contract-lifecycle) for a smart contract call.

Equivalent of `algosdk.OnApplicationComplete`, but as a more convenient string enum.

- `no_op`: Normal smart contract call, no special on-complete action
- `opt_in`: Opt-in to smart contract local storage
- `close_out`: Close-out local storage storage
- `clear_state`: Clear local storage state
- `update_application`: Update the smart contract
- `delete_application`: Delete the smart contract

#### Defined in

[src/types/app.ts:180](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L180)

---

### AppReturn

Ƭ **AppReturn**\<`TReturn`\>: `Object`

#### Type parameters

| Name      |
| :-------- |
| `TReturn` |

#### Type declaration

| Name      | Type      | Description                      |
| :-------- | :-------- | :------------------------------- |
| `return?` | `TReturn` | The ABI method call return value |

#### Defined in

[src/types/app.ts:340](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L340)

---

### BoxIdentifier

Ƭ **BoxIdentifier**: `string` \| `Uint8Array` \| [`SendTransactionFrom`](#sendtransactionfrom)

**`Deprecated`**

Use `types/app-manager/BoxIdentifier` instead.

Something that identifies a box name - either a:

- `Uint8Array`
- `string` (that will be encoded to a Uint8Array)
- `SendTransactionFrom` (encoded into the public key address of the corresponding account)

#### Defined in

[src/types/app.ts:70](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L70)

---

### SendAppCreateTransactionResult

Ƭ **SendAppCreateTransactionResult**: [`Expand`](#expand)\<[`SendAppUpdateTransactionResult`](#sendappupdatetransactionresult) & \{ `appAddress`: `Address` ; `appId`: `bigint` }\>

Result from sending a single app transaction.

#### Defined in

[src/types/app.ts:357](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L357)

---

### SendAppTransactionResult

Ƭ **SendAppTransactionResult**: [`Expand`](#expand)\<[`SendSingleTransactionResult`](#sendsingletransactionresult) & \{ `return?`: [`ABIReturn`](#abireturn) }\>

Result from sending a single app transaction.

#### Defined in

[src/types/app.ts:346](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L346)

---

### SendAppUpdateTransactionResult

Ƭ **SendAppUpdateTransactionResult**: [`Expand`](#expand)\<[`SendAppTransactionResult`](#sendapptransactionresult) & `Partial`\<[`AppCompilationResult`](/reference/algokit-utils-ts/api/interfaces/types_appappcompilationresult/)\>\>

Result from sending a single app transaction.

#### Defined in

[src/types/app.ts:354](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L354)

## Variables

### ABI_RETURN_PREFIX

• `Const` **ABI_RETURN_PREFIX**: `Uint8Array`

First 4 bytes of SHA-512/256 hash of "return" for retrieving ABI return values

#### Defined in

[src/types/app.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L36)

---

### APP_DEPLOY_NOTE_DAPP

• `Const` **APP_DEPLOY_NOTE_DAPP**: `"ALGOKIT_DEPLOYER"`

The app create/update [ARC-2](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0002.md) transaction note prefix

#### Defined in

[src/types/app.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L30)

---

### APP_PAGE_MAX_SIZE

• `Const` **APP_PAGE_MAX_SIZE**: `2048`

The maximum number of bytes in a single app code page

#### Defined in

[src/types/app.ts:33](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L33)

---

### DELETABLE_TEMPLATE_NAME

• `Const` **DELETABLE_TEMPLATE_NAME**: `"TMPL_DELETABLE"`

The name of the TEAL template variable for deploy-time permanence control

#### Defined in

[src/types/app.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L27)

---

### UPDATABLE_TEMPLATE_NAME

• `Const` **UPDATABLE_TEMPLATE_NAME**: `"TMPL_UPDATABLE"`

The name of the TEAL template variable for deploy-time immutability control

#### Defined in

[src/types/app.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L24)
