---
title: AssetParams
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [op](/docs/algorand-typescript/typescript/latest/api/op/readme/) / AssetParams

> `const` **AssetParams**: `object`

Defined in: [op.ts:440](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L440)

## Type declaration

### assetClawback()

> **assetClawback**(`a`): readonly \[[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/), `boolean`\]

Clawback address
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/asset/)

#### Returns

readonly \[[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/), `boolean`\]

### assetCreator()

> **assetCreator**(`a`): readonly \[[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/), `boolean`\]

Creator address
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/asset/)

#### Returns

readonly \[[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/), `boolean`\]

### assetDecimals()

> **assetDecimals**(`a`): readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

See AssetParams.Decimals
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/asset/)

#### Returns

readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

### assetDefaultFrozen()

> **assetDefaultFrozen**(`a`): readonly \[`boolean`, `boolean`\]

Frozen by default or not
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/asset/)

#### Returns

readonly \[`boolean`, `boolean`\]

### assetFreeze()

> **assetFreeze**(`a`): readonly \[[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/), `boolean`\]

Freeze address
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/asset/)

#### Returns

readonly \[[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/), `boolean`\]

### assetManager()

> **assetManager**(`a`): readonly \[[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/), `boolean`\]

Manager address
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/asset/)

#### Returns

readonly \[[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/), `boolean`\]

### assetMetadataHash()

> **assetMetadataHash**(`a`): readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>, `boolean`\]

Arbitrary commitment
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/asset/)

#### Returns

readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>, `boolean`\]

### assetName()

> **assetName**(`a`): readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), `boolean`\]

Asset name
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/asset/)

#### Returns

readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), `boolean`\]

### assetReserve()

> **assetReserve**(`a`): readonly \[[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/), `boolean`\]

Reserve address
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/asset/)

#### Returns

readonly \[[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/), `boolean`\]

### assetTotal()

> **assetTotal**(`a`): readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

Total number of units of this asset
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/asset/)

#### Returns

readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

### assetUnitName()

> **assetUnitName**(`a`): readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), `boolean`\]

Asset unit name
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/asset/)

#### Returns

readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), `boolean`\]

### assetUrl()

> **assetUrl**(`a`): readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), `boolean`\]

URL with additional info about the asset
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/asset/)

#### Returns

readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), `boolean`\]
