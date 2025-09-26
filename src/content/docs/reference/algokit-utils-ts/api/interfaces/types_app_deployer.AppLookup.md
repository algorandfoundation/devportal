---
title: AppLookup
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app-deployer](/reference/algokit-utils-ts/api/modules/types_app_deployer/) / AppLookup

[types/app-deployer](/reference/algokit-utils-ts/api/modules/types_app_deployer/).AppLookup

A lookup of name -> Algorand app for a creator

## Table of contents

### Properties

- [apps](types_app_deployer.AppLookup.md#apps)
- [creator](types_app_deployer.AppLookup.md#creator)

## Properties

### apps

• **apps**: `Object`

A hash map of app name to app metadata

#### Index signature

▪ [name: `string`]: [`AppMetadata`](types_app_deployer.AppMetadata.md)

#### Defined in

[src/types/app-deployer.ts:94](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L94)

---

### creator

• **creator**: `Readonly`\<`Address`\>

The address of the creator associated with this lookup

#### Defined in

[src/types/app-deployer.ts:92](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L92)
