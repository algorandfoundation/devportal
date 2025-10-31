---
title: appOptedIn
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / appOptedIn

> **appOptedIn**(`a`, `b`): `boolean`

Defined in: [op.ts:329](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L329)

1 if account A is opted in to application B, else 0

## Parameters

### a

Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset).

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

## Returns

`boolean`

1 if opted in and 0 otherwise.

## See

Native TEAL opcode: [`app_opted_in`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_opted_in)
Min AVM version: 2
