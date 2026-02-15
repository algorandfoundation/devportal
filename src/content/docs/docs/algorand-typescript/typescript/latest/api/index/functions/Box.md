---
title: Box
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [index](/docs/algorand-typescript/typescript/latest/api/index/readme/) / Box

> **Box**\<`TValue`\>(`options`): [`Box`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/box/)\<`TValue`\>

Defined in: [box.ts:131](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L131)

Creates a Box proxy object offering methods of getting and setting the value stored in a single box.

## Type Parameters

### TValue

`TValue`

The type of the data stored in the box. This value will be encoded to bytes when stored and decoded on retrieval.

## Parameters

### options

[`CreateBoxOptions`](/docs/algorand-typescript/typescript/latest/api/index/-internal-/interfaces/createboxoptions/)

Options for creating the Box proxy

## Returns

[`Box`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/box/)\<`TValue`\>
