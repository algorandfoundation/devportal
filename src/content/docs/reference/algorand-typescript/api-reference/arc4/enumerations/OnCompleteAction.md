---
title: 'OnCompleteAction'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/reference/readme) / OnCompleteAction

# Enumeration: OnCompleteAction

Defined in: [packages/algo-ts/src/arc4/index.ts:37](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L37)

The possible on complete actions a method can handle, represented as an integer

## Enumeration Members

### ClearState

> **ClearState**: `3`

Defined in: [packages/algo-ts/src/arc4/index.ts:53](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L53)

Run the clear state program and forcibly close the user out of the contract

---

### CloseOut

> **CloseOut**: `2`

Defined in: [packages/algo-ts/src/arc4/index.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L49)

Close the calling user out of the contract

---

### DeleteApplication

> **DeleteApplication**: `5`

Defined in: [packages/algo-ts/src/arc4/index.ts:61](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L61)

Delete the application

---

### NoOp

> **NoOp**: `0`

Defined in: [packages/algo-ts/src/arc4/index.ts:41](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L41)

Do nothing after the transaction has completed

---

### OptIn

> **OptIn**: `1`

Defined in: [packages/algo-ts/src/arc4/index.ts:45](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L45)

Opt the calling user into the contract

---

### UpdateApplication

> **UpdateApplication**: `4`

Defined in: [packages/algo-ts/src/arc4/index.ts:57](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L57)

Replace the application's approval and clear state programs with the bytes from this transaction
