---
editUrl: false
next: false
prev: false
title: "TypedApplicationArg"
---

> **TypedApplicationArg**\<`TArg`\> = `TArg` *extends* [`Transaction`](/algorand-typescript/api/gtxn/namespaces/gtxn/type-aliases/transaction/) ? [`GtxnToItxnFields`](/algorand-typescript/api/arc4/type-aliases/gtxntoitxnfields/)\<`TArg`\> : `TArg`

Defined in: [arc4/c2c.ts:41](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L41)

Conditional type which given an application argument, returns the input type for that argument.

The input type will usually be the original type apart from group transactions which will be substituted
with their equivalent inner transaction type.

## Type Parameters

### TArg

`TArg`
