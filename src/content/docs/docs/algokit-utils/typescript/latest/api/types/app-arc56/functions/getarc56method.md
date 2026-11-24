---
editUrl: false
next: false
prev: false
title: "getArc56Method"
---

> **getArc56Method**(`methodNameOrSignature`, `appSpec`): [`Arc56Method`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/classes/arc56method/)

Defined in: [src/types/app-arc56.ts:189](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L189)

Returns the ARC-56 ABI method object for a given method name or signature and ARC-56 app spec.

## Parameters

### methodNameOrSignature

`string`

The method name or method signature to call if an ABI call is being emitted.
e.g. `my_method` or `my_method(unit64,string)bytes`

### appSpec

[`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/arc56contract/)

The app spec for the app

## Returns

[`Arc56Method`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/classes/arc56method/)

The `Arc56Method`
