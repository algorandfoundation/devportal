---
title: GtxnToItxnFields
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/readme/) / GtxnToItxnFields

> **GtxnToItxnFields**\<`T`\> = `T` _extends_ [`PaymentTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/paymenttxn/) ? [`PaymentItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/paymentitxnparams/) : `T` _extends_ [`KeyRegistrationTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/keyregistrationtxn/) ? [`KeyRegistrationItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/keyregistrationitxnparams/) : `T` _extends_ [`AssetConfigTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/assetconfigtxn/) ? [`AssetConfigItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/assetconfigitxnparams/) : `T` _extends_ [`AssetTransferTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/assettransfertxn/) ? [`AssetTransferItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/assettransferitxnparams/) : `T` _extends_ [`AssetFreezeTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/assetfreezetxn/) ? [`AssetFreezeItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/assetfreezeitxnparams/) : `T` _extends_ [`ApplicationCallTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/applicationcalltxn/) ? [`ApplicationCallItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/applicationcallitxnparams/) : [`ItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/type-aliases/itxnparams/)

Defined in: [arc4/c2c.ts:21](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L21)

Conditional type which given a group transaction type, returns the equivalent inner transaction
params type.

## Type Parameters

### T

`T` _extends_ [`Transaction`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/type-aliases/transaction/)
