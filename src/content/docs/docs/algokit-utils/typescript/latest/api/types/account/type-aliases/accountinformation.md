---
editUrl: false
next: false
prev: false
title: "AccountInformation"
---

> **AccountInformation** = `object`

Defined in: [src/types/account.ts:129](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L129)

Account information at a given round.

## Properties

### address

> **address**: `Address`

Defined in: [src/types/account.ts:133](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L133)

The account public key

***

### amountWithoutPendingRewards

> **amountWithoutPendingRewards**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/account.ts:141](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L141)

The amount of Algo in the account, without the pending rewards.

***

### appsLocalState?

> `optional` **appsLocalState?**: `ApplicationLocalState`[]

Defined in: [src/types/account.ts:198](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L198)

Applications local data stored in this account.

***

### appsTotalExtraPages?

> `optional` **appsTotalExtraPages?**: `number`

Defined in: [src/types/account.ts:203](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L203)

The sum of all extra application program pages for this account.

***

### appsTotalSchema?

> `optional` **appsTotalSchema?**: `ApplicationStateSchema`

Defined in: [src/types/account.ts:209](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L209)

(tsch) stores the sum of all of the local schemas and global schemas in this
account.
Note: the raw account uses `StateSchema` for this type.

***

### assets?

> `optional` **assets?**: `AssetHolding`[]

Defined in: [src/types/account.ts:214](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L214)

Assets held by this account.

***

### authAddr?

> `optional` **authAddr?**: `Address`

Defined in: [src/types/account.ts:221](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L221)

The address against which signing should be checked. If empty, the
address of the current account is used. This field can be updated in any
transaction by setting the `RekeyTo` field.

***

### balance

> **balance**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/account.ts:136](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L136)

The balance of Algo currently held by the account.

***

### createdApps?

> `optional` **createdApps?**: `Application`[]

Defined in: [src/types/account.ts:226](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L226)

Parameters of applications created by this account including app global data.

***

### createdAssets?

> `optional` **createdAssets?**: `Asset`[]

Defined in: [src/types/account.ts:232](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L232)

(apar) parameters of assets created by this account.
Note: the raw account uses `map[int] -> Asset` for this type.

***

### lastHeartbeatRound?

> `optional` **lastHeartbeatRound?**: `bigint`

Defined in: [src/types/account.ts:269](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L269)

The round in which this account last went online, or explicitly renewed their
online status.

***

### lastProposedRound?

> `optional` **lastProposedRound?**: `bigint`

Defined in: [src/types/account.ts:274](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L274)

The round in which this account last proposed the block.

***

### minBalance

> **minBalance**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/account.ts:148](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L148)

Algo balance required to be held by the account.

The requirement grows based on asset and application usage.

***

### participation?

> `optional` **participation?**: `AccountParticipation`

Defined in: [src/types/account.ts:238](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L238)

AccountParticipation describes the parameters used by this account in consensus
protocol.

***

### pendingRewards

> **pendingRewards**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/account.ts:152](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L152)

Amount of Algo of pending rewards in this account.

***

### rewardBase?

> `optional` **rewardBase?**: `number`

Defined in: [src/types/account.ts:244](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L244)

Used as part of the rewards computation. Only applicable to accounts
which are participating.

***

### rewards

> **rewards**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/account.ts:158](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L158)

Total rewards of Algo the account has received, including pending
rewards.

***

### sigType?

> `optional` **sigType?**: `string`

Defined in: [src/types/account.ts:252](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L252)

Indicates what type of signature is used by this account, must be one of:
* sig
* msig
* lsig

***

### status

> **status**: `string`

Defined in: [src/types/account.ts:171](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L171)

Delegation status of the account's Algo:
* Offline - indicates that the associated account is delegated.
* Online - indicates that the associated account used as part of the delegation pool.
* NotParticipating - indicates that the associated account is neither a delegator nor a delegate.

***

### totalAppsOptedIn

> **totalAppsOptedIn**: `number`

Defined in: [src/types/account.ts:177](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L177)

The count of all applications that have been opted in, equivalent to the count
of application local data (AppLocalState objects) stored in this account.

***

### totalAssetsOptedIn

> **totalAssetsOptedIn**: `number`

Defined in: [src/types/account.ts:183](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L183)

The count of all assets that have been opted in, equivalent to the count of
AssetHolding objects held by this account.

***

### totalBoxBytes?

> `optional` **totalBoxBytes?**: `number`

Defined in: [src/types/account.ts:258](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L258)

The total number of bytes used by this account's app's box keys and
values.

***

### totalBoxes?

> `optional` **totalBoxes?**: `number`

Defined in: [src/types/account.ts:263](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L263)

The number of existing boxes created by this account's app.

***

### totalCreatedApps

> **totalCreatedApps**: `number`

Defined in: [src/types/account.ts:188](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L188)

The count of all apps (AppParams objects) created by this account.

***

### totalCreatedAssets

> **totalCreatedAssets**: `number`

Defined in: [src/types/account.ts:193](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L193)

The count of all assets (AssetParams objects) created by this account.

***

### validAsOfRound

> **validAsOfRound**: `bigint`

Defined in: [src/types/account.ts:163](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L163)

The round number for which this information is relevant.
