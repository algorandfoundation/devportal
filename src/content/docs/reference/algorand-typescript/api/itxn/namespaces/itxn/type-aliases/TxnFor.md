---
title: TxnFor
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [itxn](docs/_md/itxn/README) / [itxn](/reference/algorand-typescript/api/itxn/namespaces/itxn/readme/) / TxnFor

> **TxnFor**\<`TFields`\> = `TFields` _extends_ \[\{ `submit`: `TTxn`; \}, `...(infer TRest extends [...ItxnParams[]])`\] ? readonly \[`TTxn`, `...TxnFor<TRest>`\] : \[\]

Defined in: [itxn.ts:980](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L980)

Conditional type which returns the matching InnerTransaction types for a given tuple of ItxnParams types

## Type Parameters

### TFields

`TFields` _extends_ \[`...ItxnParams[]`\]
