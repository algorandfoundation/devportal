---
title: models.account
sidebar:
  label: Index
  order: 0
---
## Attributes

| [`DISPENSER_ACCOUNT_NAME`](#algokit_utils.models.account.DISPENSER_ACCOUNT_NAME)   |    |
|------------------------------------------------------------------------------------|----|

## Classes

| [`TransactionSignerAccount`](#algokit_utils.models.account.TransactionSignerAccount)   | A basic transaction signer account.                             |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [`SigningAccount`](#algokit_utils.models.account.SigningAccount)                       | Holds the private key and address for an account.               |
| [`MultisigMetadata`](#algokit_utils.models.account.MultisigMetadata)                   | Metadata for a multisig account.                                |
| [`MultiSigAccount`](#algokit_utils.models.account.MultiSigAccount)                     | Account wrapper that supports partial or full multisig signing. |
| [`LogicSigAccount`](#algokit_utils.models.account.LogicSigAccount)                     | Account wrapper that supports logic sig signing.                |

## Module Contents

### algokit_utils.models.account.DISPENSER_ACCOUNT_NAME *= 'DISPENSER'*

### *class* algokit_utils.models.account.TransactionSignerAccount

A basic transaction signer account.

#### address *: str*

#### signer *: algosdk.atomic_transaction_composer.TransactionSigner*

### *class* algokit_utils.models.account.SigningAccount

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

### *class* algokit_utils.models.account.MultisigMetadata

Metadata for a multisig account.

Contains the version, threshold and addresses for a multisig account.

#### version *: int*

#### threshold *: int*

#### addresses *: list[str]*

### *class* algokit_utils.models.account.MultiSigAccount(multisig_params: [MultisigMetadata](#algokit_utils.models.account.MultisigMetadata), signing_accounts: list[[SigningAccount](#algokit_utils.models.account.SigningAccount)])

Account wrapper that supports partial or full multisig signing.

Provides functionality to manage and sign transactions for a multisig account.

* **Parameters:**
  * **multisig_params** – The parameters for the multisig account
  * **signing_accounts** – The list of accounts that can sign

#### *property* multisig *: algosdk.transaction.Multisig*

Get the underlying algosdk.transaction.Multisig object instance.

* **Returns:**
  The algosdk.transaction.Multisig object instance

#### *property* params *: [MultisigMetadata](#algokit_utils.models.account.MultisigMetadata)*

Get the parameters for the multisig account.

* **Returns:**
  The multisig account parameters

#### *property* signing_accounts *: list[[SigningAccount](#algokit_utils.models.account.SigningAccount)]*

Get the list of accounts that are present to sign.

* **Returns:**
  The list of signing accounts

#### *property* address *: str*

Get the address of the multisig account.

* **Returns:**
  The multisig account address

#### *property* signer *: algosdk.atomic_transaction_composer.TransactionSigner*

Get the transaction signer for this multisig account.

* **Returns:**
  The multisig transaction signer

#### sign(transaction: algosdk.transaction.Transaction) → algosdk.transaction.MultisigTransaction

Sign the given transaction with all present signers.

* **Parameters:**
  **transaction** – Either a transaction object or a raw, partially signed transaction
* **Returns:**
  The transaction signed by the present signers

### *class* algokit_utils.models.account.LogicSigAccount(program: bytes, args: list[bytes] | None)

Account wrapper that supports logic sig signing.

Provides functionality to manage and sign transactions for a logic sig account.

#### *property* lsig *: algosdk.transaction.LogicSigAccount*

Get the underlying algosdk.transaction.LogicSigAccount object instance.

* **Returns:**
  The algosdk.transaction.LogicSigAccount object instance

#### *property* address *: str*

Get the address of the logic sig account.

If the LogicSig is delegated to another account, this will return the address of that account.

If the LogicSig is not delegated to another account, this will return an escrow address that is the hash of
the LogicSig’s program code.

* **Returns:**
  The logic sig account address

#### *property* signer *: algosdk.atomic_transaction_composer.LogicSigTransactionSigner*

Get the transaction signer for this multisig account.

* **Returns:**
  The multisig transaction signer