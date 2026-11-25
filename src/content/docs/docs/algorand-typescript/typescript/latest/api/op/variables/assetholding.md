---
editUrl: false
next: false
prev: false
title: "AssetHolding"
---

> `const` **AssetHolding**: `object`

Defined in: [op.ts:564](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L564)

## Type Declaration

### assetBalance()

> **assetBalance**(`a`, `b`): readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

Amount of the asset unit held by this account
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/)

##### b

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/asset/)

#### Returns

readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

### assetFrozen()

> **assetFrozen**(`a`, `b`): readonly \[`boolean`, `boolean`\]

Is the asset frozen or not
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/)

##### b

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/asset/)

#### Returns

readonly \[`boolean`, `boolean`\]
