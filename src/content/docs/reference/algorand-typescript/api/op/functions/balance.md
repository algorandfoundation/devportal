---
title: balance
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [op](docs/_md/op/README) / balance

> **balance**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [op.ts:545](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L545)

balance for account A, in microalgos. The balance is observed after the effects of previous transactions in the group, and after the fee for the current transaction is deducted. Changes caused by inner transactions are observable immediately following `itxn_submit`

## Parameters

### a

Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset).

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

## Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

value.

## See

Native TEAL opcode: [`balance`](https://dev.algorand.co/reference/algorand-teal/opcodes#balance)
Min AVM version: 2
