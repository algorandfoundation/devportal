---
editUrl: false
next: false
prev: false
title: "ItxnCompose"
---

> **ItxnCompose** = `object`

Defined in: [itxn-compose.ts:45](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L45)

## Methods

### begin()

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:50](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L50)

Begin a transaction group with a payment transaction

##### Parameters

###### fields

[`PaymentComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/paymentcomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:55](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L55)

Begin a transaction group with a key registration transaction

##### Parameters

###### fields

[`KeyRegistrationComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/keyregistrationcomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:60](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L60)

Begin a transaction group with an asset config transaction

##### Parameters

###### fields

[`AssetConfigComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/assetconfigcomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:65](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L65)

Begin a transaction group with an asset transfer transaction

##### Parameters

###### fields

[`AssetTransferComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/assettransfercomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:70](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L70)

Begin a transaction group with an asset freeze transaction

##### Parameters

###### fields

[`AssetFreezeComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/assetfreezecomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:75](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L75)

Begin a transaction group with an application call transaction

##### Parameters

###### fields

[`ApplicationCallComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/applicationcallcomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:80](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L80)

Begin a transaction group with a new transaction with the specified fields

##### Parameters

###### fields

[`AnyTransactionComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/anytransactioncomposefields/)

Specifies the type, and any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L85)

Begin a transaction group with a new transaction from the specified itxn params object

##### Parameters

###### fields

[`ComposeItxnParams`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/composeitxnparams/)

##### Returns

`void`

#### Call Signature

> **begin**\<`TArgs`\>(`method`, `fields`): `void`

Defined in: [itxn-compose.ts:95](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L95)

Begin a transaction group with a typed application call transaction.

:::caution[Deprecated]
This overload has been deprecated in favour of the single arg overload where method is specified as a property of the fields
object, or via an explicit generic param. (`itxnCompose.begin({ method: MyContract.prototype.myMethod, ... })` or
`itxnCompose.begin<typeof MyContract.prototype.myMethod>({ ... })`)
:::

##### Type Parameters

###### TArgs

`TArgs` *extends* `any`[]

##### Parameters

###### method

`InstanceMethod`\<[`Contract`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/contract/), `TArgs`\>

The ABI method to call

###### fields

[`TypedApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/typedapplicationcallfields/)\<`TArgs`\>

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **begin**\<`TMethod`\>(`options`): `void`

Defined in: [itxn-compose.ts:102](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L102)

Begin a transaction group with a typed application call transaction. The method can be specified by options.method, or
by explicitly defining the type of the generic parameter TMethod.

##### Type Parameters

###### TMethod

`TMethod`

The type of an ARC4 method signature (eg. `typeof MyContract.prototype.myMethod`)

##### Parameters

###### options

[`AbiCallOptions`](/docs/algorand-typescript/typescript/latest/api/arc4/interfaces/abicalloptions/)\<`TMethod`\>

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

***

### next()

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:108](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L108)

Continue a transaction group with a payment transaction

##### Parameters

###### fields

[`PaymentComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/paymentcomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:113](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L113)

Continue a transaction group with a key registration transaction

##### Parameters

###### fields

[`KeyRegistrationComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/keyregistrationcomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:118](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L118)

Continue a transaction group with an asset config transaction

##### Parameters

###### fields

[`AssetConfigComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/assetconfigcomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:123](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L123)

Continue a transaction group with an asset transfer transaction

##### Parameters

###### fields

[`AssetTransferComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/assettransfercomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:128](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L128)

Continue a transaction group with an asset freeze transaction

##### Parameters

###### fields

[`AssetFreezeComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/assetfreezecomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:133](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L133)

Continue a transaction group with an application call transaction

##### Parameters

###### fields

[`ApplicationCallComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/applicationcallcomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:138](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L138)

Continue a transaction group with a new transaction with the specified fields

##### Parameters

###### fields

[`AnyTransactionComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/anytransactioncomposefields/)

Specifies the type, and any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:143](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L143)

Continue a transaction group with a new transaction from the specified itxn params object

##### Parameters

###### fields

[`ComposeItxnParams`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/composeitxnparams/)

##### Returns

`void`

#### Call Signature

> **next**\<`TArgs`\>(`method`, `fields`): `void`

Defined in: [itxn-compose.ts:153](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L153)

Continue a transaction group with a typed application call transaction.

:::caution[Deprecated]
This overload has been deprecated in favour of the single arg overload where method is specified as a property of the fields
object, or via an explicit generic param. (`itxnCompose.next({ method: MyContract.prototype.myMethod, ... })` or
`itxnCompose.next<typeof MyContract.prototype.myMethod>({ ... })`)
:::

##### Type Parameters

###### TArgs

`TArgs` *extends* `any`[]

##### Parameters

###### method

`InstanceMethod`\<[`Contract`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/contract/), `TArgs`\>

The ABI method to call

###### fields

[`TypedApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/typedapplicationcallfields/)\<`TArgs`\>

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **next**\<`TMethod`\>(`options`): `void`

Defined in: [itxn-compose.ts:160](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L160)

Continue a transaction group with a typed application call transaction. The method can be specified by options.method, or
by explicitly defining the type of the generic parameter TMethod.

##### Type Parameters

###### TMethod

`TMethod`

The type of an ARC4 method signature (eg. `typeof MyContract.prototype.myMethod`)

##### Parameters

###### options

[`AbiCallOptions`](/docs/algorand-typescript/typescript/latest/api/arc4/interfaces/abicalloptions/)\<`TMethod`\>

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

***

### submit()

> **submit**(): `void`

Defined in: [itxn-compose.ts:168](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L168)

Submit all transactions in the group

#### Returns

`void`

#### Remarks

`op.GITxn.lastLog(n)` (and other methods on the GITxn object) can be used to read fields from the most recently submitted
transaction group where `n` is a compile time constant representing the index of the transaction in the group.
