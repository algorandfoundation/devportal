---
title: CommonAppCallParams
---

#### _class_ algokit_utils.applications.app_client.CommonAppCallParams

Common configuration for app call transaction parameters

#### account*references *: list[str] | None\_ _= None_

List of account addresses to reference

#### app*references *: list[int] | None\_ _= None_

List of app IDs to reference

#### asset*references *: list[int] | None\_ _= None_

List of asset IDs to reference

#### box*references *: list[[algokit_utils.models.state.BoxReference](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/state/boxreference/#algokit_utils.models.state.BoxReference) | algokit*utils.models.state.BoxIdentifier] | None* _= None_

List of box references to include

#### extra*fee *: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None\_ _= None_

Additional fee to add to transaction

#### lease _: bytes | None_ _= None_

Transaction lease value

#### max*fee *: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None\_ _= None_

Maximum fee allowed for transaction

#### note _: bytes | None_ _= None_

Custom note for the transaction

#### rekey*to *: str | None\_ _= None_

Address to rekey account to

#### sender _: str | None_ _= None_

Sender address override

#### signer _: algosdk.atomic_transaction_composer.TransactionSigner | None_ _= None_

Custom transaction signer

#### static*fee *: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None\_ _= None_

Fixed fee for transaction

#### validity*window *: int | None\_ _= None_

Number of rounds valid

#### first*valid_round *: int | None\_ _= None_

First valid round number

#### last*valid_round *: int | None\_ _= None_

Last valid round number

#### on*complete *: algosdk.transaction.OnComplete | None\_ _= None_

Optional on complete action
