---
title: types/app
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / types/app

## Table of contents

### Enumerations

- [OnSchemaBreak](/docs/algokit-utils/typescript/latest/api/enums/types_apponschemabreak/)
- [OnUpdate](/docs/algokit-utils/typescript/latest/api/enums/types_apponupdate/)

### Interfaces

- [AppCallParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappcallparams/)
- [AppCallTransactionResultOfType](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappcalltransactionresultoftype/)
- [AppCompilationResult](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappcompilationresult/)
- [AppDeployMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/)
- [AppDeploymentParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/)
- [AppLookup](/docs/algokit-utils/typescript/latest/api/interfaces/types_appapplookup/)
- [AppMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappmetadata/)
- [AppReference](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappreference/)
- [AppState](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappstate/)
- [AppStorageSchema](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappstorageschema/)
- [BoxName](/docs/algokit-utils/typescript/latest/api/interfaces/types_appboxname/)
- [BoxReference](/docs/algokit-utils/typescript/latest/api/interfaces/types_appboxreference/)
- [BoxValueRequestParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_appboxvaluerequestparams/)
- [BoxValuesRequestParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_appboxvaluesrequestparams/)
- [CompiledTeal](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcompiledteal/)
- [CoreAppCallArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/)
- [CreateAppParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcreateappparams/)
- [RawAppCallArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_apprawappcallargs/)
- [TealTemplateParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_apptealtemplateparams/)
- [UpdateAppParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_appupdateappparams/)

### Type Aliases

- [ABIAppCallArg](/docs/algokit-utils/typescript/latest/api/modules/types_app/#abiappcallarg)
- [ABIAppCallArgs](/docs/algokit-utils/typescript/latest/api/modules/types_app/#abiappcallargs)
- [ABIReturn](/docs/algokit-utils/typescript/latest/api/modules/types_app/#abireturn)
- [AppCallArgs](/docs/algokit-utils/typescript/latest/api/modules/types_app/#appcallargs)
- [AppCallTransactionResult](/docs/algokit-utils/typescript/latest/api/modules/types_app/#appcalltransactionresult)
- [AppCallType](/docs/algokit-utils/typescript/latest/api/modules/types_app/#appcalltype)
- [AppReturn](/docs/algokit-utils/typescript/latest/api/modules/types_app/#appreturn)
- [BoxIdentifier](/docs/algokit-utils/typescript/latest/api/modules/types_app/#boxidentifier)
- [SendAppCreateTransactionResult](/docs/algokit-utils/typescript/latest/api/modules/types_app/#sendappcreatetransactionresult)
- [SendAppTransactionResult](/docs/algokit-utils/typescript/latest/api/modules/types_app/#sendapptransactionresult)
- [SendAppUpdateTransactionResult](/docs/algokit-utils/typescript/latest/api/modules/types_app/#sendappupdatetransactionresult)

### Variables

- [ABI_RETURN_PREFIX](/docs/algokit-utils/typescript/latest/api/modules/types_app/#abi_return_prefix)
- [APP_DEPLOY_NOTE_DAPP](/docs/algokit-utils/typescript/latest/api/modules/types_app/#app_deploy_note_dapp)
- [APP_PAGE_MAX_SIZE](/docs/algokit-utils/typescript/latest/api/modules/types_app/#app_page_max_size)
- [DELETABLE_TEMPLATE_NAME](/docs/algokit-utils/typescript/latest/api/modules/types_app/#deletable_template_name)
- [UPDATABLE_TEMPLATE_NAME](/docs/algokit-utils/typescript/latest/api/modules/types_app/#updatable_template_name)

## Type Aliases

### ABIAppCallArg

Ƭ **ABIAppCallArg**: `ABIArgument` \| [`TransactionToSign`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactiontransactiontosign/) \| `Transaction` \| `Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/)\> \| [`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/) \| `undefined`

An argument for an ABI method, either a primitive value, or a transaction with or without signer, or the unawaited async return value of an algokit method that returns a `SendTransactionResult`

#### Defined in

[src/types/app.ts:102](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L102)

---

### ABIAppCallArgs

Ƭ **ABIAppCallArgs**: [`CoreAppCallArgs`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/) & \{ `method`: `ABIMethodParams` \| `ABIMethod` ; `methodArgs`: [`ABIAppCallArg`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#abiappcallarg)[] }

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

Ƭ **AppCallArgs**: [`RawAppCallArgs`](/docs/algokit-utils/typescript/latest/api/interfaces/types_apprawappcallargs/) \| [`ABIAppCallArgs`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#abiappcallargs)

Arguments to pass to an app call either:

- The raw app call values to pass through into the transaction (after processing); or
- An ABI method definition (method and args)

#### Defined in

[src/types/app.ts:124](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L124)

---

### AppCallTransactionResult

Ƭ **AppCallTransactionResult**: [`AppCallTransactionResultOfType`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappcalltransactionresultoftype/)\<[`ABIReturn`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#abireturn)\>

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

Ƭ **BoxIdentifier**: `string` \| `Uint8Array` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom)

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

Ƭ **SendAppCreateTransactionResult**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<[`SendAppUpdateTransactionResult`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#sendappupdatetransactionresult) & \{ `appAddress`: `Address` ; `appId`: `bigint` }\>

Result from sending a single app transaction.

#### Defined in

[src/types/app.ts:357](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L357)

---

### SendAppTransactionResult

Ƭ **SendAppTransactionResult**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<[`SendSingleTransactionResult`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendsingletransactionresult) & \{ `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#abireturn) }\>

Result from sending a single app transaction.

#### Defined in

[src/types/app.ts:346](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L346)

---

### SendAppUpdateTransactionResult

Ƭ **SendAppUpdateTransactionResult**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<[`SendAppTransactionResult`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#sendapptransactionresult) & `Partial`\<[`AppCompilationResult`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappcompilationresult/)\>\>

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
