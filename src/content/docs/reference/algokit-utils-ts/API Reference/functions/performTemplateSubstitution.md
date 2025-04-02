---
editUrl: false
next: false
prev: false
title: "performTemplateSubstitution"
---

> **performTemplateSubstitution**(`tealCode`, `templateParams`?): `string`

Defined in: [src/app-deploy.ts:309](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/app-deploy.ts#L309)

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
