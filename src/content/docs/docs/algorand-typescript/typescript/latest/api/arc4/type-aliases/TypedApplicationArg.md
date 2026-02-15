---
title: TypedApplicationArg
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/readme/) / TypedApplicationArg

> **TypedApplicationArg**\<`TArg`\> = `TArg` _extends_ [`Transaction`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/type-aliases/transaction/) ? [`GtxnToItxnFields`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/gtxntoitxnfields/)\<`TArg`\> : `TArg`

Defined in: [arc4/c2c.ts:41](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L41)

Conditional type which given an application argument, returns the input type for that argument.

The input type will usually be the original type apart from group transactions which will be substituted
with their equivalent inner transaction type.

## Type Parameters

### TArg

`TArg`
