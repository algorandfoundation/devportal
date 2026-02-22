---
editUrl: false
next: false
prev: false
title: "ApplicationParams"
---

> **ApplicationParams** = `object`

Defined in: [packages/indexer\_client/src/models/application-params.ts:11](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-params.ts#L11)

Stores the global information associated with an application.

## Properties

### approvalProgram?

> `optional` **approvalProgram**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/application-params.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-params.ts#L20)

approval program.

***

### clearStateProgram?

> `optional` **clearStateProgram**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/application-params.ts:25](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-params.ts#L25)

clear state program.

***

### creator?

> `optional` **creator**: [`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/)

Defined in: [packages/indexer\_client/src/models/application-params.ts:15](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-params.ts#L15)

The address that created this application. This is the address where the parameters and global state for this application can be found.

***

### extraProgramPages?

> `optional` **extraProgramPages**: `number`

Defined in: [packages/indexer\_client/src/models/application-params.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-params.ts#L30)

the number of extra program pages available to this app.

***

### globalState?

> `optional` **globalState**: [`TealKeyValueStore`](/algokit-utils-ts/api/subpaths/indexer-client/type-aliases/tealkeyvaluestore/)

Defined in: [packages/indexer\_client/src/models/application-params.ts:33](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-params.ts#L33)

***

### globalStateSchema?

> `optional` **globalStateSchema**: [`ApplicationStateSchema`](/algokit-utils-ts/api/subpaths/indexer-client/type-aliases/applicationstateschema/)

Defined in: [packages/indexer\_client/src/models/application-params.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-params.ts#L32)

***

### localStateSchema?

> `optional` **localStateSchema**: [`ApplicationStateSchema`](/algokit-utils-ts/api/subpaths/indexer-client/type-aliases/applicationstateschema/)

Defined in: [packages/indexer\_client/src/models/application-params.ts:31](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-params.ts#L31)

***

### version?

> `optional` **version**: `number`

Defined in: [packages/indexer\_client/src/models/application-params.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/application-params.ts#L38)

the number of updates to the application programs
