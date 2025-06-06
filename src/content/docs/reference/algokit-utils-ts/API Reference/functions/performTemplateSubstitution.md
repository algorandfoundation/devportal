---
editUrl: false
next: false
prev: false
title: "performTemplateSubstitution"
---

> **performTemplateSubstitution**(`tealCode`, `templateParams`?): `string`

Defined in: [src/app-deploy.ts:309](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/app-deploy.ts#L309)

:::caution[Deprecated]
Use `AppManager.replaceTealTemplateParams` instead

Performs template substitution of a teal file.

Looks for `TMPL_{parameter}` for template replacements.
:::

## Parameters

### tealCode

`string`

The TEAL logic to compile

### templateParams?

`TealTemplateParams`

Any parameters to replace in the .teal file before compiling

## Returns

`string`

The TEAL code with replacements
