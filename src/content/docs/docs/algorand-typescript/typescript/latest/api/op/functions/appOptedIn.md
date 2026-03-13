---
editUrl: false
next: false
prev: false
title: "appOptedIn"
---

> **appOptedIn**(`a`, `b`): `boolean`

Defined in: [op.ts:329](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L329)

1 if account A is opted in to application B, else 0

## Parameters

### a

Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset).

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/algorand-typescript/api/index/type-aliases/account/)

### b

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/algorand-typescript/api/index/type-aliases/application/)

## Returns

`boolean`

1 if opted in and 0 otherwise.

## See

Native TEAL opcode: [`app_opted_in`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_opted_in)
Min AVM version: 2
