---
editUrl: false
next: false
prev: false
title: 'mnemonicToMasterDerivationKey'
---

> **mnemonicToMasterDerivationKey**(`mn`): `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [packages/algo25/src/index.ts:153](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algo25/src/index.ts#L153)

mnemonicToMasterDerivationKey takes a mnemonic string and returns the corresponding master derivation key.

## Parameters

### mn

`string`

25 words Algorand mnemonic

## Returns

`Uint8Array`\<`ArrayBufferLike`\>

Uint8Array

## Throws

error if fails to decode the mnemonic
