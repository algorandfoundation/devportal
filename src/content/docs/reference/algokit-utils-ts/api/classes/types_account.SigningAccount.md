---
title: SigningAccount
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/account](/reference/algokit-utils-ts/api/modules/types_account/) / SigningAccount



[types/account](/reference/algokit-utils-ts/api/modules/types_account/).SigningAccount

Account wrapper that supports a rekeyed account

## Implements

- `default`

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [\_account](#_account)
- [\_sender](#_sender)
- [\_signer](#_signer)

### Accessors

- [addr](#addr)
- [sender](#sender)
- [signer](#signer)
- [sk](#sk)

## Constructors

### constructor

• **new SigningAccount**(`account`, `sender`): [`SigningAccount`]()

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `default` |
| `sender` | `undefined` \| `string` \| `Address` |

#### Returns

[`SigningAccount`]()

#### Defined in

[src/types/account.ts:115](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L115)

## Properties

### \_account

• `Private` **\_account**: `default`

#### Defined in

[src/types/account.ts:80](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L80)

___

### \_sender

• `Private` **\_sender**: `Address`

#### Defined in

[src/types/account.ts:82](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L82)

___

### \_signer

• `Private` **\_signer**: `TransactionSigner`

#### Defined in

[src/types/account.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L81)

## Accessors

### addr

• `get` **addr**(): `Readonly`\<`Address`\>

Algorand address of the sender

#### Returns

`Readonly`\<`Address`\>

#### Implementation of

Account.addr

#### Defined in

[src/types/account.ts:87](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L87)

___

### sender

• `get` **sender**(): `default`

Algorand account of the sender address and signer private key

#### Returns

`default`

#### Defined in

[src/types/account.ts:108](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L108)

___

### signer

• `get` **signer**(): `TransactionSigner`

Transaction signer for the underlying signing account

#### Returns

`TransactionSigner`

#### Defined in

[src/types/account.ts:101](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L101)

___

### sk

• `get` **sk**(): `Readonly`\<`Uint8Array`\>

Secret key belonging to the signer

#### Returns

`Readonly`\<`Uint8Array`\>

#### Implementation of

Account.sk

#### Defined in

[src/types/account.ts:94](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L94)