---
editUrl: false
next: false
prev: false
title: "getABIMethod"
---

> **getABIMethod**(`methodNameOrSignature`, `appSpec`): [`ABIMethod`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abimethod/)

Defined in: [packages/abi/src/abi-method.ts:184](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-method.ts#L184)

Returns the ABI method object for a given method name or signature and ARC-56 app spec.

## Parameters

### methodNameOrSignature

`string`

The method name or method signature to call if an ABI call is being emitted.
e.g. `my_method` or `my_method(unit64,string)bytes`

### appSpec

[`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/arc56contract/)

The app spec for the app

## Returns

[`ABIMethod`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abimethod/)

The `ABIMethod`
