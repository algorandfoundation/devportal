---
title: methodSelector
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](docs/_md/arc4/README) / methodSelector

## Call Signature

> **methodSelector**(`methodSignature`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`4`\>

Defined in: [arc4/index.ts:211](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L211)

Returns the ARC4 method selector for a given ARC4 method signature. The method selector is the first
4 bytes of the SHA512/256 hash of the method signature.

### Parameters

#### methodSignature

[`InstanceMethod`](/reference/algorand-typescript/api/arc4/-internal-/type-aliases/instancemethod/)\<[`Contract`](/reference/algorand-typescript/api/arc4/classes/contract/)\>

An ARC4 contract method reference. (Eg. `MyContract.prototype.myMethod`)

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`4`\>

The ARC4 method selector. Eg. `02BECE11`

## Call Signature

> **methodSelector**(`methodSignature`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`4`\>

Defined in: [arc4/index.ts:218](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L218)

Returns the ARC4 method selector for a given ARC4 method signature. The method selector is the first
4 bytes of the SHA512/256 hash of the method signature.

### Parameters

#### methodSignature

`string`

An ARC4 method signature string (Eg. `hello(string)string`. Must be a compile time constant)

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`4`\>

The ARC4 method selector. Eg. `02BECE11`
