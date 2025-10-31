---
title: GTxn
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [op](docs/_md/op/README) / GTxn

> `const` **GTxn**: `object`

Defined in: [op.ts:1740](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L1740)

Get values for transactions in the current group

## Type declaration

### accounts()

> **accounts**(`a`, `b`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Accounts listed in the ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### amount()

> **amount**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

microalgos
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### applicationArgs()

> **applicationArgs**(`a`, `b`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Arguments passed to the application in the ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### applicationId()

> **applicationId**(`a`): [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

ApplicationID from ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

### applications()

> **applications**(`a`, `b`): [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

Foreign Apps listed in the ApplicationCall transaction
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

### approvalProgram()

> **approvalProgram**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Approval program
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### approvalProgramPages()

> **approvalProgramPages**(`a`, `b`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Approval Program as an array of pages
Min AVM version: 7

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### assetAmount()

> **assetAmount**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

value in Asset's units
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### assetCloseTo()

> **assetCloseTo**(`a`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### assetReceiver()

> **assetReceiver**(`a`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### assets()

> **assets**(`a`, `b`): [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Foreign Assets listed in the ApplicationCall transaction
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

### assetSender()

> **assetSender**(`a`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address. Source of assets if Sender is the Asset's Clawback address.
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### clearStateProgram()

> **clearStateProgram**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Clear state program
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### clearStateProgramPages()

> **clearStateProgramPages**(`a`, `b`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

ClearState Program as an array of pages
Min AVM version: 7

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### closeRemainderTo()

> **closeRemainderTo**(`a`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### configAsset()

> **configAsset**(`a`): [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Asset ID in asset config transaction
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

### configAssetClawback()

> **configAssetClawback**(`a`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### configAssetDecimals()

> **configAssetDecimals**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of digits to display after the decimal place when displaying the asset
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### configAssetDefaultFrozen()

> **configAssetDefaultFrozen**(`a`): `boolean`

Whether the asset's slots are frozen by default or not, 0 or 1
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`boolean`

### configAssetFreeze()

> **configAssetFreeze**(`a`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### configAssetManager()

> **configAssetManager**(`a`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### configAssetMetadataHash()

> **configAssetMetadataHash**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

32 byte commitment to unspecified asset metadata
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### configAssetName()

> **configAssetName**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

The asset name
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### configAssetReserve()

> **configAssetReserve**(`a`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### configAssetTotal()

> **configAssetTotal**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Total number of units of this asset created
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### configAssetUnitName()

> **configAssetUnitName**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Unit name of the asset
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### configAssetUrl()

> **configAssetUrl**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

URL
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### createdApplicationId()

> **createdApplicationId**(`a`): [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

ApplicationID allocated by the creation of an application (only with `itxn` in v5). Application mode only
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

### createdAssetId()

> **createdAssetId**(`a`): [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Asset ID allocated by the creation of an ASA (only with `itxn` in v5). Application mode only
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

### extraProgramPages()

> **extraProgramPages**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of additional pages for each of the application's approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.
Min AVM version: 4

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### fee()

> **fee**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

microalgos
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### firstValid()

> **firstValid**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

round number
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### firstValidTime()

> **firstValidTime**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

UNIX timestamp of block before txn.FirstValid. Fails if negative
Min AVM version: 7

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### freezeAsset()

> **freezeAsset**(`a`): [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Asset ID being frozen or un-frozen
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

### freezeAssetAccount()

> **freezeAssetAccount**(`a`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address of the account whose asset slot is being frozen or un-frozen
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### freezeAssetFrozen()

> **freezeAssetFrozen**(`a`): `boolean`

The new frozen value, 0 or 1
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`boolean`

### globalNumByteSlice()

> **globalNumByteSlice**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of global state byteslices in ApplicationCall
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### globalNumUint()

> **globalNumUint**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of global state integers in ApplicationCall
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### groupIndex()

> **groupIndex**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Position of this transaction within an atomic transaction group. A stand-alone transaction is implicitly element 0 in a group of 1
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### lastLog()

> **lastLog**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

The last message emitted. Empty bytes if none were emitted. Application mode only
Min AVM version: 6

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### lastValid()

> **lastValid**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

round number
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### lease()

> **lease**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

32 byte lease value
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### localNumByteSlice()

> **localNumByteSlice**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of local state byteslices in ApplicationCall
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### localNumUint()

> **localNumUint**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of local state integers in ApplicationCall
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### logs()

> **logs**(`a`, `b`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Log messages emitted by an application call (only with `itxn` in v5). Application mode only
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### nonparticipation()

> **nonparticipation**(`a`): `boolean`

Marks an account nonparticipating for rewards
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`boolean`

### note()

> **note**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Any data up to 1024 bytes
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### numAccounts()

> **numAccounts**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of Accounts
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numAppArgs()

> **numAppArgs**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of ApplicationArgs
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numApplications()

> **numApplications**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of Applications
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numApprovalProgramPages()

> **numApprovalProgramPages**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of Approval Program pages
Min AVM version: 7

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numAssets()

> **numAssets**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of Assets
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numClearStateProgramPages()

> **numClearStateProgramPages**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of ClearState Program pages
Min AVM version: 7

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numLogs()

> **numLogs**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of Logs (only with `itxn` in v5). Application mode only
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### onCompletion()

> **onCompletion**(`a`): [`OnCompleteAction`](/reference/algorand-typescript/api/index/enumerations/oncompleteaction/)

ApplicationCall transaction on completion action
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`OnCompleteAction`](/reference/algorand-typescript/api/index/enumerations/oncompleteaction/)

### receiver()

> **receiver**(`a`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### rejectVersion()

> **rejectVersion**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Application version for which the txn must reject
Min AVM version: 12

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### rekeyTo()

> **rekeyTo**(`a`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte Sender's new AuthAddr
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### selectionPk()

> **selectionPk**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

32 byte address
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### sender()

> **sender**(`a`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### stateProofPk()

> **stateProofPk**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`64`\>

State proof public key
Min AVM version: 6

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`64`\>

### txId()

> **txId**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

The computed ID for this transaction. 32 bytes.
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### type()

> **type**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Transaction type as bytes
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### typeEnum()

> **typeEnum**(`a`): [`TransactionType`](/reference/algorand-typescript/api/index/enumerations/transactiontype/)

Transaction type as integer
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`TransactionType`](/reference/algorand-typescript/api/index/enumerations/transactiontype/)

### voteFirst()

> **voteFirst**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

The first round that the participation key is valid.
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### voteKeyDilution()

> **voteKeyDilution**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Dilution for the 2-level participation key
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### voteLast()

> **voteLast**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

The last round that the participation key is valid.
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### votePk()

> **votePk**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

32 byte address
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### xferAsset()

> **xferAsset**(`a`): [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Asset ID
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)
