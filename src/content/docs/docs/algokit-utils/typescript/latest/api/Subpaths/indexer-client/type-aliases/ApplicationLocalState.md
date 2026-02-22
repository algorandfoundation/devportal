---
editUrl: false
next: false
prev: false
title: "ApplicationLocalState"
---

> **ApplicationLocalState** = `object`

Defined in: [packages/indexer\_client/src/models/application-local-state.ts:11](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-local-state.ts#L11)

Stores local state associated with an application.

## Properties

### closedOutAtRound?

> `optional` **closedOutAtRound**: `bigint`

Defined in: [packages/indexer\_client/src/models/application-local-state.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-local-state.ts#L30)

Round when account closed out of the application.

***

### deleted?

> `optional` **deleted**: `boolean`

Defined in: [packages/indexer\_client/src/models/application-local-state.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-local-state.ts#L20)

Whether or not the application local state is currently deleted from its account.

***

### id

> **id**: `bigint`

Defined in: [packages/indexer\_client/src/models/application-local-state.ts:15](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-local-state.ts#L15)

The application which this local state is for.

***

### keyValue?

> `optional` **keyValue**: [`TealKeyValueStore`](/algokit-utils-ts/api/subpaths/indexer-client/type-aliases/tealkeyvaluestore/)

Defined in: [packages/indexer\_client/src/models/application-local-state.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-local-state.ts#L32)

***

### optedInAtRound?

> `optional` **optedInAtRound**: `bigint`

Defined in: [packages/indexer\_client/src/models/application-local-state.ts:25](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-local-state.ts#L25)

Round when the account opted into the application.

***

### schema

> **schema**: [`ApplicationStateSchema`](/algokit-utils-ts/api/subpaths/indexer-client/type-aliases/applicationstateschema/)

Defined in: [packages/indexer\_client/src/models/application-local-state.ts:31](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-local-state.ts#L31)
