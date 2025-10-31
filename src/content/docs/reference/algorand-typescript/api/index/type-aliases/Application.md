---
title: Application
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / Application

> **Application** = `object`

Defined in: [reference.ts:227](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L227)

Creates a new Application object represent the application id 0 (an invalid ID)

## Properties

### address

> `readonly` **address**: [`Account`](Account)

Defined in: [reference.ts:288](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L288)

Address for which this application has authority

---

### approvalProgram

> `readonly` **approvalProgram**: [`bytes`](bytes)

Defined in: [reference.ts:248](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L248)

Bytecode of Approval Program

---

### clearStateProgram

> `readonly` **clearStateProgram**: [`bytes`](bytes)

Defined in: [reference.ts:253](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L253)

Bytecode of Clear State Program

---

### creator

> `readonly` **creator**: [`Account`](Account)

Defined in: [reference.ts:283](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L283)

Creator address

---

### extraProgramPages

> `readonly` **extraProgramPages**: [`uint64`](uint64)

Defined in: [reference.ts:278](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L278)

Number of Extra Program Pages of code space

---

### globalNumBytes

> `readonly` **globalNumBytes**: [`uint64`](uint64)

Defined in: [reference.ts:263](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L263)

Number of byte array values allowed in Global State

---

### globalNumUint

> `readonly` **globalNumUint**: [`uint64`](uint64)

Defined in: [reference.ts:258](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L258)

Number of uint64 values allowed in Global State

---

### id

> `readonly` **id**: [`uint64`](uint64)

Defined in: [reference.ts:244](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L244)

The id of this application on the current network

---

### localNumBytes

> `readonly` **localNumBytes**: [`uint64`](uint64)

Defined in: [reference.ts:273](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L273)

Number of byte array values allowed in Local State

---

### localNumUint

> `readonly` **localNumUint**: [`uint64`](uint64)

Defined in: [reference.ts:268](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L268)

Number of uint64 values allowed in Local State

---

### version

> `readonly` **version**: [`uint64`](uint64)

Defined in: [reference.ts:293](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L293)

Version of the app, incremented each time the approval or clear program changes
