---
editUrl: false
next: false
prev: false
title: "ResolveAppByCreatorAndNameBase"
---

> **ResolveAppByCreatorAndNameBase** = `object`

Defined in: [src/types/app-client.ts:94](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L94)

Configuration to resolve app by creator and name `getCreatorAppsByName`

## Properties

### creatorAddress

> **creatorAddress**: `Address` \| `string`

Defined in: [src/types/app-client.ts:96](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L96)

The address of the app creator account to resolve the app by

***

### findExistingUsing

> **findExistingUsing**: `Indexer` \| [`AppLookup`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/applookup/)

Defined in: [src/types/app-client.ts:103](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L103)

The mechanism to find an existing app instance metadata for the given creator and name; either:
 * An indexer instance to search the creator account apps; or
 * The cached value of the existing apps for the given creator from `getCreatorAppsByName`

***

### name?

> `optional` **name?**: `string`

Defined in: [src/types/app-client.ts:98](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L98)

The optional name override to resolve the app by within the creator account (default: uses the name in the ABI contract)
