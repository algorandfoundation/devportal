---
title: 'Box'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / Box

# Function: Box()

> **Box**\<`TValue`\>(`options`): [`Box`](/reference/type-aliases/box)\<`TValue`\>

Defined in: [packages/algo-ts/src/box.ts:214](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L214)

Creates a Box proxy object offering methods of getting and setting the value stored in a single box.

## Type Parameters

• **TValue**

The type of the data stored in the box. This value will be encoded to bytes when stored and decoded on retrieval.

## Parameters

### options

[`CreateBoxOptions`](/reference/-internal-/interfaces/createboxoptions)

Options for creating the Box proxy

## Returns

[`Box`](/reference/type-aliases/box)\<`TValue`\>
