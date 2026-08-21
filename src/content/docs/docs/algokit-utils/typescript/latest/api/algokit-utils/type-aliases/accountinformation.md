---
editUrl: false
next: false
prev: false
title: 'AccountInformation'
---

> **AccountInformation** = `object`

Defined in: [src/account.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L22)

Account information at a given round.

## Properties

### address

> **address**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [src/account.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L26)

The account public key

---

### amountWithoutPendingRewards

> **amountWithoutPendingRewards**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algoamount/)

Defined in: [src/account.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L34)

The amount of Algo in the account, without the pending rewards.

---

### appsLocalState?

> `optional` **appsLocalState**: [`ApplicationLocalState`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/applicationlocalstate/)[]

Defined in: [src/account.ts:91](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L91)

Applications local data stored in this account.

---

### appsTotalExtraPages?

> `optional` **appsTotalExtraPages**: `number`

Defined in: [src/account.ts:96](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L96)

The sum of all extra application program pages for this account.

---

### appsTotalSchema?

> `optional` **appsTotalSchema**: [`ApplicationStateSchema`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/applicationstateschema/)

Defined in: [src/account.ts:102](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L102)

(tsch) stores the sum of all of the local schemas and global schemas in this
account.
Note: the raw account uses `StateSchema` for this type.

---

### assets?

> `optional` **assets**: [`AssetHolding`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/assetholding/)[]

Defined in: [src/account.ts:107](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L107)

Assets held by this account.

---

### authAddr?

> `optional` **authAddr**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [src/account.ts:114](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L114)

The address against which signing should be checked. If empty, the
address of the current account is used. This field can be updated in any
transaction by setting the `RekeyTo` field.

---

### balance

> **balance**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algoamount/)

Defined in: [src/account.ts:29](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L29)

The balance of Algo currently held by the account.

---

### createdApps?

> `optional` **createdApps**: [`Application`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/application/)[]

Defined in: [src/account.ts:119](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L119)

Parameters of applications created by this account including app global data.

---

### createdAssets?

> `optional` **createdAssets**: [`Asset`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/asset/)[]

Defined in: [src/account.ts:125](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L125)

(apar) parameters of assets created by this account.
Note: the raw account uses `map[int] -> Asset` for this type.

---

### lastHeartbeatRound?

> `optional` **lastHeartbeatRound**: `bigint`

Defined in: [src/account.ts:162](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L162)

The round in which this account last went online, or explicitly renewed their
online status.

---

### lastProposedRound?

> `optional` **lastProposedRound**: `bigint`

Defined in: [src/account.ts:167](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L167)

The round in which this account last proposed the block.

---

### minBalance

> **minBalance**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algoamount/)

Defined in: [src/account.ts:41](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L41)

Algo balance required to be held by the account.

The requirement grows based on asset and application usage.

---

### participation?

> `optional` **participation**: [`AccountParticipation`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/accountparticipation/)

Defined in: [src/account.ts:131](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L131)

AccountParticipation describes the parameters used by this account in consensus
protocol.

---

### pendingRewards

> **pendingRewards**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algoamount/)

Defined in: [src/account.ts:45](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L45)

Amount of Algo of pending rewards in this account.

---

### rewardBase?

> `optional` **rewardBase**: `number`

Defined in: [src/account.ts:137](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L137)

Used as part of the rewards computation. Only applicable to accounts
which are participating.

---

### rewards

> **rewards**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algoamount/)

Defined in: [src/account.ts:51](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L51)

Total rewards of Algo the account has received, including pending
rewards.

---

### sigType?

> `optional` **sigType**: `string`

Defined in: [src/account.ts:145](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L145)

Indicates what type of signature is used by this account, must be one of:

- sig
- msig
- lsig

---

### status

> **status**: `string`

Defined in: [src/account.ts:64](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L64)

Delegation status of the account's Algo:

- Offline - indicates that the associated account is delegated.
- Online - indicates that the associated account used as part of the delegation pool.
- NotParticipating - indicates that the associated account is neither a delegator nor a delegate.

---

### totalAppsOptedIn

> **totalAppsOptedIn**: `number`

Defined in: [src/account.ts:70](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L70)

The count of all applications that have been opted in, equivalent to the count
of application local data (AppLocalState objects) stored in this account.

---

### totalAssetsOptedIn

> **totalAssetsOptedIn**: `number`

Defined in: [src/account.ts:76](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L76)

The count of all assets that have been opted in, equivalent to the count of
AssetHolding objects held by this account.

---

### totalBoxBytes?

> `optional` **totalBoxBytes**: `number`

Defined in: [src/account.ts:151](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L151)

The total number of bytes used by this account's app's box keys and
values.

---

### totalBoxes?

> `optional` **totalBoxes**: `number`

Defined in: [src/account.ts:156](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L156)

The number of existing boxes created by this account's app.

---

### totalCreatedApps

> **totalCreatedApps**: `number`

Defined in: [src/account.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L81)

The count of all apps (AppParams objects) created by this account.

---

### totalCreatedAssets

> **totalCreatedAssets**: `number`

Defined in: [src/account.ts:86](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L86)

The count of all assets (AssetParams objects) created by this account.

---

### validAsOfRound

> **validAsOfRound**: `bigint`

Defined in: [src/account.ts:56](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L56)

The round number for which this information is relevant.
