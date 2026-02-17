---
title: EnsureFundedResult
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/account-manager](/docs/algokit-utils/typescript/latest/api/modules/types_account_manager/) / EnsureFundedResult

[types/account-manager](/docs/algokit-utils/typescript/latest/api/modules/types_account_manager/).EnsureFundedResult

Result from performing an ensureFunded call.

## Table of contents

### Properties

- [amountFunded](/docs/algokit-utils/typescript/latest/api/interfaces/types_account_manager.EnsureFundedResult/#amountfunded)
- [transactionId](/docs/algokit-utils/typescript/latest/api/interfaces/types_account_manager.EnsureFundedResult/#transactionid)

## Properties

### amountFunded

• **amountFunded**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amount.AlgoAmount/)

The amount that was sent to the account.

#### Defined in

[src/types/account-manager.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L22)

---

### transactionId

• **transactionId**: `string`

The transaction ID of the transaction that funded the account.

#### Defined in

[src/types/account-manager.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L20)
