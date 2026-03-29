---
editUrl: false
next: false
prev: false
title: 'AssetHolding'
---

> `const` **AssetHolding**: `object`

Defined in: [op.ts:422](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L422)

## Type Declaration

### assetBalance()

> **assetBalance**(`a`, `b`): readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

Amount of the asset unit held by this account
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/algorand-typescript/api/index/type-aliases/account/)

##### b

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`Asset`](/algorand-typescript/api/index/type-aliases/asset/)

#### Returns

readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### assetFrozen()

> **assetFrozen**(`a`, `b`): readonly \[`boolean`, `boolean`\]

Is the asset frozen or not
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/algorand-typescript/api/index/type-aliases/account/)

##### b

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`Asset`](/algorand-typescript/api/index/type-aliases/asset/)

#### Returns

readonly \[`boolean`, `boolean`\]
