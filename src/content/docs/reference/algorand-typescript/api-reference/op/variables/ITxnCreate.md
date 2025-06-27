---
title: 'ITxnCreate'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / ITxnCreate

# Variable: ITxnCreate

> `const` **ITxnCreate**: `object`

Defined in: [packages/algo-ts/src/op.ts:2817](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L2817)

Create inner transactions

## Type declaration

### begin()

begin preparation of a new inner transaction in a new transaction group
`itxn_begin` initializes Sender to the application address; Fee to the minimum allowable, taking into account MinTxnFee and credit from overpaying in earlier transactions; FirstValid/LastValid to the values in the invoking transaction, and all other fields to zero or empty values.

#### Returns

`void`

#### See

Native TEAL opcode: [`itxn_begin`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_begin)
Min AVM version: 5

### next()

begin preparation of a new inner transaction in the same transaction group
`itxn_next` initializes the transaction exactly as `itxn_begin` does

#### Returns

`void`

#### See

Native TEAL opcode: [`itxn_next`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_next)
Min AVM version: 6

### setAccounts()

Accounts listed in the ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### a

[`Account`](/index/type-aliases/account)

#### Returns

`void`

### setAmount()

microalgos
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

### setApplicationArgs()

Arguments passed to the application in the ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

### setApplicationId()

ApplicationID from ApplicationCall transaction
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Application`](/index/type-aliases/application)

#### Returns

`void`

### setApplications()

Foreign Apps listed in the ApplicationCall transaction
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

### setApprovalProgram()

Approval program
Min AVM version: 2

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

### setApprovalProgramPages()

Approval Program as an array of pages
Min AVM version: 7

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

### setAssetAmount()

value in Asset's units
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

### setAssetCloseTo()

32 byte address
Min AVM version: 5

#### Parameters

##### a

[`Account`](/index/type-aliases/account)

#### Returns

`void`

### setAssetReceiver()

32 byte address
Min AVM version: 5

#### Parameters

##### a

[`Account`](/index/type-aliases/account)

#### Returns

`void`

### setAssets()

Foreign Assets listed in the ApplicationCall transaction
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

### setAssetSender()

32 byte address. Source of assets if Sender is the Asset's Clawback address.
Min AVM version: 5

#### Parameters

##### a

[`Account`](/index/type-aliases/account)

#### Returns

`void`

### setClearStateProgram()

Clear state program
Min AVM version: 2

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

### setClearStateProgramPages()

ClearState Program as an array of pages
Min AVM version: 7

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

### setCloseRemainderTo()

32 byte address
Min AVM version: 5

#### Parameters

##### a

[`Account`](/index/type-aliases/account)

#### Returns

`void`

### setConfigAsset()

Asset ID in asset config transaction
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Asset`](/index/type-aliases/asset)

#### Returns

`void`

### setConfigAssetClawback()

32 byte address
Min AVM version: 2

#### Parameters

##### a

[`Account`](/index/type-aliases/account)

#### Returns

`void`

### setConfigAssetDecimals()

Number of digits to display after the decimal place when displaying the asset
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

### setConfigAssetDefaultFrozen()

Whether the asset's slots are frozen by default or not, 0 or 1
Min AVM version: 2

#### Parameters

##### a

`boolean`

#### Returns

`void`

### setConfigAssetFreeze()

32 byte address
Min AVM version: 2

#### Parameters

##### a

[`Account`](/index/type-aliases/account)

#### Returns

`void`

### setConfigAssetManager()

32 byte address
Min AVM version: 2

#### Parameters

##### a

[`Account`](/index/type-aliases/account)

#### Returns

`void`

### setConfigAssetMetadataHash()

32 byte commitment to unspecified asset metadata
Min AVM version: 2

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

### setConfigAssetName()

The asset name
Min AVM version: 2

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

### setConfigAssetReserve()

32 byte address
Min AVM version: 2

#### Parameters

##### a

[`Account`](/index/type-aliases/account)

#### Returns

`void`

### setConfigAssetTotal()

Total number of units of this asset created
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

### setConfigAssetUnitName()

Unit name of the asset
Min AVM version: 2

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

### setConfigAssetUrl()

URL
Min AVM version: 2

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

### setExtraProgramPages()

Number of additional pages for each of the application's approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.
Min AVM version: 4

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

### setFee()

microalgos
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

### setFreezeAsset()

Asset ID being frozen or un-frozen
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Asset`](/index/type-aliases/asset)

#### Returns

`void`

### setFreezeAssetAccount()

32 byte address of the account whose asset slot is being frozen or un-frozen
Min AVM version: 2

#### Parameters

##### a

[`Account`](/index/type-aliases/account)

#### Returns

`void`

### setFreezeAssetFrozen()

The new frozen value, 0 or 1
Min AVM version: 2

#### Parameters

##### a

`boolean`

#### Returns

`void`

### setGlobalNumByteSlice()

Number of global state byteslices in ApplicationCall
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

### setGlobalNumUint()

Number of global state integers in ApplicationCall
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

### setLocalNumByteSlice()

Number of local state byteslices in ApplicationCall
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

### setLocalNumUint()

Number of local state integers in ApplicationCall
Min AVM version: 3

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

### setNonparticipation()

Marks an account nonparticipating for rewards
Min AVM version: 5

#### Parameters

##### a

`boolean`

#### Returns

`void`

### setNote()

Any data up to 1024 bytes
Min AVM version: 5

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

### setOnCompletion()

ApplicationCall transaction on completion action
Min AVM version: 2

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

### setReceiver()

32 byte address
Min AVM version: 5

#### Parameters

##### a

[`Account`](/index/type-aliases/account)

#### Returns

`void`

### setRekeyTo()

32 byte Sender's new AuthAddr
Min AVM version: 2

#### Parameters

##### a

[`Account`](/index/type-aliases/account)

#### Returns

`void`

### setSelectionPk()

32 byte address
Min AVM version: 5

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

### setSender()

32 byte address
Min AVM version: 5

#### Parameters

##### a

[`Account`](/index/type-aliases/account)

#### Returns

`void`

### setStateProofPk()

64 byte state proof public key
Min AVM version: 6

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

### setType()

Transaction type as bytes
Min AVM version: 5

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

### setTypeEnum()

Transaction type as integer
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

### setVoteFirst()

The first round that the participation key is valid.
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

### setVoteKeyDilution()

Dilution for the 2-level participation key
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

### setVoteLast()

The last round that the participation key is valid.
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

### setVotePk()

32 byte address
Min AVM version: 5

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

### setXferAsset()

Asset ID
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Asset`](/index/type-aliases/asset)

#### Returns

`void`

### submit()

execute the current inner transaction group. Fail if executing this group would exceed the inner transaction limit, or if any transaction in the group fails.
`itxn_submit` resets the current transaction so that it can not be resubmitted. A new `itxn_begin` is required to prepare another inner transaction.

#### Returns

`void`

#### See

Native TEAL opcode: [`itxn_submit`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_submit)
Min AVM version: 5
