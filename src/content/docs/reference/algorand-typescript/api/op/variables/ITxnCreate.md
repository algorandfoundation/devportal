---
title: ITxnCreate
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / ITxnCreate

> `const` **ITxnCreate**: `object`

Defined in: [op.ts:2863](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L2863)

Create inner transactions

## Type declaration

### begin()

> **begin**(): `void`

begin preparation of a new inner transaction in a new transaction group
`itxn_begin` initializes Sender to the application address; Fee to the minimum allowable, taking into account MinTxnFee and credit from overpaying in earlier transactions; FirstValid/LastValid to the values in the invoking transaction, and all other fields to zero or empty values.

#### Returns

`void`

#### See

Native TEAL opcode: [`itxn_begin`](https://dev.algorand.co/reference/algorand-teal/opcodes#itxn_begin)
Min AVM version: 5

### next()

> **next**(): `void`

begin preparation of a new inner transaction in the same transaction group
`itxn_next` initializes the transaction exactly as `itxn_begin` does

#### Returns

`void`

#### See

Native TEAL opcode: [`itxn_next`](https://dev.algorand.co/reference/algorand-teal/opcodes#itxn_next)
Min AVM version: 6

### setAccounts()

> **setAccounts**(`a`): `void`

Accounts listed in the ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### a

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

`void`

### setAmount()

> **setAmount**(`a`): `void`

microalgos
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setApplicationArgs()

> **setApplicationArgs**(`a`): `void`

Arguments passed to the application in the ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

### setApplicationId()

> **setApplicationId**(`a`): `void`

ApplicationID from ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

#### Returns

`void`

### setApplications()

> **setApplications**(`a`): `void`

Foreign Apps listed in the ApplicationCall transaction
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setApprovalProgram()

> **setApprovalProgram**(`a`): `void`

Approval program
Min AVM version: 2

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

### setApprovalProgramPages()

> **setApprovalProgramPages**(`a`): `void`

Approval Program as an array of pages
Min AVM version: 7

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

### setAssetAmount()

> **setAssetAmount**(`a`): `void`

value in Asset's units
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setAssetCloseTo()

> **setAssetCloseTo**(`a`): `void`

32 byte address
Min AVM version: 5

#### Parameters

##### a

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

`void`

### setAssetReceiver()

> **setAssetReceiver**(`a`): `void`

32 byte address
Min AVM version: 5

#### Parameters

##### a

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

`void`

### setAssets()

> **setAssets**(`a`): `void`

Foreign Assets listed in the ApplicationCall transaction
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setAssetSender()

> **setAssetSender**(`a`): `void`

32 byte address. Source of assets if Sender is the Asset's Clawback address.
Min AVM version: 5

#### Parameters

##### a

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

`void`

### setClearStateProgram()

> **setClearStateProgram**(`a`): `void`

Clear state program
Min AVM version: 2

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

### setClearStateProgramPages()

> **setClearStateProgramPages**(`a`): `void`

ClearState Program as an array of pages
Min AVM version: 7

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

### setCloseRemainderTo()

> **setCloseRemainderTo**(`a`): `void`

32 byte address
Min AVM version: 5

#### Parameters

##### a

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

`void`

### setConfigAsset()

> **setConfigAsset**(`a`): `void`

Asset ID in asset config transaction
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

#### Returns

`void`

### setConfigAssetClawback()

> **setConfigAssetClawback**(`a`): `void`

32 byte address
Min AVM version: 2

#### Parameters

##### a

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

`void`

### setConfigAssetDecimals()

> **setConfigAssetDecimals**(`a`): `void`

Number of digits to display after the decimal place when displaying the asset
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setConfigAssetDefaultFrozen()

> **setConfigAssetDefaultFrozen**(`a`): `void`

Whether the asset's slots are frozen by default or not, 0 or 1
Min AVM version: 2

#### Parameters

##### a

`boolean`

#### Returns

`void`

### setConfigAssetFreeze()

> **setConfigAssetFreeze**(`a`): `void`

32 byte address
Min AVM version: 2

#### Parameters

##### a

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

`void`

### setConfigAssetManager()

> **setConfigAssetManager**(`a`): `void`

32 byte address
Min AVM version: 2

#### Parameters

##### a

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

`void`

### setConfigAssetMetadataHash()

> **setConfigAssetMetadataHash**(`a`): `void`

32 byte commitment to unspecified asset metadata
Min AVM version: 2

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\> | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

### setConfigAssetName()

> **setConfigAssetName**(`a`): `void`

The asset name
Min AVM version: 2

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

### setConfigAssetReserve()

> **setConfigAssetReserve**(`a`): `void`

32 byte address
Min AVM version: 2

#### Parameters

##### a

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

`void`

### setConfigAssetTotal()

> **setConfigAssetTotal**(`a`): `void`

Total number of units of this asset created
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setConfigAssetUnitName()

> **setConfigAssetUnitName**(`a`): `void`

Unit name of the asset
Min AVM version: 2

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

### setConfigAssetUrl()

> **setConfigAssetUrl**(`a`): `void`

URL
Min AVM version: 2

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

### setExtraProgramPages()

> **setExtraProgramPages**(`a`): `void`

Number of additional pages for each of the application's approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.
Min AVM version: 4

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setFee()

> **setFee**(`a`): `void`

microalgos
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setFreezeAsset()

> **setFreezeAsset**(`a`): `void`

Asset ID being frozen or un-frozen
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

#### Returns

`void`

### setFreezeAssetAccount()

> **setFreezeAssetAccount**(`a`): `void`

32 byte address of the account whose asset slot is being frozen or un-frozen
Min AVM version: 2

#### Parameters

##### a

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

`void`

### setFreezeAssetFrozen()

> **setFreezeAssetFrozen**(`a`): `void`

The new frozen value, 0 or 1
Min AVM version: 2

#### Parameters

##### a

`boolean`

#### Returns

`void`

### setGlobalNumByteSlice()

> **setGlobalNumByteSlice**(`a`): `void`

Number of global state byteslices in ApplicationCall
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setGlobalNumUint()

> **setGlobalNumUint**(`a`): `void`

Number of global state integers in ApplicationCall
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setLocalNumByteSlice()

> **setLocalNumByteSlice**(`a`): `void`

Number of local state byteslices in ApplicationCall
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setLocalNumUint()

> **setLocalNumUint**(`a`): `void`

Number of local state integers in ApplicationCall
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setNonparticipation()

> **setNonparticipation**(`a`): `void`

Marks an account nonparticipating for rewards
Min AVM version: 5

#### Parameters

##### a

`boolean`

#### Returns

`void`

### setNote()

> **setNote**(`a`): `void`

Any data up to 1024 bytes
Min AVM version: 5

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

### setOnCompletion()

> **setOnCompletion**(`a`): `void`

ApplicationCall transaction on completion action
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setReceiver()

> **setReceiver**(`a`): `void`

32 byte address
Min AVM version: 5

#### Parameters

##### a

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

`void`

### setRejectVersion()

> **setRejectVersion**(`a`): `void`

Application version for which the txn must reject
Min AVM version: 12

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setRekeyTo()

> **setRekeyTo**(`a`): `void`

32 byte Sender's new AuthAddr
Min AVM version: 2

#### Parameters

##### a

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

`void`

### setSelectionPk()

> **setSelectionPk**(`a`): `void`

32 byte address
Min AVM version: 5

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\> | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

### setSender()

> **setSender**(`a`): `void`

32 byte address
Min AVM version: 5

#### Parameters

##### a

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

`void`

### setStateProofPk()

> **setStateProofPk**(`a`): `void`

State proof public key
Min AVM version: 6

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/) | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`64`\>

#### Returns

`void`

### setType()

> **setType**(`a`): `void`

Transaction type as bytes
Min AVM version: 5

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

### setTypeEnum()

> **setTypeEnum**(`a`): `void`

Transaction type as integer
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setVoteFirst()

> **setVoteFirst**(`a`): `void`

The first round that the participation key is valid.
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setVoteKeyDilution()

> **setVoteKeyDilution**(`a`): `void`

Dilution for the 2-level participation key
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setVoteLast()

> **setVoteLast**(`a`): `void`

The last round that the participation key is valid.
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

### setVotePk()

> **setVotePk**(`a`): `void`

32 byte address
Min AVM version: 5

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\> | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

### setXferAsset()

> **setXferAsset**(`a`): `void`

Asset ID
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

#### Returns

`void`

### submit()

> **submit**(): `void`

execute the current inner transaction group. Fail if executing this group would exceed the inner transaction limit, or if any transaction in the group fails.
`itxn_submit` resets the current transaction so that it can not be resubmitted. A new `itxn_begin` is required to prepare another inner transaction.

#### Returns

`void`

#### See

Native TEAL opcode: [`itxn_submit`](https://dev.algorand.co/reference/algorand-teal/opcodes#itxn_submit)
Min AVM version: 5
