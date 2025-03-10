---
title: Variable: Global
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [op](../README) / Global



> `const` **Global**: `object`

Defined in: [packages/algo-ts/src/op.ts:1521](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L1521)

## Type declaration

### assetCreateMinBalance

#### Get Signature

> **get** **assetCreateMinBalance**(): [`uint64`](../../index/type-aliases/uint64)

The additional minimum balance required to create (and opt-in to) an asset.
Min AVM version: 10

##### Returns

[`uint64`](../../index/type-aliases/uint64)

### assetOptInMinBalance

#### Get Signature

> **get** **assetOptInMinBalance**(): [`uint64`](../../index/type-aliases/uint64)

The additional minimum balance required to opt-in to an asset.
Min AVM version: 10

##### Returns

[`uint64`](../../index/type-aliases/uint64)

### callerApplicationAddress

#### Get Signature

> **get** **callerApplicationAddress**(): [`Account`](../../index/type-aliases/Account)

The application address of the application that called this application. ZeroAddress if this application is at the top-level. Application mode only.
Min AVM version: 6

##### Returns

[`Account`](../../index/type-aliases/Account)

### callerApplicationId

#### Get Signature

> **get** **callerApplicationId**(): [`uint64`](../../index/type-aliases/uint64)

The application ID of the application that called this application. 0 if this application is at the top-level. Application mode only.
Min AVM version: 6

##### Returns

[`uint64`](../../index/type-aliases/uint64)

### creatorAddress

#### Get Signature

> **get** **creatorAddress**(): [`Account`](../../index/type-aliases/Account)

Address of the creator of the current application. Application mode only.
Min AVM version: 3

##### Returns

[`Account`](../../index/type-aliases/Account)

### currentApplicationAddress

#### Get Signature

> **get** **currentApplicationAddress**(): [`Account`](../../index/type-aliases/Account)

Address that the current application controls. Application mode only.
Min AVM version: 5

##### Returns

[`Account`](../../index/type-aliases/Account)

### currentApplicationId

#### Get Signature

> **get** **currentApplicationId**(): [`Application`](../../index/type-aliases/Application)

ID of current application executing. Application mode only.
Min AVM version: 2

##### Returns

[`Application`](../../index/type-aliases/Application)

### genesisHash

#### Get Signature

> **get** **genesisHash**(): [`bytes`](../../index/type-aliases/bytes)

The Genesis Hash for the network.
Min AVM version: 10

##### Returns

[`bytes`](../../index/type-aliases/bytes)

### groupId

#### Get Signature

> **get** **groupId**(): [`bytes`](../../index/type-aliases/bytes)

ID of the transaction group. 32 zero bytes if the transaction is not part of a group.
Min AVM version: 5

##### Returns

[`bytes`](../../index/type-aliases/bytes)

### groupSize

#### Get Signature

> **get** **groupSize**(): [`uint64`](../../index/type-aliases/uint64)

Number of transactions in this atomic transaction group. At least 1
Min AVM version: 1

##### Returns

[`uint64`](../../index/type-aliases/uint64)

### latestTimestamp

#### Get Signature

> **get** **latestTimestamp**(): [`uint64`](../../index/type-aliases/uint64)

Last confirmed block UNIX timestamp. Fails if negative. Application mode only.
Min AVM version: 2

##### Returns

[`uint64`](../../index/type-aliases/uint64)

### logicSigVersion

#### Get Signature

> **get** **logicSigVersion**(): [`uint64`](../../index/type-aliases/uint64)

Maximum supported version
Min AVM version: 2

##### Returns

[`uint64`](../../index/type-aliases/uint64)

### maxTxnLife

#### Get Signature

> **get** **maxTxnLife**(): [`uint64`](../../index/type-aliases/uint64)

rounds
Min AVM version: 1

##### Returns

[`uint64`](../../index/type-aliases/uint64)

### minBalance

#### Get Signature

> **get** **minBalance**(): [`uint64`](../../index/type-aliases/uint64)

microalgos
Min AVM version: 1

##### Returns

[`uint64`](../../index/type-aliases/uint64)

### minTxnFee

#### Get Signature

> **get** **minTxnFee**(): [`uint64`](../../index/type-aliases/uint64)

microalgos
Min AVM version: 1

##### Returns

[`uint64`](../../index/type-aliases/uint64)

### opcodeBudget

#### Get Signature

> **get** **opcodeBudget**(): [`uint64`](../../index/type-aliases/uint64)

The remaining cost that can be spent by opcodes in this program.
Min AVM version: 6

##### Returns

[`uint64`](../../index/type-aliases/uint64)

### payoutsEnabled

#### Get Signature

> **get** **payoutsEnabled**(): `boolean`

Whether block proposal payouts are enabled.
Min AVM version: 11

##### Returns

`boolean`

### payoutsGoOnlineFee

#### Get Signature

> **get** **payoutsGoOnlineFee**(): [`uint64`](../../index/type-aliases/uint64)

The fee required in a keyreg transaction to make an account incentive eligible.
Min AVM version: 11

##### Returns

[`uint64`](../../index/type-aliases/uint64)

### payoutsMaxBalance

#### Get Signature

> **get** **payoutsMaxBalance**(): [`uint64`](../../index/type-aliases/uint64)

The maximum balance an account can have in the agreement round to receive block payouts in the proposal round.
Min AVM version: 11

##### Returns

[`uint64`](../../index/type-aliases/uint64)

### payoutsMinBalance

#### Get Signature

> **get** **payoutsMinBalance**(): [`uint64`](../../index/type-aliases/uint64)

The minimum balance an account must have in the agreement round to receive block payouts in the proposal round.
Min AVM version: 11

##### Returns

[`uint64`](../../index/type-aliases/uint64)

### payoutsPercent

#### Get Signature

> **get** **payoutsPercent**(): [`uint64`](../../index/type-aliases/uint64)

The percentage of transaction fees in a block that can be paid to the block proposer.
Min AVM version: 11

##### Returns

[`uint64`](../../index/type-aliases/uint64)

### round

#### Get Signature

> **get** **round**(): [`uint64`](../../index/type-aliases/uint64)

Current round number. Application mode only.
Min AVM version: 2

##### Returns

[`uint64`](../../index/type-aliases/uint64)

### zeroAddress

#### Get Signature

> **get** **zeroAddress**(): [`Account`](../../index/type-aliases/Account)

32 byte address of all zero bytes
Min AVM version: 1

##### Returns

[`Account`](../../index/type-aliases/Account)