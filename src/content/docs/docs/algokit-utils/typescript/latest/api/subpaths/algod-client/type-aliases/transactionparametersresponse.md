---
editUrl: false
next: false
prev: false
title: 'TransactionParametersResponse'
---

> **TransactionParametersResponse** = `object`

Defined in: [packages/algod_client/src/models/transaction-parameters-response.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/transaction-parameters-response.ts#L8)

TransactionParams contains the parameters that help a client construct
a new transaction.

## Properties

### consensusVersion

> **consensusVersion**: `string`

Defined in: [packages/algod_client/src/models/transaction-parameters-response.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/transaction-parameters-response.ts#L13)

ConsensusVersion indicates the consensus protocol version
as of LastRound.

---

### fee

> **fee**: `bigint`

Defined in: [packages/algod_client/src/models/transaction-parameters-response.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/transaction-parameters-response.ts#L21)

Fee is the suggested transaction fee
Fee is in units of micro-Algos per byte.
Fee may fall to zero but transactions must still have a fee of
at least MinTxnFee for the current network protocol.

---

### genesisHash

> **genesisHash**: `Uint8Array`

Defined in: [packages/algod_client/src/models/transaction-parameters-response.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/transaction-parameters-response.ts#L26)

GenesisHash is the hash of the genesis block.

---

### genesisId

> **genesisId**: `string`

Defined in: [packages/algod_client/src/models/transaction-parameters-response.ts:31](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/transaction-parameters-response.ts#L31)

GenesisID is an ID listed in the genesis block.

---

### lastRound

> **lastRound**: `bigint`

Defined in: [packages/algod_client/src/models/transaction-parameters-response.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/transaction-parameters-response.ts#L36)

LastRound indicates the last round seen

---

### minFee

> **minFee**: `bigint`

Defined in: [packages/algod_client/src/models/transaction-parameters-response.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/transaction-parameters-response.ts#L42)

The minimum transaction fee (not per byte) required for the
txn to validate for the current network protocol.
