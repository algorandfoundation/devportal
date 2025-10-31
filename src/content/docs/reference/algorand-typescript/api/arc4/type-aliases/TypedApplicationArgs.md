---
title: TypedApplicationArgs
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](/reference/algorand-typescript/api/arc4/readme/) / TypedApplicationArgs

> **TypedApplicationArgs**\<`TArgs`\> = `TArgs` _extends_ `never` ? `unknown`[] : `TArgs` _extends_ \[\] ? \[\] : `TArgs` _extends_ \[infer TArg, `...(infer TRest)`\] ? readonly \[[`TypedApplicationArg`](TypedApplicationArg)\<`TArg`\>, `...TypedApplicationArgs<TRest>`\] : `never`

Defined in: [arc4/c2c.ts:46](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L46)

Conditional type which maps a tuple of application arguments to a tuple of input types for specifying those arguments.

## Type Parameters

### TArgs

`TArgs`
