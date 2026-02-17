---
title: GtxnToItxnFields
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/README/) / GtxnToItxnFields

> **GtxnToItxnFields**\<`T`\> = `T` _extends_ [`PaymentTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/PaymentTxn/) ? [`PaymentItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/PaymentItxnParams/) : `T` _extends_ [`KeyRegistrationTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/KeyRegistrationTxn/) ? [`KeyRegistrationItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/KeyRegistrationItxnParams/) : `T` _extends_ [`AssetConfigTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/AssetConfigTxn/) ? [`AssetConfigItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/AssetConfigItxnParams/) : `T` _extends_ [`AssetTransferTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/AssetTransferTxn/) ? [`AssetTransferItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/AssetTransferItxnParams/) : `T` _extends_ [`AssetFreezeTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/AssetFreezeTxn/) ? [`AssetFreezeItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/AssetFreezeItxnParams/) : `T` _extends_ [`ApplicationCallTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/ApplicationCallTxn/) ? [`ApplicationCallItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/ApplicationCallItxnParams/) : [`ItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/type-aliases/ItxnParams/)

Defined in: [arc4/c2c.ts:21](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L21)

Conditional type which given a group transaction type, returns the equivalent inner transaction
params type.

## Type Parameters

### T

`T` _extends_ [`Transaction`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/type-aliases/Transaction/)
