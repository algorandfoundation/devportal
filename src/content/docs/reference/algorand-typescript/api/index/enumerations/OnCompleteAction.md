---
title: OnCompleteAction
type: enum
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [index](docs/_md/index/README) / OnCompleteAction

Defined in: [on-complete-action.ts:9](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/on-complete-action.ts#L9)

The possible on complete actions a method can handle, represented as an integer

## Enumeration Members

### ClearState

> **ClearState**: `3`

Defined in: [on-complete-action.ts:25](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/on-complete-action.ts#L25)

Run the clear state program and forcibly close the user out of the contract

---

### CloseOut

> **CloseOut**: `2`

Defined in: [on-complete-action.ts:21](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/on-complete-action.ts#L21)

Close the calling user out of the contract

---

### DeleteApplication

> **DeleteApplication**: `5`

Defined in: [on-complete-action.ts:33](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/on-complete-action.ts#L33)

Delete the application

---

### NoOp

> **NoOp**: `0`

Defined in: [on-complete-action.ts:13](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/on-complete-action.ts#L13)

Do nothing after the transaction has completed

---

### OptIn

> **OptIn**: `1`

Defined in: [on-complete-action.ts:17](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/on-complete-action.ts#L17)

Opt the calling user into the contract

---

### UpdateApplication

> **UpdateApplication**: `4`

Defined in: [on-complete-action.ts:29](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/on-complete-action.ts#L29)

Replace the application's approval and clear state programs with the bytes from this transaction
