---
editUrl: false
next: false
prev: false
title: "AppLookup"
---

Defined in: [src/app-deployer.ts:91](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-deployer.ts#L91)

A lookup of name -> Algorand app for a creator

## Properties

### apps

> **apps**: `object`

Defined in: [src/app-deployer.ts:95](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-deployer.ts#L95)

A hash map of app name to app metadata

#### Index Signature

\[`name`: `string`\]: [`AppMetadata`](/algokit-utils-ts/api/algokit-utils/interfaces/appmetadata/)

***

### creator

> **creator**: `Readonly`\<[`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/)\>

Defined in: [src/app-deployer.ts:93](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-deployer.ts#L93)

The address of the creator associated with this lookup
