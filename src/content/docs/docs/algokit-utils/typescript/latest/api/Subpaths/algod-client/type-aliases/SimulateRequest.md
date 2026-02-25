---
editUrl: false
next: false
prev: false
title: 'SimulateRequest'
---

> **SimulateRequest** = `object`

Defined in: [packages/algod_client/src/models/simulate-request.ts:11](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-request.ts#L11)

Request type for simulation endpoint.

## Properties

### allowEmptySignatures?

> `optional` **allowEmptySignatures**: `boolean`

Defined in: [packages/algod_client/src/models/simulate-request.ts:25](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-request.ts#L25)

Allows transactions without signatures to be simulated as if they had correct signatures.

---

### allowMoreLogging?

> `optional` **allowMoreLogging**: `boolean`

Defined in: [packages/algod_client/src/models/simulate-request.ts:30](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-request.ts#L30)

Lifts limits on log opcode usage during simulation.

---

### allowUnnamedResources?

> `optional` **allowUnnamedResources**: `boolean`

Defined in: [packages/algod_client/src/models/simulate-request.ts:35](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-request.ts#L35)

Allows access to unnamed resources during simulation.

---

### execTraceConfig?

> `optional` **execTraceConfig**: [`SimulateTraceConfig`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/simulatetraceconfig/)

Defined in: [packages/algod_client/src/models/simulate-request.ts:41](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-request.ts#L41)

---

### extraOpcodeBudget?

> `optional` **extraOpcodeBudget**: `number`

Defined in: [packages/algod_client/src/models/simulate-request.ts:40](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-request.ts#L40)

Applies extra opcode budget during simulation for each transaction group.

---

### fixSigners?

> `optional` **fixSigners**: `boolean`

Defined in: [packages/algod_client/src/models/simulate-request.ts:46](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-request.ts#L46)

If true, signers for transactions that are missing signatures will be fixed during evaluation.

---

### round?

> `optional` **round**: `bigint`

Defined in: [packages/algod_client/src/models/simulate-request.ts:20](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-request.ts#L20)

If provided, specifies the round preceding the simulation. State changes through this round will be used to run this simulation. Usually only the 4 most recent rounds will be available (controlled by the node config value MaxAcctLookback). If not specified, defaults to the latest available round.

---

### txnGroups

> **txnGroups**: [`SimulateRequestTransactionGroup`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/simulaterequesttransactiongroup/)[]

Defined in: [packages/algod_client/src/models/simulate-request.ts:15](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulate-request.ts#L15)

The transaction groups to simulate.
