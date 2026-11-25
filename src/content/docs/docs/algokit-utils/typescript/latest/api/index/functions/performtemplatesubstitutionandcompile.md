---
editUrl: false
next: false
prev: false
title: "performTemplateSubstitutionAndCompile"
---

> **performTemplateSubstitutionAndCompile**(`tealCode`, `algod`, `templateParams?`, `deploymentMetadata?`): `Promise`\<[`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/)\>

Defined in: [src/app-deploy.ts:326](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-deploy.ts#L326)

:::caution[Deprecated]
Use `algorand.appManager.compileTealTemplate` instead.

Performs template substitution of a teal file and compiles it, returning the compiled result.

Looks for `TMPL_{parameter}` for template replacements.
:::

## Parameters

### tealCode

`string`

The TEAL logic to compile

### algod

`AlgodClient`

An algod client

### templateParams?

[`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/tealtemplateparams/)

Any parameters to replace in the .teal file before compiling

### deploymentMetadata?

[`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/)

The deployment metadata the app will be deployed with

## Returns

`Promise`\<[`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/)\>

The information about the compiled code
