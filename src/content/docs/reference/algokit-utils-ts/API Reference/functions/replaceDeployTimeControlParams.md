---
editUrl: false
next: false
prev: false
title: "replaceDeployTimeControlParams"
---

> **replaceDeployTimeControlParams**(`tealCode`, `params`): `string`

Defined in: [src/app-deploy.ts:294](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/app-deploy.ts#L294)

:::caution[Deprecated]
Use `AppManager.replaceTealTemplateDeployTimeControlParams` instead

Replaces deploy-time deployment control parameters within the given teal code.

* `TMPL_UPDATABLE` for updatability / immutability control
* `TMPL_DELETABLE` for deletability / permanence control

Note: If these values are not undefined, but the corresponding `TMPL_*` value
 isn't in the teal code it will throw an exception.
:::

## Parameters

### tealCode

`string`

The TEAL code to substitute

### params

The deploy-time deployment control parameter value to replace

#### deletable

`boolean`

#### updatable

`boolean`

## Returns

`string`

The replaced TEAL code
