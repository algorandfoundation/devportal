---
title: MultisigAccount
slug: reference/algokit-utils-ts/api/classes/types_accountmultisigaccount
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/account](/reference/algokit-utils-ts/api/modules/types_account/) / MultisigAccount



[types/account](/reference/algokit-utils-ts/api/modules/types_account/).MultisigAccount

Account wrapper that supports partial or full multisig signing.

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [\_addr](#_addr)
- [\_params](#_params)
- [\_signer](#_signer)
- [\_signingAccounts](#_signingaccounts)

### Accessors

- [addr](#addr)
- [params](#params)
- [signer](#signer)
- [signingAccounts](#signingaccounts)

### Methods

- [sign](#sign)

## Constructors

### constructor

• **new MultisigAccount**(`multisigParams`, `signingAccounts`): [`MultisigAccount`](/reference/algokit-utils-ts/api/classes/types_accountmultisigaccount/)

#### Parameters

| Name | Type |
| :------ | :------ |
| `multisigParams` | `MultisigMetadata` |
| `signingAccounts` | (`default` \| [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/))[] |

#### Returns

[`MultisigAccount`](/reference/algokit-utils-ts/api/classes/types_accountmultisigaccount/)

#### Defined in

[src/types/account.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L46)

## Properties

### \_addr

• **\_addr**: `Address`

#### Defined in

[src/types/account.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L23)

___

### \_params

• **\_params**: `MultisigMetadata`

#### Defined in

[src/types/account.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L21)

___

### \_signer

• **\_signer**: `TransactionSigner`

#### Defined in

[src/types/account.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L24)

___

### \_signingAccounts

• **\_signingAccounts**: (`default` \| [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/))[]

#### Defined in

[src/types/account.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L22)

## Accessors

### addr

• `get` **addr**(): `Readonly`\<`Address`\>

The address of the multisig account

#### Returns

`Readonly`\<`Address`\>

#### Defined in

[src/types/account.ts:37](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L37)

___

### params

• `get` **params**(): `Readonly`\<`MultisigMetadata`\>

The parameters for the multisig account

#### Returns

`Readonly`\<`MultisigMetadata`\>

#### Defined in

[src/types/account.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L27)

___

### signer

• `get` **signer**(): `TransactionSigner`

The transaction signer for the multisig account

#### Returns

`TransactionSigner`

#### Defined in

[src/types/account.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L42)

___

### signingAccounts

• `get` **signingAccounts**(): readonly (`default` \| [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/))[]

The list of accounts that are present to sign

#### Returns

readonly (`default` \| [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/))[]

#### Defined in

[src/types/account.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L32)

## Methods

### sign

▸ **sign**(`transaction`): `Uint8Array`

Sign the given transaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | `Uint8Array` \| `Transaction` | Either a transaction object or a raw, partially signed transaction |

#### Returns

`Uint8Array`

The transaction signed by the present signers

**`Example`**

```typescript
const signedTxn = multisigAccount.sign(myTransaction)
```

#### Defined in

[src/types/account.ts:65](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L65)