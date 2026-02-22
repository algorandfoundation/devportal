---
editUrl: false
next: false
prev: false
title: "SimulationEvalOverrides"
---

> **SimulationEvalOverrides** = `object`

Defined in: [packages/algod\_client/src/models/simulation-eval-overrides.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-eval-overrides.ts#L7)

The set of parameters and limits override during simulation. If this set of parameters is present, then evaluation parameters may differ from standard evaluation in certain ways.

## Properties

### allowEmptySignatures?

> `optional` **allowEmptySignatures**: `boolean`

Defined in: [packages/algod\_client/src/models/simulation-eval-overrides.ts:11](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-eval-overrides.ts#L11)

If true, transactions without signatures are allowed and simulated as if they were properly signed.

***

### allowUnnamedResources?

> `optional` **allowUnnamedResources**: `boolean`

Defined in: [packages/algod\_client/src/models/simulation-eval-overrides.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-eval-overrides.ts#L16)

If true, allows access to unnamed resources during simulation.

***

### extraOpcodeBudget?

> `optional` **extraOpcodeBudget**: `number`

Defined in: [packages/algod\_client/src/models/simulation-eval-overrides.ts:31](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-eval-overrides.ts#L31)

The extra opcode budget added to each transaction group during simulation

***

### fixSigners?

> `optional` **fixSigners**: `boolean`

Defined in: [packages/algod\_client/src/models/simulation-eval-overrides.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-eval-overrides.ts#L36)

If true, signers for transactions that are missing signatures will be fixed during evaluation.

***

### maxLogCalls?

> `optional` **maxLogCalls**: `number`

Defined in: [packages/algod\_client/src/models/simulation-eval-overrides.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-eval-overrides.ts#L21)

The maximum log calls one can make during simulation

***

### maxLogSize?

> `optional` **maxLogSize**: `number`

Defined in: [packages/algod\_client/src/models/simulation-eval-overrides.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/simulation-eval-overrides.ts#L26)

The maximum byte number to log during simulation
