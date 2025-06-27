---
title: 'AssetParams'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / AssetParams

# Variable: AssetParams

> `const` **AssetParams**: `object`

Defined in: [packages/algo-ts/src/op.ts:431](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L431)

## Type declaration

### assetClawback()

Clawback address
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Asset`](/index/type-aliases/asset)

#### Returns

readonly \[[`Account`](/index/type-aliases/account), `boolean`\]

### assetCreator()

Creator address
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Asset`](/index/type-aliases/asset)

#### Returns

readonly \[[`Account`](/index/type-aliases/account), `boolean`\]

### assetDecimals()

See AssetParams.Decimals
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Asset`](/index/type-aliases/asset)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### assetDefaultFrozen()

Frozen by default or not
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Asset`](/index/type-aliases/asset)

#### Returns

readonly \[`boolean`, `boolean`\]

### assetFreeze()

Freeze address
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Asset`](/index/type-aliases/asset)

#### Returns

readonly \[[`Account`](/index/type-aliases/account), `boolean`\]

### assetManager()

Manager address
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Asset`](/index/type-aliases/asset)

#### Returns

readonly \[[`Account`](/index/type-aliases/account), `boolean`\]

### assetMetadataHash()

Arbitrary commitment
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Asset`](/index/type-aliases/asset)

#### Returns

readonly \[[`bytes`](/index/type-aliases/bytes), `boolean`\]

### assetName()

Asset name
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Asset`](/index/type-aliases/asset)

#### Returns

readonly \[[`bytes`](/index/type-aliases/bytes), `boolean`\]

### assetReserve()

Reserve address
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Asset`](/index/type-aliases/asset)

#### Returns

readonly \[[`Account`](/index/type-aliases/account), `boolean`\]

### assetTotal()

Total number of units of this asset
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Asset`](/index/type-aliases/asset)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### assetUnitName()

Asset unit name
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Asset`](/index/type-aliases/asset)

#### Returns

readonly \[[`bytes`](/index/type-aliases/bytes), `boolean`\]

### assetUrl()

URL with additional info about the asset
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Asset`](/index/type-aliases/asset)

#### Returns

readonly \[[`bytes`](/index/type-aliases/bytes), `boolean`\]
