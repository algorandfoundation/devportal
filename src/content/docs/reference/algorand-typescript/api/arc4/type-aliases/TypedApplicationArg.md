---
title: TypedApplicationArg
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](docs/_md/arc4/README) / TypedApplicationArg

> **TypedApplicationArg**\<`TArg`\> = `TArg` _extends_ [`Transaction`](/reference/algorand-typescript/api/gtxn/namespaces/gtxn/type-aliases/transaction/) ? [`GtxnToItxnFields`](GtxnToItxnFields)\<`TArg`\> : `TArg`

Defined in: [arc4/c2c.ts:41](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L41)

Conditional type which given an application argument, returns the input type for that argument.

The input type will usually be the original type apart from group transactions which will be substituted
with their equivalent inner transaction type.

## Type Parameters

### TArg

`TArg`
