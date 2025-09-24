---
title: TransactionWrapper
sidebar:
  label: TransactionWrapper
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.models.transaction.TransactionWrapper(transaction: algosdk.transaction.Transaction)

Wrapper around algosdk.transaction.Transaction with optional property validators

#### _property_ raw _: algosdk.transaction.Transaction_

#### _property_ payment _: algosdk.transaction.PaymentTxn_

#### _property_ keyreg _: algosdk.transaction.KeyregTxn_

#### _property_ asset*config *: algosdk.transaction.AssetConfigTxn\_

#### _property_ asset*transfer *: algosdk.transaction.AssetTransferTxn\_

#### _property_ asset*freeze *: algosdk.transaction.AssetFreezeTxn\_

#### _property_ application*call *: algosdk.transaction.ApplicationCallTxn\_

#### _property_ state*proof *: algosdk.transaction.StateProofTxn\_
