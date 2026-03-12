---
editUrl: false
next: false
prev: false
title: "LogicSigAccount"
---

Defined in: [packages/transact/src/logicsig.ts:88](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L88)

## Extends

- [`LogicSig`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/)

## Constructors

### Constructor

> **new LogicSigAccount**(`program`, `programArgs?`, `delegator?`): `LogicSigAccount`

Defined in: [packages/transact/src/logicsig.ts:127](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L127)

#### Parameters

##### program

`Uint8Array`

##### programArgs?

`Uint8Array`\<`ArrayBufferLike`\>[] | `null`

##### delegator?

[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

#### Returns

`LogicSigAccount`

#### Overrides

[`LogicSig`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/).[`constructor`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/#constructor)

## Properties

### args

> **args**: `Uint8Array`\<`ArrayBufferLike`\>[]

Defined in: [packages/transact/src/logicsig.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L34)

#### Inherited from

[`LogicSig`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/).[`args`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/#args)

***

### lmsig?

> `optional` **lmsig**: [`MultisigSignature`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/multisigsignature/)

Defined in: [packages/transact/src/logicsig.ts:91](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L91)

***

### logic

> **logic**: `Uint8Array`

Defined in: [packages/transact/src/logicsig.ts:33](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L33)

#### Inherited from

[`LogicSig`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/).[`logic`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/#logic)

***

### msig?

> `optional` **msig**: [`MultisigSignature`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/multisigsignature/)

Defined in: [packages/transact/src/logicsig.ts:90](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L90)

***

### sig?

> `optional` **sig**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [packages/transact/src/logicsig.ts:89](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L89)

## Accessors

### addr

#### Get Signature

> **get** **addr**(): [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/logicsig.ts:59](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L59)

##### Returns

[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

#### Inherited from

[`LogicSig`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/).[`addr`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/#addr)

***

### signer

#### Get Signature

> **get** **signer**(): [`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

Defined in: [packages/transact/src/logicsig.ts:132](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L132)

##### Returns

[`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

## Methods

### account()

> **account**(): `LogicSigAccount`

Defined in: [packages/transact/src/logicsig.ts:79](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L79)

#### Returns

`LogicSigAccount`

#### Inherited from

[`LogicSig`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/).[`account`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/#account)

***

### address()

> **address**(): [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/logicsig.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L55)

#### Returns

[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

#### Inherited from

[`LogicSig`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/).[`address`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/#address)

***

### bytesToSignForDelegation()

> **bytesToSignForDelegation**(`msig?`): `Uint8Array`

Defined in: [packages/transact/src/logicsig.ts:63](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L63)

#### Parameters

##### msig?

[`MultisigAccount`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/multisigaccount/)

#### Returns

`Uint8Array`

#### Inherited from

[`LogicSig`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/).[`bytesToSignForDelegation`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/#bytestosignfordelegation)

***

### delegatedAccount()

> **delegatedAccount**(`delegator`): `LogicSigAccount`

Defined in: [packages/transact/src/logicsig.ts:83](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L83)

#### Parameters

##### delegator

[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

#### Returns

`LogicSigAccount`

#### Inherited from

[`LogicSig`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/).[`delegatedAccount`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/#delegatedaccount)

***

### programDataToSign()

> **programDataToSign**(`data`): `Uint8Array`

Defined in: [packages/transact/src/logicsig.ts:75](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L75)

#### Parameters

##### data

`Uint8Array`

#### Returns

`Uint8Array`

#### Inherited from

[`LogicSig`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/).[`programDataToSign`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/#programdatatosign)

***

### signForDelegation()

> **signForDelegation**(`delegator`): `Promise`\<`void`\>

Defined in: [packages/transact/src/logicsig.ts:155](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L155)

#### Parameters

##### delegator

[`AddressWithDelegatedLsigSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithdelegatedlsigsigner/)

#### Returns

`Promise`\<`void`\>

***

### signProgramData()

> **signProgramData**(`data`, `signer`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [packages/transact/src/logicsig.ts:71](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L71)

#### Parameters

##### data

`Uint8Array`

##### signer

[`ProgramDataSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/programdatasigner/)

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

#### Inherited from

[`LogicSig`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/).[`signProgramData`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/#signprogramdata)

***

### fromBytes()

> `static` **fromBytes**(`encodedLsig`, `delegator?`): `LogicSigAccount`

Defined in: [packages/transact/src/logicsig.ts:121](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L121)

#### Parameters

##### encodedLsig

`Uint8Array`

##### delegator?

[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

#### Returns

`LogicSigAccount`

#### Overrides

[`LogicSig`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/).[`fromBytes`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/#frombytes)

***

### fromSignature()

> `static` **fromSignature**(`signature`, `delegator?`): `LogicSigAccount`

Defined in: [packages/transact/src/logicsig.ts:93](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L93)

#### Parameters

##### signature

[`LogicSigSignature`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/logicsigsignature/)

##### delegator?

[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

#### Returns

`LogicSigAccount`

#### Overrides

[`LogicSig`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/).[`fromSignature`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsig/#fromsignature)
