---
editUrl: false
next: false
prev: false
title: 'TypedApplicationCallFields'
---

> **TypedApplicationCallFields**\<`TArgs`\> = `Omit`\<[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/), `"appArgs"`\> & `TArgs` _extends_ \[\] ? `object` : `object`

Defined in: [arc4/c2c.ts:58](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L58)

Application call fields with `appArgs` replaced with an `args` property that is strongly typed to the actual arguments for the
given application call.

## Type Parameters

### TArgs

`TArgs`
