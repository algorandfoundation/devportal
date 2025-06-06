---
editUrl: false
next: false
prev: false
title: "replaceDeployTimeControlParams"
---

> **replaceDeployTimeControlParams**(`tealCode`, `params`): `string`

Defined in: [src/app-deploy.ts:294](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/app-deploy.ts#L294)

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
