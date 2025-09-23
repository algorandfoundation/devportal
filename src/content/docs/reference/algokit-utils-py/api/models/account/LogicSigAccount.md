---
title: algokit_utils.models.account.LogicSigAccount
---
#### *class* algokit_utils.models.account.LogicSigAccount(program: bytes, args: list[bytes] | None)

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