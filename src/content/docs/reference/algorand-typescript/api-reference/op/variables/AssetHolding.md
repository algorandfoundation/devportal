---
title: 'AssetHolding'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / AssetHolding

# Variable: AssetHolding

> `const` **AssetHolding**: `object`

Defined in: [packages/algo-ts/src/op.ts:413](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L413)

## Type declaration

### assetBalance()

Amount of the asset unit held by this account
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

##### b

[`uint64`](/index/type-aliases/uint64) | [`Asset`](/index/type-aliases/asset)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### assetFrozen()

Is the asset frozen or not
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

##### b

[`uint64`](/index/type-aliases/uint64) | [`Asset`](/index/type-aliases/asset)

#### Returns

readonly \[`boolean`, `boolean`\]
