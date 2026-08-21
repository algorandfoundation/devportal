---
editUrl: false
next: false
prev: false
title: 'BoxIdentifier'
---

> **BoxIdentifier** = `string` \| `Uint8Array` \| [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)

Defined in: [src/app-manager.ts:59](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-manager.ts#L59)

Something that identifies an app box name - either a:

- `Uint8Array` (the actual binary of the box name)
- `string` (that will be encoded to a `Uint8Array`)
- `AddressWithSigner` (that will be encoded into the
  public key address of the corresponding account)
