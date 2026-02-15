---
title: ContractProxyMethod
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/readme/) / ContractProxyMethod

> **ContractProxyMethod**\<`TMethod`\> = `TMethod` _extends_ (...`args`) => infer TReturn ? (`fields?`) => [`TypedApplicationCallResponse`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/typedapplicationcallresponse/)\<`TReturn`\> : `never`

Defined in: [arc4/c2c.ts:71](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L71)

Conditional type which maps an ABI method to a factory method for constructing an application call transaction to call that method.

## Type Parameters

### TMethod

`TMethod`
