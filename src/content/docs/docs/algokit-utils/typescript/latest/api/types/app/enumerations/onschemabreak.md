---
editUrl: false
next: false
prev: false
title: "OnSchemaBreak"
---

Defined in: [src/types/app.ts:300](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L300)

What action to perform when deploying an app and a breaking schema change is detected

## Enumeration Members

### AppendApp

> **AppendApp**: `2`

Defined in: [src/types/app.ts:306](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L306)

Create a new app

***

### Fail

> **Fail**: `0`

Defined in: [src/types/app.ts:302](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L302)

Fail the deployment

***

### ReplaceApp

> **ReplaceApp**: `1`

Defined in: [src/types/app.ts:304](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L304)

Delete the app and create a new one in its place
