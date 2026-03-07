---
editUrl: false
next: false
prev: false
title: "DelegatedLsigSigner"
---

> **DelegatedLsigSigner** = (`lsig`, `msig?`) => `Promise`\<`object` & \{ `sig?`: `Uint8Array`; \} \| \{ `lmsig?`: [`MultisigSignature`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/multisigsignature/); \}\>

Defined in: [packages/transact/src/logicsig.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/logicsig.ts#L24)

Function for signing logic signatures for delegation

## Parameters

### lsig

[`LogicSigAccount`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsigaccount/)

The logic signature that is being signed for delegation

### msig?

[`MultisigAccount`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/multisigaccount/)

Optional multisig account that should be set when a public key is signing as a subsigner of a multisig

## Returns

`Promise`\<`object` & \{ `sig?`: `Uint8Array`; \} \| \{ `lmsig?`: [`MultisigSignature`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/multisigsignature/); \}\>

The address of the delegator
