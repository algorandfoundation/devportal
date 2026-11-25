---
title: Secret management
description: AlgoKit Utils provides flexible mechanisms for managing the secret material used to sign transactions. This includes loading mnemonics from environment variables or a secrets store, and integrating with an external KMS via a custom transaction signer.
---

In general, there are three levels of security when it comes to signing transactions with secret material:

1. KMS - The secret material is never exposed to the application
1. Key Wrapping and Unwrapping - The secret material is stored outside of the app (i.e. keychain) and only loaded in memory when signing
1. Plaintext - The secret material is stored in plaintext (i.e. in the environment) and is accessible throughout the runtime of the application

While using plaintext environment variables may be the easier to setup, it is **not recommended** for production use. A compromised environment and/or dependency could lead to the secret material being compromised. Additionally, it is easy to accidentally leak secrets in plaintext through git commits.

The most secure option is to use an external KMS that completely isolates the secret material from the application. KMS', however, can have a high setup cost which may be difficult for a solo developer or small team to manage properly. In this case, the next recommended option is to use key wrapping and unwrapping with a secrets manager. This allows the secret material to be stored securely outside of the application and only loaded in memory when signing is necessary. For example, on a local machine, the OS keyring can be used to store the secret material and only load it when signing transactions.

## Signing with a Wrapped Secret

### Using Keyring Secrets

To read a mnemonic from the OS keyring, you can use the [`keyring`](https://pypi.org/project/keyring/) library. This prevents the mnemonic from being stored in plaintext and ensures it is only loaded in memory when signing.

```python
import keyring

from algokit_utils import AlgoAmount, AlgorandClient, PaymentParams

MNEMONIC_NAME = "algorand-mainnet-mnemonic"

algorand = AlgorandClient.mainnet()

# Load the mnemonic from the OS keyring only when needed
mnemonic = keyring.get_password("algorand", MNEMONIC_NAME)
if mnemonic is None:
    raise ValueError(f"No mnemonic found in keyring for {MNEMONIC_NAME}")

# Register the account (and its signer) with the AccountManager
account = algorand.account.from_mnemonic(mnemonic=mnemonic)

result = algorand.send.payment(
    PaymentParams(
        sender=account.address,
        receiver="RECEIVERADDRESS",
        amount=AlgoAmount.from_algo(1),
    )
)
```

> [!NOTE]
> `from_mnemonic` keeps the derived private key in memory for the lifetime of the `AccountManager`, so prefer creating the account object as late as possible and scoping the `AlgorandClient` to the signing operation when handling production secrets.

## Signing with a KMS

To keep the secret material fully isolated from the application, implement a custom `algosdk` `TransactionSigner` that delegates signing to the external KMS (e.g. AWS KMS, Azure Key Vault, a hardware wallet, or a remote signing service). The application only ever sees the public address and the signed bytes:

```python
import base64

from algosdk import constants, encoding
from algosdk.atomic_transaction_composer import TransactionSigner
from algosdk.transaction import SignedTransaction, Transaction

from algokit_utils import AlgoAmount, AlgorandClient, PaymentParams

SENDER_ADDRESS = "SENDERADDRESS"


class KmsTransactionSigner(TransactionSigner):
    def sign_transactions(
        self, txn_group: list[Transaction], indexes: list[int]
    ) -> list[SignedTransaction]:
        signed: list[SignedTransaction] = []
        for i in indexes:
            txn = txn_group[i]
            # Canonical bytes to sign: "TX" prefix + msgpack-encoded transaction
            to_sign = constants.txid_prefix + base64.b64decode(encoding.msgpack_encode(txn))
            # Ask the external KMS to produce an ed25519 signature over these bytes.
            # The secret key never leaves the KMS.
            signature: bytes = my_kms_client.sign(to_sign)
            signed.append(SignedTransaction(txn, base64.b64encode(signature).decode()))
        return signed


algorand = AlgorandClient.mainnet()

# Register the KMS-backed signer for the sender address so AlgoKit Utils
# can automatically use it when sending transactions from that address
algorand.account.set_signer(SENDER_ADDRESS, KmsTransactionSigner())

result = algorand.send.payment(
    PaymentParams(
        sender=SENDER_ADDRESS,
        receiver="RECEIVERADDRESS",
        amount=AlgoAmount.from_algo(1),
    )
)
```

See [Account management](/docs/algokit-utils/python/latest/concepts/core/account/#registering-a-signer) for more details on registering signers with the `AccountManager`.

## Plaintext Environment Variables

For local development and testing, loading accounts from environment variables is the most convenient option. The `from_environment` method loads a mnemonic from the `{NAME}_MNEMONIC` environment variable (and, against LocalNet, automatically creates and funds the account via KMD if it doesn't exist):

```python
from algokit_utils import AlgorandClient

algorand = AlgorandClient.from_environment()

# Loads DEPLOYER_MNEMONIC (or creates a funded KMD account named DEPLOYER on LocalNet)
deployer = algorand.account.from_environment("DEPLOYER")
```

This works seamlessly across environments: in CI/CD or production the mnemonic comes from the environment (ideally injected from a secrets manager at deploy time, not committed to source control), while on LocalNet the account is created automatically.

> [!WARNING]
> Never commit mnemonics to source control, and avoid plaintext environment variables for MainNet accounts holding real value — prefer a wrapped secret or KMS as described above.
