---
editUrl: false
next: false
prev: false
title: "BoxesResponse"
---

> **BoxesResponse** = `object`

Defined in: [packages/indexer\_client/src/models/boxes-response.ts:6](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/boxes-response.ts#L6)

## Properties

### applicationId

> **applicationId**: `bigint`

Defined in: [packages/indexer\_client/src/models/boxes-response.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/boxes-response.ts#L10)

\[appidx\] application index.

***

### boxes

> **boxes**: [`BoxDescriptor`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/boxdescriptor/)[]

Defined in: [packages/indexer\_client/src/models/boxes-response.ts:11](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/boxes-response.ts#L11)

***

### nextToken?

> `optional` **nextToken**: `string`

Defined in: [packages/indexer\_client/src/models/boxes-response.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/boxes-response.ts#L16)

Used for pagination, when making another request provide this token with the next parameter.
