---
editUrl: false
next: false
prev: false
title: 'ItxnCompose'
---

> **ItxnCompose** = `object`

Defined in: [itxn-compose.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L44)

## Methods

### begin()

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L49)

Begin a transaction group with a payment transaction

##### Parameters

###### fields

[`PaymentComposeFields`](/algorand-typescript/api/index/interfaces/paymentcomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:54](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L54)

Begin a transaction group with a key registration transaction

##### Parameters

###### fields

[`KeyRegistrationComposeFields`](/algorand-typescript/api/index/interfaces/keyregistrationcomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:59](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L59)

Begin a transaction group with an asset config transaction

##### Parameters

###### fields

[`AssetConfigComposeFields`](/algorand-typescript/api/index/interfaces/assetconfigcomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L64)

Begin a transaction group with an asset transfer transaction

##### Parameters

###### fields

[`AssetTransferComposeFields`](/algorand-typescript/api/index/interfaces/assettransfercomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:69](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L69)

Begin a transaction group with an asset freeze transaction

##### Parameters

###### fields

[`AssetFreezeComposeFields`](/algorand-typescript/api/index/interfaces/assetfreezecomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:74](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L74)

Begin a transaction group with an application call transaction

##### Parameters

###### fields

[`ApplicationCallComposeFields`](/algorand-typescript/api/index/interfaces/applicationcallcomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:79](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L79)

Begin a transaction group with a new transaction with the specified fields

##### Parameters

###### fields

[`AnyTransactionComposeFields`](/algorand-typescript/api/index/interfaces/anytransactioncomposefields/)

Specifies the type, and any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:84](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L84)

Begin a transaction group with a new transaction from the specified itxn params object

##### Parameters

###### fields

[`ComposeItxnParams`](/algorand-typescript/api/index/type-aliases/composeitxnparams/)

##### Returns

`void`

#### Call Signature

> **begin**\<`TArgs`\>(`method`, `fields`): `void`

Defined in: [itxn-compose.ts:94](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L94)

Begin a transaction group with a typed application call transaction.

:::caution[Deprecated]
This overload has been deprecated in favour of the single arg overload where method is specified as a property of the fields
object, or via an explicit generic param. (`itxnCompose.begin({ method: MyContract.prototype.myMethod, ... })` or
`itxnCompose.begin<typeof MyContract.prototype.myMethod>({ ... })`)
:::

##### Type Parameters

###### TArgs

`TArgs` _extends_ `any`[]

##### Parameters

###### method

`InstanceMethod`\<[`Contract`](/algorand-typescript/api/arc4/classes/contract/), `TArgs`\>

The ABI method to call

###### fields

[`TypedApplicationCallFields`](/algorand-typescript/api/arc4/type-aliases/typedapplicationcallfields/)\<`TArgs`\>

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **begin**\<`TMethod`\>(`options`): `void`

Defined in: [itxn-compose.ts:101](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L101)

Begin a transaction group with a typed application call transaction. The method can be specified by options.method, or
by explicitly defining the type of the generic parameter TMethod.

##### Type Parameters

###### TMethod

`TMethod`

The type of an ARC4 method signature (eg. `typeof MyContract.prototype.myMethod`)

##### Parameters

###### options

[`AbiCallOptions`](/algorand-typescript/api/arc4/interfaces/abicalloptions/)\<`TMethod`\>

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

---

### next()

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:107](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L107)

Continue a transaction group with a payment transaction

##### Parameters

###### fields

[`PaymentComposeFields`](/algorand-typescript/api/index/interfaces/paymentcomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:112](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L112)

Continue a transaction group with a key registration transaction

##### Parameters

###### fields

[`KeyRegistrationComposeFields`](/algorand-typescript/api/index/interfaces/keyregistrationcomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:117](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L117)

Continue a transaction group with an asset config transaction

##### Parameters

###### fields

[`AssetConfigComposeFields`](/algorand-typescript/api/index/interfaces/assetconfigcomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:122](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L122)

Continue a transaction group with an asset transfer transaction

##### Parameters

###### fields

[`AssetTransferComposeFields`](/algorand-typescript/api/index/interfaces/assettransfercomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:127](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L127)

Continue a transaction group with an asset freeze transaction

##### Parameters

###### fields

[`AssetFreezeComposeFields`](/algorand-typescript/api/index/interfaces/assetfreezecomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:132](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L132)

Continue a transaction group with an application call transaction

##### Parameters

###### fields

[`ApplicationCallComposeFields`](/algorand-typescript/api/index/interfaces/applicationcallcomposefields/)

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:137](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L137)

Continue a transaction group with a new transaction with the specified fields

##### Parameters

###### fields

[`AnyTransactionComposeFields`](/algorand-typescript/api/index/interfaces/anytransactioncomposefields/)

Specifies the type, and any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:142](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L142)

Continue a transaction group with a new transaction from the specified itxn params object

##### Parameters

###### fields

[`ComposeItxnParams`](/algorand-typescript/api/index/type-aliases/composeitxnparams/)

##### Returns

`void`

#### Call Signature

> **next**\<`TArgs`\>(`method`, `fields`): `void`

Defined in: [itxn-compose.ts:152](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L152)

Continue a transaction group with a typed application call transaction.

:::caution[Deprecated]
This overload has been deprecated in favour of the single arg overload where method is specified as a property of the fields
object, or via an explicit generic param. (`itxnCompose.next({ method: MyContract.prototype.myMethod, ... })` or
`itxnCompose.next<typeof MyContract.prototype.myMethod>({ ... })`)
:::

##### Type Parameters

###### TArgs

`TArgs` _extends_ `any`[]

##### Parameters

###### method

`InstanceMethod`\<[`Contract`](/algorand-typescript/api/arc4/classes/contract/), `TArgs`\>

The ABI method to call

###### fields

[`TypedApplicationCallFields`](/algorand-typescript/api/arc4/type-aliases/typedapplicationcallfields/)\<`TArgs`\>

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

#### Call Signature

> **next**\<`TMethod`\>(`options`): `void`

Defined in: [itxn-compose.ts:159](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L159)

Continue a transaction group with a typed application call transaction. The method can be specified by options.method, or
by explicitly defining the type of the generic parameter TMethod.

##### Type Parameters

###### TMethod

`TMethod`

The type of an ARC4 method signature (eg. `typeof MyContract.prototype.myMethod`)

##### Parameters

###### options

[`AbiCallOptions`](/algorand-typescript/api/arc4/interfaces/abicalloptions/)\<`TMethod`\>

Specifies any transaction fields which should differ from their defaults

##### Returns

`void`

---

### submit()

> **submit**(): `void`

Defined in: [itxn-compose.ts:167](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L167)

Submit all transactions in the group

#### Returns

`void`

#### Remarks

`op.GITxn.lastLog(n)` (and other methods on the GITxn object) can be used to read fields from the most recently submitted
transaction group where `n` is a compile time constant representing the index of the transaction in the group.
