---
editUrl: false
next: false
prev: false
title: 'ensureBudget'
---

> **ensureBudget**(`requiredBudget`, `feeSource?`): `void`

Defined in: [util.ts:153](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L153)

Ensure the available op code budget is greater than or equal to requiredBudget.

This is done by adding AppCall itxns to the group to increase the available budget. These itxns must be paid for
by the caller or the application.

## Parameters

### requiredBudget

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

The total required budget

### feeSource?

[`OpUpFeeSource`](/algorand-typescript/api/index/enumerations/opupfeesource/) = `OpUpFeeSource.GroupCredit`

Which source to withdraw txn fees from.

## Returns

`void`
