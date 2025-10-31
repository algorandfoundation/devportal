---
title: ContractProxyMethod
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](docs/_md/arc4/README) / ContractProxyMethod

> **ContractProxyMethod**\<`TMethod`\> = `TMethod` _extends_ (...`args`) => infer TReturn ? (`fields?`) => [`TypedApplicationCallResponse`](TypedApplicationCallResponse)\<`TReturn`\> : `never`

Defined in: [arc4/c2c.ts:71](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L71)

Conditional type which maps an ABI method to a factory method for constructing an application call transaction to call that method.

## Type Parameters

### TMethod

`TMethod`
