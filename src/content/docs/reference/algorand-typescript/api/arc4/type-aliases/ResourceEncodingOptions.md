---
title: ResourceEncodingOptions
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](docs/_md/arc4/README) / ResourceEncodingOptions

> **ResourceEncodingOptions** = `"index"` \| `"value"`

Defined in: [arc4/index.ts:69](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L69)

The possible options for the resource encoding to use for the method

index: Application, Asset, and Account arguments are included in the transaction's relevant array. The argument value is the uint8 index of the resource in the that array.
value: Application, Asset and Account arguments are passed by their uint64 id (Application and Asset) or bytes[32] address (Account).
