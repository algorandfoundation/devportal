---
title: 'TxnFor'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/readme) / [itxn](/reference/readme) / TxnFor

# Type Alias: TxnFor\<TFields\>

> **TxnFor**\<`TFields`\>: `TFields` _extends_ \[\{ `submit`: `TTxn`; \}, `...(infer TRest extends InnerTxnList)`\] ? \[`TTxn`, `...TxnFor<TRest>`\] : \[\]

Defined in: [packages/algo-ts/src/itxn.ts:183](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L183)

## Type Parameters

• **TFields** _extends_ [`InnerTxnList`](/reference/algorand-typescript/innertxnlist)
