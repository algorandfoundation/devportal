---
editUrl: false
next: false
prev: false
title: "LocalsRef"
---

> **LocalsRef** = `object`

Defined in: [packages/indexer\_client/src/models/locals-ref.ts:7](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/locals-ref.ts#L7)

LocalsRef names a local state by referring to an Address and App it belongs to.

## Properties

### address

> **address**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/indexer\_client/src/models/locals-ref.ts:11](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/locals-ref.ts#L11)

\[d\] Address in access list, or the sender of the transaction.

***

### app

> **app**: `bigint`

Defined in: [packages/indexer\_client/src/models/locals-ref.ts:16](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/locals-ref.ts#L16)

\[p\] Application ID for app in access list, or zero if referring to the called application.
