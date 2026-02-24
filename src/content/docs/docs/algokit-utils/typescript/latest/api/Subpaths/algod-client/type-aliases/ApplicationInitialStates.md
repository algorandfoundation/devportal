---
editUrl: false
next: false
prev: false
title: 'ApplicationInitialStates'
---

> **ApplicationInitialStates** = `object`

Defined in: [packages/algod_client/src/models/application-initial-states.ts:9](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/application-initial-states.ts#L9)

An application's initial global/local/box states that were accessed during simulation.

## Properties

### appBoxes?

> `optional` **appBoxes**: [`ApplicationKvStorage`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/applicationkvstorage/)

Defined in: [packages/algod_client/src/models/application-initial-states.ts:20](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/application-initial-states.ts#L20)

---

### appGlobals?

> `optional` **appGlobals**: [`ApplicationKvStorage`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/applicationkvstorage/)

Defined in: [packages/algod_client/src/models/application-initial-states.ts:19](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/application-initial-states.ts#L19)

---

### appLocals?

> `optional` **appLocals**: [`ApplicationKvStorage`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/applicationkvstorage/)[]

Defined in: [packages/algod_client/src/models/application-initial-states.ts:18](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/application-initial-states.ts#L18)

An application's initial local states tied to different accounts.

---

### id

> **id**: `bigint`

Defined in: [packages/algod_client/src/models/application-initial-states.ts:13](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/application-initial-states.ts#L13)

Application index.
