---
title: OpUpFeeSource
type: enum
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / OpUpFeeSource

Defined in: [util.ts:130](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L130)

Defines the source of fees for the OpUp utility

## Enumeration Members

### Any

> **Any**: `2`

Defined in: [util.ts:142](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L142)

First the excess will be used, then remaining fees taken from the app account

---

### AppAccount

> **AppAccount**: `1`

Defined in: [util.ts:138](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L138)

The app's account will cover all fees (itxn.fee = Global.minTxFee)

---

### GroupCredit

> **GroupCredit**: `0`

Defined in: [util.ts:134](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L134)

Only the excess fee (credit) on the outer group should be used (itxn.fee = 0)
