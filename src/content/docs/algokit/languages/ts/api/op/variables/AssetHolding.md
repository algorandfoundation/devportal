---
title: Variable: AssetHolding
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [op](../README) / AssetHolding



> `const` **AssetHolding**: `object`

Defined in: [packages/algo-ts/src/op.ts:413](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L413)

## Type declaration

### assetBalance()

Amount of the asset unit held by this account
Min AVM version: 2

#### Parameters

##### a

[`uint64`](../../index/type-aliases/uint64) | [`Account`](../../index/type-aliases/Account)

##### b

[`uint64`](../../index/type-aliases/uint64) | [`Asset`](../../index/type-aliases/Asset)

#### Returns

readonly \[[`uint64`](../../index/type-aliases/uint64), `boolean`\]

### assetFrozen()

Is the asset frozen or not
Min AVM version: 2

#### Parameters

##### a

[`uint64`](../../index/type-aliases/uint64) | [`Account`](../../index/type-aliases/Account)

##### b

[`uint64`](../../index/type-aliases/uint64) | [`Asset`](../../index/type-aliases/Asset)

#### Returns

readonly \[`boolean`, `boolean`\]