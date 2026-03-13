---
editUrl: false
next: false
prev: false
title: "methodSelector"
---

## Call Signature

> **methodSelector**(`methodSignature`): [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`4`\>

Defined in: [arc4/index.ts:211](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L211)

Returns the ARC4 method selector for a given ARC4 method signature. The method selector is the first
4 bytes of the SHA512/256 hash of the method signature.

### Parameters

#### methodSignature

`InstanceMethod`\<[`Contract`](/algorand-typescript/api/arc4/classes/contract/)\>

An ARC4 contract method reference. (Eg. `MyContract.prototype.myMethod`)

### Returns

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`4`\>

The ARC4 method selector. Eg. `02BECE11`

## Call Signature

> **methodSelector**(`methodSignature`): [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`4`\>

Defined in: [arc4/index.ts:218](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L218)

Returns the ARC4 method selector for a given ARC4 method signature. The method selector is the first
4 bytes of the SHA512/256 hash of the method signature.

### Parameters

#### methodSignature

`string`

An ARC4 method signature string (Eg. `hello(string)string`.  Must be a compile time constant)

### Returns

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`4`\>

The ARC4 method selector. Eg. `02BECE11`

## Call Signature

> **methodSelector**\<`TMethod`\>(): [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`4`\>

Defined in: [arc4/index.ts:227](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L227)

Returns the ARC4 method selector for a given ARC4 method signature. The method selector is the first
4 bytes of the SHA512/256 hash of the method signature.

### Type Parameters

#### TMethod

`TMethod`

The type of an ARC4 method signature (eg. `typeof MyContract.prototype.myMethod`)

### Returns

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`4`\>

The ARC4 method selector. Eg. `02BECE11`

### Remarks

This overload can be used in conjunction with type only import (eg. `import type { MyContract } from './my-contract'`) to
work around what would otherwise be a circular reference in the event two contracts need to call each other.
