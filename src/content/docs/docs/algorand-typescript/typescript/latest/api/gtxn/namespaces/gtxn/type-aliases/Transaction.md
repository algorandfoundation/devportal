---
title: Transaction
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [gtxn](/docs/algorand-typescript/typescript/latest/api/gtxn/README/) / [gtxn](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/README/) / Transaction

> **Transaction** = [`PaymentTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/PaymentTxn/) \| [`KeyRegistrationTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/KeyRegistrationTxn/) \| [`AssetConfigTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/AssetConfigTxn/) \| [`AssetTransferTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/AssetTransferTxn/) \| [`AssetFreezeTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/AssetFreezeTxn/) \| [`ApplicationCallTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/ApplicationCallTxn/)

Defined in: [gtxn.ts:589](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L589)

Get the nth transaction in the group without verifying its type

## Param

The index of the txn in the group
