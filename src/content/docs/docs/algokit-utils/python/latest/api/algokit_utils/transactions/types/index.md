---
title: 'algokit_utils.transactions.types'
---

<div class="api-ref">

# algokit_utils.transactions.types

## Attributes

| [`MethodCallParams`](#algokit_utils.transactions.types.MethodCallParams) |     |
| ------------------------------------------------------------------------ | --- |
| [`TxnParams`](#algokit_utils.transactions.types.TxnParams)               |     |

## Classes

| [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)                           |                                |
| ------------------------------------------------------------------------------------------------ | ------------------------------ |
| [`PaymentParams`](#algokit_utils.transactions.types.PaymentParams)                               |                                |
| [`AssetCreateParams`](#algokit_utils.transactions.types.AssetCreateParams)                       |                                |
| [`AssetConfigParams`](#algokit_utils.transactions.types.AssetConfigParams)                       |                                |
| [`AssetFreezeParams`](#algokit_utils.transactions.types.AssetFreezeParams)                       |                                |
| [`AssetDestroyParams`](#algokit_utils.transactions.types.AssetDestroyParams)                     |                                |
| [`OnlineKeyRegistrationParams`](#algokit_utils.transactions.types.OnlineKeyRegistrationParams)   |                                |
| [`OfflineKeyRegistrationParams`](#algokit_utils.transactions.types.OfflineKeyRegistrationParams) |                                |
| [`AssetTransferParams`](#algokit_utils.transactions.types.AssetTransferParams)                   |                                |
| [`AssetOptInParams`](#algokit_utils.transactions.types.AssetOptInParams)                         |                                |
| [`AssetOptOutParams`](#algokit_utils.transactions.types.AssetOptOutParams)                       |                                |
| [`AppCallParams`](#algokit_utils.transactions.types.AppCallParams)                               |                                |
| [`AppCreateSchema`](#algokit_utils.transactions.types.AppCreateSchema)                           | dict() -> new empty dictionary |
| [`AppCreateParams`](#algokit_utils.transactions.types.AppCreateParams)                           |                                |
| [`AppUpdateParams`](#algokit_utils.transactions.types.AppUpdateParams)                           |                                |
| [`AppDeleteParams`](#algokit_utils.transactions.types.AppDeleteParams)                           |                                |
| [`AppMethodCallParams`](#algokit_utils.transactions.types.AppMethodCallParams)                   |                                |
| [`AppCallMethodCallParams`](#algokit_utils.transactions.types.AppCallMethodCallParams)           |                                |
| [`AppCreateMethodCallParams`](#algokit_utils.transactions.types.AppCreateMethodCallParams)       |                                |
| [`AppUpdateMethodCallParams`](#algokit_utils.transactions.types.AppUpdateMethodCallParams)       |                                |
| [`AppDeleteMethodCallParams`](#algokit_utils.transactions.types.AppDeleteMethodCallParams)       |                                |

## Module Contents

### _class_ CommonTxnParams

#### sender _: str_

#### signer _: TransactionSigner | AddressWithTransactionSigner | None_ _= None_

#### rekey_to _: str | None_ _= None_

#### note _: bytes | None_ _= None_

#### lease _: bytes | None_ _= None_

#### static_fee _: [AlgoAmount](/docs/algokit-utils/python/latest/api/algokit_utils/models/amount/#algokit_utils.models.amount.AlgoAmount) | None_ _= None_

#### extra_fee _: [AlgoAmount](/docs/algokit-utils/python/latest/api/algokit_utils/models/amount/#algokit_utils.models.amount.AlgoAmount) | None_ _= None_

#### max_fee _: [AlgoAmount](/docs/algokit-utils/python/latest/api/algokit_utils/models/amount/#algokit_utils.models.amount.AlgoAmount) | None_ _= None_

#### validity_window _: int | None_ _= None_

#### first_valid_round _: int | None_ _= None_

#### last_valid_round _: int | None_ _= None_

### _class_ PaymentParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### receiver _: str_

#### amount _: [AlgoAmount](/docs/algokit-utils/python/latest/api/algokit_utils/models/amount/#algokit_utils.models.amount.AlgoAmount)_

#### close_remainder_to _: str | None_ _= None_

### _class_ AssetCreateParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### total _: int_

#### asset_name _: str | None_ _= None_

#### unit_name _: str | None_ _= None_

#### url _: str | None_ _= None_

#### decimals _: int | None_ _= None_

#### default_frozen _: bool | None_ _= None_

#### manager _: str | None_ _= None_

#### reserve _: str | None_ _= None_

#### freeze _: str | None_ _= None_

#### clawback _: str | None_ _= None_

#### metadata_hash _: bytes | None_ _= None_

### _class_ AssetConfigParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### asset_id _: int_

#### manager _: str | None_ _= None_

#### reserve _: str | None_ _= None_

#### freeze _: str | None_ _= None_

#### clawback _: str | None_ _= None_

### _class_ AssetFreezeParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### asset_id _: int_

#### account _: str_

#### frozen _: bool_

### _class_ AssetDestroyParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### asset_id _: int_

### _class_ OnlineKeyRegistrationParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### vote_key _: str_

#### selection_key _: str_

#### state_proof_key _: bytes | None_ _= None_

#### vote_first _: int_ _= 0_

#### vote_last _: int_ _= 0_

#### vote_key_dilution _: int_ _= 0_

#### nonparticipation _: bool | None_ _= None_

### _class_ OfflineKeyRegistrationParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### prevent_account_from_ever_participating_again _: bool_ _= True_

### _class_ AssetTransferParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### asset_id _: int_

#### amount _: int_

#### receiver _: str_

#### close_asset_to _: str | None_ _= None_

#### clawback_target _: str | None_ _= None_

### _class_ AssetOptInParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### asset_id _: int_

### _class_ AssetOptOutParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### asset_id _: int_

#### creator _: str_

### _class_ AppCallParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### app_id _: int_

#### args _: list[bytes] | None_ _= None_

#### account_references _: list[str] | None_ _= None_

#### app_references _: list[int] | None_ _= None_

#### asset_references _: list[int] | None_ _= None_

#### box_references _: list[algokit_utils.models.state.BoxReference | BoxIdentifier] | None_ _= None_

#### on_complete _: OnApplicationComplete | None_ _= None_

### _class_ AppCreateSchema

Bases: `TypedDict`

dict() -> new empty dictionary
dict(mapping) -> new dictionary initialized from a mapping object’s

> (key, value) pairs

dict(iterable) -> new dictionary initialized as if via:
: d = {}
for k, v in iterable:

  <br/>
  > d[k] = v

dict(

```
**
```

kwargs) -> new dictionary initialized with the name=value pairs
: in the keyword argument list. For example: dict(one=1, two=2)

#### global_ints _: int_

#### global_byte_slices _: int_

#### local_ints _: int_

#### local_byte_slices _: int_

### _class_ AppCreateParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### approval_program _: str | bytes_

#### clear_state_program _: str | bytes_

#### schema _: [AppCreateSchema](#algokit_utils.transactions.types.AppCreateSchema) | None_ _= None_

#### on_complete _: OnApplicationComplete | None_ _= None_

#### args _: list[bytes] | None_ _= None_

#### account_references _: list[str] | None_ _= None_

#### app_references _: list[int] | None_ _= None_

#### asset_references _: list[int] | None_ _= None_

#### box_references _: list[algokit_utils.models.state.BoxReference | BoxIdentifier] | None_ _= None_

#### extra_program_pages _: int | None_ _= None_

### _class_ AppUpdateParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### app_id _: int_

#### approval_program _: str | bytes_

#### clear_state_program _: str | bytes_

#### args _: list[bytes] | None_ _= None_

#### account_references _: list[str] | None_ _= None_

#### app_references _: list[int] | None_ _= None_

#### asset_references _: list[int] | None_ _= None_

#### box_references _: list[algokit_utils.models.state.BoxReference | BoxIdentifier] | None_ _= None_

#### on_complete _: OnApplicationComplete_

### _class_ AppDeleteParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### app_id _: int_

#### args _: list[bytes] | None_ _= None_

#### account_references _: list[str] | None_ _= None_

#### app_references _: list[int] | None_ _= None_

#### asset_references _: list[int] | None_ _= None_

#### box_references _: list[algokit_utils.models.state.BoxReference | BoxIdentifier] | None_ _= None_

#### on_complete _: OnApplicationComplete | None_ _= None_

### _class_ AppMethodCallParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### app_id _: int_

#### method _: Method_

#### args _: list[bytes] | None_ _= None_

#### on_complete _: OnApplicationComplete | None_ _= None_

#### account_references _: list[str] | None_ _= None_

#### app_references _: list[int] | None_ _= None_

#### asset_references _: list[int] | None_ _= None_

#### box_references _: list[algokit_utils.models.state.BoxReference | BoxIdentifier] | None_ _= None_

### _class_ AppCallMethodCallParams

Bases: `_BaseAppMethodCall`

#### app_id _: int_

#### on_complete _: OnApplicationComplete | None_ _= None_

### _class_ AppCreateMethodCallParams

Bases: `_BaseAppMethodCall`

#### approval_program _: str | bytes_

#### clear_state_program _: str | bytes_

#### schema _: [AppCreateSchema](#algokit_utils.transactions.types.AppCreateSchema) | None_ _= None_

#### on_complete _: OnApplicationComplete | None_ _= None_

### _class_ AppUpdateMethodCallParams

Bases: `_BaseAppMethodCall`

#### app_id _: int_

#### approval_program _: str | bytes_

#### clear_state_program _: str | bytes_

#### on_complete _: OnApplicationComplete_

### _class_ AppDeleteMethodCallParams

Bases: `_BaseAppMethodCall`

#### app_id _: int_

#### on_complete _: OnApplicationComplete_

### MethodCallParams

### TxnParams

</div>
