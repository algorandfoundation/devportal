---
editUrl: false
next: false
prev: false
title: "PaymentParams"
---

> **PaymentParams** = [`CommonTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/commontransactionparams/) & `object`

Defined in: [src/types/composer.ts:87](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L87)

Parameters to define a payment transaction.

## Type Declaration

### amount

> **amount**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Amount to send

### closeRemainderTo?

> `optional` **closeRemainderTo?**: `string` \| `Address`

If given, close the sender account and send the remaining balance to this address

*Warning:* Be careful with this parameter as it can lead to loss of funds if not used correctly.

### receiver

> **receiver**: `string` \| `Address`

The address of the account that will receive the Algo
