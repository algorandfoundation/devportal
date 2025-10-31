---
title: TypedApplicationCallFields
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](docs/_md/arc4/README) / TypedApplicationCallFields

> **TypedApplicationCallFields**\<`TArgs`\> = `Omit`\<[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/), `"appArgs"`\> & `TArgs` _extends_ \[\] ? `object` : `object`

Defined in: [arc4/c2c.ts:58](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L58)

Application call fields with `appArgs` replaced with an `args` property that is strongly typed to the actual arguments for the
given application call.

## Type Parameters

### TArgs

`TArgs`
