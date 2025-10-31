---
title: SigningAccount
sidebar:
  label: SigningAccount
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.models.account.SigningAccount

Holds the private key and address for an account.

Provides access to the account’s private key, address, public key and transaction signer.

#### private*key *: str\_

Base64 encoded private key

#### address _: str_ _= ''_

Address for this account

#### _property_ public*key *: bytes\_

The public key for this account.

- **Returns:**
  The public key as bytes

#### _property_ signer _: algosdk.atomic_transaction_composer.AccountTransactionSigner_

Get an AccountTransactionSigner for this account.

- **Returns:**
  A transaction signer for this account

#### _static_ new_account() → [SigningAccount](#algokit_utils.models.account.SigningAccount)

Create a new random account.

- **Returns:**
  A new Account instance
