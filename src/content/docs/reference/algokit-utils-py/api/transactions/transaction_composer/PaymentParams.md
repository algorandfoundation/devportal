---
title: PaymentParams
sidebar:
  label: PaymentParams
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.transactions.transaction_composer.PaymentParams

Bases: `_CommonTxnParams`

Parameters for a payment transaction.

#### receiver _: str_

The account that will receive the ALGO

#### amount _: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount)_

Amount to send

#### close*remainder_to *: str | None\_ _= None_

If given, close the sender account and send the remaining balance to this address, defaults to None
