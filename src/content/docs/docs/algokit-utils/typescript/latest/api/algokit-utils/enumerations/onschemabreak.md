---
editUrl: false
next: false
prev: false
title: 'OnSchemaBreak'
---

Defined in: [src/app.ts:204](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app.ts#L204)

What action to perform when deploying an app and a breaking schema change is detected

## Enumeration Members

### AppendApp

> **AppendApp**: `2`

Defined in: [src/app.ts:210](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app.ts#L210)

Create a new app

---

### Fail

> **Fail**: `0`

Defined in: [src/app.ts:206](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app.ts#L206)

Fail the deployment

---

### ReplaceApp

> **ReplaceApp**: `1`

Defined in: [src/app.ts:208](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app.ts#L208)

Delete the app and create a new one in its place
