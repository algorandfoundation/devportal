---
editUrl: false
next: false
prev: false
title: 'ResourceRef'
---

> **ResourceRef** = `object`

Defined in: [packages/indexer_client/src/models/resource-ref.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/resource-ref.ts#L13)

ResourceRef names a single resource. Only one of the fields should be set.

## Properties

### address?

> `optional` **address**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/indexer_client/src/models/resource-ref.ts:17](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/resource-ref.ts#L17)

\[d\] Account whose balance record is accessible by the executing ApprovalProgram or ClearStateProgram.

---

### applicationId?

> `optional` **applicationId**: `bigint`

Defined in: [packages/indexer_client/src/models/resource-ref.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/resource-ref.ts#L23)

\[p\] Application id whose GlobalState may be read by the executing
ApprovalProgram or ClearStateProgram.

---

### assetId?

> `optional` **assetId**: `bigint`

Defined in: [packages/indexer_client/src/models/resource-ref.ts:29](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/resource-ref.ts#L29)

\[s\] Asset whose AssetParams may be read by the executing
ApprovalProgram or ClearStateProgram.

---

### box?

> `optional` **box**: [`BoxReference`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/boxreference/)

Defined in: [packages/indexer_client/src/models/resource-ref.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/resource-ref.ts#L30)

---

### holding?

> `optional` **holding**: [`HoldingRef`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/holdingref/)

Defined in: [packages/indexer_client/src/models/resource-ref.ts:31](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/resource-ref.ts#L31)

---

### local?

> `optional` **local**: [`LocalsRef`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/localsref/)

Defined in: [packages/indexer_client/src/models/resource-ref.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/resource-ref.ts#L32)
