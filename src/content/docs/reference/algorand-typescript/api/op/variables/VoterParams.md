---
title: VoterParams
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / VoterParams

> `const` **VoterParams**: `object`

Defined in: [op.ts:4063](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4063)

## Type declaration

### voterBalance()

> **voterBalance**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

Online stake in microalgos
Min AVM version: 11

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### voterIncentiveEligible()

> **voterIncentiveEligible**(`a`): readonly \[`boolean`, `boolean`\]

Had this account opted into block payouts
Min AVM version: 11

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

readonly \[`boolean`, `boolean`\]
