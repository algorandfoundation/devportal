---
editUrl: false
next: false
prev: false
title: "getTestAccount"
---

## Call Signature

> **getTestAccount**(`params`, `algod`, `kmd?`): `Promise`\<[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) & [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)\>

Defined in: [src/testing/account.ts:20](https://github.com/larkiny/algokit-utils-ts/blob/main/src/testing/account.ts#L20)

:::caution[Deprecated]
Use `getTestAccount(params, algorandClient)` instead. The `algorandClient` object can be created using `AlgorandClient.fromClients({ algod, kmd })`.

Creates an ephemeral Algorand account for the purposes of testing.
Returns a newly created random test account that is funded from the dispenser
DO NOT USE THIS TO CREATE A MAINNET ACCOUNT!
Note: By default this will log the mnemonic of the account.
:::

### Parameters

#### params

[`GetTestAccountParams`](/docs/algokit-utils/typescript/latest/api/subpaths/testing/interfaces/gettestaccountparams/)

The config for the test account to generate

#### algod

[`AlgodClient`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodclient/)

An algod client

#### kmd?

[`KmdClient`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/classes/kmdclient/)

A KMD client, if not specified then a default KMD client will be loaded from environment variables and if not found fallback to the default LocalNet KMD client

### Returns

`Promise`\<[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) & [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)\>

The account, with private key loaded

## Call Signature

> **getTestAccount**(`params`, `algorand`): `Promise`\<[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) & `object`\>

Defined in: [src/testing/account.ts:34](https://github.com/larkiny/algokit-utils-ts/blob/main/src/testing/account.ts#L34)

Creates an ephemeral Algorand account for the purposes of testing.
Returns a newly created random test account that is funded from the dispenser
DO NOT USE THIS TO CREATE A MAINNET ACCOUNT!
Note: By default this will log the mnemonic of the account.

### Parameters

#### params

[`GetTestAccountParams`](/docs/algokit-utils/typescript/latest/api/subpaths/testing/interfaces/gettestaccountparams/)

The config for the test account to generate

#### algorand

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algorandclient/)

An AlgorandClient client

### Returns

`Promise`\<[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) & `object`\>

The account, with private key loaded
