---
title: GetTestAccountParams
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/testing](/docs/algokit-utils/typescript/latest/api/modules/types_testing/) / GetTestAccountParams

[types/testing](/docs/algokit-utils/typescript/latest/api/modules/types_testing/).GetTestAccountParams

Parameters for the `getTestAccount` function.

## Table of contents

### Properties

- [accountGetter](/docs/algokit-utils/typescript/latest/api/interfaces/types_testinggettestaccountparams/#accountgetter)
- [initialFunds](/docs/algokit-utils/typescript/latest/api/interfaces/types_testinggettestaccountparams/#initialfunds)
- [suppressLog](/docs/algokit-utils/typescript/latest/api/interfaces/types_testinggettestaccountparams/#suppresslog)

## Properties

### accountGetter

• `Optional` **accountGetter**: (`algorand`: [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_clientalgorandclient/)) => `Promise`\<`default`\>

Optional override for how to get a test account; this allows you to retrieve accounts from a known or cached list of accounts.

#### Type declaration

▸ (`algorand`): `Promise`\<`default`\>

##### Parameters

| Name       | Type                                                                                                       |
| :--------- | :--------------------------------------------------------------------------------------------------------- |
| `algorand` | [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_clientalgorandclient/) |

##### Returns

`Promise`\<`default`\>

#### Defined in

[src/types/testing.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L48)

---

### initialFunds

• **initialFunds**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amountalgoamount/)

Initial funds to ensure the account has

#### Defined in

[src/types/testing.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L44)

---

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress the log (which includes a mnemonic) or not (default: do not suppress the log)

#### Defined in

[src/types/testing.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L46)
