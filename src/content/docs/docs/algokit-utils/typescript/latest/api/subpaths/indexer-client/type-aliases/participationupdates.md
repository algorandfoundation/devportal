---
editUrl: false
next: false
prev: false
title: 'ParticipationUpdates'
---

> **ParticipationUpdates** = `object`

Defined in: [packages/indexer_client/src/models/participation-updates.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/participation-updates.ts#L7)

Participation account data that needs to be checked/acted on by the network.

## Properties

### absentParticipationAccounts

> **absentParticipationAccounts**: `string`[]

Defined in: [packages/indexer_client/src/models/participation-updates.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/participation-updates.ts#L16)

\[partupabs\] a list of online accounts that need to be suspended.

---

### expiredParticipationAccounts

> **expiredParticipationAccounts**: `string`[]

Defined in: [packages/indexer_client/src/models/participation-updates.ts:11](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/participation-updates.ts#L11)

\[partupdrmv\] a list of online accounts that needs to be converted to offline since their participation key expired.
