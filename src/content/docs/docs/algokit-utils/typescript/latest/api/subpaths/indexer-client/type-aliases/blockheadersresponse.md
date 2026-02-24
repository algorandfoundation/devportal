---
editUrl: false
next: false
prev: false
title: 'BlockHeadersResponse'
---

> **BlockHeadersResponse** = `object`

Defined in: [packages/indexer_client/src/models/block-headers-response.ts:6](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block-headers-response.ts#L6)

## Properties

### blocks

> **blocks**: [`Block`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/block/)[]

Defined in: [packages/indexer_client/src/models/block-headers-response.ts:16](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block-headers-response.ts#L16)

---

### currentRound

> **currentRound**: `bigint`

Defined in: [packages/indexer_client/src/models/block-headers-response.ts:10](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block-headers-response.ts#L10)

Round at which the results were computed.

---

### nextToken?

> `optional` **nextToken**: `string`

Defined in: [packages/indexer_client/src/models/block-headers-response.ts:15](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block-headers-response.ts#L15)

Used for pagination, when making another request provide this token with the next parameter.
