---
title: "algokit_utils.transactions.builders.common"
---

<div class="api-ref">

# algokit_utils.transactions.builders.common

## Attributes

| [`SuggestedParamsLike`](#algokit_utils.transactions.builders.common.SuggestedParamsLike)   |    |
|--------------------------------------------------------------------------------------------|----|

## Classes

| [`TransactionHeader`](#algokit_utils.transactions.builders.common.TransactionHeader)   |    |
|----------------------------------------------------------------------------------------|----|
| [`FeeConfig`](#algokit_utils.transactions.builders.common.FeeConfig)                   |    |
| [`BuiltTransaction`](#algokit_utils.transactions.builders.common.BuiltTransaction)     |    |

## Functions

| [`build_transaction_header`](#algokit_utils.transactions.builders.common.build_transaction_header)(→ tuple[TransactionHeader, ...)   |    |
|--------------------------------------------------------------------------------------------------------------------------------------|----|
| [`build_transaction`](#algokit_utils.transactions.builders.common.build_transaction)(...)                                            |    |
| [`apply_transaction_fees`](#algokit_utils.transactions.builders.common.apply_transaction_fees)(→ BuiltTransaction)                   |    |
| [`encode_lease`](#algokit_utils.transactions.builders.common.encode_lease)(→ bytes | None)                                           |    |
| [`calculate_inner_fee_delta`](#algokit_utils.transactions.builders.common.calculate_inner_fee_delta)(...)                            |    |

## Module Contents

### algokit_utils.transactions.builders.common.SuggestedParamsLike

### *class* TransactionHeader

#### sender *: str*

#### first_valid *: int*

#### last_valid *: int*

#### genesis_hash *: bytes*

#### genesis_id *: str | None*

#### note *: bytes | None*

#### lease *: bytes | None*

#### rekey_to *: str | None*

### *class* FeeConfig

#### fee_per_byte *: int*

#### min_fee *: int*

#### flat_fee *: bool*

### *class* BuiltTransaction

#### txn *: Transaction*

#### logical_max_fee *: [AlgoAmount](/docs/algokit-utils/python/latest/api/algokit_utils/models/amount/#algokit_utils.models.amount.AlgoAmount) | None*

### algokit_utils.transactions.builders.common.build_transaction_header(params: [CommonTxnParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.CommonTxnParams), suggested_params: SuggestedParamsLike, \*, default_validity_window: int, default_validity_window_is_explicit: bool, is_localnet: bool) → tuple[[TransactionHeader](#algokit_utils.transactions.builders.common.TransactionHeader), [FeeConfig](#algokit_utils.transactions.builders.common.FeeConfig)]

### algokit_utils.transactions.builders.common.build_transaction(txn_type: TransactionType, header: [TransactionHeader](#algokit_utils.transactions.builders.common.TransactionHeader), \*, payment: PaymentTransactionFields | None = None, asset_transfer: AssetTransferTransactionFields | None = None, asset_config: AssetConfigTransactionFields | None = None, asset_freeze: AssetFreezeTransactionFields | None = None, application_call: AppCallTransactionFields | None = None, key_registration: KeyRegistrationTransactionFields | None = None) → Transaction

### algokit_utils.transactions.builders.common.apply_transaction_fees(txn: Transaction, params: [CommonTxnParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.CommonTxnParams), fee_config: [FeeConfig](#algokit_utils.transactions.builders.common.FeeConfig)) → [BuiltTransaction](#algokit_utils.transactions.builders.common.BuiltTransaction)

### algokit_utils.transactions.builders.common.encode_lease(lease: str | bytes | None) → bytes | None

### algokit_utils.transactions.builders.common.calculate_inner_fee_delta(inner_txns: list[PendingTransactionResponse] | None, min_fee: int, acc: [FeeDelta](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/fee_coverage/#algokit_utils.transactions.fee_coverage.FeeDelta) | None = None) → [FeeDelta](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/fee_coverage/#algokit_utils.transactions.fee_coverage.FeeDelta) | None

</div>
