---
title: sizeOf
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](/reference/algorand-typescript/api/arc4/readme/) / sizeOf

> **sizeOf**\<`T`\>(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [arc4/index.ts:262](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L262)

Return the total number of bytes required to store T as bytes.

T must represent a type with a fixed length encoding scheme.

## Type Parameters

### T

`T`

Any native or arc4 type with a fixed encoding size.

## Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)
