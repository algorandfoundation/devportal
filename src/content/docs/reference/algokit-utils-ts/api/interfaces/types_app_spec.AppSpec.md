---
title: AppSpec
slug: reference/algokit-utils-ts/api/interfaces/types_app_specappspec
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app-spec](/reference/algokit-utils-ts/api/modules/types_app_spec/) / AppSpec

[types/app-spec](/reference/algokit-utils-ts/api/modules/types_app_spec/).AppSpec

An ARC-0032 Application Specification see https://github.com/algorandfoundation/ARCs/pull/150

## Table of contents

### Properties

- [bare_call_config](#bare_call_config)
- [contract](#contract)
- [hints](#hints)
- [schema](#schema)
- [source](#source)
- [state](#state)

## Properties

### bare_call_config

• **bare_call_config**: [`CallConfig`](/reference/algokit-utils-ts/api/interfaces/types_app_speccallconfig/)

The config of all BARE calls (i.e. non ABI calls with no args)

#### Defined in

[src/types/app-spec.ts:163](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L163)

---

### contract

• **contract**: `ABIContractParams`

The ABI-0004 contract definition see https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0004.md

#### Defined in

[src/types/app-spec.ts:157](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L157)

---

### hints

• **hints**: [`HintSpec`](/reference/algokit-utils-ts/api/modules/types_app_spec/#hintspec)

Method call hints

#### Defined in

[src/types/app-spec.ts:153](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L153)

---

### schema

• **schema**: [`SchemaSpec`](/reference/algokit-utils-ts/api/interfaces/types_app_specschemaspec/)

The values that make up the local and global state

#### Defined in

[src/types/app-spec.ts:159](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L159)

---

### source

• **source**: [`AppSources`](/reference/algokit-utils-ts/api/interfaces/types_app_specappsources/)

The TEAL source

#### Defined in

[src/types/app-spec.ts:155](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L155)

---

### state

• **state**: [`StateSchemaSpec`](/reference/algokit-utils-ts/api/interfaces/types_app_specstateschemaspec/)

The rolled-up schema allocation values for local and global state

#### Defined in

[src/types/app-spec.ts:161](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L161)
