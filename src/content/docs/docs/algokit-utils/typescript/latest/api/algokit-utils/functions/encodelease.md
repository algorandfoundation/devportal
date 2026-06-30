---
editUrl: false
next: false
prev: false
title: 'encodeLease'
---

> **encodeLease**(`lease?`): `Uint8Array`\<`ArrayBufferLike`\> \| `undefined`

Defined in: [src/transaction/transaction.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L23)

Encodes a transaction lease into a 32-byte array ready to be included in an Algorand transaction.

## Parameters

### lease?

The transaction lease as a string or binary array or null/undefined if there is no lease

`string` | `Uint8Array`\<`ArrayBufferLike`\>

## Returns

`Uint8Array`\<`ArrayBufferLike`\> \| `undefined`

the transaction lease ready for inclusion in a transaction or `undefined` if there is no lease

## Throws

if the length of the data is > 32 bytes or empty

## Examples

```ts
algokit.encodeLease('UNIQUE_ID');
```

```ts
algokit.encodeLease(new Uint8Array([1, 2, 3]));
```
