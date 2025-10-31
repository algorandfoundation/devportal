---
title: urange
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [index](docs/_md/index/README) / urange

## Call Signature

> **urange**(`stop`): `IterableIterator`\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [util.ts:161](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L161)

Generates an iterable sequence from 0...stop inclusive

### Parameters

#### stop

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

The stop number of the sequence

### Returns

`IterableIterator`\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

## Call Signature

> **urange**(`start`, `stop`): `IterableIterator`\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [util.ts:167](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L167)

Generates an iterable sequence from start...stop inclusive

### Parameters

#### start

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

The start number of the sequence

#### stop

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

The stop number of the sequence

### Returns

`IterableIterator`\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

## Call Signature

> **urange**(`start`, `stop`, `step`): `IterableIterator`\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [util.ts:174](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L174)

Generates an iterable sequence from start...stop inclusive with increments of size step

### Parameters

#### start

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

The start number of the sequence

#### stop

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

The stop number of the sequence

#### step

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

The step size of the sequence

### Returns

`IterableIterator`\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>
