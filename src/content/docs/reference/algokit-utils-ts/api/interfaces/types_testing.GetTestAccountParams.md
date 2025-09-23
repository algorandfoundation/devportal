---
title: GetTestAccountParams
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/testing](/reference/algokit-utils-ts/api/modules/types_testing/) / GetTestAccountParams

[types/testing](/reference/algokit-utils-ts/api/modules/types_testing/).GetTestAccountParams

Parameters for the `getTestAccount` function.

## Table of contents

### Properties

- [accountGetter](#accountgetter)
- [initialFunds](#initialfunds)
- [suppressLog](#suppresslog)

## Properties

### accountGetter

• `Optional` **accountGetter**: (`algorand`: [`AlgorandClient`](/reference/algokit-utils-ts/api/classes/types_algorand_clientalgorandclient/)) => `Promise`\<`default`\>

Optional override for how to get a test account; this allows you to retrieve accounts from a known or cached list of accounts.

#### Type declaration

▸ (`algorand`): `Promise`\<`default`\>

##### Parameters

| Name       | Type                                                                                             |
| :--------- | :----------------------------------------------------------------------------------------------- |
| `algorand` | [`AlgorandClient`](/reference/algokit-utils-ts/api/classes/types_algorand_clientalgorandclient/) |

##### Returns

`Promise`\<`default`\>

#### Defined in

[src/types/testing.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L48)

---

### initialFunds

• **initialFunds**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

Initial funds to ensure the account has

#### Defined in

[src/types/testing.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L44)

---

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress the log (which includes a mnemonic) or not (default: do not suppress the log)

#### Defined in

[src/types/testing.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L46)
