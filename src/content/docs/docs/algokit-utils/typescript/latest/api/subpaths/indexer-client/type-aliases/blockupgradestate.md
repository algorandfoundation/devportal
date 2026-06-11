---
editUrl: false
next: false
prev: false
title: 'BlockUpgradeState'
---

> **BlockUpgradeState** = `object`

Defined in: [packages/indexer_client/src/models/block-upgrade-state.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block-upgrade-state.ts#L7)

Fields relating to a protocol upgrade.

## Properties

### currentProtocol

> **currentProtocol**: `string`

Defined in: [packages/indexer_client/src/models/block-upgrade-state.ts:11](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block-upgrade-state.ts#L11)

\[proto\] The current protocol version.

---

### nextProtocol?

> `optional` **nextProtocol**: `string`

Defined in: [packages/indexer_client/src/models/block-upgrade-state.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block-upgrade-state.ts#L16)

\[nextproto\] The next proposed protocol version.

---

### nextProtocolApprovals?

> `optional` **nextProtocolApprovals**: `number`

Defined in: [packages/indexer_client/src/models/block-upgrade-state.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block-upgrade-state.ts#L21)

\[nextyes\] Number of blocks which approved the protocol upgrade.

---

### nextProtocolSwitchOn?

> `optional` **nextProtocolSwitchOn**: `bigint`

Defined in: [packages/indexer_client/src/models/block-upgrade-state.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block-upgrade-state.ts#L26)

\[nextswitch\] Round on which the protocol upgrade will take effect.

---

### nextProtocolVoteBefore?

> `optional` **nextProtocolVoteBefore**: `bigint`

Defined in: [packages/indexer_client/src/models/block-upgrade-state.ts:31](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block-upgrade-state.ts#L31)

\[nextbefore\] Deadline round for this protocol upgrade (No votes will be consider after this round).
