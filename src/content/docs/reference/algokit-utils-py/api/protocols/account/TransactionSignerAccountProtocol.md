---
title: TransactionSignerAccountProtocol
sidebar:
  label: TransactionSignerAccountProtocol
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.protocols.account.TransactionSignerAccountProtocol

Bases: `Protocol`

An account that has a transaction signer.
Implemented by SigningAccount, LogicSigAccount, MultiSigAccount and TransactionSignerAccount abstractions.

#### _property_ address _: str_

The address of the account.

#### _property_ signer _: algosdk.atomic_transaction_composer.TransactionSigner_

The transaction signer for the account.
