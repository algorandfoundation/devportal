---
editUrl: false
next: false
prev: false
title: 'minBalance'
---

> **minBalance**(`a`): [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [op.ts:3393](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3393)

minimum required balance for account A, in microalgos. Required balance is affected by ASA, App, and Box usage. When creating or opting into an app, the minimum balance grows before the app code runs, therefore the increase is visible there. When deleting or closing out, the minimum balance decreases after the app executes. Changes caused by inner transactions or box usage are observable immediately following the opcode effecting the change.

## Parameters

### a

Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset).

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/algorand-typescript/api/index/type-aliases/account/)

## Returns

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

value.

## See

Native TEAL opcode: [`min_balance`](https://dev.algorand.co/reference/algorand-teal/opcodes#min_balance)
Min AVM version: 3
