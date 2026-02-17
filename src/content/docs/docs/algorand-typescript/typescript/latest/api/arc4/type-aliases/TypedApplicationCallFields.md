---
title: TypedApplicationCallFields
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/README/) / TypedApplicationCallFields

> **TypedApplicationCallFields**\<`TArgs`\> = `Omit`\<[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/), `"appArgs"`\> & `TArgs` _extends_ \[\] ? `object` : `object`

Defined in: [arc4/c2c.ts:58](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L58)

Application call fields with `appArgs` replaced with an `args` property that is strongly typed to the actual arguments for the
given application call.

## Type Parameters

### TArgs

`TArgs`
