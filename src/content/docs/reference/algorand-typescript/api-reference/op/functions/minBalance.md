---
title: 'minBalance'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / minBalance

# Function: minBalance()

> **minBalance**(`a`): [`uint64`](/index/type-aliases/uint64)

Defined in: [packages/algo-ts/src/op.ts:3339](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3339)

minimum required balance for account A, in microalgos. Required balance is affected by ASA, App, and Box usage. When creating or opting into an app, the minimum balance grows before the app code runs, therefore the increase is visible there. When deleting or closing out, the minimum balance decreases after the app executes. Changes caused by inner transactions or box usage are observable immediately following the opcode effecting the change.

## Parameters

### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

## Returns

[`uint64`](/index/type-aliases/uint64)

value.

## See

Native TEAL opcode: [`min_balance`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#min_balance)
Min AVM version: 3
