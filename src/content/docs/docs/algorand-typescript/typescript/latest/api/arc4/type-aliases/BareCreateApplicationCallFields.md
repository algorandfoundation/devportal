---
editUrl: false
next: false
prev: false
title: "BareCreateApplicationCallFields"
---

> **BareCreateApplicationCallFields** = `Omit`\<[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/), `"appId"` \| `"appArgs"`\>

Defined in: [arc4/c2c.ts:15](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L15)

Defines txn fields that are available for a bare create application call.

This is the regular application call fields minus:
 - appId: because the appId is not known when creating an application
 - appArgs: because a bare call cannot have arguments
