---
title: CreateOptions
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](/reference/algorand-typescript/api/arc4/readme/) / CreateOptions

> **CreateOptions** = `"allow"` \| `"disallow"` \| `"require"`

Defined in: [arc4/index.ts:61](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L61)

The possible options for a method being available on application create

allow: This method CAN be called when the application is being created, but it is not required
disallow: This method CANNOT be called when the application is being created
require: This method CAN ONLY be called when the application is being created
