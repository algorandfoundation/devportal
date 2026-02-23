---
editUrl: false
next: false
prev: false
title: "Account"
---

> **Account** = `object`

Defined in: [packages/algod\_client/src/models/account.ts:30](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L30)

Account information at a given round.

Definition:
data/basics/userBalance.go : AccountData

## Properties

### address

> **address**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/algod\_client/src/models/account.ts:34](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L34)

the account public key

***

### amount

> **amount**: `bigint`

Defined in: [packages/algod\_client/src/models/account.ts:39](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L39)

\[algo\] total number of MicroAlgos in the account

***

### amountWithoutPendingRewards

> **amountWithoutPendingRewards**: `bigint`

Defined in: [packages/algod\_client/src/models/account.ts:51](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L51)

specifies the amount of MicroAlgos in the account, without the pending rewards.

***

### appsLocalState?

> `optional` **appsLocalState**: [`ApplicationLocalState`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/applicationlocalstate/)[]

Defined in: [packages/algod\_client/src/models/account.ts:58](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L58)

\[appl\] applications local data stored in this account.

Note the raw object uses `map[int] -> AppLocalState` for this type.

***

### appsTotalExtraPages?

> `optional` **appsTotalExtraPages**: `number`

Defined in: [packages/algod\_client/src/models/account.ts:69](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L69)

\[teap\] the sum of all extra application program pages for this account.

***

### appsTotalSchema?

> `optional` **appsTotalSchema**: [`ApplicationStateSchema`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/applicationstateschema/)

Defined in: [packages/algod\_client/src/models/account.ts:64](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L64)

***

### assets?

> `optional` **assets**: [`AssetHolding`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/assetholding/)[]

Defined in: [packages/algod\_client/src/models/account.ts:76](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L76)

\[asset\] assets held by this account.

Note the raw object uses `map[int] -> AssetHolding` for this type.

***

### authAddr?

> `optional` **authAddr**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/algod\_client/src/models/account.ts:162](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L162)

\[spend\] the address against which signing should be checked. If empty, the address of the current account is used. This field can be updated in any transaction by setting the RekeyTo field.

***

### createdApps?

> `optional` **createdApps**: [`Application`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/application/)[]

Defined in: [packages/algod\_client/src/models/account.ts:88](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L88)

\[appp\] parameters of applications created by this account including app global data.

Note: the raw account uses `map[int] -> AppParams` for this type.

***

### createdAssets?

> `optional` **createdAssets**: [`Asset`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/asset/)[]

Defined in: [packages/algod\_client/src/models/account.ts:100](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L100)

\[apar\] parameters of assets created by this account.

Note: the raw account uses `map[int] -> Asset` for this type.

***

### incentiveEligible?

> `optional` **incentiveEligible**: `boolean`

Defined in: [packages/algod\_client/src/models/account.ts:121](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L121)

Whether or not the account can receive block incentives if its balance is in range at proposal time.

***

### lastHeartbeat?

> `optional` **lastHeartbeat**: `bigint`

Defined in: [packages/algod\_client/src/models/account.ts:172](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L172)

The round in which this account last went online, or explicitly renewed their online status.

***

### lastProposed?

> `optional` **lastProposed**: `bigint`

Defined in: [packages/algod\_client/src/models/account.ts:167](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L167)

The round in which this account last proposed the block.

***

### minBalance

> **minBalance**: `bigint`

Defined in: [packages/algod\_client/src/models/account.ts:46](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L46)

MicroAlgo balance required by the account.

The requirement grows based on asset and application usage.

***

### participation?

> `optional` **participation**: [`AccountParticipation`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/accountparticipation/)

Defined in: [packages/algod\_client/src/models/account.ts:116](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L116)

***

### pendingRewards

> **pendingRewards**: `bigint`

Defined in: [packages/algod\_client/src/models/account.ts:126](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L126)

amount of MicroAlgos of pending rewards in this account.

***

### rewardBase?

> `optional` **rewardBase**: `bigint`

Defined in: [packages/algod\_client/src/models/account.ts:131](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L131)

\[ebase\] used as part of the rewards computation. Only applicable to accounts which are participating.

***

### rewards

> **rewards**: `bigint`

Defined in: [packages/algod\_client/src/models/account.ts:136](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L136)

\[ern\] total rewards of MicroAlgos the account has received, including pending rewards.

***

### round

> **round**: `bigint`

Defined in: [packages/algod\_client/src/models/account.ts:141](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L141)

The round for which this information is relevant.

***

### sigType?

> `optional` **sigType**: `"sig"` \| `"msig"` \| `"lsig"`

Defined in: [packages/algod\_client/src/models/account.ts:157](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L157)

Indicates what type of signature is used by this account, must be one of:
* sig
* msig
* lsig

***

### status

> **status**: `string`

Defined in: [packages/algod\_client/src/models/account.ts:149](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L149)

\[onl\] delegation status of the account's MicroAlgos
* Offline - indicates that the associated account is delegated.
*  Online  - indicates that the associated account used as part of the delegation pool.
*   NotParticipating - indicates that the associated account is neither a delegator nor a delegate.

***

### totalAppsOptedIn

> **totalAppsOptedIn**: `number`

Defined in: [packages/algod\_client/src/models/account.ts:63](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L63)

The count of all applications that have been opted in, equivalent to the count of application local data (AppLocalState objects) stored in this account.

***

### totalAssetsOptedIn

> **totalAssetsOptedIn**: `number`

Defined in: [packages/algod\_client/src/models/account.ts:81](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L81)

The count of all assets that have been opted in, equivalent to the count of AssetHolding objects held by this account.

***

### totalBoxBytes?

> `optional` **totalBoxBytes**: `number`

Defined in: [packages/algod\_client/src/models/account.ts:115](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L115)

\[tbxb\] The total number of bytes used by this account's app's box keys and values.

***

### totalBoxes?

> `optional` **totalBoxes**: `number`

Defined in: [packages/algod\_client/src/models/account.ts:110](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L110)

\[tbx\] The number of existing boxes created by this account's app.

***

### totalCreatedApps

> **totalCreatedApps**: `number`

Defined in: [packages/algod\_client/src/models/account.ts:93](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L93)

The count of all apps (AppParams objects) created by this account.

***

### totalCreatedAssets

> **totalCreatedAssets**: `number`

Defined in: [packages/algod\_client/src/models/account.ts:105](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account.ts#L105)

The count of all assets (AssetParams objects) created by this account.
