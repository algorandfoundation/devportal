---
title: algokit_utils.protocols.account.TransactionSignerAccountProtocol
---
#### *class* algokit_utils.protocols.account.TransactionSignerAccountProtocol

Bases: `Protocol`

An account that has a transaction signer.
Implemented by SigningAccount, LogicSigAccount, MultiSigAccount and TransactionSignerAccount abstractions.

#### *property* address *: str*

The address of the account.

#### *property* signer *: algosdk.atomic_transaction_composer.TransactionSigner*

The transaction signer for the account.