---
editUrl: false
next: false
prev: false
title: "NodeStatusResponse"
---

> **NodeStatusResponse** = `object`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:7](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L7)

NodeStatus contains the information about a node status

## Properties

### catchpoint?

> `optional` **catchpoint**: `string`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:56](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L56)

The current catchpoint that is being caught up to

***

### catchpointAcquiredBlocks?

> `optional` **catchpointAcquiredBlocks**: `number`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:96](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L96)

The number of blocks that have already been obtained by the node as part of the catchup

***

### catchpointProcessedAccounts?

> `optional` **catchpointProcessedAccounts**: `number`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:66](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L66)

The number of accounts from the current catchpoint that have been processed so far as part of the catchup

***

### catchpointProcessedKvs?

> `optional` **catchpointProcessedKvs**: `number`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:81](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L81)

The number of key-values (KVs) from the current catchpoint that have been processed so far as part of the catchup

***

### catchpointTotalAccounts?

> `optional` **catchpointTotalAccounts**: `number`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:61](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L61)

The total number of accounts included in the current catchpoint

***

### catchpointTotalBlocks?

> `optional` **catchpointTotalBlocks**: `number`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:91](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L91)

The total number of blocks that are required to complete the current catchpoint catchup

***

### catchpointTotalKvs?

> `optional` **catchpointTotalKvs**: `number`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:76](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L76)

The total number of key-values (KVs) included in the current catchpoint

***

### catchpointVerifiedAccounts?

> `optional` **catchpointVerifiedAccounts**: `number`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:71](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L71)

The number of accounts from the current catchpoint that have been verified so far as part of the catchup

***

### catchpointVerifiedKvs?

> `optional` **catchpointVerifiedKvs**: `number`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:86](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L86)

The number of key-values (KVs) from the current catchpoint that have been verified so far as part of the catchup

***

### catchupTime

> **catchupTime**: `bigint`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:11](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L11)

CatchupTime in nanoseconds

***

### lastCatchpoint?

> `optional` **lastCatchpoint**: `string`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:51](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L51)

The last catchpoint seen by the node

***

### lastRound

> **lastRound**: `bigint`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:16](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L16)

LastRound indicates the last round seen

***

### lastVersion

> **lastVersion**: `string`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:21](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L21)

LastVersion indicates the last consensus version supported

***

### nextVersion

> **nextVersion**: `string`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:26](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L26)

NextVersion of consensus protocol to use

***

### nextVersionRound

> **nextVersionRound**: `bigint`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:31](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L31)

NextVersionRound is the round at which the next consensus version will apply

***

### nextVersionSupported

> **nextVersionSupported**: `boolean`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:36](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L36)

NextVersionSupported indicates whether the next consensus version is supported by this node

***

### stoppedAtUnsupportedRound

> **stoppedAtUnsupportedRound**: `boolean`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:41](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L41)

StoppedAtUnsupportedRound indicates that the node does not support the new rounds and has stopped making progress

***

### timeSinceLastRound

> **timeSinceLastRound**: `bigint`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:46](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L46)

TimeSinceLastRound in nanoseconds

***

### upgradeDelay?

> `optional` **upgradeDelay**: `bigint`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:101](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L101)

Upgrade delay

***

### upgradeNextProtocolVoteBefore?

> `optional` **upgradeNextProtocolVoteBefore**: `bigint`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:131](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L131)

Next protocol round

***

### upgradeNodeVote?

> `optional` **upgradeNodeVote**: `boolean`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:106](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L106)

This node's upgrade vote

***

### upgradeNoVotes?

> `optional` **upgradeNoVotes**: `number`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:126](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L126)

No votes cast for consensus upgrade

***

### upgradeVoteRounds?

> `optional` **upgradeVoteRounds**: `number`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:136](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L136)

Total voting rounds for current upgrade

***

### upgradeVotes?

> `optional` **upgradeVotes**: `number`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:116](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L116)

Total votes cast for consensus upgrade

***

### upgradeVotesRequired?

> `optional` **upgradeVotesRequired**: `number`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:111](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L111)

Yes votes required for consensus upgrade

***

### upgradeYesVotes?

> `optional` **upgradeYesVotes**: `number`

Defined in: [packages/algod\_client/src/models/node-status-response.ts:121](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/node-status-response.ts#L121)

Yes votes cast for consensus upgrade
