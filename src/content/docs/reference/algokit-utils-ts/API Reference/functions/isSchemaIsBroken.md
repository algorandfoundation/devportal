---
editUrl: false
next: false
prev: false
title: "isSchemaIsBroken"
---

> **isSchemaIsBroken**(`before`, `after`): `boolean`

Defined in: [src/app-deploy.ts:229](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/app-deploy.ts#L229)

:::caution[Deprecated]
Use `before.numByteSlice < after.numByteSlice || before.numUint < after.numUint` instead.

Returns true is there is a breaking change in the application state schema from before to after.
 i.e. if the schema becomes larger, since applications can't ask for more schema after creation.
 Otherwise, there is no error, the app just doesn't store data in the extra schema :(
:::

## Parameters

### before

`ApplicationStateSchema`

The existing schema

### after

`ApplicationStateSchema`

The new schema

## Returns

`boolean`

Whether or not there is a breaking change
