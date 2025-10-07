---
title: types/app-manager
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / types/app-manager

## Table of contents

### Classes

- [AppManager](/reference/algokit-utils-ts/api/classes/types_app_managerappmanager/)

### Interfaces

- [AppInformation](/reference/algokit-utils-ts/api/interfaces/types_app_managerappinformation/)
- [BoxReference](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/)
- [BoxValueRequestParams](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxvaluerequestparams/)
- [BoxValuesRequestParams](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxvaluesrequestparams/)

### Type Aliases

- [BoxIdentifier](types_app_manager.md#boxidentifier)

## Type Aliases

### BoxIdentifier

Ƭ **BoxIdentifier**: `string` \| `Uint8Array` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/)

Something that identifies an app box name - either a:

- `Uint8Array` (the actual binary of the box name)
- `string` (that will be encoded to a `Uint8Array`)
- `TransactionSignerAccount` (that will be encoded into the
  public key address of the corresponding account)

#### Defined in

[src/types/app-manager.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L57)
