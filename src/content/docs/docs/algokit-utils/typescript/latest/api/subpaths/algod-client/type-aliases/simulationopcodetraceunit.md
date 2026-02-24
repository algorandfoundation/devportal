---
editUrl: false
next: false
prev: false
title: 'SimulationOpcodeTraceUnit'
---

> **SimulationOpcodeTraceUnit** = `object`

Defined in: [packages/algod_client/src/models/simulation-opcode-trace-unit.ts:13](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-opcode-trace-unit.ts#L13)

The set of trace information and effect from evaluating a single opcode.

## Properties

### pc

> **pc**: `number`

Defined in: [packages/algod_client/src/models/simulation-opcode-trace-unit.ts:17](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-opcode-trace-unit.ts#L17)

The program counter of the current opcode being evaluated.

---

### scratchChanges?

> `optional` **scratchChanges**: [`ScratchChange`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/scratchchange/)[]

Defined in: [packages/algod_client/src/models/simulation-opcode-trace-unit.ts:22](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-opcode-trace-unit.ts#L22)

The writes into scratch slots.

---

### spawnedInners?

> `optional` **spawnedInners**: `number`[]

Defined in: [packages/algod_client/src/models/simulation-opcode-trace-unit.ts:32](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-opcode-trace-unit.ts#L32)

The indexes of the traces for inner transactions spawned by this opcode, if any.

---

### stackAdditions?

> `optional` **stackAdditions**: [`AvmValue`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/avmvalue/)[]

Defined in: [packages/algod_client/src/models/simulation-opcode-trace-unit.ts:42](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-opcode-trace-unit.ts#L42)

The values added by this opcode to the stack.

---

### stackPopCount?

> `optional` **stackPopCount**: `number`

Defined in: [packages/algod_client/src/models/simulation-opcode-trace-unit.ts:37](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-opcode-trace-unit.ts#L37)

The number of deleted stack values by this opcode.

---

### stateChanges?

> `optional` **stateChanges**: [`ApplicationStateOperation`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/applicationstateoperation/)[]

Defined in: [packages/algod_client/src/models/simulation-opcode-trace-unit.ts:27](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-opcode-trace-unit.ts#L27)

The operations against the current application's states.
