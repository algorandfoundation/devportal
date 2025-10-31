---
title: GtxnToItxnFields
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](docs/_md/arc4/README) / GtxnToItxnFields

> **GtxnToItxnFields**\<`T`\> = `T` _extends_ [`PaymentTxn`](/reference/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/paymenttxn/) ? [`PaymentItxnParams`](/reference/algorand-typescript/api/itxn/namespaces/itxn/classes/paymentitxnparams/) : `T` _extends_ [`KeyRegistrationTxn`](/reference/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/keyregistrationtxn/) ? [`KeyRegistrationItxnParams`](/reference/algorand-typescript/api/itxn/namespaces/itxn/classes/keyregistrationitxnparams/) : `T` _extends_ [`AssetConfigTxn`](/reference/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/assetconfigtxn/) ? [`AssetConfigItxnParams`](/reference/algorand-typescript/api/itxn/namespaces/itxn/classes/assetconfigitxnparams/) : `T` _extends_ [`AssetTransferTxn`](/reference/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/assettransfertxn/) ? [`AssetTransferItxnParams`](/reference/algorand-typescript/api/itxn/namespaces/itxn/classes/assettransferitxnparams/) : `T` _extends_ [`AssetFreezeTxn`](/reference/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/assetfreezetxn/) ? [`AssetFreezeItxnParams`](/reference/algorand-typescript/api/itxn/namespaces/itxn/classes/assetfreezeitxnparams/) : `T` _extends_ [`ApplicationCallTxn`](/reference/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/applicationcalltxn/) ? [`ApplicationCallItxnParams`](/reference/algorand-typescript/api/itxn/namespaces/itxn/classes/applicationcallitxnparams/) : [`ItxnParams`](/reference/algorand-typescript/api/itxn/namespaces/itxn/type-aliases/itxnparams/)

Defined in: [arc4/c2c.ts:21](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L21)

Conditional type which given a group transaction type, returns the equivalent inner transaction
params type.

## Type Parameters

### T

`T` _extends_ [`Transaction`](/reference/algorand-typescript/api/gtxn/namespaces/gtxn/type-aliases/transaction/)
