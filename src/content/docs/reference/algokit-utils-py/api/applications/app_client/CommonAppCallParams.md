---
title: CommonAppCallParams
---
#### *class* algokit_utils.applications.app_client.CommonAppCallParams

Common configuration for app call transaction parameters

#### account_references *: list[str] | None* *= None*

List of account addresses to reference

#### app_references *: list[int] | None* *= None*

List of app IDs to reference

#### asset_references *: list[int] | None* *= None*

List of asset IDs to reference

#### box_references *: list[[algokit_utils.models.state.BoxReference](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/state/boxreference/#algokit_utils.models.state.BoxReference) | algokit_utils.models.state.BoxIdentifier] | None* *= None*

List of box references to include

#### extra_fee *: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None* *= None*

Additional fee to add to transaction

#### lease *: bytes | None* *= None*

Transaction lease value

#### max_fee *: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None* *= None*

Maximum fee allowed for transaction

#### note *: bytes | None* *= None*

Custom note for the transaction

#### rekey_to *: str | None* *= None*

Address to rekey account to

#### sender *: str | None* *= None*

Sender address override

#### signer *: algosdk.atomic_transaction_composer.TransactionSigner | None* *= None*

Custom transaction signer

#### static_fee *: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None* *= None*

Fixed fee for transaction

#### validity_window *: int | None* *= None*

Number of rounds valid

#### first_valid_round *: int | None* *= None*

First valid round number

#### last_valid_round *: int | None* *= None*

Last valid round number

#### on_complete *: algosdk.transaction.OnComplete | None* *= None*

Optional on complete action