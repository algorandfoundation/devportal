---
title: BareCreateApplicationCallFields
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/README/) / BareCreateApplicationCallFields

> **BareCreateApplicationCallFields** = `Omit`\<[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/), `"appId"` \| `"appArgs"`\>

Defined in: [arc4/c2c.ts:15](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L15)

Defines txn fields that are available for a bare create application call.

This is the regular application call fields minus:

- appId: because the appId is not known when creating an application
- appArgs: because a bare call cannot have arguments
