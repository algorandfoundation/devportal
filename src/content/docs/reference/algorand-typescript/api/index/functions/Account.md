---
title: Account
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [index](docs/_md/index/README) / Account

## Call Signature

> **Account**(): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [reference.ts:109](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L109)

Create a new account object representing the zero address

### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

## Call Signature

> **Account**(`publicKey`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [reference.ts:114](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L114)

Create a new account object representing the provided public key bytes

### Parameters

#### publicKey

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

A 32-byte Algorand account public key

### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

## Call Signature

> **Account**(`address`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [reference.ts:119](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L119)

Create a new account object representing the provided address

### Parameters

#### address

`string`

A 56 character base-32 encoded Algorand address

### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)
