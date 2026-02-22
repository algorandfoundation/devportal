---
editUrl: false
next: false
prev: false
title: "ResourceReference"
---

> **ResourceReference** = `object`

Defined in: [packages/transact/src/transactions/app-call.ts:202](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L202)

Names a single resource reference. Only one of the fields should be set.

## Properties

### address?

> `optional` **address**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/transactions/app-call.ts:204](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L204)

Any account addresses whose balance record is accessible by the executing ApprovalProgram or ClearStateProgram.

***

### appId?

> `optional` **appId**: `bigint`

Defined in: [packages/transact/src/transactions/app-call.ts:206](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L206)

Application ID whose GlobalState may be read by the executing ApprovalProgram or ClearStateProgram.

***

### assetId?

> `optional` **assetId**: `bigint`

Defined in: [packages/transact/src/transactions/app-call.ts:208](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L208)

Asset ID whose AssetParams may be read by the executing ApprovalProgram or ClearStateProgram.

***

### box?

> `optional` **box**: [`BoxReference`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/boxreference/)

Defined in: [packages/transact/src/transactions/app-call.ts:214](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L214)

Defines a box by its name and the application ID it belongs to.

***

### holding?

> `optional` **holding**: [`HoldingReference`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/holdingreference/)

Defined in: [packages/transact/src/transactions/app-call.ts:210](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L210)

Defines a holding by referring to an Address and Asset it belongs to.

***

### locals?

> `optional` **locals**: [`LocalsReference`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/localsreference/)

Defined in: [packages/transact/src/transactions/app-call.ts:212](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L212)

Defines a local state by referring to an Address and App it belongs to.
