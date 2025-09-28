---
title: CommonAppCallParams
sidebar:
  label: CommonAppCallParams
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.applications.app_client.CommonAppCallParams

Common configuration for app call transaction parameters

#### account_references _: list[str] | None_ _= None_

List of account addresses to reference

#### app_references _: list[int] | None_ _= None_

List of app IDs to reference

#### asset_references _: list[int] | None_ _= None_

List of asset IDs to reference

#### box_references _: list[[algokit_utils.models.state.BoxReference](/reference/algokit-utils-py/api/models/state/boxreference/#algokit_utils.models.state.BoxReference) | algokit_utils.models.state.BoxIdentifier] | None_ _= None_

List of box references to include

#### extra_fee _: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None_ _= None_

Additional fee to add to transaction

#### lease _: bytes | None_ _= None_

Transaction lease value

#### max_fee _: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None_ _= None_

Maximum fee allowed for transaction

#### note _: bytes | None_ _= None_

Custom note for the transaction

#### rekey_to _: str | None_ _= None_

Address to rekey account to

#### sender _: str | None_ _= None_

Sender address override

#### signer _: algosdk.atomic_transaction_composer.TransactionSigner | None_ _= None_

Custom transaction signer

#### static_fee _: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None_ _= None_

Fixed fee for transaction

#### validity_window _: int | None_ _= None_

Number of rounds valid

#### first_valid_round _: int | None_ _= None_

First valid round number

#### last_valid_round _: int | None_ _= None_

Last valid round number

#### on_complete _: algosdk.transaction.OnComplete | None_ _= None_

Optional on complete action
