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

- [constructor](types_account.SigningAccount.md#constructor)

### Properties

- [\_account](types_account.SigningAccount.md#_account)
- [\_sender](types_account.SigningAccount.md#_sender)
- [\_signer](types_account.SigningAccount.md#_signer)

### Accessors

- [addr](types_account.SigningAccount.md#addr)
- [sender](types_account.SigningAccount.md#sender)
- [signer](types_account.SigningAccount.md#signer)
- [sk](types_account.SigningAccount.md#sk)

## Constructors

### constructor

• **new SigningAccount**(`account`, `sender`): [`SigningAccount`](types_account.SigningAccount.md)

#### Parameters

| Name      | Type                                 |
| :-------- | :----------------------------------- |
| `account` | `default`                            |
| `sender`  | `undefined` \| `string` \| `Address` |

#### Returns

[`SigningAccount`](types_account.SigningAccount.md)

#### Defined in

[src/types/account.ts:115](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L115)

## Properties

### \_account

• `Private` **\_account**: `default`

#### Defined in

[src/types/account.ts:80](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L80)

---

### \_sender

• `Private` **\_sender**: `Address`

#### Defined in

[src/types/account.ts:82](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L82)

---

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

---

### sender

• `get` **sender**(): `default`

Algorand account of the sender address and signer private key

#### Returns

`default`

#### Defined in

[src/types/account.ts:108](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L108)

---

### signer

• `get` **signer**(): `TransactionSigner`

Transaction signer for the underlying signing account

#### Returns

`TransactionSigner`

#### Defined in

[src/types/account.ts:101](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L101)

---

### sk

• `get` **sk**(): `Readonly`\<`Uint8Array`\>

Secret key belonging to the signer

#### Returns

`Readonly`\<`Uint8Array`\>

#### Implementation of

Account.sk

#### Defined in

[src/types/account.ts:94](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L94)
