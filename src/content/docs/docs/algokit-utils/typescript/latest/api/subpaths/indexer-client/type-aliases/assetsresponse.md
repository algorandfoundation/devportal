---
editUrl: false
next: false
prev: false
title: "AssetsResponse"
---

> **AssetsResponse** = `object`

Defined in: [packages/indexer\_client/src/models/assets-response.ts:6](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/assets-response.ts#L6)

## Properties

### assets

> **assets**: [`Asset`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/asset/)[]

Defined in: [packages/indexer\_client/src/models/assets-response.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/assets-response.ts#L7)

***

### currentRound

> **currentRound**: `bigint`

Defined in: [packages/indexer\_client/src/models/assets-response.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/assets-response.ts#L12)

Round at which the results were computed.

***

### nextToken?

> `optional` **nextToken**: `string`

Defined in: [packages/indexer\_client/src/models/assets-response.ts:17](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/assets-response.ts#L17)

Used for pagination, when making another request provide this token with the next parameter.
