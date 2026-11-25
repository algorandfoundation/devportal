---
editUrl: false
next: false
prev: false
title: "getABIReturn"
---

> **getABIReturn**(`args?`, `confirmation?`): [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/) \| `undefined`

Defined in: [src/app.ts:235](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L235)

:::caution[Deprecated]
Use `AppManager.getABIReturn` instead.

Returns any ABI return values for the given app call arguments and transaction confirmation.
:::

## Parameters

### args?

[`AppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcallargs/)

The arguments that were used for the call

### confirmation?

`PendingTransactionResponse`

The transaction confirmation from algod

## Returns

[`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/) \| `undefined`

The return value for the method call
