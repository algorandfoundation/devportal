---
editUrl: false
next: false
prev: false
title: "Account"
---

> **Account** = `object`

Defined in: [packages/indexer\_client/src/models/account.ts:30](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L30)

Account information at a given round.

Definition:
data/basics/userBalance.go : AccountData

## Properties

### address

> **address**: `string`

Defined in: [packages/indexer\_client/src/models/account.ts:34](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L34)

the account public key

***

### amount

> **amount**: `bigint`

Defined in: [packages/indexer\_client/src/models/account.ts:39](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L39)

total number of MicroAlgos in the account

***

### amountWithoutPendingRewards

> **amountWithoutPendingRewards**: `bigint`

Defined in: [packages/indexer\_client/src/models/account.ts:51](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L51)

specifies the amount of MicroAlgos in the account, without the pending rewards.

***

### appsLocalState?

> `optional` **appsLocalState**: [`ApplicationLocalState`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/applicationlocalstate/)[]

Defined in: [packages/indexer\_client/src/models/account.ts:58](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L58)

application local data stored in this account.

Note the raw object uses `map[int] -> AppLocalState` for this type.

***

### appsTotalExtraPages?

> `optional` **appsTotalExtraPages**: `number`

Defined in: [packages/indexer\_client/src/models/account.ts:64](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L64)

the sum of all extra application program pages for this account.

***

### appsTotalSchema?

> `optional` **appsTotalSchema**: [`ApplicationStateSchema`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/applicationstateschema/)

Defined in: [packages/indexer\_client/src/models/account.ts:59](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L59)

***

### assets?

> `optional` **assets**: [`AssetHolding`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/assetholding/)[]

Defined in: [packages/indexer\_client/src/models/account.ts:71](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L71)

assets held by this account.

Note the raw object uses `map[int] -> AssetHolding` for this type.

***

### authAddr?

> `optional` **authAddr**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/indexer\_client/src/models/account.ts:163](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L163)

The address against which signing should be checked. If empty, the address of the current account is used. This field can be updated in any transaction by setting the RekeyTo field.

***

### closedAtRound?

> `optional` **closedAtRound**: `bigint`

Defined in: [packages/indexer\_client/src/models/account.ts:188](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L188)

Round during which this account was most recently closed.

***

### createdApps?

> `optional` **createdApps**: [`Application`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/application/)[]

Defined in: [packages/indexer\_client/src/models/account.ts:78](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L78)

parameters of applications created by this account including app global data.

Note: the raw account uses `map[int] -> AppParams` for this type.

***

### createdAssets?

> `optional` **createdAssets**: [`Asset`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/asset/)[]

Defined in: [packages/indexer\_client/src/models/account.ts:85](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L85)

parameters of assets created by this account.

Note: the raw account uses `map[int] -> Asset` for this type.

***

### createdAtRound?

> `optional` **createdAtRound**: `bigint`

Defined in: [packages/indexer\_client/src/models/account.ts:183](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L183)

Round during which this account first appeared in a transaction.

***

### deleted?

> `optional` **deleted**: `boolean`

Defined in: [packages/indexer\_client/src/models/account.ts:178](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L178)

Whether or not this account is currently closed.

***

### incentiveEligible?

> `optional` **incentiveEligible**: `boolean`

Defined in: [packages/indexer\_client/src/models/account.ts:91](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L91)

can the account receive block incentives if its balance is in range at proposal time.

***

### lastHeartbeat?

> `optional` **lastHeartbeat**: `bigint`

Defined in: [packages/indexer\_client/src/models/account.ts:173](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L173)

The round in which this account last went online, or explicitly renewed their online status.

***

### lastProposed?

> `optional` **lastProposed**: `bigint`

Defined in: [packages/indexer\_client/src/models/account.ts:168](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L168)

The round in which this account last proposed the block.

***

### minBalance

> **minBalance**: `bigint`

Defined in: [packages/indexer\_client/src/models/account.ts:46](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L46)

MicroAlgo balance required by the account.

The requirement grows based on asset and application usage.

***

### participation?

> `optional` **participation**: [`AccountParticipation`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/accountparticipation/)

Defined in: [packages/indexer\_client/src/models/account.ts:86](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L86)

***

### pendingRewards

> **pendingRewards**: `bigint`

Defined in: [packages/indexer\_client/src/models/account.ts:96](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L96)

amount of MicroAlgos of pending rewards in this account.

***

### rewardBase?

> `optional` **rewardBase**: `bigint`

Defined in: [packages/indexer\_client/src/models/account.ts:101](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L101)

used as part of the rewards computation. Only applicable to accounts which are participating.

***

### rewards

> **rewards**: `bigint`

Defined in: [packages/indexer\_client/src/models/account.ts:106](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L106)

total rewards of MicroAlgos the account has received, including pending rewards.

***

### round

> **round**: `bigint`

Defined in: [packages/indexer\_client/src/models/account.ts:111](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L111)

The round for which this information is relevant.

***

### sigType?

> `optional` **sigType**: `"sig"` \| `"msig"` \| `"lsig"`

Defined in: [packages/indexer\_client/src/models/account.ts:128](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L128)

the type of signature used by this account, must be one of:
* sig
* msig
* lsig
* or null if unknown

***

### status

> **status**: `string`

Defined in: [packages/indexer\_client/src/models/account.ts:119](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L119)

voting status of the account's MicroAlgos
* Offline - indicates that the associated account is delegated.
*  Online  - indicates that the associated account used as part of the delegation pool.
*   NotParticipating - indicates that the associated account is neither a delegator nor a delegate.

***

### totalAppsOptedIn

> **totalAppsOptedIn**: `number`

Defined in: [packages/indexer\_client/src/models/account.ts:133](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L133)

The count of all applications that have been opted in, equivalent to the count of application local data (AppLocalState objects) stored in this account.

***

### totalAssetsOptedIn

> **totalAssetsOptedIn**: `number`

Defined in: [packages/indexer\_client/src/models/account.ts:138](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L138)

The count of all assets that have been opted in, equivalent to the count of AssetHolding objects held by this account.

***

### totalBoxBytes

> **totalBoxBytes**: `number`

Defined in: [packages/indexer\_client/src/models/account.ts:143](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L143)

For app-accounts only. The total number of bytes allocated for the keys and values of boxes which belong to the associated application.

***

### totalBoxes

> **totalBoxes**: `number`

Defined in: [packages/indexer\_client/src/models/account.ts:148](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L148)

For app-accounts only. The total number of boxes which belong to the associated application.

***

### totalCreatedApps

> **totalCreatedApps**: `number`

Defined in: [packages/indexer\_client/src/models/account.ts:153](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L153)

The count of all apps (AppParams objects) created by this account.

***

### totalCreatedAssets

> **totalCreatedAssets**: `number`

Defined in: [packages/indexer\_client/src/models/account.ts:158](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/account.ts#L158)

The count of all assets (AssetParams objects) created by this account.
