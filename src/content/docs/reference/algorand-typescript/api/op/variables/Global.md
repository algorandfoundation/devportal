---
title: Global
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / Global

> `const` **Global**: `object`

Defined in: [op.ts:1551](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L1551)

## Type declaration

### assetCreateMinBalance

#### Get Signature

> **get** **assetCreateMinBalance**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

The additional minimum balance required to create (and opt-in to) an asset.
Min AVM version: 10

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### assetOptInMinBalance

#### Get Signature

> **get** **assetOptInMinBalance**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

The additional minimum balance required to opt-in to an asset.
Min AVM version: 10

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### callerApplicationAddress

#### Get Signature

> **get** **callerApplicationAddress**(): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

The application address of the application that called this application. ZeroAddress if this application is at the top-level. Application mode only.
Min AVM version: 6

##### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### callerApplicationId

#### Get Signature

> **get** **callerApplicationId**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

The application ID of the application that called this application. 0 if this application is at the top-level. Application mode only.
Min AVM version: 6

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### creatorAddress

#### Get Signature

> **get** **creatorAddress**(): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Address of the creator of the current application. Application mode only.
Min AVM version: 3

##### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### currentApplicationAddress

#### Get Signature

> **get** **currentApplicationAddress**(): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Address that the current application controls. Application mode only.
Min AVM version: 5

##### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

### currentApplicationId

#### Get Signature

> **get** **currentApplicationId**(): [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

ID of current application executing. Application mode only.
Min AVM version: 2

##### Returns

[`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

### genesisHash

#### Get Signature

> **get** **genesisHash**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

The Genesis Hash for the network.
Min AVM version: 10

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### groupId

#### Get Signature

> **get** **groupId**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

ID of the transaction group. 32 zero bytes if the transaction is not part of a group.
Min AVM version: 5

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### groupSize

#### Get Signature

> **get** **groupSize**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Number of transactions in this atomic transaction group. At least 1
Min AVM version: 1

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### latestTimestamp

#### Get Signature

> **get** **latestTimestamp**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Last confirmed block UNIX timestamp. Fails if negative. Application mode only.
Min AVM version: 2

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### logicSigVersion

#### Get Signature

> **get** **logicSigVersion**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Maximum supported version
Min AVM version: 2

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### maxTxnLife

#### Get Signature

> **get** **maxTxnLife**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

rounds
Min AVM version: 1

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### minBalance

#### Get Signature

> **get** **minBalance**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

microalgos
Min AVM version: 1

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### minTxnFee

#### Get Signature

> **get** **minTxnFee**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

microalgos
Min AVM version: 1

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### opcodeBudget

#### Get Signature

> **get** **opcodeBudget**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

The remaining cost that can be spent by opcodes in this program.
Min AVM version: 6

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### payoutsEnabled

#### Get Signature

> **get** **payoutsEnabled**(): `boolean`

Whether block proposal payouts are enabled.
Min AVM version: 11

##### Returns

`boolean`

### payoutsGoOnlineFee

#### Get Signature

> **get** **payoutsGoOnlineFee**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

The fee required in a keyreg transaction to make an account incentive eligible.
Min AVM version: 11

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### payoutsMaxBalance

#### Get Signature

> **get** **payoutsMaxBalance**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

The maximum balance an account can have in the agreement round to receive block payouts in the proposal round.
Min AVM version: 11

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### payoutsMinBalance

#### Get Signature

> **get** **payoutsMinBalance**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

The minimum balance an account must have in the agreement round to receive block payouts in the proposal round.
Min AVM version: 11

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### payoutsPercent

#### Get Signature

> **get** **payoutsPercent**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

The percentage of transaction fees in a block that can be paid to the block proposer.
Min AVM version: 11

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### round

#### Get Signature

> **get** **round**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Current round number. Application mode only.
Min AVM version: 2

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### zeroAddress

#### Get Signature

> **get** **zeroAddress**(): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

32 byte address of all zero bytes
Min AVM version: 1

##### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)
