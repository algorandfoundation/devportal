---
editUrl: false
next: false
prev: false
title: 'IndexerClient'
---

Defined in: [packages/indexer_client/src/client.ts:5](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/client.ts#L5)

## Extends

- [`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/)

## Constructors

### Constructor

> **new IndexerClient**(`config`): `IndexerClient`

Defined in: [packages/indexer_client/src/client.ts:6](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/client.ts#L6)

#### Parameters

##### config

[`ClientConfig`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/interfaces/clientconfig/)

#### Returns

`IndexerClient`

#### Overrides

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`constructor`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#constructor)

## Properties

### httpRequest

> `readonly` **httpRequest**: [`BaseHttpRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/basehttprequest/)

Defined in: [packages/indexer_client/src/apis/api-service.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L44)

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`httpRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#httprequest)

## Methods

### healthCheck()

> **healthCheck**(): `Promise`\<[`HealthCheck`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/healthcheck/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:50](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L50)

#### Returns

`Promise`\<[`HealthCheck`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/healthcheck/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`healthCheck`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#healthcheck)

---

### lookupAccountAppLocalStates()

> **lookupAccountAppLocalStates**(`account`, `params?`): `Promise`\<[`ApplicationLocalStatesResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/applicationlocalstatesresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:70](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L70)

Lookup an account's asset holdings, optionally for a specific ID.

#### Parameters

##### account

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

##### params?

###### applicationId?

`number` \| `bigint`

###### includeAll?

`boolean`

###### limit?

`number`

###### next?

`string`

#### Returns

`Promise`\<[`ApplicationLocalStatesResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/applicationlocalstatesresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`lookupAccountAppLocalStates`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#lookupaccountapplocalstates)

---

### lookupAccountAssets()

> **lookupAccountAssets**(`account`, `params?`): `Promise`\<[`AssetHoldingsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/assetholdingsresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:93](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L93)

Lookup an account's asset holdings, optionally for a specific ID.

#### Parameters

##### account

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

##### params?

###### assetId?

`number` \| `bigint`

###### includeAll?

`boolean`

###### limit?

`number`

###### next?

`string`

#### Returns

`Promise`\<[`AssetHoldingsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/assetholdingsresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`lookupAccountAssets`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#lookupaccountassets)

---

### lookupAccountById()

> **lookupAccountById**(`account`, `params?`): `Promise`\<[`AccountResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/accountresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:116](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L116)

Lookup account information.

#### Parameters

##### account

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

##### params?

###### exclude?

`"all"` \| `"apps-local-state"` \| `"assets"` \| `"created-apps"` \| `"created-assets"` \| `"none"`[]

###### includeAll?

`boolean`

###### round?

`number` \| `bigint`

#### Returns

`Promise`\<[`AccountResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/accountresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`lookupAccountById`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#lookupaccountbyid)

---

### lookupAccountCreatedApplications()

> **lookupAccountCreatedApplications**(`account`, `params?`): `Promise`\<[`ApplicationsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/applicationsresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:143](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L143)

Lookup an account's created application parameters, optionally for a specific ID.

#### Parameters

##### account

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

##### params?

###### applicationId?

`number` \| `bigint`

###### includeAll?

`boolean`

###### limit?

`number`

###### next?

`string`

#### Returns

`Promise`\<[`ApplicationsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/applicationsresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`lookupAccountCreatedApplications`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#lookupaccountcreatedapplications)

---

### lookupAccountCreatedAssets()

> **lookupAccountCreatedAssets**(`account`, `params?`): `Promise`\<[`AssetsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/assetsresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:166](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L166)

Lookup an account's created asset parameters, optionally for a specific ID.

#### Parameters

##### account

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

##### params?

###### assetId?

`number` \| `bigint`

###### includeAll?

`boolean`

###### limit?

`number`

###### next?

`string`

#### Returns

`Promise`\<[`AssetsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/assetsresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`lookupAccountCreatedAssets`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#lookupaccountcreatedassets)

---

### lookupAccountTransactions()

> **lookupAccountTransactions**(`account`, `params?`): `Promise`\<[`TransactionsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionsresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:189](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L189)

Lookup account transactions. Transactions are returned newest to oldest.

#### Parameters

##### account

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

##### params?

###### afterTime?

`string`

###### assetId?

`number` \| `bigint`

###### beforeTime?

`string`

###### currencyGreaterThan?

`number` \| `bigint`

###### currencyLessThan?

`number` \| `bigint`

###### limit?

`number`

###### maxRound?

`number` \| `bigint`

###### minRound?

`number` \| `bigint`

###### next?

`string`

###### notePrefix?

`string`

###### rekeyTo?

`boolean`

###### round?

`number` \| `bigint`

###### sigType?

`"sig"` \| `"msig"` \| `"lsig"`

###### txId?

`string`

###### txType?

`"pay"` \| `"keyreg"` \| `"acfg"` \| `"axfer"` \| `"afrz"` \| `"appl"` \| `"stpf"` \| `"hb"`

#### Returns

`Promise`\<[`TransactionsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionsresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`lookupAccountTransactions`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#lookupaccounttransactions)

---

### lookupApplicationBoxByIdAndName()

> **lookupApplicationBoxByIdAndName**(`applicationId`, `boxName`): `Promise`\<[`Box`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/box/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:709](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L709)

Given an application ID and box name, it returns the round, box name, and value.

#### Parameters

##### applicationId

`number` | `bigint`

##### boxName

`Uint8Array`

#### Returns

`Promise`\<[`Box`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/box/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`lookupApplicationBoxByIdAndName`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#lookupapplicationboxbyidandname)

---

### lookupApplicationById()

> **lookupApplicationById**(`applicationId`, `params?`): `Promise`\<[`ApplicationResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/applicationresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:264](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L264)

Lookup application.

#### Parameters

##### applicationId

`number` | `bigint`

##### params?

###### includeAll?

`boolean`

#### Returns

`Promise`\<[`ApplicationResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/applicationresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`lookupApplicationById`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#lookupapplicationbyid)

---

### lookupApplicationLogsById()

> **lookupApplicationLogsById**(`applicationId`, `params?`): `Promise`\<[`ApplicationLogsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/applicationlogsresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:284](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L284)

Lookup application logs.

#### Parameters

##### applicationId

`number` | `bigint`

##### params?

###### limit?

`number`

###### maxRound?

`number` \| `bigint`

###### minRound?

`number` \| `bigint`

###### next?

`string`

###### senderAddress?

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

###### txId?

`string`

#### Returns

`Promise`\<[`ApplicationLogsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/applicationlogsresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`lookupApplicationLogsById`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#lookupapplicationlogsbyid)

---

### lookupAssetBalances()

> **lookupAssetBalances**(`assetId`, `params?`): `Promise`\<[`AssetBalancesResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/assetbalancesresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:321](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L321)

Lookup the list of accounts who hold this asset

#### Parameters

##### assetId

`number` | `bigint`

##### params?

###### currencyGreaterThan?

`number` \| `bigint`

###### currencyLessThan?

`number` \| `bigint`

###### includeAll?

`boolean`

###### limit?

`number`

###### next?

`string`

#### Returns

`Promise`\<[`AssetBalancesResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/assetbalancesresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`lookupAssetBalances`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#lookupassetbalances)

---

### lookupAssetById()

> **lookupAssetById**(`assetId`, `params?`): `Promise`\<[`AssetResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/assetresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:356](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L356)

Lookup asset information.

#### Parameters

##### assetId

`number` | `bigint`

##### params?

###### includeAll?

`boolean`

#### Returns

`Promise`\<[`AssetResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/assetresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`lookupAssetById`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#lookupassetbyid)

---

### lookupAssetTransactions()

> **lookupAssetTransactions**(`assetId`, `params?`): `Promise`\<[`TransactionsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionsresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:376](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L376)

Lookup transactions for an asset. Transactions are returned oldest to newest.

#### Parameters

##### assetId

`number` | `bigint`

##### params?

###### address?

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

###### addressRole?

`"receiver"` \| `"sender"` \| `"freeze-target"`

###### afterTime?

`string`

###### beforeTime?

`string`

###### currencyGreaterThan?

`number` \| `bigint`

###### currencyLessThan?

`number` \| `bigint`

###### excludeCloseTo?

`boolean`

###### limit?

`number`

###### maxRound?

`number` \| `bigint`

###### minRound?

`number` \| `bigint`

###### next?

`string`

###### notePrefix?

`string`

###### rekeyTo?

`boolean`

###### round?

`number` \| `bigint`

###### sigType?

`"sig"` \| `"msig"` \| `"lsig"`

###### txId?

`string`

###### txType?

`"pay"` \| `"keyreg"` \| `"acfg"` \| `"axfer"` \| `"afrz"` \| `"appl"` \| `"stpf"` \| `"hb"`

#### Returns

`Promise`\<[`TransactionsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionsresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`lookupAssetTransactions`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#lookupassettransactions)

---

### lookupBlock()

> **lookupBlock**(`roundNumber`, `params?`): `Promise`\<[`Block`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/block/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:435](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L435)

Lookup block.

#### Parameters

##### roundNumber

`number` | `bigint`

##### params?

###### headerOnly?

`boolean`

#### Returns

`Promise`\<[`Block`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/block/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`lookupBlock`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#lookupblock)

---

### lookupTransactionById()

> **lookupTransactionById**(`txId`): `Promise`\<[`TransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:455](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L455)

Lookup a single transaction.

#### Parameters

##### txId

`string`

#### Returns

`Promise`\<[`TransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`lookupTransactionById`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#lookuptransactionbyid)

---

### searchForAccounts()

> **searchForAccounts**(`params?`): `Promise`\<[`AccountsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/accountsresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:475](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L475)

Search for accounts.

#### Parameters

##### params?

###### applicationId?

`number` \| `bigint`

###### assetId?

`number` \| `bigint`

###### authAddr?

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

###### currencyGreaterThan?

`number` \| `bigint`

###### currencyLessThan?

`number` \| `bigint`

###### exclude?

`"all"` \| `"apps-local-state"` \| `"assets"` \| `"created-apps"` \| `"created-assets"` \| `"none"`[]

###### includeAll?

`boolean`

###### limit?

`number`

###### next?

`string`

###### onlineOnly?

`boolean`

###### round?

`number` \| `bigint`

#### Returns

`Promise`\<[`AccountsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/accountsresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`searchForAccounts`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#searchforaccounts)

---

### searchForApplicationBoxes()

> **searchForApplicationBoxes**(`applicationId`, `params?`): `Promise`\<[`BoxesResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/boxesresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:519](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L519)

Given an application ID, returns the box names of that application sorted lexicographically.

#### Parameters

##### applicationId

`number` | `bigint`

##### params?

###### limit?

`number`

###### next?

`string`

#### Returns

`Promise`\<[`BoxesResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/boxesresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`searchForApplicationBoxes`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#searchforapplicationboxes)

---

### searchForApplications()

> **searchForApplications**(`params?`): `Promise`\<[`ApplicationsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/applicationsresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:539](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L539)

Search for applications

#### Parameters

##### params?

###### applicationId?

`number` \| `bigint`

###### creator?

`string`

###### includeAll?

`boolean`

###### limit?

`number`

###### next?

`string`

#### Returns

`Promise`\<[`ApplicationsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/applicationsresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`searchForApplications`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#searchforapplications)

---

### searchForAssets()

> **searchForAssets**(`params?`): `Promise`\<[`AssetsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/assetsresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:571](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L571)

Search for assets.

#### Parameters

##### params?

###### assetId?

`number` \| `bigint`

###### creator?

`string`

###### includeAll?

`boolean`

###### limit?

`number`

###### name?

`string`

###### next?

`string`

###### unit?

`string`

#### Returns

`Promise`\<[`AssetsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/assetsresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`searchForAssets`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#searchforassets)

---

### searchForBlockHeaders()

> **searchForBlockHeaders**(`params?`): `Promise`\<[`BlockHeadersResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/blockheadersresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:607](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L607)

Search for block headers. Block headers are returned in ascending round order. Transactions are not included in the output.

#### Parameters

##### params?

###### absent?

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)[]

###### afterTime?

`string`

###### beforeTime?

`string`

###### expired?

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)[]

###### limit?

`number`

###### maxRound?

`number` \| `bigint`

###### minRound?

`number` \| `bigint`

###### next?

`string`

###### proposers?

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)[]

#### Returns

`Promise`\<[`BlockHeadersResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/blockheadersresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`searchForBlockHeaders`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#searchforblockheaders)

---

### searchForTransactions()

> **searchForTransactions**(`params?`): `Promise`\<[`TransactionsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionsresponse/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:647](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L647)

Search for transactions. Transactions are returned oldest to newest unless the address parameter is used, in which case results are returned newest to oldest.

#### Parameters

##### params?

###### address?

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

###### addressRole?

`"receiver"` \| `"sender"` \| `"freeze-target"`

###### afterTime?

`string`

###### applicationId?

`number` \| `bigint`

###### assetId?

`number` \| `bigint`

###### beforeTime?

`string`

###### currencyGreaterThan?

`number` \| `bigint`

###### currencyLessThan?

`number` \| `bigint`

###### excludeCloseTo?

`boolean`

###### groupId?

`string`

###### limit?

`number`

###### maxRound?

`number` \| `bigint`

###### minRound?

`number` \| `bigint`

###### next?

`string`

###### notePrefix?

`string`

###### rekeyTo?

`boolean`

###### round?

`number` \| `bigint`

###### sigType?

`"sig"` \| `"msig"` \| `"lsig"`

###### txId?

`string`

###### txType?

`"pay"` \| `"keyreg"` \| `"acfg"` \| `"axfer"` \| `"afrz"` \| `"appl"` \| `"stpf"` \| `"hb"`

#### Returns

`Promise`\<[`TransactionsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionsresponse/)\>

#### Inherited from

[`IndexerApi`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/).[`searchForTransactions`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerapi/#searchfortransactions)
