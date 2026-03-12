---
editUrl: false
next: false
prev: false
title: "StateSchema"
---

> **StateSchema** = `object`

Defined in: [packages/indexer\_client/src/models/state-schema.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/state-schema.ts#L7)

Represents a \[apls\] local-state or \[apgs\] global-state schema. These schemas determine how much storage may be used in a local-state or global-state for an application. The more space used, the larger minimum balance must be maintained in the account holding the data.

## Properties

### numByteSlices

> **numByteSlices**: `number`

Defined in: [packages/indexer\_client/src/models/state-schema.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/state-schema.ts#L16)

Maximum number of TEAL byte slices that may be stored in the key/value store.

***

### numUints

> **numUints**: `number`

Defined in: [packages/indexer\_client/src/models/state-schema.ts:11](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/state-schema.ts#L11)

Maximum number of TEAL uints that may be stored in the key/value store.
