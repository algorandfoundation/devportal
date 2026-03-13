---
editUrl: false
next: false
prev: false
title: "ContractProxyMethod"
---

> **ContractProxyMethod**\<`TMethod`\> = `TMethod` *extends* (...`args`) => infer TReturn ? (`fields?`) => [`TypedApplicationCallResponse`](/algorand-typescript/api/arc4/type-aliases/typedapplicationcallresponse/)\<`TReturn`\> : `never`

Defined in: [arc4/c2c.ts:71](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L71)

Conditional type which maps an ABI method to a factory method for constructing an application call transaction to call that method.

## Type Parameters

### TMethod

`TMethod`
