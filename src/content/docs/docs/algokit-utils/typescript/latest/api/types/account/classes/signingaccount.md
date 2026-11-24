---
editUrl: false
next: false
prev: false
title: "SigningAccount"
---

Defined in: [src/types/account.ts:79](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L79)

Account wrapper that supports a rekeyed account

## Implements

- `default`

## Constructors

### Constructor

> **new SigningAccount**(`account`, `sender`): `SigningAccount`

Defined in: [src/types/account.ts:115](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L115)

#### Parameters

##### account

`Account`

##### sender

`string` \| `Address` \| `undefined`

#### Returns

`SigningAccount`

## Accessors

### addr

#### Get Signature

> **get** **addr**(): `Readonly`\<`Address`\>

Defined in: [src/types/account.ts:87](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L87)

Algorand address of the sender

##### Returns

`Readonly`\<`Address`\>

#### Implementation of

`Account.addr`

***

### sender

#### Get Signature

> **get** **sender**(): `Account`

Defined in: [src/types/account.ts:108](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L108)

Algorand account of the sender address and signer private key

##### Returns

`Account`

***

### signer

#### Get Signature

> **get** **signer**(): `TransactionSigner`

Defined in: [src/types/account.ts:101](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L101)

Transaction signer for the underlying signing account

##### Returns

`TransactionSigner`

***

### sk

#### Get Signature

> **get** **sk**(): `Readonly`\<`Uint8Array`\>

Defined in: [src/types/account.ts:94](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L94)

Secret key belonging to the signer

##### Returns

`Readonly`\<`Uint8Array`\>

#### Implementation of

`Account.sk`
