---
editUrl: false
next: false
prev: false
title: "LocalsReference"
---

> **LocalsReference** = `object`

Defined in: [src/types/app-manager.ts:112](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L112)

Defines a local state by referring to an Address and App it belongs to.

## Properties

### address

> **address**: `Address`

Defined in: [src/types/app-manager.ts:116](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L116)

Address in access list, or the sender of the transaction.

***

### appId

> **appId**: `bigint`

Defined in: [src/types/app-manager.ts:114](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L114)

Application ID for app in access list, or zero if referring to the called application.
