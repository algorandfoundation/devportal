---
editUrl: false
next: false
prev: false
title: 'decodeAddress'
---

> **decodeAddress**(`address`): [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/common/src/address.ts:189](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/common/src/address.ts#L189)

decodeAddress takes an Algorand address in string form and decodes it into a Uint8Array.

## Parameters

### address

`string`

an Algorand address with checksum.

## Returns

[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

the decoded form of the address's public key and checksum
