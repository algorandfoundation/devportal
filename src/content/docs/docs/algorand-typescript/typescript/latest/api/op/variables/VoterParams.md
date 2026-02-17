---
title: VoterParams
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [op](/docs/algorand-typescript/typescript/latest/api/op/README/) / VoterParams

> `const` **VoterParams**: `object`

Defined in: [op.ts:4063](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4063)

## Type declaration

### voterBalance()

> **voterBalance**(`a`): readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

Online stake in microalgos
Min AVM version: 11

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/)

#### Returns

readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

### voterIncentiveEligible()

> **voterIncentiveEligible**(`a`): readonly \[`boolean`, `boolean`\]

Had this account opted into block payouts
Min AVM version: 11

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/)

#### Returns

readonly \[`boolean`, `boolean`\]
