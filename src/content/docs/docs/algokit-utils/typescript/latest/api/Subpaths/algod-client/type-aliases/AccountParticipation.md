---
editUrl: false
next: false
prev: false
title: "AccountParticipation"
---

> **AccountParticipation** = `object`

Defined in: [packages/algod\_client/src/models/account-participation.ts:7](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account-participation.ts#L7)

AccountParticipation describes the parameters used by this account in consensus protocol.

## Properties

### selectionParticipationKey

> **selectionParticipationKey**: `Uint8Array`

Defined in: [packages/algod\_client/src/models/account-participation.ts:11](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account-participation.ts#L11)

\[sel\] Selection public key (if any) currently registered for this round.

***

### stateProofKey?

> `optional` **stateProofKey**: `Uint8Array`

Defined in: [packages/algod\_client/src/models/account-participation.ts:36](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account-participation.ts#L36)

\[stprf\] Root of the state proof key (if any)

***

### voteFirstValid

> **voteFirstValid**: `bigint`

Defined in: [packages/algod\_client/src/models/account-participation.ts:16](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account-participation.ts#L16)

\[voteFst\] First round for which this participation is valid.

***

### voteKeyDilution

> **voteKeyDilution**: `bigint`

Defined in: [packages/algod\_client/src/models/account-participation.ts:21](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account-participation.ts#L21)

\[voteKD\] Number of subkeys in each batch of participation keys.

***

### voteLastValid

> **voteLastValid**: `bigint`

Defined in: [packages/algod\_client/src/models/account-participation.ts:26](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account-participation.ts#L26)

\[voteLst\] Last round for which this participation is valid.

***

### voteParticipationKey

> **voteParticipationKey**: `Uint8Array`

Defined in: [packages/algod\_client/src/models/account-participation.ts:31](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/account-participation.ts#L31)

\[vote\] root participation public key (if any) currently registered for this round.
