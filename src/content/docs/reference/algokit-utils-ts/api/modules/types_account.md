---
title: types/account
slug: reference/algokit-utils-ts/api/modules/types_account
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / types/account



## Table of contents

### Classes

- [MultisigAccount](/reference/algokit-utils-ts/api/classes/types_accountmultisigaccount/)
- [SigningAccount](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)

### Interfaces

- [AccountConfig](/reference/algokit-utils-ts/api/interfaces/types_accountaccountconfig/)
- [TransactionSignerAccount](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/)

### Type Aliases

- [AccountAssetInformation](#accountassetinformation)
- [AccountInformation](#accountinformation)

### Variables

- [DISPENSER\_ACCOUNT](#dispenser_account)

## Type Aliases

### AccountAssetInformation

Ƭ **AccountAssetInformation**: `Object`

Account asset holding information at a given round.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `bigint` | The ID of the asset held. |
| `balance` | `bigint` | The current balance of that asset holding. |
| `frozen` | `boolean` | Whether or not the asset is frozen for the account. |
| `round` | `bigint` | The round as at which the holding was correct. |

#### Defined in

[src/types/account.ts:278](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L278)

___

### AccountInformation

Ƭ **AccountInformation**: `Object`

Account information at a given round.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `Address` | The account public key |
| `amountWithoutPendingRewards` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | The amount of Algo in the account, without the pending rewards. |
| `appsLocalState?` | `ApplicationLocalState`[] | Applications local data stored in this account. |
| `appsTotalExtraPages?` | `number` | The sum of all extra application program pages for this account. |
| `appsTotalSchema?` | `ApplicationStateSchema` | (tsch) stores the sum of all of the local schemas and global schemas in this account. Note: the raw account uses `StateSchema` for this type. |
| `assets?` | `AssetHolding`[] | Assets held by this account. |
| `authAddr?` | `Address` | The address against which signing should be checked. If empty, the address of the current account is used. This field can be updated in any transaction by setting the `RekeyTo` field. |
| `balance` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | The balance of Algo currently held by the account. |
| `createdApps?` | `Application`[] | Parameters of applications created by this account including app global data. |
| `createdAssets?` | `Asset`[] | (apar) parameters of assets created by this account. Note: the raw account uses `map[int] -> Asset` for this type. |
| `lastHeartbeatRound?` | `bigint` | The round in which this account last went online, or explicitly renewed their online status. |
| `lastProposedRound?` | `bigint` | The round in which this account last proposed the block. |
| `minBalance` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | Algo balance required to be held by the account. The requirement grows based on asset and application usage. |
| `participation?` | `AccountParticipation` | AccountParticipation describes the parameters used by this account in consensus protocol. |
| `pendingRewards` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | Amount of Algo of pending rewards in this account. |
| `rewardBase?` | `number` | Used as part of the rewards computation. Only applicable to accounts which are participating. |
| `rewards` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | Total rewards of Algo the account has received, including pending rewards. |
| `sigType?` | `string` | Indicates what type of signature is used by this account, must be one of: * sig * msig * lsig |
| `status` | `string` | Delegation status of the account's Algo: * Offline - indicates that the associated account is delegated. * Online - indicates that the associated account used as part of the delegation pool. * NotParticipating - indicates that the associated account is neither a delegator nor a delegate. |
| `totalAppsOptedIn` | `number` | The count of all applications that have been opted in, equivalent to the count of application local data (AppLocalState objects) stored in this account. |
| `totalAssetsOptedIn` | `number` | The count of all assets that have been opted in, equivalent to the count of AssetHolding objects held by this account. |
| `totalBoxBytes?` | `number` | The total number of bytes used by this account's app's box keys and values. |
| `totalBoxes?` | `number` | The number of existing boxes created by this account's app. |
| `totalCreatedApps` | `number` | The count of all apps (AppParams objects) created by this account. |
| `totalCreatedAssets` | `number` | The count of all assets (AssetParams objects) created by this account. |
| `validAsOfRound` | `bigint` | The round number for which this information is relevant. |

#### Defined in

[src/types/account.ts:129](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L129)

## Variables

### DISPENSER\_ACCOUNT

• `Const` **DISPENSER\_ACCOUNT**: ``"DISPENSER"``

The account name identifier used for fund dispensing in test environments

#### Defined in

[src/types/account.ts:17](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L17)