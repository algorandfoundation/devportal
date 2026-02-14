---
title: SigningAccount
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/account](/docs/algokit-utils/typescript/latest/api/modules/types_account/) / SigningAccount

[types/account](/docs/algokit-utils/typescript/latest/api/modules/types_account/).SigningAccount

Account wrapper that supports a rekeyed account

## Implements

- `default`

## Table of contents

### Constructors

- [constructor](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/#constructor)

### Properties

- [\_account](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/#_account)
- [\_sender](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/#_sender)
- [\_signer](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/#_signer)

### Accessors

- [addr](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/#addr)
- [sender](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/#sender)
- [signer](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/#signer)
- [sk](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/#sk)

## Constructors

### constructor

• **new SigningAccount**(`account`, `sender`): [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/)

#### Parameters

| Name      | Type                                 |
| :-------- | :----------------------------------- |
| `account` | `default`                            |
| `sender`  | `undefined` \| `string` \| `Address` |

#### Returns

[`SigningAccount`](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/)

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
