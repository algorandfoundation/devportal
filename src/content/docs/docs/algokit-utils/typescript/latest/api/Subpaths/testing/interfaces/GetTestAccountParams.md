---
editUrl: false
next: false
prev: false
title: "GetTestAccountParams"
---

Defined in: [src/testing/types.ts:45](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L45)

Parameters for the `getTestAccount` function.

## Properties

### accountGetter()?

> `optional` **accountGetter**: (`algorand`) => `Promise`\<[`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/) & `object`\>

Defined in: [src/testing/types.ts:51](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L51)

Optional override for how to get a test account; this allows you to retrieve accounts from a known or cached list of accounts.

#### Parameters

##### algorand

[`AlgorandClient`](/algokit-utils-ts/api/algokit-utils/classes/algorandclient/)

#### Returns

`Promise`\<[`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/) & `object`\>

***

### initialFunds

> **initialFunds**: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

Defined in: [src/testing/types.ts:47](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L47)

Initial funds to ensure the account has

***

### suppressLog?

> `optional` **suppressLog**: `boolean`

Defined in: [src/testing/types.ts:49](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L49)

Whether to suppress the log (which includes a mnemonic) or not (default: do not suppress the log)
