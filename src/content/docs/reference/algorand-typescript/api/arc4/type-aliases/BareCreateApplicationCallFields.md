---
title: BareCreateApplicationCallFields
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](/reference/algorand-typescript/api/arc4/readme/) / BareCreateApplicationCallFields

> **BareCreateApplicationCallFields** = `Omit`\<[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/), `"appId"` \| `"appArgs"`\>

Defined in: [arc4/c2c.ts:15](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L15)

Defines txn fields that are available for a bare create application call.

This is the regular application call fields minus:

- appId: because the appId is not known when creating an application
- appArgs: because a bare call cannot have arguments
