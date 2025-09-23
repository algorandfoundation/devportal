---
title: algokit_utils.models.account.MultiSigAccount
---

#### _class_ algokit_utils.models.account.MultiSigAccount(multisig_params: [MultisigMetadata](#algokit_utils.models.account.MultisigMetadata), signing_accounts: list[[SigningAccount](#algokit_utils.models.account.SigningAccount)])

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

#### _property_ signing*accounts *: list[[SigningAccount](#algokit_utils.models.account.SigningAccount)]\_

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
