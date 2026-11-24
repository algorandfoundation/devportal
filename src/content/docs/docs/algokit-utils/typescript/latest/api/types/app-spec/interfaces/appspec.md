---
editUrl: false
next: false
prev: false
title: "AppSpec"
---

Defined in: [src/types/app-spec.ts:151](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L151)

An ARC-0032 Application Specification see https://github.com/algorandfoundation/ARCs/pull/150

## Properties

### bare\_call\_config

> **bare\_call\_config**: [`CallConfig`](/docs/algokit-utils/typescript/latest/api/types/app-spec/interfaces/callconfig/)

Defined in: [src/types/app-spec.ts:163](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L163)

The config of all BARE calls (i.e. non ABI calls with no args)

***

### contract

> **contract**: `ABIContractParams`

Defined in: [src/types/app-spec.ts:157](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L157)

The ABI-0004 contract definition see https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0004.md

***

### hints

> **hints**: [`HintSpec`](/docs/algokit-utils/typescript/latest/api/types/app-spec/type-aliases/hintspec/)

Defined in: [src/types/app-spec.ts:153](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L153)

Method call hints

***

### schema

> **schema**: [`SchemaSpec`](/docs/algokit-utils/typescript/latest/api/types/app-spec/interfaces/schemaspec/)

Defined in: [src/types/app-spec.ts:159](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L159)

The values that make up the local and global state

***

### source

> **source**: [`AppSources`](/docs/algokit-utils/typescript/latest/api/types/app-spec/interfaces/appsources/)

Defined in: [src/types/app-spec.ts:155](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L155)

The TEAL source

***

### state

> **state**: [`StateSchemaSpec`](/docs/algokit-utils/typescript/latest/api/types/app-spec/interfaces/stateschemaspec/)

Defined in: [src/types/app-spec.ts:161](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L161)

The rolled-up schema allocation values for local and global state
