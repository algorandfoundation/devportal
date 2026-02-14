---
title: types/app-manager
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / types/app-manager



## Table of contents

### Classes

- [AppManager](/docs/algokit-utils/typescript/latest/api/classes/types_app_managerappmanager/)

### Interfaces

- [AppInformation](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_managerappinformation/)
- [BoxReference](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_managerboxreference/)
- [BoxValueRequestParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_managerboxvaluerequestparams/)
- [BoxValuesRequestParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_managerboxvaluesrequestparams/)

### Type Aliases

- [BoxIdentifier](/docs/algokit-utils/typescript/latest/api/modules/types_app_manager/#boxidentifier)

## Type Aliases

### BoxIdentifier

Ƭ **BoxIdentifier**: `string` \| `Uint8Array` \| [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_accounttransactionsigneraccount/)

Something that identifies an app box name - either a:
 * `Uint8Array` (the actual binary of the box name)
 * `string` (that will be encoded to a `Uint8Array`)
 * `TransactionSignerAccount` (that will be encoded into the
   public key address of the corresponding account)

#### Defined in

[src/types/app-manager.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L57)