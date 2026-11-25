---
editUrl: false
next: false
prev: false
title: "GtxnToItxnFields"
---

> **GtxnToItxnFields**\<`T`\> = `T` *extends* [`PaymentTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/paymenttxn/) ? [`PaymentItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/paymentitxnparams/) : `T` *extends* [`KeyRegistrationTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/keyregistrationtxn/) ? [`KeyRegistrationItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/keyregistrationitxnparams/) : `T` *extends* [`AssetConfigTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/assetconfigtxn/) ? [`AssetConfigItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/assetconfigitxnparams/) : `T` *extends* [`AssetTransferTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/assettransfertxn/) ? [`AssetTransferItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/assettransferitxnparams/) : `T` *extends* [`AssetFreezeTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/assetfreezetxn/) ? [`AssetFreezeItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/assetfreezeitxnparams/) : `T` *extends* [`ApplicationCallTxn`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/interfaces/applicationcalltxn/) ? [`ApplicationCallItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/classes/applicationcallitxnparams/) : [`ItxnParams`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/type-aliases/itxnparams/)

Defined in: [arc4/c2c.ts:21](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L21)

Conditional type which given a group transaction type, returns the equivalent inner transaction
params type.

## Type Parameters

### T

`T` *extends* [`Transaction`](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/type-aliases/transaction/)
