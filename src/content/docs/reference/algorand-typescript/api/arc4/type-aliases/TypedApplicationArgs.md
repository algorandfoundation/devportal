---
title: TypedApplicationArgs
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](docs/_md/arc4/README) / TypedApplicationArgs

> **TypedApplicationArgs**\<`TArgs`\> = `TArgs` _extends_ `never` ? `unknown`[] : `TArgs` _extends_ \[\] ? \[\] : `TArgs` _extends_ \[infer TArg, `...(infer TRest)`\] ? readonly \[[`TypedApplicationArg`](TypedApplicationArg)\<`TArg`\>, `...TypedApplicationArgs<TRest>`\] : `never`

Defined in: [arc4/c2c.ts:46](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L46)

Conditional type which maps a tuple of application arguments to a tuple of input types for specifying those arguments.

## Type Parameters

### TArgs

`TArgs`
