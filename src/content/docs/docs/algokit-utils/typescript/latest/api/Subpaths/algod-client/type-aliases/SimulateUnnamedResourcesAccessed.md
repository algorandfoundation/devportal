---
editUrl: false
next: false
prev: false
title: "SimulateUnnamedResourcesAccessed"
---

> **SimulateUnnamedResourcesAccessed** = `object`

Defined in: [packages/algod\_client/src/models/simulate-unnamed-resources-accessed.ts:9](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-unnamed-resources-accessed.ts#L9)

These are resources that were accessed by this group that would normally have caused failure, but were allowed in simulation. Depending on where this object is in the response, the unnamed resources it contains may or may not qualify for group resource sharing. If this is a field in SimulateTransactionGroupResult, the resources do qualify, but if this is a field in SimulateTransactionResult, they do not qualify. In order to make this group valid for actual submission, resources that qualify for group sharing can be made available by any transaction of the group; otherwise, resources must be placed in the same transaction which accessed them.

## Properties

### accounts?

> `optional` **accounts**: [`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/)[]

Defined in: [packages/algod\_client/src/models/simulate-unnamed-resources-accessed.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-unnamed-resources-accessed.ts#L13)

The unnamed accounts that were referenced. The order of this array is arbitrary.

***

### appLocals?

> `optional` **appLocals**: [`LocalsReference`](/algokit-utils-ts/api/subpaths/transact/type-aliases/localsreference/)[]

Defined in: [packages/algod\_client/src/models/simulate-unnamed-resources-accessed.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-unnamed-resources-accessed.ts#L43)

The unnamed application local states that were referenced. The order of this array is arbitrary.

***

### apps?

> `optional` **apps**: `bigint`[]

Defined in: [packages/algod\_client/src/models/simulate-unnamed-resources-accessed.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-unnamed-resources-accessed.ts#L23)

The unnamed applications that were referenced. The order of this array is arbitrary.

***

### assetHoldings?

> `optional` **assetHoldings**: [`HoldingReference`](/algokit-utils-ts/api/subpaths/transact/type-aliases/holdingreference/)[]

Defined in: [packages/algod\_client/src/models/simulate-unnamed-resources-accessed.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-unnamed-resources-accessed.ts#L38)

The unnamed asset holdings that were referenced. The order of this array is arbitrary.

***

### assets?

> `optional` **assets**: `bigint`[]

Defined in: [packages/algod\_client/src/models/simulate-unnamed-resources-accessed.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-unnamed-resources-accessed.ts#L18)

The unnamed assets that were referenced. The order of this array is arbitrary.

***

### boxes?

> `optional` **boxes**: [`BoxReference`](/algokit-utils-ts/api/subpaths/transact/type-aliases/boxreference/)[]

Defined in: [packages/algod\_client/src/models/simulate-unnamed-resources-accessed.ts:28](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-unnamed-resources-accessed.ts#L28)

The unnamed boxes that were referenced. The order of this array is arbitrary.

***

### extraBoxRefs?

> `optional` **extraBoxRefs**: `number`

Defined in: [packages/algod\_client/src/models/simulate-unnamed-resources-accessed.ts:33](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-unnamed-resources-accessed.ts#L33)

The number of extra box references used to increase the IO budget. This is in addition to the references defined in the input transaction group and any referenced to unnamed boxes.
