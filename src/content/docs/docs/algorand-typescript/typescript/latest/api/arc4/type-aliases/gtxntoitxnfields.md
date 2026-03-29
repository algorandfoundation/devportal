---
editUrl: false
next: false
prev: false
title: 'GtxnToItxnFields'
---

> **GtxnToItxnFields**\<`T`\> = `T` _extends_ [`PaymentTxn`](/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/paymenttxn/) ? [`PaymentItxnParams`](/algorand-typescript/api/itxn/namespaces/itxn/classes/paymentitxnparams/) : `T` _extends_ [`KeyRegistrationTxn`](/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/keyregistrationtxn/) ? [`KeyRegistrationItxnParams`](/algorand-typescript/api/itxn/namespaces/itxn/classes/keyregistrationitxnparams/) : `T` _extends_ [`AssetConfigTxn`](/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/assetconfigtxn/) ? [`AssetConfigItxnParams`](/algorand-typescript/api/itxn/namespaces/itxn/classes/assetconfigitxnparams/) : `T` _extends_ [`AssetTransferTxn`](/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/assettransfertxn/) ? [`AssetTransferItxnParams`](/algorand-typescript/api/itxn/namespaces/itxn/classes/assettransferitxnparams/) : `T` _extends_ [`AssetFreezeTxn`](/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/assetfreezetxn/) ? [`AssetFreezeItxnParams`](/algorand-typescript/api/itxn/namespaces/itxn/classes/assetfreezeitxnparams/) : `T` _extends_ [`ApplicationCallTxn`](/algorand-typescript/api/gtxn/namespaces/gtxn/interfaces/applicationcalltxn/) ? [`ApplicationCallItxnParams`](/algorand-typescript/api/itxn/namespaces/itxn/classes/applicationcallitxnparams/) : [`ItxnParams`](/algorand-typescript/api/itxn/namespaces/itxn/type-aliases/itxnparams/)

Defined in: [arc4/c2c.ts:21](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L21)

Conditional type which given a group transaction type, returns the equivalent inner transaction
params type.

## Type Parameters

### T

`T` _extends_ [`Transaction`](/algorand-typescript/api/gtxn/namespaces/gtxn/type-aliases/transaction/)
