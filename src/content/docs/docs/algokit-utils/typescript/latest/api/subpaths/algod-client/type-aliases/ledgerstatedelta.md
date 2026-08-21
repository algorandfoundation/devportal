---
editUrl: false
next: false
prev: false
title: 'LedgerStateDelta'
---

> **LedgerStateDelta** = `object`

Defined in: [packages/algod_client/src/models/ledger-state-delta.ts:627](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/ledger-state-delta.ts#L627)

Describes the delta between a given round to the previous round.

## Properties

### accounts

> **accounts**: `LedgerAccountDeltas`

Defined in: [packages/algod_client/src/models/ledger-state-delta.ts:631](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/ledger-state-delta.ts#L631)

Modified new accounts.

---

### block

> **block**: [`Block`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/block/)

Defined in: [packages/algod_client/src/models/ledger-state-delta.ts:635](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/ledger-state-delta.ts#L635)

Block header.

---

### creatables?

> `optional` **creatables**: `Map`\<`number`, `LedgerModifiedCreatable`\>

Defined in: [packages/algod_client/src/models/ledger-state-delta.ts:661](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/ledger-state-delta.ts#L661)

New creatables creator lookup table.

---

### kvMods?

> `optional` **kvMods**: `Map`\<`Uint8Array`, `LedgerKvValueDelta`\>

Defined in: [packages/algod_client/src/models/ledger-state-delta.ts:653](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/ledger-state-delta.ts#L653)

Modified kv pairs.

---

### prevTimestamp

> **prevTimestamp**: `bigint`

Defined in: [packages/algod_client/src/models/ledger-state-delta.ts:645](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/ledger-state-delta.ts#L645)

Previous block timestamp

---

### stateProofNext

> **stateProofNext**: `bigint`

Defined in: [packages/algod_client/src/models/ledger-state-delta.ts:641](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/ledger-state-delta.ts#L641)

Represents modification on StateProofNextRound field in the block header. If the block contains
a valid state proof transaction, this field will contain the next round for state proof.
otherwise it will be set to 0.

---

### totals

> **totals**: `LedgerAccountTotals`

Defined in: [packages/algod_client/src/models/ledger-state-delta.ts:649](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/ledger-state-delta.ts#L649)

The account totals reflecting the changes in this StateDelta object.

---

### txIds?

> `optional` **txIds**: `Map`\<`Uint8Array`, `LedgerIncludedTransactions`\>

Defined in: [packages/algod_client/src/models/ledger-state-delta.ts:657](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/ledger-state-delta.ts#L657)

New Txids for the txtail and TxnCounter, mapped to txn.LastValid.
