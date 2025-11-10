---
title: models.account
sidebar:
  label: Index
  order: 0
---

## Attributes

| [`DISPENSER_ACCOUNT_NAME`](#algokit_utils.models.account.DISPENSER_ACCOUNT_NAME) |     |
| -------------------------------------------------------------------------------- | --- |

## Classes

| [`TransactionSignerAccount`](#algokit_utils.models.account.TransactionSignerAccount) | A basic transaction signer account.                             |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| [`SigningAccount`](#algokit_utils.models.account.SigningAccount)                     | Holds the private key and address for an account.               |
| [`MultisigMetadata`](#algokit_utils.models.account.MultisigMetadata)                 | Metadata for a multisig account.                                |
| [`MultiSigAccount`](#algokit_utils.models.account.MultiSigAccount)                   | Account wrapper that supports partial or full multisig signing. |
| [`LogicSigAccount`](#algokit_utils.models.account.LogicSigAccount)                   | Account wrapper that supports logic sig signing.                |

## Module Contents

### algokit_utils.models.account.DISPENSER_ACCOUNT_NAME _= 'DISPENSER'_

### _class_ algokit_utils.models.account.TransactionSignerAccount

A basic transaction signer account.

#### address _: str_

#### signer _: algosdk.atomic_transaction_composer.TransactionSigner_

### _class_ algokit_utils.models.account.SigningAccount

Holds the private key and address for an account.

Provides access to the account’s private key, address, public key and transaction signer.

#### private_key _: str_

Base64 encoded private key

#### address _: str_ _= ''_

Address for this account

#### _property_ public_key _: bytes_

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

### _class_ algokit_utils.models.account.MultisigMetadata

Metadata for a multisig account.

Contains the version, threshold and addresses for a multisig account.

#### version _: int_

#### threshold _: int_

#### addresses _: list[str]_

### _class_ algokit_utils.models.account.MultiSigAccount(multisig_params: [MultisigMetadata](#algokit_utils.models.account.MultisigMetadata), signing_accounts: list[[SigningAccount](#algokit_utils.models.account.SigningAccount)])

Account wrapper that supports partial or full multisig signing.

Provides functionality to manage and sign transactions for a multisig account.

- **Parameters:**
  - **multisig_params** – The parameters for the multisig account
  - **signing_accounts** – The list of accounts that can sign

#### _property_ multisig _: algosdk.transaction.Multisig_

Get the underlying algosdk.transaction.Multisig object instance.

- **Returns:**
  The algosdk.transaction.Multisig object instance

#### _property_ params _: [MultisigMetadata](#algokit_utils.models.account.MultisigMetadata)_

Get the parameters for the multisig account.

- **Returns:**
  The multisig account parameters

#### _property_ signing_accounts _: list[[SigningAccount](#algokit_utils.models.account.SigningAccount)]_

Get the list of accounts that are present to sign.

- **Returns:**
  The list of signing accounts

#### _property_ address _: str_

Get the address of the multisig account.

- **Returns:**
  The multisig account address

#### _property_ signer _: algosdk.atomic_transaction_composer.TransactionSigner_

Get the transaction signer for this multisig account.

- **Returns:**
  The multisig transaction signer

#### sign(transaction: algosdk.transaction.Transaction) → algosdk.transaction.MultisigTransaction

Sign the given transaction with all present signers.

- **Parameters:**
  **transaction** – Either a transaction object or a raw, partially signed transaction
- **Returns:**
  The transaction signed by the present signers

### _class_ algokit_utils.models.account.LogicSigAccount(program: bytes, args: list[bytes] | None)

Account wrapper that supports logic sig signing.

Provides functionality to manage and sign transactions for a logic sig account.

#### _property_ lsig _: algosdk.transaction.LogicSigAccount_

Get the underlying algosdk.transaction.LogicSigAccount object instance.

- **Returns:**
  The algosdk.transaction.LogicSigAccount object instance

#### _property_ address _: str_

Get the address of the logic sig account.

If the LogicSig is delegated to another account, this will return the address of that account.

If the LogicSig is not delegated to another account, this will return an escrow address that is the hash of
the LogicSig’s program code.

- **Returns:**
  The logic sig account address

#### _property_ signer _: algosdk.atomic_transaction_composer.LogicSigTransactionSigner_

Get the transaction signer for this multisig account.

- **Returns:**
  The multisig transaction signer
