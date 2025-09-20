---
title: AccountManager
---

#### _class_ algokit_utils.accounts.account_manager.AccountManager(client_manager: [algokit_utils.clients.client_manager.ClientManager](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/clients/client_manager/clientmanager/#algokit_utils.clients.client_manager.ClientManager))

Creates and keeps track of signing accounts that can sign transactions for a sending address.

This class provides functionality to create, track, and manage various types of accounts including
mnemonic-based, rekeyed, multisig, and logic signature accounts.

- **Parameters:**
  **client_manager** – The ClientManager client to use for algod and kmd clients
- **Example:**
  ```pycon
  >>> account_manager = AccountManager(client_manager)
  ```

#### _property_ kmd _: [algokit_utils.accounts.kmd_account_manager.KmdAccountManager](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/accounts/kmd_account_manager/kmdaccountmanager/#algokit_utils.accounts.kmd_account_manager.KmdAccountManager)_

KMD account manager that allows you to easily get and create accounts using KMD.

- **Return KmdAccountManager:**
  The ‘KmdAccountManager’ instance
- **Example:**
  ```pycon
  >>> kmd_manager = account_manager.kmd
  ```

#### set_default_signer(signer: algosdk.atomic_transaction_composer.TransactionSigner | [algokit_utils.protocols.account.TransactionSignerAccountProtocol](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/protocols/account/transactionsigneraccountprotocol/#algokit_utils.protocols.account.TransactionSignerAccountProtocol)) → typing_extensions.Self

Sets the default signer to use if no other signer is specified.

If this isn’t set and a transaction needs signing for a given sender
then an error will be thrown from get_signer / get_account.

- **Parameters:**
  **signer** – A TransactionSigner signer to use.
- **Returns:**
  The AccountManager so method calls can be chained
- **Example:**
  ```pycon
  >>> signer_account = account_manager.random()
  >>> account_manager.set_default_signer(signer_account)
  ```

#### set_signer(sender: str, signer: algosdk.atomic_transaction_composer.TransactionSigner) → typing_extensions.Self

Tracks the given TransactionSigner against the given sender address for later signing.

- **Parameters:**
  - **sender** – The sender address to use this signer for
  - **signer** – The TransactionSigner to sign transactions with for the given sender
- **Returns:**
  The AccountManager instance for method chaining
- **Example:**
  ```pycon
  >>> account_manager.set_signer("SENDERADDRESS", transaction_signer)
  ```

#### set_signers(\*, another_account_manager: [AccountManager](#algokit_utils.accounts.account_manager.AccountManager), overwrite_existing: bool = True) → typing_extensions.Self

Merges the given AccountManager into this one.

- **Parameters:**
  - **another_account_manager** – The AccountManager to merge into this one
  - **overwrite_existing** – Whether to overwrite existing signers in this manager
- **Returns:**
  The AccountManager instance for method chaining
- **Example:**
  ```pycon
  >>> accountManager2.set_signers(accountManager1)
  ```

#### set_signer_from_account(account: [algokit_utils.protocols.account.TransactionSignerAccountProtocol](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/protocols/account/transactionsigneraccountprotocol/#algokit_utils.protocols.account.TransactionSignerAccountProtocol)) → typing_extensions.Self

#### set_signer_from_account(signer: [algokit_utils.protocols.account.TransactionSignerAccountProtocol](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/protocols/account/transactionsigneraccountprotocol/#algokit_utils.protocols.account.TransactionSignerAccountProtocol)) → typing_extensions.Self

Tracks the given account for later signing.

Note: If you are generating accounts via the various methods on AccountManager
(like random, from_mnemonic, logic_sig, etc.) then they automatically get tracked.

The method accepts either a positional argument or a keyword argument named ‘account’ or ‘signer’.
The ‘signer’ parameter is deprecated and will show a warning when used.

- **Parameters:**

  - **\*args** –

    Variable positional arguments. The first argument should be a TransactionSignerAccountProtocol.

  - **\*\*kwargs** –

    Variable keyword arguments. Can include ‘account’ or ‘signer’ (deprecated) as
    TransactionSignerAccountProtocol.

- **Returns:**
  The AccountManager instance for method chaining
- **Raises:**
  **ValueError** – If no account or signer argument is provided
- **Example:**
  ```pycon
  >>> account_manager = AccountManager(client_manager)
  >>> # Using positional argument
  >>> account_manager.set_signer_from_account(
  ...     SigningAccount(private_key=algosdk.account.generate_account()[0])
  ... )
  >>> # Using keyword argument 'account'
  >>> account_manager.set_signer_from_account(
  ...     account=LogicSigAccount(AlgosdkLogicSigAccount(program, args))
  ... )
  >>> # Using deprecated keyword argument 'signer'
  >>> account_manager.set_signer_from_account(
  ...     signer=MultiSigAccount(multisig_params, [account1, account2])
  ... )
  ```

#### get_signer(sender: str | [algokit_utils.protocols.account.TransactionSignerAccountProtocol](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/protocols/account/transactionsigneraccountprotocol/#algokit_utils.protocols.account.TransactionSignerAccountProtocol)) → algosdk.atomic_transaction_composer.TransactionSigner

Returns the TransactionSigner for the given sender address.

If no signer has been registered for that address then the default signer is used if registered.

- **Parameters:**
  **sender** – The sender address or account
- **Returns:**
  The TransactionSigner
- **Raises:**
  **ValueError** – If no signer is found and no default signer is set
- **Example:**
  ```pycon
  >>> signer = account_manager.get_signer("SENDERADDRESS")
  ```

#### get_account(sender: str) → [algokit_utils.protocols.account.TransactionSignerAccountProtocol](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/protocols/account/transactionsigneraccountprotocol/#algokit_utils.protocols.account.TransactionSignerAccountProtocol)

Returns the TransactionSignerAccountProtocol for the given sender address.

- **Parameters:**
  **sender** – The sender address
- **Returns:**
  The TransactionSignerAccountProtocol
- **Raises:**
  **ValueError** – If no account is found or if the account is not a regular account
- **Example:**
  ```pycon
  >>> sender = account_manager.random().address
  >>> # ...
  >>> # Returns the `TransactionSignerAccountProtocol` for `sender` that has previously been registered
  >>> account = account_manager.get_account(sender)
  ```

#### get_information(sender: str | [algokit_utils.protocols.account.TransactionSignerAccountProtocol](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/protocols/account/transactionsigneraccountprotocol/#algokit_utils.protocols.account.TransactionSignerAccountProtocol)) → [AccountInformation](/reference/algokit-utils-py/api/accounts/account_manager/accountinformation/#algokit_utils.accounts.account_manager.AccountInformation)

Returns the given sender account’s current status, balance and spendable amounts.

See [https://dev.algorand.co/reference/rest-apis/algod/#account](https://dev.algorand.co/reference/rest-apis/algod/#account)
for response data schema details.

- **Parameters:**
  **sender** – The address or account compliant with TransactionSignerAccountProtocol protocol to look up
- **Returns:**
  The account information
- **Example:**
  ```pycon
  >>> address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA"
  >>> account_info = account_manager.get_information(address)
  ```

#### from_mnemonic(\*, mnemonic: str, sender: str | None = None) → [algokit_utils.models.account.SigningAccount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/signingaccount/#algokit_utils.models.account.SigningAccount)

Tracks and returns an Algorand account with secret key loaded by taking the mnemonic secret.

- **Parameters:**
  - **mnemonic** – The mnemonic secret representing the private key of an account
  - **sender** – Optional address to use as the sender
- **Returns:**
  The account

#### WARNING

Be careful how the mnemonic is handled. Never commit it into source control and ideally load it
from the environment (ideally via a secret storage service) rather than the file system.

- **Example:**
  ```pycon
  >>> account = account_manager.from_mnemonic("mnemonic secret ...")
  ```

#### from_environment(name: str, fund_with: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None) → [algokit_utils.models.account.SigningAccount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/signingaccount/#algokit_utils.models.account.SigningAccount)

Tracks and returns an Algorand account with private key loaded by convention from environment variables.

This allows you to write code that will work seamlessly in production and local development (LocalNet)
without manual config locally (including when you reset the LocalNet).

- **Parameters:**
  - **name** – The name identifier of the account
  - **fund_with** – Optional amount to fund the account with when it gets created
    (when targeting LocalNet)
- **Returns:**
  The account
- **Raises:**
  **ValueError** – If environment variable {NAME}\_MNEMONIC is missing when looking for account {NAME}

#### NOTE

Convention:
: \* **Non-LocalNet:** will load {NAME}\_MNEMONIC as a mnemonic secret.
If {NAME}\_SENDER is defined then it will use that for the sender address
(i.e. to support rekeyed accounts)

- **LocalNet:** will load the account from a KMD wallet called {NAME} and if that wallet doesn’t exist
  it will create it and fund the account for you

- **Example:**
  ```pycon
  >>> # If you have a mnemonic secret loaded into `MY_ACCOUNT_MNEMONIC` then you can call:
  >>> account = account_manager.from_environment('MY_ACCOUNT')
  >>> # If that code runs against LocalNet then a wallet called `MY_ACCOUNT` will automatically be created
  >>> # with an account that is automatically funded with the specified amount from the LocalNet dispenser
  ```

#### from_kmd(name: str, predicate: collections.abc.Callable[[dict[str, Any]], bool] | None = None, sender: str | None = None) → [algokit_utils.models.account.SigningAccount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/signingaccount/#algokit_utils.models.account.SigningAccount)

Tracks and returns an Algorand account with private key loaded from the given KMD wallet.

- **Parameters:**
  - **name** – The name of the wallet to retrieve an account from
  - **predicate** – Optional filter to use to find the account
  - **sender** – Optional sender address to use this signer for (aka a rekeyed account)
- **Returns:**
  The account
- **Raises:**
  **ValueError** – If unable to find KMD account with given name and predicate
- **Example:**
  ```pycon
  >>> # Get default funded account in a LocalNet:
  >>> defaultDispenserAccount = account.from_kmd('unencrypted-default-wallet',
  ...     lambda a: a.status != 'Offline' and a.amount > 1_000_000_000
  ... )
  ```

#### logicsig(program: bytes, args: list[bytes] | None = None) → [algokit_utils.models.account.LogicSigAccount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/logicsigaccount/#algokit_utils.models.account.LogicSigAccount)

Tracks and returns an account that represents a logic signature.

- **Parameters:**
  - **program** – The bytes that make up the compiled logic signature
  - **args** – Optional (binary) arguments to pass into the logic signature
- **Returns:**
  A logic signature account wrapper
- **Example:**
  ```pycon
  >>> account = account.logicsig(program, [new Uint8Array(3, ...)])
  ```

#### multisig(metadata: [algokit_utils.models.account.MultisigMetadata](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/multisigmetadata/#algokit_utils.models.account.MultisigMetadata), signing_accounts: list[[algokit_utils.models.account.SigningAccount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/signingaccount/#algokit_utils.models.account.SigningAccount)]) → [algokit_utils.models.account.MultiSigAccount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/multisigaccount/#algokit_utils.models.account.MultiSigAccount)

Tracks and returns an account that supports partial or full multisig signing.

- **Parameters:**
  - **metadata** – The metadata for the multisig account
  - **signing_accounts** – The signers that are currently present
- **Returns:**
  A multisig account wrapper
- **Example:**
  ```pycon
  >>> account = account_manager.multi_sig(
  ...     version=1,
  ...     threshold=1,
  ...     addrs=["ADDRESS1...", "ADDRESS2..."],
  ...     signing_accounts=[account1, account2]
  ... )
  ```

#### random() → [algokit_utils.models.account.SigningAccount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/signingaccount/#algokit_utils.models.account.SigningAccount)

Tracks and returns a new, random Algorand account.

- **Returns:**
  The account
- **Example:**
  ```pycon
  >>> account = account_manager.random()
  ```

#### localnet_dispenser() → [algokit_utils.models.account.SigningAccount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/signingaccount/#algokit_utils.models.account.SigningAccount)

Returns an Algorand account with private key loaded for the default LocalNet dispenser account.

This account can be used to fund other accounts.

- **Returns:**
  The account
- **Example:**
  ```pycon
  >>> account = account_manager.localnet_dispenser()
  ```

#### dispenser_from_environment() → [algokit_utils.models.account.SigningAccount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/signingaccount/#algokit_utils.models.account.SigningAccount)

Returns an account (with private key loaded) that can act as a dispenser from environment variables.

If environment variables are not present, returns the default LocalNet dispenser account.

- **Returns:**
  The account
- **Example:**
  ```pycon
  >>> account = account_manager.dispenser_from_environment()
  ```

#### rekeyed(\*, sender: str, account: [algokit_utils.protocols.account.TransactionSignerAccountProtocol](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/protocols/account/transactionsigneraccountprotocol/#algokit_utils.protocols.account.TransactionSignerAccountProtocol)) → [algokit_utils.models.account.TransactionSignerAccount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/transactionsigneraccount/#algokit_utils.models.account.TransactionSignerAccount) | [algokit_utils.models.account.SigningAccount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/signingaccount/#algokit_utils.models.account.SigningAccount)

Tracks and returns an Algorand account that is a rekeyed version of the given account to a new sender.

- **Parameters:**
  - **sender** – The account or address to use as the sender
  - **account** – The account to use as the signer for this new rekeyed account
- **Returns:**
  The rekeyed account
- **Example:**
  ```pycon
  >>> account = account.from_mnemonic("mnemonic secret ...")
  >>> rekeyed_account = account_manager.rekeyed(account, "SENDERADDRESS...")
  ```

#### rekey_account(account: str, rekey_to: str | [algokit_utils.protocols.account.TransactionSignerAccountProtocol](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/protocols/account/transactionsigneraccountprotocol/#algokit_utils.protocols.account.TransactionSignerAccountProtocol), \*, signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, note: bytes | None = None, lease: bytes | None = None, static_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None, extra_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None, max_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None, validity_window: int | None = None, first_valid_round: int | None = None, last_valid_round: int | None = None, suppress_log: bool | None = None) → [algokit_utils.transactions.transaction_composer.SendAtomicTransactionComposerResults](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/transactions/transaction_composer/sendatomictransactioncomposerresults/#algokit_utils.transactions.transaction_composer.SendAtomicTransactionComposerResults)

Rekey an account to a new address.

- **Parameters:**
  - **account** – The account to rekey
  - **rekey_to** – The address or account to rekey to
  - **signer** – Optional transaction signer
  - **note** – Optional transaction note
  - **lease** – Optional transaction lease
  - **static_fee** – Optional static fee
  - **extra_fee** – Optional extra fee
  - **max_fee** – Optional max fee
  - **validity_window** – Optional validity window
  - **first_valid_round** – Optional first valid round
  - **last_valid_round** – Optional last valid round
  - **suppress_log** – Optional flag to suppress logging
- **Returns:**
  The result of the transaction and the transaction that was sent

#### WARNING

Please be careful with this function and be sure to read the
[official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

- **Example:**
  ```pycon
  >>> # Basic example (with string addresses):
  >>> algorand.account.rekey_account("ACCOUNTADDRESS", "NEWADDRESS")
  >>> # Basic example (with signer accounts):
  >>> algorand.account.rekey_account(account1, newSignerAccount)
  >>> # Advanced example:
  >>> algorand.account.rekey_account(
  ...     account="ACCOUNTADDRESS",
  ...     rekey_to="NEWADDRESS",
  ...     lease='lease',
  ...     note='note',
  ...     first_valid_round=1000,
  ...     validity_window=10,
  ...     extra_fee=AlgoAmount.from_micro_algo(1000),
  ...     static_fee=AlgoAmount.from_micro_algo(1000),
  ...     max_fee=AlgoAmount.from_micro_algo(3000),
  ...     suppress_log=True,
  ... )
  ```

#### ensure_funded(account_to_fund: str | [algokit_utils.models.account.SigningAccount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/signingaccount/#algokit_utils.models.account.SigningAccount), dispenser_account: str | [algokit_utils.models.account.SigningAccount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/signingaccount/#algokit_utils.models.account.SigningAccount), min_spending_balance: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount), min_funding_increment: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None, send_params: [algokit_utils.models.transaction.SendParams](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/transaction/sendparams/#algokit_utils.models.transaction.SendParams) | None = None, signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, rekey_to: str | None = None, note: bytes | None = None, lease: bytes | None = None, static_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None, extra_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None, max_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None, validity_window: int | None = None, first_valid_round: int | None = None, last_valid_round: int | None = None) → [EnsureFundedResult](/reference/algokit-utils-py/api/accounts/account_manager/ensurefundedresult/#algokit_utils.accounts.account_manager.EnsureFundedResult) | None

Funds a given account using a dispenser account as a funding source.

Ensures the given account has a certain amount of Algo free to spend (accounting for
Algo locked in minimum balance requirement).

See [https://dev.algorand.co/concepts/smart-contracts/costs-constraints#mbr](https://dev.algorand.co/concepts/smart-contracts/costs-constraints#mbr) for details.

- **Parameters:**
  - **account_to_fund** – The account to fund
  - **dispenser_account** – The account to use as a dispenser funding source
  - **min_spending_balance** – The minimum balance of Algo that the account
    should have available to spend
  - **min_funding_increment** – Optional minimum funding increment
  - **send_params** – Parameters for the send operation, defaults to None
  - **signer** – Optional transaction signer
  - **rekey_to** – Optional rekey address
  - **note** – Optional transaction note
  - **lease** – Optional transaction lease
  - **static_fee** – Optional static fee
  - **extra_fee** – Optional extra fee
  - **max_fee** – Optional maximum fee
  - **validity_window** – Optional validity window
  - **first_valid_round** – Optional first valid round
  - **last_valid_round** – Optional last valid round
- **Returns:**
  The result of executing the dispensing transaction and the amountFunded if funds were needed,
  or None if no funds were needed
- **Example:**
  ```pycon
  >>> # Basic example:
  >>> algorand.account.ensure_funded("ACCOUNTADDRESS", "DISPENSERADDRESS", AlgoAmount.from_algo(1))
  >>> # With configuration:
  >>> algorand.account.ensure_funded(
  ...     "ACCOUNTADDRESS",
  ...     "DISPENSERADDRESS",
  ...     AlgoAmount.from_algo(1),
  ...     min_funding_increment=AlgoAmount.from_algo(2),
  ...     fee=AlgoAmount.from_micro_algo(1000),
  ...     suppress_log=True
  ... )
  ```

#### ensure_funded_from_environment(account_to_fund: str | [algokit_utils.models.account.SigningAccount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/signingaccount/#algokit_utils.models.account.SigningAccount), min_spending_balance: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount), \*, min_funding_increment: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None, send_params: [algokit_utils.models.transaction.SendParams](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/transaction/sendparams/#algokit_utils.models.transaction.SendParams) | None = None, signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, rekey_to: str | None = None, note: bytes | None = None, lease: bytes | None = None, static_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None, extra_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None, max_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None, validity_window: int | None = None, first_valid_round: int | None = None, last_valid_round: int | None = None) → [EnsureFundedResult](/reference/algokit-utils-py/api/accounts/account_manager/ensurefundedresult/#algokit_utils.accounts.account_manager.EnsureFundedResult) | None

Ensure an account is funded from a dispenser account configured in environment.

Uses a dispenser account retrieved from the environment, per the dispenser_from_environment method,
as a funding source such that the given account has a certain amount of Algo free to spend
(accounting for Algo locked in minimum balance requirement).

See [https://dev.algorand.co/concepts/smart-contracts/costs-constraints#mbr](https://dev.algorand.co/concepts/smart-contracts/costs-constraints#mbr) for details.

- **Parameters:**
  - **account_to_fund** – The account to fund
  - **min_spending_balance** – The minimum balance of Algo that the account should have available to
    spend
  - **min_funding_increment** – Optional minimum funding increment
  - **send_params** – Parameters for the send operation, defaults to None
  - **signer** – Optional transaction signer
  - **rekey_to** – Optional rekey address
  - **note** – Optional transaction note
  - **lease** – Optional transaction lease
  - **static_fee** – Optional static fee
  - **extra_fee** – Optional extra fee
  - **max_fee** – Optional maximum fee
  - **validity_window** – Optional validity window
  - **first_valid_round** – Optional first valid round
  - **last_valid_round** – Optional last valid round
- **Returns:**
  The result of executing the dispensing transaction and the amountFunded if funds were needed, or
  None if no funds were needed

#### NOTE

The dispenser account is retrieved from the account mnemonic stored in
process.env.DISPENSER_MNEMONIC and optionally process.env.DISPENSER_SENDER
if it’s a rekeyed account, or against default LocalNet if no environment variables present.

- **Example:**
  ```pycon
  >>> # Basic example:
  >>> algorand.account.ensure_funded_from_environment("ACCOUNTADDRESS", AlgoAmount.from_algo(1))
  >>> # With configuration:
  >>> algorand.account.ensure_funded_from_environment(
  ...     "ACCOUNTADDRESS",
  ...     AlgoAmount.from_algo(1),
  ...     min_funding_increment=AlgoAmount.from_algo(2),
  ...     fee=AlgoAmount.from_micro_algo(1000),
  ...     suppress_log=True
  ... )
  ```

#### ensure_funded_from_testnet_dispenser_api(account_to_fund: str | [algokit_utils.models.account.SigningAccount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/signingaccount/#algokit_utils.models.account.SigningAccount), dispenser_client: [algokit_utils.clients.dispenser_api_client.TestNetDispenserApiClient](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/clients/dispenser_api_client/testnetdispenserapiclient/#algokit_utils.clients.dispenser_api_client.TestNetDispenserApiClient), min_spending_balance: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount), \*, min_funding_increment: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None) → [EnsureFundedFromTestnetDispenserApiResult](/reference/algokit-utils-py/api/accounts/account_manager/ensurefundedfromtestnetdispenserapiresult/#algokit_utils.accounts.account_manager.EnsureFundedFromTestnetDispenserApiResult) | None

Ensure an account is funded using the TestNet Dispenser API.

Uses the TestNet Dispenser API as a funding source such that the account has a certain amount
of Algo free to spend (accounting for Algo locked in minimum balance requirement).

See [https://dev.algorand.co/concepts/smart-contracts/costs-constraints#mbr](https://dev.algorand.co/concepts/smart-contracts/costs-constraints#mbr) for details.

- **Parameters:**
  - **account_to_fund** – The account to fund
  - **dispenser_client** – The TestNet dispenser funding client
  - **min_spending_balance** – The minimum balance of Algo that the account should have
    available to spend
  - **min_funding_increment** – Optional minimum funding increment
- **Returns:**
  The result of executing the dispensing transaction and the amountFunded if funds were needed, or
  None if no funds were needed
- **Raises:**
  **ValueError** – If attempting to fund on non-TestNet network
- **Example:**
  ```pycon
  >>> # Basic example:
  >>> account_manager.ensure_funded_from_testnet_dispenser_api(
  ...     "ACCOUNTADDRESS",
  ...     algorand.client.get_testnet_dispenser_from_environment(),
  ...     AlgoAmount.from_algo(1)
  ... )
  >>> # With configuration:
  >>> account_manager.ensure_funded_from_testnet_dispenser_api(
  ...     "ACCOUNTADDRESS",
  ...     algorand.client.get_testnet_dispenser_from_environment(),
  ...     AlgoAmount.from_algo(1),
  ...     min_funding_increment=AlgoAmount.from_algo(2)
  ... )
  ```
