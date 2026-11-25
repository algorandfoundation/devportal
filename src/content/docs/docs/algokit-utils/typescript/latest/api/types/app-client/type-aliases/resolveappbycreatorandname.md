---
editUrl: false
next: false
prev: false
title: "ResolveAppByCreatorAndName"
---

> **ResolveAppByCreatorAndName** = [`ResolveAppByCreatorAndNameBase`](/docs/algokit-utils/typescript/latest/api/types/app-client/type-aliases/resolveappbycreatorandnamebase/) & `object`

Defined in: [src/types/app-client.ts:107](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L107)

Configuration to resolve app by creator and name `getCreatorAppsByName`

## Type Declaration

### resolveBy

> **resolveBy**: `"creatorAndName"`

How the app ID is resolved, either by `'id'` or `'creatorAndName'`; must be `'creatorAndName'` if you want to use `deploy`
