---
editUrl: false
next: false
prev: false
title: 'TransactionType'
---

Defined in: [packages/transact/src/transactions/transaction-type.ts:4](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction-type.ts#L4)

Supported transaction types

## Enumeration Members

### AppCall

> **AppCall**: `"appl"`

Defined in: [packages/transact/src/transactions/transaction-type.ts:28](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction-type.ts#L28)

Application transaction

---

### AssetConfig

> **AssetConfig**: `"acfg"`

Defined in: [packages/transact/src/transactions/transaction-type.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction-type.ts#L16)

Asset configuration transaction

---

### AssetFreeze

> **AssetFreeze**: `"afrz"`

Defined in: [packages/transact/src/transactions/transaction-type.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction-type.ts#L24)

Asset freeze transaction

---

### AssetTransfer

> **AssetTransfer**: `"axfer"`

Defined in: [packages/transact/src/transactions/transaction-type.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction-type.ts#L20)

Asset transfer transaction

---

### Heartbeat

> **Heartbeat**: `"hb"`

Defined in: [packages/transact/src/transactions/transaction-type.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction-type.ts#L36)

Heartbeat transaction

---

### KeyRegistration

> **KeyRegistration**: `"keyreg"`

Defined in: [packages/transact/src/transactions/transaction-type.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction-type.ts#L12)

Key registration transaction

---

### Payment

> **Payment**: `"pay"`

Defined in: [packages/transact/src/transactions/transaction-type.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction-type.ts#L8)

Payment transaction

---

### StateProof

> **StateProof**: `"stpf"`

Defined in: [packages/transact/src/transactions/transaction-type.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction-type.ts#L32)

State proof transaction

---

### Unknown

> **Unknown**: `"unknown"`

Defined in: [packages/transact/src/transactions/transaction-type.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction-type.ts#L42)

Unknown transaction type
Used when decoding transactions with unrecognized type values.
This should not be used when creating new transactions.
