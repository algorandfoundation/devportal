---
title: algokit_utils.transactions.transaction_composer.OnlineKeyRegistrationParams
---

#### _class_ algokit_utils.transactions.transaction_composer.OnlineKeyRegistrationParams

Bases: `_CommonTxnParams`

Parameters for online key registration.

#### vote*key *: str\_

The root participation public key

#### selection*key *: str\_

The VRF public key

#### vote*first *: int\_

The first round that the participation key is valid

#### vote*last *: int\_

The last round that the participation key is valid

#### vote*key_dilution *: int\_

The dilution for the 2-level participation key

#### state*proof_key *: bytes | None\_ _= None_

The 64 byte state proof public key commitment, defaults to None
