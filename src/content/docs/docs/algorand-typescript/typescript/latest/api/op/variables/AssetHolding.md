---
title: AssetHolding
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [op](/docs/algorand-typescript/typescript/latest/api/op/README/) / AssetHolding

> `const` **AssetHolding**: `object`

Defined in: [op.ts:422](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L422)

## Type declaration

### assetBalance()

> **assetBalance**(`a`, `b`): readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

Amount of the asset unit held by this account
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/)

##### b

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Asset/)

#### Returns

readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

### assetFrozen()

> **assetFrozen**(`a`, `b`): readonly \[`boolean`, `boolean`\]

Is the asset frozen or not
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/)

##### b

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Asset/)

#### Returns

readonly \[`boolean`, `boolean`\]
