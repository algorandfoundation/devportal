---
editUrl: false
next: false
prev: false
title: "OpUpFeeSource"
---

Defined in: [util.ts:222](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L222)

Defines the source of fees for the OpUp utility

## Enumeration Members

### Any

> **Any**: `2`

Defined in: [util.ts:234](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L234)

First the excess will be used, then remaining fees taken from the app account

***

### AppAccount

> **AppAccount**: `1`

Defined in: [util.ts:230](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L230)

The app's account will cover all fees (itxn.fee = Global.minTxFee)

***

### GroupCredit

> **GroupCredit**: `0`

Defined in: [util.ts:226](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L226)

Only the excess fee (credit) on the outer group should be used (itxn.fee = 0)
