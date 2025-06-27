---
title: 'Str'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/reference/readme) / Str

# Class: Str

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:105](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L105)

A utf8 encoded string prefixed with its length expressed as a 2 byte uint

## Extends

- [`ARC4Encoded`](/reference/algorand-typescript/arc4encoded)

## Constructors

### new Str()

> **new Str**(`s`?): [`Str`](/reference/algorand-typescript/str)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:113](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L113)

Create a new Str instance

#### Parameters

##### s?

`string`

The native string to initialize this Str from

#### Returns

[`Str`](/reference/algorand-typescript/str)

#### Overrides

[`ARC4Encoded`](/reference/algorand-typescript/arc4encoded).[`constructor`](/reference/algorand-typescript/arc4encoded#constructors)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:97](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L97)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/index/type-aliases/bytes)

#### Inherited from

[`ARC4Encoded`](/reference/algorand-typescript/arc4encoded).[`bytes`](/reference/algorand-typescript/arc4encoded#bytes)

---

### native

#### Get Signature

> **get** **native**(): `string`

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:120](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L120)

Retrieve the decoded native string

##### Returns

`string`
