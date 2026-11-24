---
editUrl: false
next: false
prev: false
title: "ResourceReference"
---

> **ResourceReference** = `object`

Defined in: [src/types/app-manager.ts:122](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L122)

Names a single resource reference. Only one of the fields should be set.

## Properties

### address?

> `optional` **address?**: `Address`

Defined in: [src/types/app-manager.ts:124](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L124)

Any account addresses whose balance record is accessible by the executing ApprovalProgram or ClearStateProgram.

***

### appId?

> `optional` **appId?**: `bigint`

Defined in: [src/types/app-manager.ts:126](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L126)

Application ID whose GlobalState may be read by the executing ApprovalProgram or ClearStateProgram.

***

### assetId?

> `optional` **assetId?**: `bigint`

Defined in: [src/types/app-manager.ts:128](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L128)

Asset ID whose AssetParams may be read by the executing ApprovalProgram or ClearStateProgram.

***

### box?

> `optional` **box?**: [`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/)

Defined in: [src/types/app-manager.ts:134](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L134)

Defines a box by its name and the application ID it belongs to.

***

### holding?

> `optional` **holding?**: [`HoldingReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/holdingreference/)

Defined in: [src/types/app-manager.ts:130](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L130)

Defines a holding by referring to an Address and Asset it belongs to.

***

### locals?

> `optional` **locals?**: [`LocalsReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/localsreference/)

Defined in: [src/types/app-manager.ts:132](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L132)

Defines a local state by referring to an Address and App it belongs to.
