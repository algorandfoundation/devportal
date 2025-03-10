---
title: Variable: VoterParams
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [op](../README) / VoterParams



> `const` **VoterParams**: `object`

Defined in: [packages/algo-ts/src/op.ts:4001](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4001)

## Type declaration

### voterBalance()

Online stake in microalgos
Min AVM version: 11

#### Parameters

##### a

[`uint64`](../../index/type-aliases/uint64) | [`Account`](../../index/type-aliases/Account)

#### Returns

readonly \[[`uint64`](../../index/type-aliases/uint64), `boolean`\]

### voterIncentiveEligible()

Had this account opted into block payouts
Min AVM version: 11

#### Parameters

##### a

[`uint64`](../../index/type-aliases/uint64) | [`Account`](../../index/type-aliases/Account)

#### Returns

readonly \[`boolean`, `boolean`\]