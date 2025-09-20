---
title: OnlineKeyRegistrationParams
---
#### *class* algokit_utils.transactions.transaction_composer.OnlineKeyRegistrationParams

Bases: `_CommonTxnParams`

Parameters for online key registration.

#### vote_key *: str*

The root participation public key

#### selection_key *: str*

The VRF public key

#### vote_first *: int*

The first round that the participation key is valid

#### vote_last *: int*

The last round that the participation key is valid

#### vote_key_dilution *: int*

The dilution for the 2-level participation key

#### state_proof_key *: bytes | None* *= None*

The 64 byte state proof public key commitment, defaults to None