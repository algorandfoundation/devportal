---
editUrl: false
next: false
prev: false
title: "BoxMap"
---

> **BoxMap**\<`TKey`, `TValue`\> = [`Box`](/algorand-typescript/api/index/type-aliases/box/)\<`TValue`\>

Defined in: [box.ts:151](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L151)

A BoxMap proxy

## Type Parameters

### TKey

`TKey`

The type of the value used to key each box.

### TValue

`TValue`

The type of the data stored in the box.

> **BoxMap**(`key`): [`Box`](/algorand-typescript/api/index/type-aliases/box/)\<`TValue`\>

Get a Box proxy for a single item in the BoxMap

## Parameters

### key

`TKey`

The key of the box to retrieve a proxy for

## Returns

[`Box`](/algorand-typescript/api/index/type-aliases/box/)\<`TValue`\>

## Properties

### keyPrefix

> `readonly` **keyPrefix**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [box.ts:107](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L107)

Get the bytes used to prefix each key
