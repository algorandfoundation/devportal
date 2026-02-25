---
editUrl: false
next: false
prev: false
title: 'bytesForSigning'
---

> `const` **bytesForSigning**: `object`

Defined in: [packages/transact/src/signer.ts:121](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/signer.ts#L121)

## Type Declaration

### lsigForDelegation()

> **lsigForDelegation**(`lsig`, `msig?`): `Uint8Array`

#### Parameters

##### lsig

[`LogicSig`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/)

##### msig?

[`MultisigAccount`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/multisigaccount/)

#### Returns

`Uint8Array`

### mxBytes()

> **mxBytes**(`bytes`): `Uint8Array`

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`Uint8Array`

### programData()

> **programData**(`lsig`, `data`): `Uint8Array`

#### Parameters

##### lsig

[`LogicSig`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/)

##### data

`Uint8Array`

#### Returns

`Uint8Array`

### transaction()

> **transaction**(`txn`): `Uint8Array`

#### Parameters

##### txn

[`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)

#### Returns

`Uint8Array`
