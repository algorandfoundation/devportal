---
editUrl: false
next: false
prev: false
title: "OnUpdate"
---

Defined in: [src/types/app.ts:288](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L288)

What action to perform when deploying an app and an update is detected in the TEAL code

## Enumeration Members

### AppendApp

> **AppendApp**: `3`

Defined in: [src/types/app.ts:296](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L296)

Create a new app

***

### Fail

> **Fail**: `0`

Defined in: [src/types/app.ts:290](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L290)

Fail the deployment

***

### ReplaceApp

> **ReplaceApp**: `2`

Defined in: [src/types/app.ts:294](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L294)

Delete the app and create a new one in its place

***

### UpdateApp

> **UpdateApp**: `1`

Defined in: [src/types/app.ts:292](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L292)

Update the app
