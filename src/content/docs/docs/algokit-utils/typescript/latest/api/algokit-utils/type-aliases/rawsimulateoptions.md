---
editUrl: false
next: false
prev: false
title: "RawSimulateOptions"
---

> **RawSimulateOptions** = `Expand`\<`Omit`\<[`SimulateRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/simulaterequest/), `"txnGroups"`\>\> & `object`

Defined in: [src/composer.ts:126](https://github.com/larkiny/algokit-utils-ts/blob/main/src/composer.ts#L126)

The raw API options to control a simulate request.
See algod API docs for more information: https://dev.algorand.co/reference/rest-apis/algod/#simulatetransaction

## Type Declaration

### resultOnFailure?

> `optional` **resultOnFailure**: `boolean`

Whether or not to return the result on simulation failure instead of throwing an error
