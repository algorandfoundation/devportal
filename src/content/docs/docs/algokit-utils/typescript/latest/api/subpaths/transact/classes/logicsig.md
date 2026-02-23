---
editUrl: false
next: false
prev: false
title: "LogicSig"
---

Defined in: [packages/transact/src/logicsig.ts:32](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L32)

## Extended by

- [`LogicSigAccount`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsigaccount/)

## Implements

- [`Addressable`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/addressable/)

## Constructors

### Constructor

> **new LogicSig**(`program`, `programArgs?`): `LogicSig`

Defined in: [packages/transact/src/logicsig.ts:37](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L37)

#### Parameters

##### program

`Uint8Array`

##### programArgs?

`Uint8Array`\<`ArrayBufferLike`\>[]

#### Returns

`LogicSig`

## Properties

### args

> **args**: `Uint8Array`\<`ArrayBufferLike`\>[]

Defined in: [packages/transact/src/logicsig.ts:34](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L34)

***

### logic

> **logic**: `Uint8Array`

Defined in: [packages/transact/src/logicsig.ts:33](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L33)

## Accessors

### addr

#### Get Signature

> **get** **addr**(): [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/logicsig.ts:59](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L59)

##### Returns

[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

#### Implementation of

[`Addressable`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/addressable/).[`addr`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/addressable/#addr)

## Methods

### account()

> **account**(): [`LogicSigAccount`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsigaccount/)

Defined in: [packages/transact/src/logicsig.ts:79](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L79)

#### Returns

[`LogicSigAccount`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsigaccount/)

***

### address()

> **address**(): [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/logicsig.ts:55](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L55)

#### Returns

[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

***

### bytesToSignForDelegation()

> **bytesToSignForDelegation**(`msig?`): `Uint8Array`

Defined in: [packages/transact/src/logicsig.ts:63](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L63)

#### Parameters

##### msig?

[`MultisigAccount`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/multisigaccount/)

#### Returns

`Uint8Array`

***

### delegatedAccount()

> **delegatedAccount**(`delegator`): [`LogicSigAccount`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsigaccount/)

Defined in: [packages/transact/src/logicsig.ts:83](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L83)

#### Parameters

##### delegator

[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

#### Returns

[`LogicSigAccount`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsigaccount/)

***

### programDataToSign()

> **programDataToSign**(`data`): `Uint8Array`

Defined in: [packages/transact/src/logicsig.ts:75](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L75)

#### Parameters

##### data

`Uint8Array`

#### Returns

`Uint8Array`

***

### signProgramData()

> **signProgramData**(`data`, `signer`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [packages/transact/src/logicsig.ts:71](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L71)

#### Parameters

##### data

`Uint8Array`

##### signer

[`ProgramDataSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/programdatasigner/)

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### fromBytes()

> `static` **fromBytes**(`encodedLsig`): `LogicSig`

Defined in: [packages/transact/src/logicsig.ts:49](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L49)

#### Parameters

##### encodedLsig

`Uint8Array`

#### Returns

`LogicSig`

***

### fromSignature()

> `static` **fromSignature**(`signature`): `LogicSig`

Defined in: [packages/transact/src/logicsig.ts:45](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L45)

#### Parameters

##### signature

[`LogicSigSignature`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/logicsigsignature/)

#### Returns

`LogicSig`
