---
editUrl: false
next: false
prev: false
title: 'ErrorTransformer'
---

> **ErrorTransformer** = (`error`) => `Promise`\<`Error`\>

Defined in: [src/composer.ts:155](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L155)

A function that transforms an error into a new error.

In most cases, an ErrorTransformer should first check if it can or should transform the error
and return the input error if it cannot or should not transform it.

## Parameters

### error

`Error`

## Returns

`Promise`\<`Error`\>
