---
title: PaymentParams
---
#### *class* algokit_utils.transactions.transaction_composer.PaymentParams

Bases: `_CommonTxnParams`

Parameters for a payment transaction.

#### receiver *: str*

The account that will receive the ALGO

#### amount *: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount)*

Amount to send

#### close_remainder_to *: str | None* *= None*

If given, close the sender account and send the remaining balance to this address, defaults to None