---
editUrl: false
next: false
prev: false
title: "HbProofFields"
---

> **HbProofFields** = `object`

Defined in: [packages/indexer\_client/src/models/hb-proof-fields.ts:7](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/hb-proof-fields.ts#L7)

\[hbprf\] HbProof is a signature using HeartbeatAddress's partkey, thereby showing it is online.

## Properties

### hbPk?

> `optional` **hbPk**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/hb-proof-fields.ts:16](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/hb-proof-fields.ts#L16)

\[p\] Public key of the heartbeat message.

***

### hbPk1sig?

> `optional` **hbPk1sig**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/hb-proof-fields.ts:26](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/hb-proof-fields.ts#L26)

\[p1s\] Signature of OneTimeSignatureSubkeyOffsetID(PK, Batch, Offset) under the key PK2.

***

### hbPk2?

> `optional` **hbPk2**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/hb-proof-fields.ts:21](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/hb-proof-fields.ts#L21)

\[p2\] Key for new-style two-level ephemeral signature.

***

### hbPk2sig?

> `optional` **hbPk2sig**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/hb-proof-fields.ts:31](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/hb-proof-fields.ts#L31)

\[p2s\] Signature of OneTimeSignatureSubkeyBatchID(PK2, Batch) under the master key (OneTimeSignatureVerifier).

***

### hbSig?

> `optional` **hbSig**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/hb-proof-fields.ts:11](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/hb-proof-fields.ts#L11)

\[s\] Signature of the heartbeat message.
