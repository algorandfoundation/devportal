---
editUrl: false
next: false
prev: false
title: 'LightBlockHeaderProof'
---

> **LightBlockHeaderProof** = `object`

Defined in: [packages/algod_client/src/models/light-block-header-proof.ts:7](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/light-block-header-proof.ts#L7)

Proof of membership and position of a light block header.

## Properties

### index

> **index**: `number`

Defined in: [packages/algod_client/src/models/light-block-header-proof.ts:11](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/light-block-header-proof.ts#L11)

The index of the light block header in the vector commitment tree

---

### proof

> **proof**: `Uint8Array`

Defined in: [packages/algod_client/src/models/light-block-header-proof.ts:21](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/light-block-header-proof.ts#L21)

The encoded proof.

---

### treedepth

> **treedepth**: `number`

Defined in: [packages/algod_client/src/models/light-block-header-proof.ts:16](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/light-block-header-proof.ts#L16)

Represents the depth of the tree that is being proven, i.e. the number of edges from a leaf to the root.
