---
title: GITxn
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / GITxn

> `const` **GITxn**: `object`

Defined in: [op.ts:980](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L980)

Get values for inner transaction in the last group submitted

## Type declaration

### accounts()

> **accounts**(`t`, `a`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Accounts listed in the ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### amount()

> **amount**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

microalgos
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### applicationArgs()

> **applicationArgs**(`t`, `a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Arguments passed to the application in the ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### applicationId()

> **applicationId**(`t`): [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

ApplicationID from ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

### applications()

> **applications**(`t`, `a`): [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

Foreign Apps listed in the ApplicationCall transaction
Min AVM version: 3

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

### approvalProgram()

> **approvalProgram**(`t`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Approval program
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### approvalProgramPages()

> **approvalProgramPages**(`t`, `a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Approval Program as an array of pages
Min AVM version: 7

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### assetAmount()

> **assetAmount**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

value in Asset's units
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### assetCloseTo()

> **assetCloseTo**(`t`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### assetReceiver()

> **assetReceiver**(`t`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### assets()

> **assets**(`t`, `a`): [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Foreign Assets listed in the ApplicationCall transaction
Min AVM version: 3

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

### assetSender()

> **assetSender**(`t`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address. Source of assets if Sender is the Asset's Clawback address.
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### clearStateProgram()

> **clearStateProgram**(`t`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Clear state program
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### clearStateProgramPages()

> **clearStateProgramPages**(`t`, `a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

ClearState Program as an array of pages
Min AVM version: 7

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### closeRemainderTo()

> **closeRemainderTo**(`t`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### configAsset()

> **configAsset**(`t`): [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Asset ID in asset config transaction
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

### configAssetClawback()

> **configAssetClawback**(`t`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### configAssetDecimals()

> **configAssetDecimals**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of digits to display after the decimal place when displaying the asset
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### configAssetDefaultFrozen()

> **configAssetDefaultFrozen**(`t`): `boolean`

Whether the asset's slots are frozen by default or not, 0 or 1
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`boolean`

### configAssetFreeze()

> **configAssetFreeze**(`t`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### configAssetManager()

> **configAssetManager**(`t`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### configAssetMetadataHash()

> **configAssetMetadataHash**(`t`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

32 byte commitment to unspecified asset metadata
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### configAssetName()

> **configAssetName**(`t`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

The asset name
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### configAssetReserve()

> **configAssetReserve**(`t`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### configAssetTotal()

> **configAssetTotal**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Total number of units of this asset created
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### configAssetUnitName()

> **configAssetUnitName**(`t`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Unit name of the asset
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### configAssetUrl()

> **configAssetUrl**(`t`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

URL
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### createdApplicationId()

> **createdApplicationId**(`t`): [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

ApplicationID allocated by the creation of an application (only with `itxn` in v5). Application mode only
Min AVM version: 5

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

### createdAssetId()

> **createdAssetId**(`t`): [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Asset ID allocated by the creation of an ASA (only with `itxn` in v5). Application mode only
Min AVM version: 5

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

### extraProgramPages()

> **extraProgramPages**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of additional pages for each of the application's approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.
Min AVM version: 4

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### fee()

> **fee**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

microalgos
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### firstValid()

> **firstValid**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

round number
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### firstValidTime()

> **firstValidTime**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

UNIX timestamp of block before txn.FirstValid. Fails if negative
Min AVM version: 7

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### freezeAsset()

> **freezeAsset**(`t`): [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Asset ID being frozen or un-frozen
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

### freezeAssetAccount()

> **freezeAssetAccount**(`t`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address of the account whose asset slot is being frozen or un-frozen
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### freezeAssetFrozen()

> **freezeAssetFrozen**(`t`): `boolean`

The new frozen value, 0 or 1
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`boolean`

### globalNumByteSlice()

> **globalNumByteSlice**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of global state byteslices in ApplicationCall
Min AVM version: 3

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### globalNumUint()

> **globalNumUint**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of global state integers in ApplicationCall
Min AVM version: 3

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### groupIndex()

> **groupIndex**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Position of this transaction within an atomic transaction group. A stand-alone transaction is implicitly element 0 in a group of 1
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### lastLog()

> **lastLog**(`t`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

The last message emitted. Empty bytes if none were emitted. Application mode only
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### lastValid()

> **lastValid**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

round number
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### lease()

> **lease**(`t`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

32 byte lease value
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### localNumByteSlice()

> **localNumByteSlice**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of local state byteslices in ApplicationCall
Min AVM version: 3

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### localNumUint()

> **localNumUint**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of local state integers in ApplicationCall
Min AVM version: 3

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### logs()

> **logs**(`t`, `a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Log messages emitted by an application call (only with `itxn` in v5). Application mode only
Min AVM version: 5

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### nonparticipation()

> **nonparticipation**(`t`): `boolean`

Marks an account nonparticipating for rewards
Min AVM version: 5

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`boolean`

### note()

> **note**(`t`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Any data up to 1024 bytes
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### numAccounts()

> **numAccounts**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of Accounts
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numAppArgs()

> **numAppArgs**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of ApplicationArgs
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numApplications()

> **numApplications**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of Applications
Min AVM version: 3

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numApprovalProgramPages()

> **numApprovalProgramPages**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of Approval Program pages
Min AVM version: 7

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numAssets()

> **numAssets**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of Assets
Min AVM version: 3

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numClearStateProgramPages()

> **numClearStateProgramPages**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of ClearState Program pages
Min AVM version: 7

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### numLogs()

> **numLogs**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of Logs (only with `itxn` in v5). Application mode only
Min AVM version: 5

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### onCompletion()

> **onCompletion**(`t`): [`OnCompleteAction`](/reference/algorand-typescript/api/index/enumerations/oncompleteaction/)

ApplicationCall transaction on completion action
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`OnCompleteAction`](/reference/algorand-typescript/api/index/enumerations/oncompleteaction/)

### receiver()

> **receiver**(`t`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### rejectVersion()

> **rejectVersion**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Application version for which the txn must reject
Min AVM version: 12

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### rekeyTo()

> **rekeyTo**(`t`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte Sender's new AuthAddr
Min AVM version: 2

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### selectionPk()

> **selectionPk**(`t`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

32 byte address
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### sender()

> **sender**(`t`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### stateProofPk()

> **stateProofPk**(`t`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`64`\>

State proof public key
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`64`\>

### txId()

> **txId**(`t`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

The computed ID for this transaction. 32 bytes.
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### type()

> **type**(`t`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Transaction type as bytes
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### typeEnum()

> **typeEnum**(`t`): [`TransactionType`](/reference/algorand-typescript/api/index/enumerations/transactiontype/)

Transaction type as integer
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`TransactionType`](/reference/algorand-typescript/api/index/enumerations/transactiontype/)

### voteFirst()

> **voteFirst**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

The first round that the participation key is valid.
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### voteKeyDilution()

> **voteKeyDilution**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Dilution for the 2-level participation key
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### voteLast()

> **voteLast**(`t`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

The last round that the participation key is valid.
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### votePk()

> **votePk**(`t`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

32 byte address
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### xferAsset()

> **xferAsset**(`t`): [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Asset ID
Min AVM version: 6

#### Parameters

##### t

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)
