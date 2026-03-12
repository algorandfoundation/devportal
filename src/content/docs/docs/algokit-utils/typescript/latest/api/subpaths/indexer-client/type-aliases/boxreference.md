---
editUrl: false
next: false
prev: false
title: "BoxReference"
---

> **BoxReference** = `object`

Defined in: [packages/indexer\_client/src/models/box-reference.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/box-reference.ts#L7)

BoxReference names a box by its name and the application ID it belongs to.

## Properties

### app

> **app**: `bigint`

Defined in: [packages/indexer\_client/src/models/box-reference.ts:11](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/box-reference.ts#L11)

Application ID to which the box belongs, or zero if referring to the called application.

***

### name

> **name**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/box-reference.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/box-reference.ts#L16)

Base64 encoded box name
