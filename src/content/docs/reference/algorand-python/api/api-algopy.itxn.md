---
title: algopy.itxn
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
---

## Module Contents

### Classes

| [`ApplicationCall`](#algopy.itxn.ApplicationCall)                                 | Creates a set of fields used to submit an Application Call inner transaction |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`ApplicationCallInnerTransaction`](#algopy.itxn.ApplicationCallInnerTransaction) | Application Call inner transaction                                           |
| [`AssetConfig`](#algopy.itxn.AssetConfig)                                         | Creates a set of fields used to submit an Asset Config inner transaction     |
| [`AssetConfigInnerTransaction`](#algopy.itxn.AssetConfigInnerTransaction)         | Asset Config inner transaction                                               |
| [`AssetFreeze`](#algopy.itxn.AssetFreeze)                                         | Creates a set of fields used to submit a Asset Freeze inner transaction      |
| [`AssetFreezeInnerTransaction`](#algopy.itxn.AssetFreezeInnerTransaction)         | Asset Freeze inner transaction                                               |
| [`AssetTransfer`](#algopy.itxn.AssetTransfer)                                     | Creates a set of fields used to submit an Asset Transfer inner transaction   |
| [`AssetTransferInnerTransaction`](#algopy.itxn.AssetTransferInnerTransaction)     | Asset Transfer inner transaction                                             |
| [`InnerTransaction`](#algopy.itxn.InnerTransaction)                               | Creates a set of fields used to submit an inner transaction of any type      |
| [`InnerTransactionResult`](#algopy.itxn.InnerTransactionResult)                   | An inner transaction of any type                                             |
| [`KeyRegistration`](#algopy.itxn.KeyRegistration)                                 | Creates a set of fields used to submit a Key Registration inner transaction  |
| [`KeyRegistrationInnerTransaction`](#algopy.itxn.KeyRegistrationInnerTransaction) | Key Registration inner transaction                                           |
| [`Payment`](#algopy.itxn.Payment)                                                 | Creates a set of fields used to submit a Payment inner transaction           |
| [`PaymentInnerTransaction`](#algopy.itxn.PaymentInnerTransaction)                 | Payment inner transaction                                                    |

### Functions

| [`submit_txns`](#algopy.itxn.submit_txns) | Submits a group of up to 16 inner transactions parameters |
| ----------------------------------------- | --------------------------------------------------------- |

### API

#### _class_ algopy.itxn.ApplicationCall

\*_class_ algopy.itxn.ApplicationCall(\*, app_id: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., approval_program: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), ...] = ..., clear_state_program: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), ...] = ..., on_completion: [algopy.OnCompleteAction](/reference/algorand-python/api/api-algopy/#algopy.OnCompleteAction) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global_num_uint: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global_num_bytes: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local_num_uint: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local_num_bytes: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., extra_program_pages: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., app_args: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[object](https://docs.python.org/3/library/functions.html#object), ...] = ..., accounts: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), ...] = ..., assets: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset), ...] = ..., apps: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application), ...] = ..., reject_version: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...)\*

Creates a set of fields used to submit an Application Call inner transaction

##### Initialization

##### copy

_copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Copies a set of inner transaction parameters

##### set

_set(\*, app_id: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., approval_program: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), ...] = ..., clear_state_program: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), ...] = ..., on_completion: [algopy.OnCompleteAction](/reference/algorand-python/api/api-algopy/#algopy.OnCompleteAction) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global_num_uint: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global_num_bytes: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local_num_uint: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local_num_bytes: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., extra_program_pages: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., app_args: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[object](https://docs.python.org/3/library/functions.html#object), ...] = ..., accounts: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), ...] = ..., assets: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset), ...] = ..., apps: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application), ...] = ..., reject_version: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...) → [None](https://docs.python.org/3/library/constants.html#None)_

Updates inner transaction parameter values

##### submit

_submit() → algopy.itxn.\_TResult_co_

Submits inner transaction parameters and returns the resulting inner transaction

#### _class_ algopy.itxn.ApplicationCallInnerTransaction

Application Call inner transaction

##### accounts

_accounts(index: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)_

Accounts listed in the ApplicationCall transaction

##### app_args

_app_args(index: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

Arguments passed to the application in the ApplicationCall transaction

##### _property_ app_id \*: [algopy.Application]

**property* app_id *: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)**

ApplicationID from ApplicationCall transaction

##### _property_ approval_program \*: [algopy.Bytes]

**property* approval_program *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Approval program

##### approval_program_pages

_approval_program_pages(index: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

Approval Program as an array of pages

##### apps

_apps(index: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)_

Foreign Apps listed in the ApplicationCall transaction

##### assets

_assets(index: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)_

Foreign Assets listed in the ApplicationCall transaction

##### _property_ clear_state_program \*: [algopy.Bytes]

**property* clear_state_program *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Clear State program

##### clear_state_program_pages

_clear_state_program_pages(index: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

Clear State Program as an array of pages

##### _property_ created_app \*: [algopy.Application]

**property* created_app *: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)**

ApplicationID allocated by the creation of an application

##### _property_ extra_program_pages \*: [algopy.UInt64]

**property* extra_program_pages *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of additional pages for each of the application’s approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.

##### _property_ fee \*: [algopy.UInt64]

**property* fee *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

microalgos

##### _property_ first_valid \*: [algopy.UInt64]

**property* first_valid *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

round number

##### _property_ first_valid_time \*: [algopy.UInt64]

**property* first_valid_time *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

UNIX timestamp of block before txn.FirstValid. Fails if negative

##### _property_ global_num_bytes \*: [algopy.UInt64]

**property* global_num_bytes *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of global state byteslices in ApplicationCall

##### _property_ global_num_uint \*: [algopy.UInt64]

**property* global_num_uint *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of global state integers in ApplicationCall

##### _property_ group_index \*: [algopy.UInt64]

**property* group_index *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Position of this transaction within an atomic transaction group.
A stand-alone transaction is implicitly element 0 in a group of 1

##### _property_ last_log \*: [algopy.Bytes]

**property* last_log *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

The last message emitted. Empty bytes if none were emitted. Application mode only

##### _property_ last_valid \*: [algopy.UInt64]

**property* last_valid *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

round number

##### _property_ lease \*: [algopy.Bytes]

**property* lease *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

32 byte lease value

##### _property_ local_num_bytes \*: [algopy.UInt64]

**property* local_num_bytes *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of local state byteslices in ApplicationCall

##### _property_ local_num_uint \*: [algopy.UInt64]

**property* local_num_uint *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of local state integers in ApplicationCall

##### logs

_logs(index: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

Log messages emitted by an application call

##### _property_ note \*: [algopy.Bytes]

**property* note *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Any data up to 1024 bytes

##### _property_ num_accounts \*: [algopy.UInt64]

**property* num_accounts *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of ApplicationArgs

##### _property_ num_app_args \*: [algopy.UInt64]

**property* num_app_args *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of ApplicationArgs

##### _property_ num_approval_program_pages \*: [algopy.UInt64]

**property* num_approval_program_pages *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of Approval Program pages

##### _property_ num_apps \*: [algopy.UInt64]

**property* num_apps *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of Applications

##### _property_ num_assets \*: [algopy.UInt64]

**property* num_assets *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of Assets

##### _property_ num_clear_state_program_pages \*: [algopy.UInt64]

**property* num_clear_state_program_pages *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of Clear State Program pages

##### _property_ num_logs \*: [algopy.UInt64]

**property* num_logs *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of logs

##### _property_ on_completion \*: [algopy.OnCompleteAction]

**property* on_completion *: [algopy.OnCompleteAction](/reference/algorand-python/api/api-algopy/#algopy.OnCompleteAction)**

ApplicationCall transaction on completion action

##### _property_ reject_version \*: [algopy.UInt64]

**property* reject_version *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Application version for which the txn must reject

##### _property_ rekey_to \*: [algopy.Account]

**property* rekey_to *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte Sender’s new AuthAddr

##### _property_ sender \*: [algopy.Account]

**property* sender *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ txn_id \*: [algopy.Bytes]

**property* txn_id *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

The computed ID for this transaction. 32 bytes.

##### _property_ type \*: [algopy.TransactionType]

**property* type *: [algopy.TransactionType](/reference/algorand-python/api/api-algopy/#algopy.TransactionType)**

Transaction type as integer

##### _property_ type_bytes \*: [algopy.Bytes]

**property* type_bytes *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Transaction type as bytes

#### _class_ algopy.itxn.AssetConfig

\*_class_ algopy.itxn.AssetConfig(\*, config_asset: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., total: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., unit_name: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., asset_name: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., decimals: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., default_frozen: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., url: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., metadata_hash: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., manager: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., reserve: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., freeze: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., clawback: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...)\*

Creates a set of fields used to submit an Asset Config inner transaction

##### Initialization

##### copy

_copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Copies a set of inner transaction parameters

##### set

_set(\*, config_asset: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., total: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., unit_name: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., asset_name: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., decimals: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., default_frozen: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., url: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., metadata_hash: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., manager: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., reserve: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., freeze: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., clawback: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...) → [None](https://docs.python.org/3/library/constants.html#None)_

Updates inner transaction parameter values

##### submit

_submit() → algopy.itxn.\_TResult_co_

Submits inner transaction parameters and returns the resulting inner transaction

#### _class_ algopy.itxn.AssetConfigInnerTransaction

Asset Config inner transaction

##### _property_ asset_name \*: [algopy.Bytes]

**property* asset_name *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

The asset name

##### _property_ clawback \*: [algopy.Account]

**property* clawback *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ config_asset \*: [algopy.Asset]

**property* config_asset *: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)**

Asset ID in asset config transaction

##### _property_ created_asset \*: [algopy.Asset]

**property* created_asset *: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)**

Asset ID allocated by the creation of an ASA

##### _property_ decimals \*: [algopy.UInt64]

**property* decimals *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of digits to display after the decimal place when displaying the asset

##### _property_ default_frozen \*: [bool]

**property* default_frozen *: [bool](https://docs.python.org/3/library/functions.html#bool)**

Whether the asset’s slots are frozen by default or not, 0 or 1

##### _property_ fee \*: [algopy.UInt64]

**property* fee *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

microalgos

##### _property_ first_valid \*: [algopy.UInt64]

**property* first_valid *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

round number

##### _property_ first_valid_time \*: [algopy.UInt64]

**property* first_valid_time *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

UNIX timestamp of block before txn.FirstValid. Fails if negative

##### _property_ freeze \*: [algopy.Account]

**property* freeze *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ group_index \*: [algopy.UInt64]

**property* group_index *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Position of this transaction within an atomic transaction group.
A stand-alone transaction is implicitly element 0 in a group of 1

##### _property_ last_valid \*: [algopy.UInt64]

**property* last_valid *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

round number

##### _property_ lease \*: [algopy.Bytes]

**property* lease *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

32 byte lease value

##### _property_ manager \*: [algopy.Account]

**property* manager *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ metadata_hash \*: [algopy.Bytes]

**property* metadata_hash *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

32 byte commitment to unspecified asset metadata

##### _property_ note \*: [algopy.Bytes]

**property* note *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Any data up to 1024 bytes

##### _property_ rekey_to \*: [algopy.Account]

**property* rekey_to *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte Sender’s new AuthAddr

##### _property_ reserve \*: [algopy.Account]

**property* reserve *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ sender \*: [algopy.Account]

**property* sender *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ total \*: [algopy.UInt64]

**property* total *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Total number of units of this asset created

##### _property_ txn_id \*: [algopy.Bytes]

**property* txn_id *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

The computed ID for this transaction. 32 bytes.

##### _property_ type \*: [algopy.TransactionType]

**property* type *: [algopy.TransactionType](/reference/algorand-python/api/api-algopy/#algopy.TransactionType)**

Transaction type as integer

##### _property_ type_bytes \*: [algopy.Bytes]

**property* type_bytes *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Transaction type as bytes

##### _property_ unit_name \*: [algopy.Bytes]

**property* unit_name *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Unit name of the asset

##### _property_ url \*: [algopy.Bytes]

**property* url *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

URL

#### _class_ algopy.itxn.AssetFreeze

\*_class_ algopy.itxn.AssetFreeze(\*, freeze_asset: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), freeze_account: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str), frozen: [bool](https://docs.python.org/3/library/functions.html#bool), sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...)\*

Creates a set of fields used to submit a Asset Freeze inner transaction

##### Initialization

##### copy

_copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Copies a set of inner transaction parameters

##### set

_set(\*, freeze_asset: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., freeze_account: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., frozen: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...) → [None](https://docs.python.org/3/library/constants.html#None)_

Updates inner transaction parameter values

##### submit

_submit() → algopy.itxn.\_TResult_co_

Submits inner transaction parameters and returns the resulting inner transaction

#### _class_ algopy.itxn.AssetFreezeInnerTransaction

Asset Freeze inner transaction

##### _property_ fee \*: [algopy.UInt64]

**property* fee *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

microalgos

##### _property_ first_valid \*: [algopy.UInt64]

**property* first_valid *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

round number

##### _property_ first_valid_time \*: [algopy.UInt64]

**property* first_valid_time *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

UNIX timestamp of block before txn.FirstValid. Fails if negative

##### _property_ freeze_account \*: [algopy.Account]

**property* freeze_account *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address of the account whose asset slot is being frozen or un-frozen

##### _property_ freeze_asset \*: [algopy.Asset]

**property* freeze_asset *: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)**

Asset ID being frozen or un-frozen

##### _property_ frozen \*: [bool]

**property* frozen *: [bool](https://docs.python.org/3/library/functions.html#bool)**

The new frozen value, 0 or 1

##### _property_ group_index \*: [algopy.UInt64]

**property* group_index *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Position of this transaction within an atomic transaction group.
A stand-alone transaction is implicitly element 0 in a group of 1

##### _property_ last_valid \*: [algopy.UInt64]

**property* last_valid *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

round number

##### _property_ lease \*: [algopy.Bytes]

**property* lease *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

32 byte lease value

##### _property_ note \*: [algopy.Bytes]

**property* note *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Any data up to 1024 bytes

##### _property_ rekey_to \*: [algopy.Account]

**property* rekey_to *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte Sender’s new AuthAddr

##### _property_ sender \*: [algopy.Account]

**property* sender *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ txn_id \*: [algopy.Bytes]

**property* txn_id *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

The computed ID for this transaction. 32 bytes.

##### _property_ type \*: [algopy.TransactionType]

**property* type *: [algopy.TransactionType](/reference/algorand-python/api/api-algopy/#algopy.TransactionType)**

Transaction type as integer

##### _property_ type_bytes \*: [algopy.Bytes]

**property* type_bytes *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Transaction type as bytes

#### _class_ algopy.itxn.AssetTransfer

\*_class_ algopy.itxn.AssetTransfer(\*, xfer_asset: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), asset_receiver: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str), asset_amount: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., asset_sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., asset_close_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...)\*

Creates a set of fields used to submit an Asset Transfer inner transaction

##### Initialization

##### copy

_copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Copies a set of inner transaction parameters

##### set

_set(\*, xfer_asset: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., asset_amount: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., asset_sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., asset_receiver: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., asset_close_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...) → [None](https://docs.python.org/3/library/constants.html#None)_

Updates transaction parameter values

##### submit

_submit() → algopy.itxn.\_TResult_co_

Submits inner transaction parameters and returns the resulting inner transaction

#### _class_ algopy.itxn.AssetTransferInnerTransaction

Asset Transfer inner transaction

##### _property_ asset_amount \*: [algopy.UInt64]

**property* asset_amount *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

value in Asset’s units

##### _property_ asset_close_to \*: [algopy.Account]

**property* asset_close_to *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ asset_receiver \*: [algopy.Account]

**property* asset_receiver *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ asset_sender \*: [algopy.Account]

**property* asset_sender *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address. Source of assets if Sender is the Asset’s Clawback address.

##### _property_ fee \*: [algopy.UInt64]

**property* fee *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

microalgos

##### _property_ first_valid \*: [algopy.UInt64]

**property* first_valid *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

round number

##### _property_ first_valid_time \*: [algopy.UInt64]

**property* first_valid_time *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

UNIX timestamp of block before txn.FirstValid. Fails if negative

##### _property_ group_index \*: [algopy.UInt64]

**property* group_index *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Position of this transaction within an atomic transaction group.
A stand-alone transaction is implicitly element 0 in a group of 1

##### _property_ last_valid \*: [algopy.UInt64]

**property* last_valid *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

round number

##### _property_ lease \*: [algopy.Bytes]

**property* lease *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

32 byte lease value

##### _property_ note \*: [algopy.Bytes]

**property* note *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Any data up to 1024 bytes

##### _property_ rekey_to \*: [algopy.Account]

**property* rekey_to *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte Sender’s new AuthAddr

##### _property_ sender \*: [algopy.Account]

**property* sender *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ txn_id \*: [algopy.Bytes]

**property* txn_id *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

The computed ID for this transaction. 32 bytes.

##### _property_ type \*: [algopy.TransactionType]

**property* type *: [algopy.TransactionType](/reference/algorand-python/api/api-algopy/#algopy.TransactionType)**

Transaction type as integer

##### _property_ type_bytes \*: [algopy.Bytes]

**property* type_bytes *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Transaction type as bytes

##### _property_ xfer_asset \*: [algopy.Asset]

**property* xfer_asset *: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)**

Asset ID

#### _class_ algopy.itxn.InnerTransaction

\*_class_ algopy.itxn.InnerTransaction(\*, type: [algopy.TransactionType](/reference/algorand-python/api/api-algopy/#algopy.TransactionType), receiver: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., amount: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., close_remainder_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., vote_key: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., selection_key: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., vote_first: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., vote_last: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., vote_key_dilution: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., non_participation: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., state_proof_key: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., config_asset: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., total: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., unit_name: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., asset_name: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., decimals: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., default_frozen: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., url: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., metadata_hash: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., manager: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., reserve: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., freeze: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., clawback: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., xfer_asset: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., asset_amount: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., asset_sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., asset_receiver: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., asset_close_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., freeze_asset: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., freeze_account: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., frozen: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., app_id: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., approval_program: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), ...] = ..., clear_state_program: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), ...] = ..., on_completion: [algopy.OnCompleteAction](/reference/algorand-python/api/api-algopy/#algopy.OnCompleteAction) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global_num_uint: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global_num_bytes: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local_num_uint: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local_num_bytes: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., extra_program_pages: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., app_args: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[object](https://docs.python.org/3/library/functions.html#object), ...] = ..., accounts: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), ...] = ..., assets: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset), ...] = ..., apps: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application), ...] = ..., reject_version: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...)\*

Creates a set of fields used to submit an inner transaction of any type

##### Initialization

##### copy

_copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Copies a set of inner transaction parameters

##### set

_set(\*, type: [algopy.TransactionType](/reference/algorand-python/api/api-algopy/#algopy.TransactionType) = ..., receiver: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., amount: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., close_remainder_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., vote_key: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., selection_key: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., vote_first: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., vote_last: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., vote_key_dilution: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., non_participation: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., state_proof_key: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., config_asset: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., total: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., unit_name: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., asset_name: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., decimals: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., default_frozen: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., url: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., metadata_hash: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., manager: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., reserve: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., freeze: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., clawback: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., xfer_asset: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., asset_amount: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., asset_sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., asset_receiver: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., asset_close_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., freeze_asset: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., freeze_account: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., frozen: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., app_id: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., approval_program: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), ...] = ..., clear_state_program: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), ...] = ..., on_completion: [algopy.OnCompleteAction](/reference/algorand-python/api/api-algopy/#algopy.OnCompleteAction) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global_num_uint: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global_num_bytes: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local_num_uint: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local_num_bytes: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., extra_program_pages: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., app_args: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[object](https://docs.python.org/3/library/functions.html#object), ...] = ..., accounts: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), ...] = ..., assets: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset), ...] = ..., apps: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application), ...] = ..., reject_version: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...) → [None](https://docs.python.org/3/library/constants.html#None)_

Updates inner transaction parameter values

##### submit

_submit() → algopy.itxn.\_TResult_co_

Submits inner transaction parameters and returns the resulting inner transaction

#### _class_ algopy.itxn.InnerTransactionResult

An inner transaction of any type

##### accounts

_accounts(index: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)_

Accounts listed in the ApplicationCall transaction

##### _property_ amount \*: [algopy.UInt64]

**property* amount *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

microalgos

##### app_args

_app_args(index: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

Arguments passed to the application in the ApplicationCall transaction

##### _property_ app_id \*: [algopy.Application]

**property* app_id *: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)**

ApplicationID from ApplicationCall transaction

##### _property_ approval_program \*: [algopy.Bytes]

**property* approval_program *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Approval program

##### approval_program_pages

_approval_program_pages(index: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

Approval Program as an array of pages

##### apps

_apps(index: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)_

Foreign Apps listed in the ApplicationCall transaction

##### _property_ asset_amount \*: [algopy.UInt64]

**property* asset_amount *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

value in Asset’s units

##### _property_ asset_close_to \*: [algopy.Account]

**property* asset_close_to *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ asset_name \*: [algopy.Bytes]

**property* asset_name *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

The asset name

##### _property_ asset_receiver \*: [algopy.Account]

**property* asset_receiver *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ asset_sender \*: [algopy.Account]

**property* asset_sender *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address. Source of assets if Sender is the Asset’s Clawback address.

##### assets

_assets(index: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)_

Foreign Assets listed in the ApplicationCall transaction

##### _property_ clawback \*: [algopy.Account]

**property* clawback *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ clear_state_program \*: [algopy.Bytes]

**property* clear_state_program *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Clear State program

##### clear_state_program_pages

_clear_state_program_pages(index: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

Clear State Program as an array of pages

##### _property_ close_remainder_to \*: [algopy.Account]

**property* close_remainder_to *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ config_asset \*: [algopy.Asset]

**property* config_asset *: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)**

Asset ID in asset config transaction

##### _property_ created_app \*: [algopy.Application]

**property* created_app *: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)**

ApplicationID allocated by the creation of an application

##### _property_ created_asset \*: [algopy.Asset]

**property* created_asset *: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)**

Asset ID allocated by the creation of an ASA

##### _property_ decimals \*: [algopy.UInt64]

**property* decimals *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of digits to display after the decimal place when displaying the asset

##### _property_ default_frozen \*: [bool]

**property* default_frozen *: [bool](https://docs.python.org/3/library/functions.html#bool)**

Whether the asset’s slots are frozen by default or not, 0 or 1

##### _property_ extra_program_pages \*: [algopy.UInt64]

**property* extra_program_pages *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of additional pages for each of the application’s approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.

##### _property_ fee \*: [algopy.UInt64]

**property* fee *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

microalgos

##### _property_ first_valid \*: [algopy.UInt64]

**property* first_valid *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

round number

##### _property_ first_valid_time \*: [algopy.UInt64]

**property* first_valid_time *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

UNIX timestamp of block before txn.FirstValid. Fails if negative

##### _property_ freeze \*: [algopy.Account]

**property* freeze *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ freeze_account \*: [algopy.Account]

**property* freeze_account *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address of the account whose asset slot is being frozen or un-frozen

##### _property_ freeze_asset \*: [algopy.Asset]

**property* freeze_asset *: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)**

Asset ID being frozen or un-frozen

##### _property_ frozen \*: [bool]

**property* frozen *: [bool](https://docs.python.org/3/library/functions.html#bool)**

The new frozen value, 0 or 1

##### _property_ global_num_bytes \*: [algopy.UInt64]

**property* global_num_bytes *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of global state byteslices in ApplicationCall

##### _property_ global_num_uint \*: [algopy.UInt64]

**property* global_num_uint *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of global state integers in ApplicationCall

##### _property_ group_index \*: [algopy.UInt64]

**property* group_index *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Position of this transaction within an atomic transaction group.
A stand-alone transaction is implicitly element 0 in a group of 1

##### _property_ last_log \*: [algopy.Bytes]

**property* last_log *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

The last message emitted. Empty bytes if none were emitted. Application mode only

##### _property_ last_valid \*: [algopy.UInt64]

**property* last_valid *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

round number

##### _property_ lease \*: [algopy.Bytes]

**property* lease *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

32 byte lease value

##### _property_ local_num_bytes \*: [algopy.UInt64]

**property* local_num_bytes *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of local state byteslices in ApplicationCall

##### _property_ local_num_uint \*: [algopy.UInt64]

**property* local_num_uint *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of local state integers in ApplicationCall

##### logs

_logs(index: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

Log messages emitted by an application call

##### _property_ manager \*: [algopy.Account]

**property* manager *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ metadata_hash \*: [algopy.Bytes]

**property* metadata_hash *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

32 byte commitment to unspecified asset metadata

##### _property_ non_participation \*: [bool]

**property* non_participation *: [bool](https://docs.python.org/3/library/functions.html#bool)**

Marks an account nonparticipating for rewards

##### _property_ note \*: [algopy.Bytes]

**property* note *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Any data up to 1024 bytes

##### _property_ num_accounts \*: [algopy.UInt64]

**property* num_accounts *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of ApplicationArgs

##### _property_ num_app_args \*: [algopy.UInt64]

**property* num_app_args *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of ApplicationArgs

##### _property_ num_approval_program_pages \*: [algopy.UInt64]

**property* num_approval_program_pages *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of Approval Program pages

##### _property_ num_apps \*: [algopy.UInt64]

**property* num_apps *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of Applications

##### _property_ num_assets \*: [algopy.UInt64]

**property* num_assets *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of Assets

##### _property_ num_clear_state_program_pages \*: [algopy.UInt64]

**property* num_clear_state_program_pages *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of Clear State Program pages

##### _property_ num_logs \*: [algopy.UInt64]

**property* num_logs *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Number of logs

##### _property_ on_completion \*: [algopy.OnCompleteAction]

**property* on_completion *: [algopy.OnCompleteAction](/reference/algorand-python/api/api-algopy/#algopy.OnCompleteAction)**

ApplicationCall transaction on completion action

##### _property_ receiver \*: [algopy.Account]

**property* receiver *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ reject_version \*: [algopy.UInt64]

**property* reject_version *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Application version for which the txn must reject

##### _property_ rekey_to \*: [algopy.Account]

**property* rekey_to *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte Sender’s new AuthAddr

##### _property_ reserve \*: [algopy.Account]

**property* reserve *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ selection_key \*: [algopy.Bytes]

**property* selection_key *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

32 byte address

##### _property_ sender \*: [algopy.Account]

**property* sender *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ state_proof_key \*: [algopy.Bytes]

**property* state_proof_key *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

64 byte state proof public key

##### _property_ total \*: [algopy.UInt64]

**property* total *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Total number of units of this asset created

##### _property_ txn_id \*: [algopy.Bytes]

**property* txn_id *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

The computed ID for this transaction. 32 bytes.

##### _property_ type \*: [algopy.TransactionType]

**property* type *: [algopy.TransactionType](/reference/algorand-python/api/api-algopy/#algopy.TransactionType)**

Transaction type as integer

##### _property_ type_bytes \*: [algopy.Bytes]

**property* type_bytes *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Transaction type as bytes

##### _property_ unit_name \*: [algopy.Bytes]

**property* unit_name *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Unit name of the asset

##### _property_ url \*: [algopy.Bytes]

**property* url *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

URL

##### _property_ vote_first \*: [algopy.UInt64]

**property* vote_first *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

The first round that the participation key is valid.

##### _property_ vote_key \*: [algopy.Bytes]

**property* vote_key *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

32 byte address

##### _property_ vote_key_dilution \*: [algopy.UInt64]

**property* vote_key_dilution *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Dilution for the 2-level participation key

##### _property_ vote_last \*: [algopy.UInt64]

**property* vote_last *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

The last round that the participation key is valid.

##### _property_ xfer_asset \*: [algopy.Asset]

**property* xfer_asset *: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)**

Asset ID

#### _class_ algopy.itxn.KeyRegistration

\*_class_ algopy.itxn.KeyRegistration(\*, vote_key: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., selection_key: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., vote_first: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., vote_last: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., vote_key_dilution: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., non_participation: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., state_proof_key: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...)\*

Creates a set of fields used to submit a Key Registration inner transaction

##### Initialization

##### copy

_copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Copies a set of inner transaction parameters

##### set

_set(\*, vote_key: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., selection_key: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., vote_first: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., vote_last: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., vote_key_dilution: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., non_participation: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., state_proof_key: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...) → [None](https://docs.python.org/3/library/constants.html#None)_

Updates inner transaction parameter values

##### submit

_submit() → algopy.itxn.\_TResult_co_

Submits inner transaction parameters and returns the resulting inner transaction

#### _class_ algopy.itxn.KeyRegistrationInnerTransaction

Key Registration inner transaction

##### _property_ fee \*: [algopy.UInt64]

**property* fee *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

microalgos

##### _property_ first_valid \*: [algopy.UInt64]

**property* first_valid *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

round number

##### _property_ first_valid_time \*: [algopy.UInt64]

**property* first_valid_time *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

UNIX timestamp of block before txn.FirstValid. Fails if negative

##### _property_ group_index \*: [algopy.UInt64]

**property* group_index *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Position of this transaction within an atomic transaction group.
A stand-alone transaction is implicitly element 0 in a group of 1

##### _property_ last_valid \*: [algopy.UInt64]

**property* last_valid *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

round number

##### _property_ lease \*: [algopy.Bytes]

**property* lease *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

32 byte lease value

##### _property_ non_participation \*: [bool]

**property* non_participation *: [bool](https://docs.python.org/3/library/functions.html#bool)**

Marks an account nonparticipating for rewards

##### _property_ note \*: [algopy.Bytes]

**property* note *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Any data up to 1024 bytes

##### _property_ rekey_to \*: [algopy.Account]

**property* rekey_to *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte Sender’s new AuthAddr

##### _property_ selection_key \*: [algopy.Bytes]

**property* selection_key *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

32 byte address

##### _property_ sender \*: [algopy.Account]

**property* sender *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ state_proof_key \*: [algopy.Bytes]

**property* state_proof_key *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

64 byte state proof public key

##### _property_ txn_id \*: [algopy.Bytes]

**property* txn_id *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

The computed ID for this transaction. 32 bytes.

##### _property_ type \*: [algopy.TransactionType]

**property* type *: [algopy.TransactionType](/reference/algorand-python/api/api-algopy/#algopy.TransactionType)**

Transaction type as integer

##### _property_ type_bytes \*: [algopy.Bytes]

**property* type_bytes *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Transaction type as bytes

##### _property_ vote_first \*: [algopy.UInt64]

**property* vote_first *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

The first round that the participation key is valid.

##### _property_ vote_key \*: [algopy.Bytes]

**property* vote_key *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

32 byte address

##### _property_ vote_key_dilution \*: [algopy.UInt64]

**property* vote_key_dilution *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Dilution for the 2-level participation key

##### _property_ vote_last \*: [algopy.UInt64]

**property* vote_last *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

The last round that the participation key is valid.

#### _class_ algopy.itxn.Payment

\*_class_ algopy.itxn.Payment(\*, receiver: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str), amount: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., close_remainder_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...)\*

Creates a set of fields used to submit a Payment inner transaction

##### Initialization

##### copy

_copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Copies a set of inner transaction parameters

##### set

_set(\*, receiver: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., amount: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., close_remainder_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., sender: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](/reference/algorand-python/api/api-algopy/#algopy.String) | [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey_to: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...) → [None](https://docs.python.org/3/library/constants.html#None)_

Updates inner transaction parameter values

##### submit

_submit() → algopy.itxn.\_TResult_co_

Submits inner transaction parameters and returns the resulting inner transaction

#### _class_ algopy.itxn.PaymentInnerTransaction

Payment inner transaction

##### _property_ amount \*: [algopy.UInt64]

**property* amount *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

microalgos

##### _property_ close_remainder_to \*: [algopy.Account]

**property* close_remainder_to *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ fee \*: [algopy.UInt64]

**property* fee *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

microalgos

##### _property_ first_valid \*: [algopy.UInt64]

**property* first_valid *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

round number

##### _property_ first_valid_time \*: [algopy.UInt64]

**property* first_valid_time *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

UNIX timestamp of block before txn.FirstValid. Fails if negative

##### _property_ group_index \*: [algopy.UInt64]

**property* group_index *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

Position of this transaction within an atomic transaction group.
A stand-alone transaction is implicitly element 0 in a group of 1

##### _property_ last_valid \*: [algopy.UInt64]

**property* last_valid *: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)**

round number

##### _property_ lease \*: [algopy.Bytes]

**property* lease *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

32 byte lease value

##### _property_ note \*: [algopy.Bytes]

**property* note *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Any data up to 1024 bytes

##### _property_ receiver \*: [algopy.Account]

**property* receiver *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ rekey_to \*: [algopy.Account]

**property* rekey_to *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte Sender’s new AuthAddr

##### _property_ sender \*: [algopy.Account]

**property* sender *: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)**

32 byte address

##### _property_ txn_id \*: [algopy.Bytes]

**property* txn_id *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

The computed ID for this transaction. 32 bytes.

##### _property_ type \*: [algopy.TransactionType]

**property* type *: [algopy.TransactionType](/reference/algorand-python/api/api-algopy/#algopy.TransactionType)**

Transaction type as integer

##### _property_ type_bytes \*: [algopy.Bytes]

**property* type_bytes *: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)**

Transaction type as bytes

##### algopy.itxn.submit_txns

_algopy.itxn.submit_txns(\_t1: algopy.itxn.\_InnerTransaction[algopy.itxn._T1], \_t2: algopy.itxn.\_InnerTransaction[algopy.itxn._T2], \_t3: algopy.itxn.\_InnerTransaction[algopy.itxn._T3], \_t4: algopy.itxn.\_InnerTransaction[algopy.itxn._T4], \_t5: algopy.itxn.\_InnerTransaction[algopy.itxn._T5], \_t6: algopy.itxn.\_InnerTransaction[algopy.itxn._T6], \_t7: algopy.itxn.\_InnerTransaction[algopy.itxn._T7], \_t8: algopy.itxn.\_InnerTransaction[algopy.itxn._T8], \_t9: algopy.itxn.\_InnerTransaction[algopy.itxn._T9], \_t10: algopy.itxn.\_InnerTransaction[algopy.itxn._T10], \_t11: algopy.itxn.\_InnerTransaction[algopy.itxn._T11], \_t12: algopy.itxn.\_InnerTransaction[algopy.itxn._T12], \_t13: algopy.itxn.\_InnerTransaction[algopy.itxn._T13], \_t14: algopy.itxn.\_InnerTransaction[algopy.itxn._T14], \_t15: algopy.itxn.\_InnerTransaction[algopy.itxn._T15], \_t16: algopy.itxn.\_InnerTransaction[algopy.itxn._T16], /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[algopy.itxn._T1, algopy.itxn._T2, algopy.itxn._T3, algopy.itxn._T4, algopy.itxn._T5, algopy.itxn._T6, algopy.itxn._T7, algopy.itxn._T8, algopy.itxn._T9, algopy.itxn._T10, algopy.itxn._T11, algopy.itxn._T12, algopy.itxn._T13, algopy.itxn._T14, algopy.itxn._T15, algopy.itxn._T16]_

Submits a group of up to 16 inner transactions parameters

- **Returns:**
  A tuple of the resulting inner transactions
