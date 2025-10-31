---
title: ContractProxyMethod
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](/reference/algorand-typescript/api/arc4/readme/) / ContractProxyMethod

> **ContractProxyMethod**\<`TMethod`\> = `TMethod` _extends_ (...`args`) => infer TReturn ? (`fields?`) => [`TypedApplicationCallResponse`](TypedApplicationCallResponse)\<`TReturn`\> : `never`

Defined in: [arc4/c2c.ts:71](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L71)

Conditional type which maps an ABI method to a factory method for constructing an application call transaction to call that method.

## Type Parameters

### TMethod

`TMethod`
