---
title: EnsureFundedResult
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/account-manager](/reference/algokit-utils-ts/api/modules/types_account_manager/) / EnsureFundedResult



[types/account-manager](/reference/algokit-utils-ts/api/modules/types_account_manager/).EnsureFundedResult

Result from performing an ensureFunded call.

## Table of contents

### Properties

- [amountFunded](#amountfunded)
- [transactionId](#transactionid)

## Properties

### amountFunded

• **amountFunded**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The amount that was sent to the account.

#### Defined in

[src/types/account-manager.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L22)

___

### transactionId

• **transactionId**: `string`

The transaction ID of the transaction that funded the account.

#### Defined in

[src/types/account-manager.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L20)