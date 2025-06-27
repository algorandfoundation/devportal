---
title: 'Txn'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / Txn

# Variable: Txn

> `const` **Txn**: `object`

Defined in: [packages/algo-ts/src/op.ts:3455](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3455)

Get values for the current executing transaction

## Type declaration

### amount

#### Get Signature

> **get** **amount**(): [`uint64`](/index/type-aliases/uint64)

microalgos
Min AVM version: 1

##### Returns

[`uint64`](/index/type-aliases/uint64)

### applicationId

#### Get Signature

> **get** **applicationId**(): [`Application`](/index/type-aliases/application)

ApplicationID from ApplicationCall transaction
Min AVM version: 2

##### Returns

[`Application`](/index/type-aliases/application)

### approvalProgram

#### Get Signature

> **get** **approvalProgram**(): [`bytes`](/index/type-aliases/bytes)

Approval program
Min AVM version: 2

##### Returns

[`bytes`](/index/type-aliases/bytes)

### assetAmount

#### Get Signature

> **get** **assetAmount**(): [`uint64`](/index/type-aliases/uint64)

value in Asset's units
Min AVM version: 1

##### Returns

[`uint64`](/index/type-aliases/uint64)

### assetCloseTo

#### Get Signature

> **get** **assetCloseTo**(): [`Account`](/index/type-aliases/account)

32 byte address
Min AVM version: 1

##### Returns

[`Account`](/index/type-aliases/account)

### assetReceiver

#### Get Signature

> **get** **assetReceiver**(): [`Account`](/index/type-aliases/account)

32 byte address
Min AVM version: 1

##### Returns

[`Account`](/index/type-aliases/account)

### assetSender

#### Get Signature

> **get** **assetSender**(): [`Account`](/index/type-aliases/account)

32 byte address. Source of assets if Sender is the Asset's Clawback address.
Min AVM version: 1

##### Returns

[`Account`](/index/type-aliases/account)

### clearStateProgram

#### Get Signature

> **get** **clearStateProgram**(): [`bytes`](/index/type-aliases/bytes)

Clear state program
Min AVM version: 2

##### Returns

[`bytes`](/index/type-aliases/bytes)

### closeRemainderTo

#### Get Signature

> **get** **closeRemainderTo**(): [`Account`](/index/type-aliases/account)

32 byte address
Min AVM version: 1

##### Returns

[`Account`](/index/type-aliases/account)

### configAsset

#### Get Signature

> **get** **configAsset**(): [`Asset`](/index/type-aliases/asset)

Asset ID in asset config transaction
Min AVM version: 2

##### Returns

[`Asset`](/index/type-aliases/asset)

### configAssetClawback

#### Get Signature

> **get** **configAssetClawback**(): [`Account`](/index/type-aliases/account)

32 byte address
Min AVM version: 2

##### Returns

[`Account`](/index/type-aliases/account)

### configAssetDecimals

#### Get Signature

> **get** **configAssetDecimals**(): [`uint64`](/index/type-aliases/uint64)

Number of digits to display after the decimal place when displaying the asset
Min AVM version: 2

##### Returns

[`uint64`](/index/type-aliases/uint64)

### configAssetDefaultFrozen

#### Get Signature

> **get** **configAssetDefaultFrozen**(): `boolean`

Whether the asset's slots are frozen by default or not, 0 or 1
Min AVM version: 2

##### Returns

`boolean`

### configAssetFreeze

#### Get Signature

> **get** **configAssetFreeze**(): [`Account`](/index/type-aliases/account)

32 byte address
Min AVM version: 2

##### Returns

[`Account`](/index/type-aliases/account)

### configAssetManager

#### Get Signature

> **get** **configAssetManager**(): [`Account`](/index/type-aliases/account)

32 byte address
Min AVM version: 2

##### Returns

[`Account`](/index/type-aliases/account)

### configAssetMetadataHash

#### Get Signature

> **get** **configAssetMetadataHash**(): [`bytes`](/index/type-aliases/bytes)

32 byte commitment to unspecified asset metadata
Min AVM version: 2

##### Returns

[`bytes`](/index/type-aliases/bytes)

### configAssetName

#### Get Signature

> **get** **configAssetName**(): [`bytes`](/index/type-aliases/bytes)

The asset name
Min AVM version: 2

##### Returns

[`bytes`](/index/type-aliases/bytes)

### configAssetReserve

#### Get Signature

> **get** **configAssetReserve**(): [`Account`](/index/type-aliases/account)

32 byte address
Min AVM version: 2

##### Returns

[`Account`](/index/type-aliases/account)

### configAssetTotal

#### Get Signature

> **get** **configAssetTotal**(): [`uint64`](/index/type-aliases/uint64)

Total number of units of this asset created
Min AVM version: 2

##### Returns

[`uint64`](/index/type-aliases/uint64)

### configAssetUnitName

#### Get Signature

> **get** **configAssetUnitName**(): [`bytes`](/index/type-aliases/bytes)

Unit name of the asset
Min AVM version: 2

##### Returns

[`bytes`](/index/type-aliases/bytes)

### configAssetUrl

#### Get Signature

> **get** **configAssetUrl**(): [`bytes`](/index/type-aliases/bytes)

URL
Min AVM version: 2

##### Returns

[`bytes`](/index/type-aliases/bytes)

### createdApplicationId

#### Get Signature

> **get** **createdApplicationId**(): [`Application`](/index/type-aliases/application)

ApplicationID allocated by the creation of an application (only with `itxn` in v5). Application mode only
Min AVM version: 5

##### Returns

[`Application`](/index/type-aliases/application)

### createdAssetId

#### Get Signature

> **get** **createdAssetId**(): [`Asset`](/index/type-aliases/asset)

Asset ID allocated by the creation of an ASA (only with `itxn` in v5). Application mode only
Min AVM version: 5

##### Returns

[`Asset`](/index/type-aliases/asset)

### extraProgramPages

#### Get Signature

> **get** **extraProgramPages**(): [`uint64`](/index/type-aliases/uint64)

Number of additional pages for each of the application's approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.
Min AVM version: 4

##### Returns

[`uint64`](/index/type-aliases/uint64)

### fee

#### Get Signature

> **get** **fee**(): [`uint64`](/index/type-aliases/uint64)

microalgos
Min AVM version: 1

##### Returns

[`uint64`](/index/type-aliases/uint64)

### firstValid

#### Get Signature

> **get** **firstValid**(): [`uint64`](/index/type-aliases/uint64)

round number
Min AVM version: 1

##### Returns

[`uint64`](/index/type-aliases/uint64)

### firstValidTime

#### Get Signature

> **get** **firstValidTime**(): [`uint64`](/index/type-aliases/uint64)

UNIX timestamp of block before txn.FirstValid. Fails if negative
Min AVM version: 7

##### Returns

[`uint64`](/index/type-aliases/uint64)

### freezeAsset

#### Get Signature

> **get** **freezeAsset**(): [`Asset`](/index/type-aliases/asset)

Asset ID being frozen or un-frozen
Min AVM version: 2

##### Returns

[`Asset`](/index/type-aliases/asset)

### freezeAssetAccount

#### Get Signature

> **get** **freezeAssetAccount**(): [`Account`](/index/type-aliases/account)

32 byte address of the account whose asset slot is being frozen or un-frozen
Min AVM version: 2

##### Returns

[`Account`](/index/type-aliases/account)

### freezeAssetFrozen

#### Get Signature

> **get** **freezeAssetFrozen**(): `boolean`

The new frozen value, 0 or 1
Min AVM version: 2

##### Returns

`boolean`

### globalNumByteSlice

#### Get Signature

> **get** **globalNumByteSlice**(): [`uint64`](/index/type-aliases/uint64)

Number of global state byteslices in ApplicationCall
Min AVM version: 3

##### Returns

[`uint64`](/index/type-aliases/uint64)

### globalNumUint

#### Get Signature

> **get** **globalNumUint**(): [`uint64`](/index/type-aliases/uint64)

Number of global state integers in ApplicationCall
Min AVM version: 3

##### Returns

[`uint64`](/index/type-aliases/uint64)

### groupIndex

#### Get Signature

> **get** **groupIndex**(): [`uint64`](/index/type-aliases/uint64)

Position of this transaction within an atomic transaction group. A stand-alone transaction is implicitly element 0 in a group of 1
Min AVM version: 1

##### Returns

[`uint64`](/index/type-aliases/uint64)

### lastLog

#### Get Signature

> **get** **lastLog**(): [`bytes`](/index/type-aliases/bytes)

The last message emitted. Empty bytes if none were emitted. Application mode only
Min AVM version: 6

##### Returns

[`bytes`](/index/type-aliases/bytes)

### lastValid

#### Get Signature

> **get** **lastValid**(): [`uint64`](/index/type-aliases/uint64)

round number
Min AVM version: 1

##### Returns

[`uint64`](/index/type-aliases/uint64)

### lease

#### Get Signature

> **get** **lease**(): [`bytes`](/index/type-aliases/bytes)

32 byte lease value
Min AVM version: 1

##### Returns

[`bytes`](/index/type-aliases/bytes)

### localNumByteSlice

#### Get Signature

> **get** **localNumByteSlice**(): [`uint64`](/index/type-aliases/uint64)

Number of local state byteslices in ApplicationCall
Min AVM version: 3

##### Returns

[`uint64`](/index/type-aliases/uint64)

### localNumUint

#### Get Signature

> **get** **localNumUint**(): [`uint64`](/index/type-aliases/uint64)

Number of local state integers in ApplicationCall
Min AVM version: 3

##### Returns

[`uint64`](/index/type-aliases/uint64)

### nonparticipation

#### Get Signature

> **get** **nonparticipation**(): `boolean`

Marks an account nonparticipating for rewards
Min AVM version: 5

##### Returns

`boolean`

### note

#### Get Signature

> **get** **note**(): [`bytes`](/index/type-aliases/bytes)

Any data up to 1024 bytes
Min AVM version: 1

##### Returns

[`bytes`](/index/type-aliases/bytes)

### numAccounts

#### Get Signature

> **get** **numAccounts**(): [`uint64`](/index/type-aliases/uint64)

Number of Accounts
Min AVM version: 2

##### Returns

[`uint64`](/index/type-aliases/uint64)

### numAppArgs

#### Get Signature

> **get** **numAppArgs**(): [`uint64`](/index/type-aliases/uint64)

Number of ApplicationArgs
Min AVM version: 2

##### Returns

[`uint64`](/index/type-aliases/uint64)

### numApplications

#### Get Signature

> **get** **numApplications**(): [`uint64`](/index/type-aliases/uint64)

Number of Applications
Min AVM version: 3

##### Returns

[`uint64`](/index/type-aliases/uint64)

### numApprovalProgramPages

#### Get Signature

> **get** **numApprovalProgramPages**(): [`uint64`](/index/type-aliases/uint64)

Number of Approval Program pages
Min AVM version: 7

##### Returns

[`uint64`](/index/type-aliases/uint64)

### numAssets

#### Get Signature

> **get** **numAssets**(): [`uint64`](/index/type-aliases/uint64)

Number of Assets
Min AVM version: 3

##### Returns

[`uint64`](/index/type-aliases/uint64)

### numClearStateProgramPages

#### Get Signature

> **get** **numClearStateProgramPages**(): [`uint64`](/index/type-aliases/uint64)

Number of ClearState Program pages
Min AVM version: 7

##### Returns

[`uint64`](/index/type-aliases/uint64)

### numLogs

#### Get Signature

> **get** **numLogs**(): [`uint64`](/index/type-aliases/uint64)

Number of Logs (only with `itxn` in v5). Application mode only
Min AVM version: 5

##### Returns

[`uint64`](/index/type-aliases/uint64)

### onCompletion

#### Get Signature

> **get** **onCompletion**(): [`uint64`](/index/type-aliases/uint64)

ApplicationCall transaction on completion action
Min AVM version: 2

##### Returns

[`uint64`](/index/type-aliases/uint64)

### receiver

#### Get Signature

> **get** **receiver**(): [`Account`](/index/type-aliases/account)

32 byte address
Min AVM version: 1

##### Returns

[`Account`](/index/type-aliases/account)

### rekeyTo

#### Get Signature

> **get** **rekeyTo**(): [`Account`](/index/type-aliases/account)

32 byte Sender's new AuthAddr
Min AVM version: 2

##### Returns

[`Account`](/index/type-aliases/account)

### selectionPk

#### Get Signature

> **get** **selectionPk**(): [`bytes`](/index/type-aliases/bytes)

32 byte address
Min AVM version: 1

##### Returns

[`bytes`](/index/type-aliases/bytes)

### sender

#### Get Signature

> **get** **sender**(): [`Account`](/index/type-aliases/account)

32 byte address
Min AVM version: 1

##### Returns

[`Account`](/index/type-aliases/account)

### stateProofPk

#### Get Signature

> **get** **stateProofPk**(): [`bytes`](/index/type-aliases/bytes)

64 byte state proof public key
Min AVM version: 6

##### Returns

[`bytes`](/index/type-aliases/bytes)

### txId

#### Get Signature

> **get** **txId**(): [`bytes`](/index/type-aliases/bytes)

The computed ID for this transaction. 32 bytes.
Min AVM version: 1

##### Returns

[`bytes`](/index/type-aliases/bytes)

### type

#### Get Signature

> **get** **type**(): [`bytes`](/index/type-aliases/bytes)

Transaction type as bytes
Min AVM version: 1

##### Returns

[`bytes`](/index/type-aliases/bytes)

### typeEnum

#### Get Signature

> **get** **typeEnum**(): [`uint64`](/index/type-aliases/uint64)

Transaction type as integer
Min AVM version: 1

##### Returns

[`uint64`](/index/type-aliases/uint64)

### voteFirst

#### Get Signature

> **get** **voteFirst**(): [`uint64`](/index/type-aliases/uint64)

The first round that the participation key is valid.
Min AVM version: 1

##### Returns

[`uint64`](/index/type-aliases/uint64)

### voteKeyDilution

#### Get Signature

> **get** **voteKeyDilution**(): [`uint64`](/index/type-aliases/uint64)

Dilution for the 2-level participation key
Min AVM version: 1

##### Returns

[`uint64`](/index/type-aliases/uint64)

### voteLast

#### Get Signature

> **get** **voteLast**(): [`uint64`](/index/type-aliases/uint64)

The last round that the participation key is valid.
Min AVM version: 1

##### Returns

[`uint64`](/index/type-aliases/uint64)

### votePk

#### Get Signature

> **get** **votePk**(): [`bytes`](/index/type-aliases/bytes)

32 byte address
Min AVM version: 1

##### Returns

[`bytes`](/index/type-aliases/bytes)

### xferAsset

#### Get Signature

> **get** **xferAsset**(): [`Asset`](/index/type-aliases/asset)

Asset ID
Min AVM version: 1

##### Returns

[`Asset`](/index/type-aliases/asset)

### accounts()

Accounts listed in the ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Account`](/index/type-aliases/account)

### applicationArgs()

Arguments passed to the application in the ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### applications()

Foreign Apps listed in the ApplicationCall transaction
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Application`](/index/type-aliases/application)

### approvalProgramPages()

Approval Program as an array of pages
Min AVM version: 7

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### assets()

Foreign Assets listed in the ApplicationCall transaction
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Asset`](/index/type-aliases/asset)

### clearStateProgramPages()

ClearState Program as an array of pages
Min AVM version: 7

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### logs()

Log messages emitted by an application call (only with `itxn` in v5). Application mode only
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)
