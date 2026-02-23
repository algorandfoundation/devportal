---
editUrl: false
next: false
prev: false
title: 'seedFromMnemonic'
---

> **seedFromMnemonic**(`mnemonic`): `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [packages/algo25/src/index.ts:97](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algo25/src/index.ts#L97)

seedFromMnemonic converts a mnemonic generated using this library into the source key used to create it.
It returns an error if the passed mnemonic has an incorrect checksum, if the number of words is unexpected, or if one
of the passed words is not found in the words list.

## Parameters

### mnemonic

`string`

25 words mnemonic

## Returns

`Uint8Array`\<`ArrayBufferLike`\>

32 bytes long seed
