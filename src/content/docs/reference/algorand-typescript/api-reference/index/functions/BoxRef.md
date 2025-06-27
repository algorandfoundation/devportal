---
title: 'BoxRef'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / BoxRef

# Function: BoxRef()

> **BoxRef**(`options`): [`BoxRef`](/reference/type-aliases/boxref)

Defined in: [packages/algo-ts/src/box.ts:253](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L253)

Creates a BoxRef proxy object offering methods for getting and setting binary data in a box under a single key. This proxy is particularly
relevant when dealing with binary data that is larger than what the AVM can handle in a single value.

## Parameters

### options

[`CreateBoxRefOptions`](/reference/-internal-/interfaces/createboxrefoptions)

The options for creating the BoxRef proxy

## Returns

[`BoxRef`](/reference/type-aliases/boxref)
