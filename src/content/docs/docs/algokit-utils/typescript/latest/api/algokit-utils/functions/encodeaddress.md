---
editUrl: false
next: false
prev: false
title: "encodeAddress"
---

> **encodeAddress**(`address`): `string`

Defined in: [packages/common/src/address.ts:198](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/common/src/address.ts#L198)

encodeAddress takes an Algorand address as a Uint8Array and encodes it into a string with checksum.

## Parameters

### address

`Uint8Array`

a raw Algorand address

## Returns

`string`

the address and checksum encoded as a string.
