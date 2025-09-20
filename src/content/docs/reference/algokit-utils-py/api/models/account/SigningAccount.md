---
title: SigningAccount
---
#### *class* algokit_utils.models.account.SigningAccount

Holds the private key and address for an account.

Provides access to the account’s private key, address, public key and transaction signer.

#### private_key *: str*

Base64 encoded private key

#### address *: str* *= ''*

Address for this account

#### *property* public_key *: bytes*

The public key for this account.

* **Returns:**
  The public key as bytes

#### *property* signer *: algosdk.atomic_transaction_composer.AccountTransactionSigner*

Get an AccountTransactionSigner for this account.

* **Returns:**
  A transaction signer for this account

#### *static* new_account() → [SigningAccount](#algokit_utils.models.account.SigningAccount)

Create a new random account.

* **Returns:**
  A new Account instance