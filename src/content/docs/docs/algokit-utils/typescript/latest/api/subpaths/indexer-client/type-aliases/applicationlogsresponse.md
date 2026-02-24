---
editUrl: false
next: false
prev: false
title: 'ApplicationLogsResponse'
---

> **ApplicationLogsResponse** = `object`

Defined in: [packages/indexer_client/src/models/application-logs-response.ts:6](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-logs-response.ts#L6)

## Properties

### applicationId

> **applicationId**: `bigint`

Defined in: [packages/indexer_client/src/models/application-logs-response.ts:10](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-logs-response.ts#L10)

\[appidx\] application index.

---

### currentRound

> **currentRound**: `bigint`

Defined in: [packages/indexer_client/src/models/application-logs-response.ts:15](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-logs-response.ts#L15)

Round at which the results were computed.

---

### logData?

> `optional` **logData**: [`ApplicationLogData`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/applicationlogdata/)[]

Defined in: [packages/indexer_client/src/models/application-logs-response.ts:21](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-logs-response.ts#L21)

---

### nextToken?

> `optional` **nextToken**: `string`

Defined in: [packages/indexer_client/src/models/application-logs-response.ts:20](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-logs-response.ts#L20)

Used for pagination, when making another request provide this token with the next parameter.
