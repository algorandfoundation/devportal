---
title: ItxnCompose
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [index](/docs/algorand-typescript/typescript/latest/api/index/README/) / ItxnCompose

> **ItxnCompose** = `object`

Defined in: [itxn-compose.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L44)

## Methods

### begin()

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:45](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L45)

##### Parameters

###### fields

[`PaymentComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/PaymentComposeFields/)

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:46](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L46)

##### Parameters

###### fields

[`KeyRegistrationComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/KeyRegistrationComposeFields/)

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:47](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L47)

##### Parameters

###### fields

[`AssetConfigComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/AssetConfigComposeFields/)

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:48](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L48)

##### Parameters

###### fields

[`AssetTransferComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/AssetTransferComposeFields/)

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L49)

##### Parameters

###### fields

[`AssetFreezeComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/AssetFreezeComposeFields/)

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:50](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L50)

##### Parameters

###### fields

[`ApplicationCallComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/ApplicationCallComposeFields/)

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:51](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L51)

##### Parameters

###### fields

[`AnyTransactionComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/AnyTransactionComposeFields/)

##### Returns

`void`

#### Call Signature

> **begin**(`fields`): `void`

Defined in: [itxn-compose.ts:52](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L52)

##### Parameters

###### fields

[`ComposeItxnParams`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/ComposeItxnParams/)

##### Returns

`void`

#### Call Signature

> **begin**\<`TArgs`\>(`method`, `fields`): `void`

Defined in: [itxn-compose.ts:53](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L53)

##### Type Parameters

###### TArgs

`TArgs` _extends_ `any`[]

##### Parameters

###### method

[`InstanceMethod`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/type-aliases/InstanceMethod/)\<[`Contract`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Contract/), `TArgs`\>

###### fields

[`TypedApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/TypedApplicationCallFields/)\<`TArgs`\>

##### Returns

`void`

---

### next()

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:55](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L55)

##### Parameters

###### fields

[`PaymentComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/PaymentComposeFields/)

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:56](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L56)

##### Parameters

###### fields

[`KeyRegistrationComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/KeyRegistrationComposeFields/)

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:57](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L57)

##### Parameters

###### fields

[`AssetConfigComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/AssetConfigComposeFields/)

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:58](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L58)

##### Parameters

###### fields

[`AssetTransferComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/AssetTransferComposeFields/)

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:59](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L59)

##### Parameters

###### fields

[`AssetFreezeComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/AssetFreezeComposeFields/)

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:60](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L60)

##### Parameters

###### fields

[`ApplicationCallComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/ApplicationCallComposeFields/)

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:61](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L61)

##### Parameters

###### fields

[`AnyTransactionComposeFields`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/AnyTransactionComposeFields/)

##### Returns

`void`

#### Call Signature

> **next**(`fields`): `void`

Defined in: [itxn-compose.ts:62](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L62)

##### Parameters

###### fields

[`ComposeItxnParams`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/ComposeItxnParams/)

##### Returns

`void`

#### Call Signature

> **next**\<`TArgs`\>(`method`, `fields`): `void`

Defined in: [itxn-compose.ts:63](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L63)

##### Type Parameters

###### TArgs

`TArgs` _extends_ `any`[]

##### Parameters

###### method

[`InstanceMethod`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/type-aliases/InstanceMethod/)\<[`Contract`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Contract/), `TArgs`\>

###### fields

[`TypedApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/TypedApplicationCallFields/)\<`TArgs`\>

##### Returns

`void`

---

### submit()

> **submit**(): `void`

Defined in: [itxn-compose.ts:65](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L65)

#### Returns

`void`
