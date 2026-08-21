---
editUrl: false
next: false
prev: false
title: 'StateProofMessage'
---

> **StateProofMessage** = `object`

Defined in: [packages/algod_client/src/models/state-proof-message.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/state-proof-message.ts#L7)

Represents the message that the state proofs are attesting to.

## Properties

### blockHeadersCommitment

> **blockHeadersCommitment**: `Uint8Array`

Defined in: [packages/algod_client/src/models/state-proof-message.ts:11](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/state-proof-message.ts#L11)

The vector commitment root on all light block headers within a state proof interval.

---

### firstAttestedRound

> **firstAttestedRound**: `bigint`

Defined in: [packages/algod_client/src/models/state-proof-message.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/state-proof-message.ts#L26)

The first round the message attests to.

---

### lastAttestedRound

> **lastAttestedRound**: `bigint`

Defined in: [packages/algod_client/src/models/state-proof-message.ts:31](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/state-proof-message.ts#L31)

The last round the message attests to.

---

### lnProvenWeight

> **lnProvenWeight**: `bigint`

Defined in: [packages/algod_client/src/models/state-proof-message.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/state-proof-message.ts#L21)

An integer value representing the natural log of the proven weight with 16 bits of precision. This value would be used to verify the next state proof.

---

### votersCommitment

> **votersCommitment**: `Uint8Array`

Defined in: [packages/algod_client/src/models/state-proof-message.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/state-proof-message.ts#L16)

The vector commitment root of the top N accounts to sign the next StateProof.
