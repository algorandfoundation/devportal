---
editUrl: false
next: false
prev: false
title: "GetTestAccountParams"
---

Defined in: [src/types/testing.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L42)

Parameters for the `getTestAccount` function.

## Properties

### accountGetter?

> `optional` **accountGetter?**: (`algorand`) => `Promise`\<`Account`\>

Defined in: [src/types/testing.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L48)

Optional override for how to get a test account; this allows you to retrieve accounts from a known or cached list of accounts.

#### Parameters

##### algorand

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/types/algorand-client/classes/algorandclient/)

#### Returns

`Promise`\<`Account`\>

***

### initialFunds

> **initialFunds**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/testing.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L44)

Initial funds to ensure the account has

***

### suppressLog?

> `optional` **suppressLog?**: `boolean`

Defined in: [src/types/testing.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L46)

Whether to suppress the log (which includes a mnemonic) or not (default: do not suppress the log)
