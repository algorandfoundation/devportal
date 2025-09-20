---
title: OnSchemaBreak
slug: reference/algokit-utils-ts/api/enums/types_apponschemabreak
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app](/reference/algokit-utils-ts/api/modules/types_app/) / OnSchemaBreak

[types/app](/reference/algokit-utils-ts/api/modules/types_app/).OnSchemaBreak

What action to perform when deploying an app and a breaking schema change is detected

## Table of contents

### Enumeration Members

- [AppendApp](#appendapp)
- [Fail](#fail)
- [ReplaceApp](#replaceapp)

## Enumeration Members

### AppendApp

• **AppendApp** = `2`

Create a new app

#### Defined in

[src/types/app.ts:306](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L306)

---

### Fail

• **Fail** = `0`

Fail the deployment

#### Defined in

[src/types/app.ts:302](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L302)

---

### ReplaceApp

• **ReplaceApp** = `1`

Delete the app and create a new one in its place

#### Defined in

[src/types/app.ts:304](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L304)
