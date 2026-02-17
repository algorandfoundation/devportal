---
title: types/app-manager
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / types/app-manager

## Table of contents

### Classes

- [AppManager](/docs/algokit-utils/typescript/latest/api/classes/types_app_manager.AppManager/)

### Interfaces

- [AppInformation](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_manager.AppInformation/)
- [BoxReference](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_manager.BoxReference/)
- [BoxValueRequestParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_manager.BoxValueRequestParams/)
- [BoxValuesRequestParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_manager.BoxValuesRequestParams/)

### Type Aliases

- [BoxIdentifier](/docs/algokit-utils/typescript/latest/api/modules/types_app_manager/#boxidentifier)

## Type Aliases

### BoxIdentifier

Ƭ **BoxIdentifier**: `string` \| `Uint8Array` \| [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_account.TransactionSignerAccount/)

Something that identifies an app box name - either a:

- `Uint8Array` (the actual binary of the box name)
- `string` (that will be encoded to a `Uint8Array`)
- `TransactionSignerAccount` (that will be encoded into the
  public key address of the corresponding account)

#### Defined in

[src/types/app-manager.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L57)
