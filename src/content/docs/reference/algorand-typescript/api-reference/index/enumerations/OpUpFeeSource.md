---
title: 'OpUpFeeSource'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / OpUpFeeSource

# Enumeration: OpUpFeeSource

Defined in: [packages/algo-ts/src/util.ts:107](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L107)

Defines the source of fees for the OpUp utility

## Enumeration Members

### Any

> **Any**: `2`

Defined in: [packages/algo-ts/src/util.ts:119](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L119)

First the excess will be used, then remaining fees taken from the app account

---

### AppAccount

> **AppAccount**: `1`

Defined in: [packages/algo-ts/src/util.ts:115](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L115)

The app's account will cover all fees (itxn.fee = Global.minTxFee)

---

### GroupCredit

> **GroupCredit**: `0`

Defined in: [packages/algo-ts/src/util.ts:111](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L111)

Only the excess fee (credit) on the outer group should be used (itxn.fee = 0)
