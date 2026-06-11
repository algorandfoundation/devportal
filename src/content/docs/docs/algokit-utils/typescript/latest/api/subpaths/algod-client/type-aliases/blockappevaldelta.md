---
editUrl: false
next: false
prev: false
title: 'BlockAppEvalDelta'
---

> **BlockAppEvalDelta** = `object`

Defined in: [packages/algod_client/src/models/block.ts:45](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L45)

State changes from application execution, including inner transactions and logs.

## Properties

### globalDelta?

> `optional` **globalDelta**: `Map`\<`Uint8Array`, [`BlockEvalDelta`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/blockevaldelta/)\>

Defined in: [packages/algod_client/src/models/block.ts:47](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L47)

[gd] Global state delta for the application.

---

### innerTxns?

> `optional` **innerTxns**: [`SignedTxnWithAD`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/signedtxnwithad/)[]

Defined in: [packages/algod_client/src/models/block.ts:51](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L51)

[itx] Inner transactions produced by this application execution.

---

### localDeltas?

> `optional` **localDeltas**: `Map`\<`number`, `Map`\<`Uint8Array`, [`BlockEvalDelta`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/blockevaldelta/)\>\>

Defined in: [packages/algod_client/src/models/block.ts:49](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L49)

[ld] Local state deltas keyed by address index.

---

### logs?

> `optional` **logs**: `Uint8Array`[]

Defined in: [packages/algod_client/src/models/block.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L55)

[lg] Application log outputs.

---

### sharedAccounts?

> `optional` **sharedAccounts**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)[]

Defined in: [packages/algod_client/src/models/block.ts:53](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L53)

[sa] Shared accounts referenced by local deltas.
