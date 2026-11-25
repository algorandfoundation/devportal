---
editUrl: false
next: false
prev: false
title: "TxnFor"
---

> **TxnFor**\<`TFields`\> = `TFields` *extends* \[\{ `submit`: `TTxn`; \}, `...(infer TRest extends [...ItxnParams[]])`\] ? readonly \[`TTxn`, `...TxnFor<TRest>`\] : \[\]

Defined in: [itxn.ts:980](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L980)

Conditional type which returns the matching InnerTransaction types for a given tuple of ItxnParams types

## Type Parameters

### TFields

`TFields` *extends* \[`...ItxnParams[]`\]
