---
editUrl: false
next: false
prev: false
title: "VoterParams"
---

> `const` **VoterParams**: `object`

Defined in: [op.ts:4241](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4241)

## Type Declaration

### voterBalance()

> **voterBalance**(`a`): readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

Online stake in microalgos
Min AVM version: 11

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/)

#### Returns

readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

### voterIncentiveEligible()

> **voterIncentiveEligible**(`a`): readonly \[`boolean`, `boolean`\]

Had this account opted into block payouts
Min AVM version: 11

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/)

#### Returns

readonly \[`boolean`, `boolean`\]
