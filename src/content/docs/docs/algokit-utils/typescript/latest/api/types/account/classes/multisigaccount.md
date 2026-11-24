---
editUrl: false
next: false
prev: false
title: "MultisigAccount"
---

Defined in: [src/types/account.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L20)

Account wrapper that supports partial or full multisig signing.

## Constructors

### Constructor

> **new MultisigAccount**(`multisigParams`, `signingAccounts`): `MultisigAccount`

Defined in: [src/types/account.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L46)

#### Parameters

##### multisigParams

`MultisigMetadata`

##### signingAccounts

(`Account` \| [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/types/account/classes/signingaccount/))[]

#### Returns

`MultisigAccount`

## Properties

### \_addr

> **\_addr**: `Address`

Defined in: [src/types/account.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L23)

***

### \_params

> **\_params**: `MultisigMetadata`

Defined in: [src/types/account.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L21)

***

### \_signer

> **\_signer**: `TransactionSigner`

Defined in: [src/types/account.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L24)

***

### \_signingAccounts

> **\_signingAccounts**: (`Account` \| [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/types/account/classes/signingaccount/))[]

Defined in: [src/types/account.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L22)

## Accessors

### addr

#### Get Signature

> **get** **addr**(): `Readonly`\<`Address`\>

Defined in: [src/types/account.ts:37](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L37)

The address of the multisig account

##### Returns

`Readonly`\<`Address`\>

***

### params

#### Get Signature

> **get** **params**(): `Readonly`\<`algosdk.MultisigMetadata`\>

Defined in: [src/types/account.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L27)

The parameters for the multisig account

##### Returns

`Readonly`\<`algosdk.MultisigMetadata`\>

***

### signer

#### Get Signature

> **get** **signer**(): `TransactionSigner`

Defined in: [src/types/account.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L42)

The transaction signer for the multisig account

##### Returns

`TransactionSigner`

***

### signingAccounts

#### Get Signature

> **get** **signingAccounts**(): readonly (`Account` \| [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/types/account/classes/signingaccount/))[]

Defined in: [src/types/account.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L32)

The list of accounts that are present to sign

##### Returns

readonly (`Account` \| [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/types/account/classes/signingaccount/))[]

## Methods

### sign()

> **sign**(`transaction`): `Uint8Array`

Defined in: [src/types/account.ts:65](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L65)

Sign the given transaction

#### Parameters

##### transaction

`Uint8Array`\<`ArrayBufferLike`\> \| `Transaction`

Either a transaction object or a raw, partially signed transaction

#### Returns

`Uint8Array`

The transaction signed by the present signers

#### Example

```typescript
const signedTxn = multisigAccount.sign(myTransaction)
```
