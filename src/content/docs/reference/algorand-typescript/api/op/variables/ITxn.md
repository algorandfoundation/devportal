---
title: ITxn
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / ITxn

> `const` **ITxn**: `object`

Defined in: [op.ts:2306](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L2306)

Get values for the last inner transaction

## Type declaration

### amount

#### Get Signature

> **get** **amount**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

microalgos
Min AVM version: 5

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### applicationId

#### Get Signature

> **get** **applicationId**(): [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

ApplicationID from ApplicationCall transaction
Min AVM version: 2

##### Returns

[`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

### approvalProgram

#### Get Signature

> **get** **approvalProgram**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Approval program
Min AVM version: 2

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### assetAmount

#### Get Signature

> **get** **assetAmount**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

value in Asset's units
Min AVM version: 5

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### assetCloseTo

#### Get Signature

> **get** **assetCloseTo**(): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 5

##### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### assetReceiver

#### Get Signature

> **get** **assetReceiver**(): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 5

##### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### assetSender

#### Get Signature

> **get** **assetSender**(): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address. Source of assets if Sender is the Asset's Clawback address.
Min AVM version: 5

##### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### clearStateProgram

#### Get Signature

> **get** **clearStateProgram**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Clear state program
Min AVM version: 2

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### closeRemainderTo

#### Get Signature

> **get** **closeRemainderTo**(): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 5

##### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### configAsset

#### Get Signature

> **get** **configAsset**(): [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Asset ID in asset config transaction
Min AVM version: 2

##### Returns

[`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

### configAssetClawback

#### Get Signature

> **get** **configAssetClawback**(): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 2

##### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### configAssetDecimals

#### Get Signature

> **get** **configAssetDecimals**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of digits to display after the decimal place when displaying the asset
Min AVM version: 2

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### configAssetDefaultFrozen

#### Get Signature

> **get** **configAssetDefaultFrozen**(): `boolean`

Whether the asset's slots are frozen by default or not, 0 or 1
Min AVM version: 2

##### Returns

`boolean`

### configAssetFreeze

#### Get Signature

> **get** **configAssetFreeze**(): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 2

##### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### configAssetManager

#### Get Signature

> **get** **configAssetManager**(): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 2

##### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### configAssetMetadataHash

#### Get Signature

> **get** **configAssetMetadataHash**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

32 byte commitment to unspecified asset metadata
Min AVM version: 2

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### configAssetName

#### Get Signature

> **get** **configAssetName**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

The asset name
Min AVM version: 2

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### configAssetReserve

#### Get Signature

> **get** **configAssetReserve**(): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 2

##### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### configAssetTotal

#### Get Signature

> **get** **configAssetTotal**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Total number of units of this asset created
Min AVM version: 2

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### configAssetUnitName

#### Get Signature

> **get** **configAssetUnitName**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Unit name of the asset
Min AVM version: 2

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### configAssetUrl

#### Get Signature

> **get** **configAssetUrl**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

URL
Min AVM version: 2

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### createdApplicationId

#### Get Signature

> **get** **createdApplicationId**(): [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

ApplicationID allocated by the creation of an application (only with `itxn` in v5). Application mode only
Min AVM version: 5

##### Returns

[`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

### createdAssetId

#### Get Signature

> **get** **createdAssetId**(): [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Asset ID allocated by the creation of an ASA (only with `itxn` in v5). Application mode only
Min AVM version: 5

##### Returns

[`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

### extraProgramPages

#### Get Signature

> **get** **extraProgramPages**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of additional pages for each of the application's approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.
Min AVM version: 4

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### fee

#### Get Signature

> **get** **fee**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

microalgos
Min AVM version: 5

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### firstValid

#### Get Signature

> **get** **firstValid**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

round number
Min AVM version: 5

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### firstValidTime

#### Get Signature

> **get** **firstValidTime**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

UNIX timestamp of block before txn.FirstValid. Fails if negative
Min AVM version: 7

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### freezeAsset

#### Get Signature

> **get** **freezeAsset**(): [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Asset ID being frozen or un-frozen
Min AVM version: 2

##### Returns

[`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

### freezeAssetAccount

#### Get Signature

> **get** **freezeAssetAccount**(): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address of the account whose asset slot is being frozen or un-frozen
Min AVM version: 2

##### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### freezeAssetFrozen

#### Get Signature

> **get** **freezeAssetFrozen**(): `boolean`

The new frozen value, 0 or 1
Min AVM version: 2

##### Returns

`boolean`

### globalNumByteSlice

#### Get Signature

> **get** **globalNumByteSlice**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of global state byteslices in ApplicationCall
Min AVM version: 3

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### globalNumUint

#### Get Signature

> **get** **globalNumUint**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of global state integers in ApplicationCall
Min AVM version: 3

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### groupIndex

#### Get Signature

> **get** **groupIndex**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Position of this transaction within an atomic transaction group. A stand-alone transaction is implicitly element 0 in a group of 1
Min AVM version: 5

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### lastLog

#### Get Signature

> **get** **lastLog**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

The last message emitted. Empty bytes if none were emitted. Application mode only
Min AVM version: 6

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### lastValid

#### Get Signature

> **get** **lastValid**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

round number
Min AVM version: 5

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### lease

#### Get Signature

> **get** **lease**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

32 byte lease value
Min AVM version: 5

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### localNumByteSlice

#### Get Signature

> **get** **localNumByteSlice**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of local state byteslices in ApplicationCall
Min AVM version: 3

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### localNumUint

#### Get Signature

> **get** **localNumUint**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of local state integers in ApplicationCall
Min AVM version: 3

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### nonparticipation

#### Get Signature

> **get** **nonparticipation**(): `boolean`

Marks an account nonparticipating for rewards
Min AVM version: 5

##### Returns

`boolean`

### note

#### Get Signature

> **get** **note**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Any data up to 1024 bytes
Min AVM version: 5

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### numAccounts

#### Get Signature

> **get** **numAccounts**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of Accounts
Min AVM version: 2

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numAppArgs

#### Get Signature

> **get** **numAppArgs**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of ApplicationArgs
Min AVM version: 2

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numApplications

#### Get Signature

> **get** **numApplications**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of Applications
Min AVM version: 3

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numApprovalProgramPages

#### Get Signature

> **get** **numApprovalProgramPages**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of Approval Program pages
Min AVM version: 7

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numAssets

#### Get Signature

> **get** **numAssets**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of Assets
Min AVM version: 3

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numClearStateProgramPages

#### Get Signature

> **get** **numClearStateProgramPages**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of ClearState Program pages
Min AVM version: 7

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numLogs

#### Get Signature

> **get** **numLogs**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of Logs (only with `itxn` in v5). Application mode only
Min AVM version: 5

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### onCompletion

#### Get Signature

> **get** **onCompletion**(): [`OnCompleteAction`](/reference/algorand-typescript/api/index/enumerations/oncompleteaction/)

ApplicationCall transaction on completion action
Min AVM version: 2

##### Returns

[`OnCompleteAction`](/reference/algorand-typescript/api/index/enumerations/oncompleteaction/)

### receiver

#### Get Signature

> **get** **receiver**(): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 5

##### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### rejectVersion

#### Get Signature

> **get** **rejectVersion**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Application version for which the txn must reject
Min AVM version: 12

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### rekeyTo

#### Get Signature

> **get** **rekeyTo**(): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte Sender's new AuthAddr
Min AVM version: 2

##### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### selectionPk

#### Get Signature

> **get** **selectionPk**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

32 byte address
Min AVM version: 5

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### sender

#### Get Signature

> **get** **sender**(): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 5

##### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### stateProofPk

#### Get Signature

> **get** **stateProofPk**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`64`\>

State proof public key
Min AVM version: 6

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`64`\>

### txId

#### Get Signature

> **get** **txId**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

The computed ID for this transaction. 32 bytes.
Min AVM version: 5

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### type

#### Get Signature

> **get** **type**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Transaction type as bytes
Min AVM version: 5

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### typeEnum

#### Get Signature

> **get** **typeEnum**(): [`TransactionType`](/reference/algorand-typescript/api/index/enumerations/transactiontype/)

Transaction type as integer
Min AVM version: 5

##### Returns

[`TransactionType`](/reference/algorand-typescript/api/index/enumerations/transactiontype/)

### voteFirst

#### Get Signature

> **get** **voteFirst**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

The first round that the participation key is valid.
Min AVM version: 5

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### voteKeyDilution

#### Get Signature

> **get** **voteKeyDilution**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Dilution for the 2-level participation key
Min AVM version: 5

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### voteLast

#### Get Signature

> **get** **voteLast**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

The last round that the participation key is valid.
Min AVM version: 5

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### votePk

#### Get Signature

> **get** **votePk**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

32 byte address
Min AVM version: 5

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### xferAsset

#### Get Signature

> **get** **xferAsset**(): [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Asset ID
Min AVM version: 5

##### Returns

[`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

### accounts()

> **accounts**(`a`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Accounts listed in the ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### applicationArgs()

> **applicationArgs**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Arguments passed to the application in the ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### applications()

> **applications**(`a`): [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

Foreign Apps listed in the ApplicationCall transaction
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

### approvalProgramPages()

> **approvalProgramPages**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Approval Program as an array of pages
Min AVM version: 7

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### assets()

> **assets**(`a`): [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Foreign Assets listed in the ApplicationCall transaction
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

### clearStateProgramPages()

> **clearStateProgramPages**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

ClearState Program as an array of pages
Min AVM version: 7

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### logs()

> **logs**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Log messages emitted by an application call (only with `itxn` in v5). Application mode only
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)
