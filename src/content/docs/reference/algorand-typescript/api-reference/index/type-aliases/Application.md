---
title: 'Application'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / Application

# Type Alias: Application

> **Application**: `object`

Defined in: [packages/algo-ts/src/reference.ts:222](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L222)

An Application on the Algorand network.

## Type declaration

### address

> `readonly` **address**: [`Account`](/reference/algorand-typescript/account)

Address for which this application has authority

### approvalProgram

> `readonly` **approvalProgram**: [`bytes`](/reference/algorand-typescript/bytes)

Bytecode of Approval Program

### clearStateProgram

> `readonly` **clearStateProgram**: [`bytes`](/reference/algorand-typescript/bytes)

Bytecode of Clear State Program

### creator

> `readonly` **creator**: [`Account`](/reference/algorand-typescript/account)

Creator address

### extraProgramPages

> `readonly` **extraProgramPages**: [`uint64`](/reference/algorand-typescript/uint64)

Number of Extra Program Pages of code space

### globalNumBytes

> `readonly` **globalNumBytes**: [`uint64`](/reference/algorand-typescript/uint64)

Number of byte array values allowed in Global State

### globalNumUint

> `readonly` **globalNumUint**: [`uint64`](/reference/algorand-typescript/uint64)

Number of uint64 values allowed in Global State

### id

> `readonly` **id**: [`uint64`](/reference/algorand-typescript/uint64)

The id of this application on the current network

### localNumBytes

> `readonly` **localNumBytes**: [`uint64`](/reference/algorand-typescript/uint64)

Number of byte array values allowed in Local State

### localNumUint

> `readonly` **localNumUint**: [`uint64`](/reference/algorand-typescript/uint64)

Number of uint64 values allowed in Local State
