---
title: MultiSigAccount
---
#### *class* algokit_utils.models.account.MultiSigAccount(multisig_params: [MultisigMetadata](/reference/algokit-utils-py/api/models/account/multisigmetadata/#algokit_utils.models.account.MultisigMetadata), signing_accounts: list[[SigningAccount](/reference/algokit-utils-py/api/models/account/signingaccount/#algokit_utils.models.account.SigningAccount)])

Account wrapper that supports partial or full multisig signing.

Provides functionality to manage and sign transactions for a multisig account.

* **Parameters:**
  * **multisig_params** – The parameters for the multisig account
  * **signing_accounts** – The list of accounts that can sign

#### *property* multisig *: algosdk.transaction.Multisig*

Get the underlying algosdk.transaction.Multisig object instance.

* **Returns:**
  The algosdk.transaction.Multisig object instance

#### *property* params *: [MultisigMetadata](/reference/algokit-utils-py/api/models/account/multisigmetadata/#algokit_utils.models.account.MultisigMetadata)*

Get the parameters for the multisig account.

* **Returns:**
  The multisig account parameters

#### *property* signing_accounts *: list[[SigningAccount](/reference/algokit-utils-py/api/models/account/signingaccount/#algokit_utils.models.account.SigningAccount)]*

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