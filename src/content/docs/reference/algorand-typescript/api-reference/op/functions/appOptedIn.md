---
title: 'appOptedIn'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / appOptedIn

# Function: appOptedIn()

> **appOptedIn**(`a`, `b`): `boolean`

Defined in: [packages/algo-ts/src/op.ts:328](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L328)

1 if account A is opted in to application B, else 0

## Parameters

### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

### b

[`uint64`](/index/type-aliases/uint64) | [`Application`](/index/type-aliases/application)

## Returns

`boolean`

1 if opted in and 0 otherwise.

## See

Native TEAL opcode: [`app_opted_in`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_opted_in)
Min AVM version: 2
