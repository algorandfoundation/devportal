---
editUrl: false
next: false
prev: false
title: "Event"
---

> **Event** = `object`

Defined in: [packages/abi/src/arc56-contract.ts:218](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L218)

ARC-28 event

## Properties

### args

> **args**: `object`[]

Defined in: [packages/abi/src/arc56-contract.ts:224](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L224)

The arguments of the event, in order

#### desc?

> `optional` **desc**: `string`

Optional, user-friendly description for the argument

#### name?

> `optional` **name**: `string`

Optional, user-friendly name for the argument

#### struct?

> `optional` **struct**: [`StructName`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/structname/)

If the type is a struct, the name of the struct

#### type

> **type**: `ABITypeName`

The type of the argument. The `struct` field should also be checked to determine if this arg is a struct.

***

### desc?

> `optional` **desc**: `string`

Defined in: [packages/abi/src/arc56-contract.ts:222](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L222)

Optional, user-friendly description for the event

***

### name

> **name**: `string`

Defined in: [packages/abi/src/arc56-contract.ts:220](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L220)

The name of the event
