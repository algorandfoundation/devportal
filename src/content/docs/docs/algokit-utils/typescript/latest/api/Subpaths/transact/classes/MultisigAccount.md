---
editUrl: false
next: false
prev: false
title: 'MultisigAccount'
---

Defined in: [packages/transact/src/multisig.ts:387](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L387)

Account wrapper that supports partial or full multisig signing.

## Implements

- [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)
- [`AddressWithDelegatedLsigSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithdelegatedlsigsigner/)

## Constructors

### Constructor

> **new MultisigAccount**(`multisigParams`, `subSigners`): `MultisigAccount`

Defined in: [packages/transact/src/multisig.ts:428](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L428)

#### Parameters

##### multisigParams

[`MultisigMetadata`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/multisigmetadata/)

##### subSigners

[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) & [`AddressWithDelegatedLsigSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithdelegatedlsigsigner/)[]

#### Returns

`MultisigAccount`

## Properties

### \_addr

> **\_addr**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/multisig.ts:390](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L390)

---

### \_lsigSigner

> **\_lsigSigner**: [`DelegatedLsigSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/delegatedlsigsigner/)

Defined in: [packages/transact/src/multisig.ts:392](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L392)

---

### \_params

> **\_params**: [`MultisigMetadata`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/multisigmetadata/)

Defined in: [packages/transact/src/multisig.ts:388](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L388)

---

### \_signer

> **\_signer**: [`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

Defined in: [packages/transact/src/multisig.ts:391](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L391)

---

### \_subSigners

> **\_subSigners**: [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) & [`AddressWithDelegatedLsigSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithdelegatedlsigsigner/)[]

Defined in: [packages/transact/src/multisig.ts:389](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L389)

## Accessors

### addr

#### Get Signature

> **get** **addr**(): `Readonly`\<[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)\>

Defined in: [packages/transact/src/multisig.ts:405](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L405)

The address of the multisig account

##### Returns

`Readonly`\<[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)\>

#### Implementation of

[`AddressWithDelegatedLsigSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithdelegatedlsigsigner/).[`addr`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithdelegatedlsigsigner/#addr)

---

### lsigSigner

#### Get Signature

> **get** **lsigSigner**(): [`DelegatedLsigSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/delegatedlsigsigner/)

Defined in: [packages/transact/src/multisig.ts:414](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L414)

##### Returns

[`DelegatedLsigSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/delegatedlsigsigner/)

#### Implementation of

[`AddressWithDelegatedLsigSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithdelegatedlsigsigner/).[`lsigSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithdelegatedlsigsigner/#lsigsigner)

---

### params

#### Get Signature

> **get** **params**(): `Readonly`\<[`MultisigMetadata`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/multisigmetadata/)\>

Defined in: [packages/transact/src/multisig.ts:395](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L395)

The parameters for the multisig account

##### Returns

`Readonly`\<[`MultisigMetadata`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/multisigmetadata/)\>

---

### signer

#### Get Signature

> **get** **signer**(): [`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

Defined in: [packages/transact/src/multisig.ts:410](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L410)

The transaction signer for the multisig account

##### Returns

[`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

#### Implementation of

[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/).[`signer`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/#signer)

---

### subSigners

#### Get Signature

> **get** **subSigners**(): [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) & [`AddressWithDelegatedLsigSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithdelegatedlsigsigner/)[]

Defined in: [packages/transact/src/multisig.ts:400](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L400)

The list of accounts that are present to sign transactions or lsigs

##### Returns

[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) & [`AddressWithDelegatedLsigSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithdelegatedlsigsigner/)[]

## Methods

### applySignature()

> **applySignature**(`msigSignature`, `pubkey`, `signature`): [`MultisigSignature`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/multisigsignature/)

Defined in: [packages/transact/src/multisig.ts:507](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L507)

#### Parameters

##### msigSignature

[`MultisigSignature`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/multisigsignature/)

##### pubkey

`Uint8Array`

##### signature

`Uint8Array`

#### Returns

[`MultisigSignature`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/multisigsignature/)

---

### applySignatureToTxn()

> **applySignatureToTxn**(`txn`, `pubkey`, `signature`): `void`

Defined in: [packages/transact/src/multisig.ts:498](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L498)

#### Parameters

##### txn

[`SignedTransaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/signedtransaction/)

##### pubkey

`Uint8Array`

##### signature

`Uint8Array`

#### Returns

`void`

---

### createMultisigSignature()

> **createMultisigSignature**(): [`MultisigSignature`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/multisigsignature/)

Defined in: [packages/transact/src/multisig.ts:484](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L484)

#### Returns

[`MultisigSignature`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/multisigsignature/)

---

### createMultisigTransaction()

> **createMultisigTransaction**(`txn`): [`SignedTransaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/signedtransaction/)

Defined in: [packages/transact/src/multisig.ts:480](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L480)

#### Parameters

##### txn

[`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)

#### Returns

[`SignedTransaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/signedtransaction/)

---

### fromSignature()

> `static` **fromSignature**(`signature`): `MultisigAccount`

Defined in: [packages/transact/src/multisig.ts:418](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L418)

#### Parameters

##### signature

[`MultisigSignature`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/multisigsignature/)

#### Returns

`MultisigAccount`
