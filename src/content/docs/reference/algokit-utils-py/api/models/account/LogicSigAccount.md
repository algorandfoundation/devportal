---
title: LogicSigAccount
sidebar:
  label: LogicSigAccount
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.models.account.LogicSigAccount(program: bytes, args: list[bytes] | None)

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
