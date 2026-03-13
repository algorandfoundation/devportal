---
editUrl: false
next: false
prev: false
title: "GtxnToItxnFields"
---

> **GtxnToItxnFields**\<`T`\> = `T` *extends* [`PaymentTxn`](/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/paymenttxn/) ? [`PaymentItxnParams`](/algorand-typescript/api/itxn/namespaces/itxn/classes/paymentitxnparams/) : `T` *extends* [`KeyRegistrationTxn`](/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/keyregistrationtxn/) ? [`KeyRegistrationItxnParams`](/algorand-typescript/api/itxn/namespaces/itxn/classes/keyregistrationitxnparams/) : `T` *extends* [`AssetConfigTxn`](/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/assetconfigtxn/) ? [`AssetConfigItxnParams`](/algorand-typescript/api/itxn/namespaces/itxn/classes/assetconfigitxnparams/) : `T` *extends* [`AssetTransferTxn`](/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/assettransfertxn/) ? [`AssetTransferItxnParams`](/algorand-typescript/api/itxn/namespaces/itxn/classes/assettransferitxnparams/) : `T` *extends* [`AssetFreezeTxn`](/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/assetfreezetxn/) ? [`AssetFreezeItxnParams`](/algorand-typescript/api/itxn/namespaces/itxn/classes/assetfreezeitxnparams/) : `T` *extends* [`ApplicationCallTxn`](/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/applicationcalltxn/) ? [`ApplicationCallItxnParams`](/algorand-typescript/api/itxn/namespaces/itxn/classes/applicationcallitxnparams/) : [`ItxnParams`](/algorand-typescript/api/itxn/namespaces/itxn/type-aliases/itxnparams/)

Defined in: [arc4/c2c.ts:21](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L21)

Conditional type which given a group transaction type, returns the equivalent inner transaction
params type.

## Type Parameters

### T

`T` *extends* [`Transaction`](/algorand-typescript/api/gtxn/namespaces/gtxn/type-aliases/transaction/)
