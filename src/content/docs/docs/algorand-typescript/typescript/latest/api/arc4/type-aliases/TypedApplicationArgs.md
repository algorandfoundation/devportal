---
editUrl: false
next: false
prev: false
title: "TypedApplicationArgs"
---

> **TypedApplicationArgs**\<`TArgs`\> = `TArgs` *extends* `never` ? `unknown`[] : `TArgs` *extends* \[\] ? \[\] : `TArgs` *extends* \[infer TArg, `...(infer TRest)`\] ? readonly \[[`TypedApplicationArg`](/algorand-typescript/api/arc4/type-aliases/typedapplicationarg/)\<`TArg`\>, `...TypedApplicationArgs<TRest>`\] : `never`

Defined in: [arc4/c2c.ts:46](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L46)

Conditional type which maps a tuple of application arguments to a tuple of input types for specifying those arguments.

## Type Parameters

### TArgs

`TArgs`
