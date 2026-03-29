---
editUrl: false
next: false
prev: false
title: 'UpgradeState'
---

> **UpgradeState** = `object`

Defined in: [packages/algod_client/src/models/block.ts:265](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L265)

Protocol upgrade state for the block.

## Properties

### currentProtocol

> **currentProtocol**: `string`

Defined in: [packages/algod_client/src/models/block.ts:267](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L267)

[proto] Current consensus protocol.

---

### nextProtocol?

> `optional` **nextProtocol**: `string`

Defined in: [packages/algod_client/src/models/block.ts:269](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L269)

[nextproto] Next proposed protocol.

---

### nextProtocolApprovals?

> `optional` **nextProtocolApprovals**: `bigint`

Defined in: [packages/algod_client/src/models/block.ts:271](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L271)

[nextyes] Next protocol approvals.

---

### nextProtocolSwitchOn?

> `optional` **nextProtocolSwitchOn**: `bigint`

Defined in: [packages/algod_client/src/models/block.ts:275](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L275)

[nextswitch] Next protocol switch round.

---

### nextProtocolVoteBefore?

> `optional` **nextProtocolVoteBefore**: `bigint`

Defined in: [packages/algod_client/src/models/block.ts:273](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L273)

[nextbefore] Next protocol vote deadline.
