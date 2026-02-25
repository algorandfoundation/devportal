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

#### rekey*to *: str | None\_ _= None_

#### note _: bytes | None_ _= None_

#### lease _: bytes | None_ _= None_

#### static*fee *: [AlgoAmount](/docs/algokit-utils/python/latest/api/algokit_utils/models/amount/#algokit_utils.models.amount.AlgoAmount) | None\_ _= None_

#### extra*fee *: [AlgoAmount](/docs/algokit-utils/python/latest/api/algokit_utils/models/amount/#algokit_utils.models.amount.AlgoAmount) | None\_ _= None_

#### max*fee *: [AlgoAmount](/docs/algokit-utils/python/latest/api/algokit_utils/models/amount/#algokit_utils.models.amount.AlgoAmount) | None\_ _= None_

#### validity*window *: int | None\_ _= None_

#### first*valid_round *: int | None\_ _= None_

#### last*valid_round *: int | None\_ _= None_

### _class_ PaymentParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### receiver _: str_

#### amount _: [AlgoAmount](/docs/algokit-utils/python/latest/api/algokit_utils/models/amount/#algokit_utils.models.amount.AlgoAmount)_

#### close*remainder_to *: str | None\_ _= None_

### _class_ AssetCreateParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### total _: int_

#### asset*name *: str | None\_ _= None_

#### unit*name *: str | None\_ _= None_

#### url _: str | None_ _= None_

#### decimals _: int | None_ _= None_

#### default*frozen *: bool | None\_ _= None_

#### manager _: str | None_ _= None_

#### reserve _: str | None_ _= None_

#### freeze _: str | None_ _= None_

#### clawback _: str | None_ _= None_

#### metadata*hash *: bytes | None\_ _= None_

### _class_ AssetConfigParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### asset*id *: int\_

#### manager _: str | None_ _= None_

#### reserve _: str | None_ _= None_

#### freeze _: str | None_ _= None_

#### clawback _: str | None_ _= None_

### _class_ AssetFreezeParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### asset*id *: int\_

#### account _: str_

#### frozen _: bool_

### _class_ AssetDestroyParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### asset*id *: int\_

### _class_ OnlineKeyRegistrationParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### vote*key *: str\_

#### selection*key *: str\_

#### state*proof_key *: bytes | None\_ _= None_

#### vote*first *: int\_ _= 0_

#### vote*last *: int\_ _= 0_

#### vote*key_dilution *: int\_ _= 0_

#### nonparticipation _: bool | None_ _= None_

### _class_ OfflineKeyRegistrationParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### prevent*account_from_ever_participating_again *: bool\_ _= True_

### _class_ AssetTransferParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### asset*id *: int\_

#### amount _: int_

#### receiver _: str_

#### close*asset_to *: str | None\_ _= None_

#### clawback*target *: str | None\_ _= None_

### _class_ AssetOptInParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### asset*id *: int\_

### _class_ AssetOptOutParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### asset*id *: int\_

#### creator _: str_

### _class_ AppCallParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### app*id *: int\_

#### args _: list[bytes] | None_ _= None_

#### account*references *: list[str] | None\_ _= None_

#### app*references *: list[int] | None\_ _= None_

#### asset*references *: list[int] | None\_ _= None_

#### box*references *: list[algokit_utils.models.state.BoxReference | BoxIdentifier] | None\_ _= None_

#### on*complete *: OnApplicationComplete | None\_ _= None_

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

#### global*ints *: int\_

#### global*byte_slices *: int\_

#### local*ints *: int\_

#### local*byte_slices *: int\_

### _class_ AppCreateParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### approval*program *: str | bytes\_

#### clear*state_program *: str | bytes\_

#### schema _: [AppCreateSchema](#algokit_utils.transactions.types.AppCreateSchema) | None_ _= None_

#### on*complete *: OnApplicationComplete | None\_ _= None_

#### args _: list[bytes] | None_ _= None_

#### account*references *: list[str] | None\_ _= None_

#### app*references *: list[int] | None\_ _= None_

#### asset*references *: list[int] | None\_ _= None_

#### box*references *: list[algokit_utils.models.state.BoxReference | BoxIdentifier] | None\_ _= None_

#### extra*program_pages *: int | None\_ _= None_

### _class_ AppUpdateParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### app*id *: int\_

#### approval*program *: str | bytes\_

#### clear*state_program *: str | bytes\_

#### args _: list[bytes] | None_ _= None_

#### account*references *: list[str] | None\_ _= None_

#### app*references *: list[int] | None\_ _= None_

#### asset*references *: list[int] | None\_ _= None_

#### box*references *: list[algokit_utils.models.state.BoxReference | BoxIdentifier] | None\_ _= None_

#### on*complete *: OnApplicationComplete\_

### _class_ AppDeleteParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### app*id *: int\_

#### args _: list[bytes] | None_ _= None_

#### account*references *: list[str] | None\_ _= None_

#### app*references *: list[int] | None\_ _= None_

#### asset*references *: list[int] | None\_ _= None_

#### box*references *: list[algokit_utils.models.state.BoxReference | BoxIdentifier] | None\_ _= None_

#### on*complete *: OnApplicationComplete | None\_ _= None_

### _class_ AppMethodCallParams

Bases: [`CommonTxnParams`](#algokit_utils.transactions.types.CommonTxnParams)

#### app*id *: int\_

#### method _: Method_

#### args _: list[bytes] | None_ _= None_

#### on*complete *: OnApplicationComplete | None\_ _= None_

#### account*references *: list[str] | None\_ _= None_

#### app*references *: list[int] | None\_ _= None_

#### asset*references *: list[int] | None\_ _= None_

#### box*references *: list[algokit_utils.models.state.BoxReference | BoxIdentifier] | None\_ _= None_

### _class_ AppCallMethodCallParams

Bases: `_BaseAppMethodCall`

#### app*id *: int\_

#### on*complete *: OnApplicationComplete | None\_ _= None_

### _class_ AppCreateMethodCallParams

Bases: `_BaseAppMethodCall`

#### approval*program *: str | bytes\_

#### clear*state_program *: str | bytes\_

#### schema _: [AppCreateSchema](#algokit_utils.transactions.types.AppCreateSchema) | None_ _= None_

#### on*complete *: OnApplicationComplete | None\_ _= None_

### _class_ AppUpdateMethodCallParams

Bases: `_BaseAppMethodCall`

#### app*id *: int\_

#### approval*program *: str | bytes\_

#### clear*state_program *: str | bytes\_

#### on*complete *: OnApplicationComplete\_

### _class_ AppDeleteMethodCallParams

Bases: `_BaseAppMethodCall`

#### app*id *: int\_

#### on*complete *: OnApplicationComplete\_

### algokit_utils.transactions.types.MethodCallParams

### algokit_utils.transactions.types.TxnParams

</div>
