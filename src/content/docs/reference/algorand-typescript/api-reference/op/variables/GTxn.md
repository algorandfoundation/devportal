---
title: 'Gtxn'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / GTxn

# Variable: GTxn

> `const` **GTxn**: `object`

Defined in: [packages/algo-ts/src/op.ts:1710](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L1710)

Get values for transactions in the current group

## Type declaration

### accounts()

Accounts listed in the ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

##### b

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Account`](/index/type-aliases/account)

### amount()

microalgos
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### applicationArgs()

Arguments passed to the application in the ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

##### b

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### applicationId()

ApplicationID from ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Application`](/index/type-aliases/application)

### applications()

Foreign Apps listed in the ApplicationCall transaction
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

##### b

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Application`](/index/type-aliases/application)

### approvalProgram()

Approval program
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### approvalProgramPages()

Approval Program as an array of pages
Min AVM version: 7

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

##### b

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### assetAmount()

value in Asset's units
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### assetCloseTo()

32 byte address
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Account`](/index/type-aliases/account)

### assetReceiver()

32 byte address
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Account`](/index/type-aliases/account)

### assets()

Foreign Assets listed in the ApplicationCall transaction
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

##### b

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Asset`](/index/type-aliases/asset)

### assetSender()

32 byte address. Source of assets if Sender is the Asset's Clawback address.
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Account`](/index/type-aliases/account)

### clearStateProgram()

Clear state program
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### clearStateProgramPages()

ClearState Program as an array of pages
Min AVM version: 7

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

##### b

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### closeRemainderTo()

32 byte address
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Account`](/index/type-aliases/account)

### configAsset()

Asset ID in asset config transaction
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Asset`](/index/type-aliases/asset)

### configAssetClawback()

32 byte address
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Account`](/index/type-aliases/account)

### configAssetDecimals()

Number of digits to display after the decimal place when displaying the asset
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### configAssetDefaultFrozen()

Whether the asset's slots are frozen by default or not, 0 or 1
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

`boolean`

### configAssetFreeze()

32 byte address
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Account`](/index/type-aliases/account)

### configAssetManager()

32 byte address
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Account`](/index/type-aliases/account)

### configAssetMetadataHash()

32 byte commitment to unspecified asset metadata
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### configAssetName()

The asset name
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### configAssetReserve()

32 byte address
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Account`](/index/type-aliases/account)

### configAssetTotal()

Total number of units of this asset created
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### configAssetUnitName()

Unit name of the asset
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### configAssetUrl()

URL
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### createdApplicationId()

ApplicationID allocated by the creation of an application (only with `itxn` in v5). Application mode only
Min AVM version: 5

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Application`](/index/type-aliases/application)

### createdAssetId()

Asset ID allocated by the creation of an ASA (only with `itxn` in v5). Application mode only
Min AVM version: 5

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Asset`](/index/type-aliases/asset)

### extraProgramPages()

Number of additional pages for each of the application's approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.
Min AVM version: 4

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### fee()

microalgos
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### firstValid()

round number
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### firstValidTime()

UNIX timestamp of block before txn.FirstValid. Fails if negative
Min AVM version: 7

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### freezeAsset()

Asset ID being frozen or un-frozen
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Asset`](/index/type-aliases/asset)

### freezeAssetAccount()

32 byte address of the account whose asset slot is being frozen or un-frozen
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Account`](/index/type-aliases/account)

### freezeAssetFrozen()

The new frozen value, 0 or 1
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

`boolean`

### globalNumByteSlice()

Number of global state byteslices in ApplicationCall
Min AVM version: 3

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### globalNumUint()

Number of global state integers in ApplicationCall
Min AVM version: 3

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### groupIndex()

Position of this transaction within an atomic transaction group. A stand-alone transaction is implicitly element 0 in a group of 1
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### lastLog()

The last message emitted. Empty bytes if none were emitted. Application mode only
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### lastValid()

round number
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### lease()

32 byte lease value
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### localNumByteSlice()

Number of local state byteslices in ApplicationCall
Min AVM version: 3

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### localNumUint()

Number of local state integers in ApplicationCall
Min AVM version: 3

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### logs()

Log messages emitted by an application call (only with `itxn` in v5). Application mode only
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

##### b

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### nonparticipation()

Marks an account nonparticipating for rewards
Min AVM version: 5

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

`boolean`

### note()

Any data up to 1024 bytes
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### numAccounts()

Number of Accounts
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### numAppArgs()

Number of ApplicationArgs
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### numApplications()

Number of Applications
Min AVM version: 3

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### numApprovalProgramPages()

Number of Approval Program pages
Min AVM version: 7

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### numAssets()

Number of Assets
Min AVM version: 3

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### numClearStateProgramPages()

Number of ClearState Program pages
Min AVM version: 7

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### numLogs()

Number of Logs (only with `itxn` in v5). Application mode only
Min AVM version: 5

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### onCompletion()

ApplicationCall transaction on completion action
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### receiver()

32 byte address
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Account`](/index/type-aliases/account)

### rekeyTo()

32 byte Sender's new AuthAddr
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Account`](/index/type-aliases/account)

### selectionPk()

32 byte address
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### sender()

32 byte address
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Account`](/index/type-aliases/account)

### stateProofPk()

64 byte state proof public key
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### txId()

The computed ID for this transaction. 32 bytes.
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### type()

Transaction type as bytes
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### typeEnum()

Transaction type as integer
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### voteFirst()

The first round that the participation key is valid.
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### voteKeyDilution()

Dilution for the 2-level participation key
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### voteLast()

The last round that the participation key is valid.
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

### votePk()

32 byte address
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

### xferAsset()

Asset ID
Min AVM version: 1

#### Parameters

##### t

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`Asset`](/index/type-aliases/asset)
