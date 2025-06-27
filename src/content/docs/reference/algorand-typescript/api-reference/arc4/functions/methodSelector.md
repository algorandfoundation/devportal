---
title: 'methodSelector'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/reference/readme) / methodSelector

# Function: methodSelector()

> **methodSelector**(`methodSignature`): [`bytes`](/index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/arc4/index.ts:173](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L173)

Returns the ARC4 method selector for a given ARC4 method signature. The method selector is the first
4 bytes of the SHA512/256 hash of the method signature.

## Parameters

### methodSignature

An ARC4 method signature string ( Eg. `hello(string)string`. Must be a compile time constant), or a contract method reference. (Eg. `MyContract.prototype.myMethod`)

`string` | [`ContractMethod`](/reference/-internal-/type-aliases/contractmethod)

## Returns

[`bytes`](/index/type-aliases/bytes)

The ARC4 method selector. Eg. `02BECE11`
