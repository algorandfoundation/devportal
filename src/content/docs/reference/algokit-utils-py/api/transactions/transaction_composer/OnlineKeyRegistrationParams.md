---
title: OnlineKeyRegistrationParams
sidebar:
  label: OnlineKeyRegistrationParams
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.transactions.transaction_composer.OnlineKeyRegistrationParams

Bases: `_CommonTxnParams`

Parameters for online key registration.

#### vote_key _: str_

The root participation public key

#### selection_key _: str_

The VRF public key

#### vote_first _: int_

The first round that the participation key is valid

#### vote_last _: int_

The last round that the participation key is valid

#### vote_key_dilution _: int_

The dilution for the 2-level participation key

#### state_proof_key _: bytes | None_ _= None_

The 64 byte state proof public key commitment, defaults to None
