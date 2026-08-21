---
editUrl: false
next: false
prev: false
title: 'IndexerApi'
---

Defined in: [packages/indexer_client/src/apis/api-service.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L43)

## Extended by

- [`IndexerClient`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerclient/)

## Constructors

### Constructor

> **new IndexerApi**(`httpRequest`): `IndexerApi`

Defined in: [packages/indexer_client/src/apis/api-service.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L44)

#### Parameters

##### httpRequest

[`BaseHttpRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/basehttprequest/)

#### Returns

`IndexerApi`

## Properties

### httpRequest

> `readonly` **httpRequest**: [`BaseHttpRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/basehttprequest/)

Defined in: [packages/indexer_client/src/apis/api-service.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L44)

## Methods

### healthCheck()

> **healthCheck**(): `Promise`\<[`HealthCheck`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/healthcheck/)\>

Defined in: [packages/indexer_client/src/apis/api-service.ts:50](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/apis/api-service.ts#L50)

#### Returns

`Promise`\<[`HealthCheck`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/healthcheck/)\>

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
