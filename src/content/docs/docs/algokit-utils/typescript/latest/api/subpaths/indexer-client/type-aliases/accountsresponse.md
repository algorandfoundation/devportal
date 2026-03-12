---
editUrl: false
next: false
prev: false
title: "AccountsResponse"
---

> **AccountsResponse** = `object`

Defined in: [packages/indexer\_client/src/models/accounts-response.ts:6](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/accounts-response.ts#L6)

## Properties

### accounts

> **accounts**: [`Account`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/account/)[]

Defined in: [packages/indexer\_client/src/models/accounts-response.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/accounts-response.ts#L7)

***

### currentRound

> **currentRound**: `bigint`

Defined in: [packages/indexer\_client/src/models/accounts-response.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/accounts-response.ts#L12)

Round at which the results were computed.

***

### nextToken?

> `optional` **nextToken**: `string`

Defined in: [packages/indexer\_client/src/models/accounts-response.ts:17](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/accounts-response.ts#L17)

Used for pagination, when making another request provide this token with the next parameter.
