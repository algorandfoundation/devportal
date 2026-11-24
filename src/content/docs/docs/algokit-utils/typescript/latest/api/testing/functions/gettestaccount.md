---
editUrl: false
next: false
prev: false
title: "getTestAccount"
---

## Call Signature

> **getTestAccount**(`params`, `algod`, `kmd?`): `Promise`\<`Address` & `Account` & [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/)\>

Defined in: [src/testing/account.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/account.ts#L21)

:::caution[Deprecated]
Use `getTestAccount(params, algorandClient)` instead. The `algorandClient` object can be created using `AlgorandClient.fromClients({ algod, kmd })`.

Creates an ephemeral Algorand account for the purposes of testing.
Returns a newly created random test account that is funded from the dispenser
DO NOT USE THIS TO CREATE A MAINNET ACCOUNT!
Note: By default this will log the mnemonic of the account.
:::

### Parameters

#### params

[`GetTestAccountParams`](/docs/algokit-utils/typescript/latest/api/types/testing/interfaces/gettestaccountparams/)

The config for the test account to generate

#### algod

`AlgodClient`

An algod client

#### kmd?

`KmdClient`

A KMD client, if not specified then a default KMD client will be loaded from environment variables and if not found fallback to the default LocalNet KMD client

### Returns

`Promise`\<`Address` & `Account` & [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/)\>

The account, with private key loaded

## Call Signature

> **getTestAccount**(`params`, `algorand`): `Promise`\<`Address` & `Account` & [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/)\>

Defined in: [src/testing/account.ts:35](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/account.ts#L35)

Creates an ephemeral Algorand account for the purposes of testing.
Returns a newly created random test account that is funded from the dispenser
DO NOT USE THIS TO CREATE A MAINNET ACCOUNT!
Note: By default this will log the mnemonic of the account.

### Parameters

#### params

[`GetTestAccountParams`](/docs/algokit-utils/typescript/latest/api/types/testing/interfaces/gettestaccountparams/)

The config for the test account to generate

#### algorand

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/types/algorand-client/classes/algorandclient/)

An AlgorandClient client

### Returns

`Promise`\<`Address` & `Account` & [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/)\>

The account, with private key loaded
