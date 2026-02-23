---
editUrl: false
next: false
prev: false
title: "SimulationTransactionExecTrace"
---

> **SimulationTransactionExecTrace** = `object`

Defined in: [packages/algod\_client/src/models/simulation-transaction-exec-trace.ts:9](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-transaction-exec-trace.ts#L9)

The execution trace of calling an app or a logic sig, containing the inner app call trace in a recursive way.

## Properties

### approvalProgramHash?

> `optional` **approvalProgramHash**: `Uint8Array`

Defined in: [packages/algod\_client/src/models/simulation-transaction-exec-trace.ts:18](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-transaction-exec-trace.ts#L18)

SHA512_256 hash digest of the approval program executed in transaction.

***

### approvalProgramTrace?

> `optional` **approvalProgramTrace**: [`SimulationOpcodeTraceUnit`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/simulationopcodetraceunit/)[]

Defined in: [packages/algod\_client/src/models/simulation-transaction-exec-trace.ts:13](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-transaction-exec-trace.ts#L13)

Program trace that contains a trace of opcode effects in an approval program.

***

### clearStateProgramHash?

> `optional` **clearStateProgramHash**: `Uint8Array`

Defined in: [packages/algod\_client/src/models/simulation-transaction-exec-trace.ts:28](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-transaction-exec-trace.ts#L28)

SHA512_256 hash digest of the clear state program executed in transaction.

***

### clearStateProgramTrace?

> `optional` **clearStateProgramTrace**: [`SimulationOpcodeTraceUnit`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/simulationopcodetraceunit/)[]

Defined in: [packages/algod\_client/src/models/simulation-transaction-exec-trace.ts:23](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-transaction-exec-trace.ts#L23)

Program trace that contains a trace of opcode effects in a clear state program.

***

### clearStateRollback?

> `optional` **clearStateRollback**: `boolean`

Defined in: [packages/algod\_client/src/models/simulation-transaction-exec-trace.ts:33](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-transaction-exec-trace.ts#L33)

If true, indicates that the clear state program failed and any persistent state changes it produced should be reverted once the program exits.

***

### clearStateRollbackError?

> `optional` **clearStateRollbackError**: `string`

Defined in: [packages/algod\_client/src/models/simulation-transaction-exec-trace.ts:38](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-transaction-exec-trace.ts#L38)

The error message explaining why the clear state program failed. This field will only be populated if clear-state-rollback is true and the failure was due to an execution error.

***

### innerTrace?

> `optional` **innerTrace**: `SimulationTransactionExecTrace`[]

Defined in: [packages/algod\_client/src/models/simulation-transaction-exec-trace.ts:53](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-transaction-exec-trace.ts#L53)

An array of SimulationTransactionExecTrace representing the execution trace of any inner transactions executed.

***

### logicSigHash?

> `optional` **logicSigHash**: `Uint8Array`

Defined in: [packages/algod\_client/src/models/simulation-transaction-exec-trace.ts:48](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-transaction-exec-trace.ts#L48)

SHA512_256 hash digest of the logic sig executed in transaction.

***

### logicSigTrace?

> `optional` **logicSigTrace**: [`SimulationOpcodeTraceUnit`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/simulationopcodetraceunit/)[]

Defined in: [packages/algod\_client/src/models/simulation-transaction-exec-trace.ts:43](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-transaction-exec-trace.ts#L43)

Program trace that contains a trace of opcode effects in a logic sig.
