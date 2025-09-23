---
title: AppSpec
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app-spec](/reference/algokit-utils-ts/api/modules/types_app_spec/) / AppSpec



[types/app-spec](/reference/algokit-utils-ts/api/modules/types_app_spec/).AppSpec

An ARC-0032 Application Specification see https://github.com/algorandfoundation/ARCs/pull/150

## Table of contents

### Properties

- [bare\_call\_config](#bare_call_config)
- [contract](#contract)
- [hints](#hints)
- [schema](#schema)
- [source](#source)
- [state](#state)

## Properties

### bare\_call\_config

• **bare\_call\_config**: [`CallConfig`]()

The config of all BARE calls (i.e. non ABI calls with no args)

#### Defined in

[src/types/app-spec.ts:163](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L163)

___

### contract

• **contract**: `ABIContractParams`

The ABI-0004 contract definition see https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0004.md

#### Defined in

[src/types/app-spec.ts:157](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L157)

___

### hints

• **hints**: [`HintSpec`](/reference/algokit-utils-ts/api/modules/types_app_spec/#hintspec)

Method call hints

#### Defined in

[src/types/app-spec.ts:153](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L153)

___

### schema

• **schema**: [`SchemaSpec`]()

The values that make up the local and global state

#### Defined in

[src/types/app-spec.ts:159](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L159)

___

### source

• **source**: [`AppSources`]()

The TEAL source

#### Defined in

[src/types/app-spec.ts:155](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L155)

___

### state

• **state**: [`StateSchemaSpec`]()

The rolled-up schema allocation values for local and global state

#### Defined in

[src/types/app-spec.ts:161](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L161)