---
title: AssetHolding
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / AssetHolding

> `const` **AssetHolding**: `object`

Defined in: [op.ts:422](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L422)

## Type declaration

### assetBalance()

> **assetBalance**(`a`, `b`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

Amount of the asset unit held by this account
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

##### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### assetFrozen()

> **assetFrozen**(`a`, `b`): readonly \[`boolean`, `boolean`\]

Is the asset frozen or not
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

##### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

#### Returns

readonly \[`boolean`, `boolean`\]
