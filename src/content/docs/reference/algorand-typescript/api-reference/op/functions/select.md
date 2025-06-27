---
title: 'select'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / select

# Function: select()

## Call Signature

> **select**(`a`, `b`, `c`): [`bytes`](/index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/op.ts:4045](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4045)

selects one of two values based on top-of-stack: B if C != 0, else A

### Parameters

#### a

[`bytes`](/index/type-aliases/bytes)

#### b

[`bytes`](/index/type-aliases/bytes)

#### c

[`uint64`](/index/type-aliases/uint64)

### Returns

[`bytes`](/index/type-aliases/bytes)

## Call Signature

> **select**(`a`, `b`, `c`): [`uint64`](/index/type-aliases/uint64)

Defined in: [packages/algo-ts/src/op.ts:4050](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4050)

selects one of two values based on top-of-stack: B if C != 0, else A

### Parameters

#### a

[`uint64`](/index/type-aliases/uint64)

#### b

[`uint64`](/index/type-aliases/uint64)

#### c

[`uint64`](/index/type-aliases/uint64)

### Returns

[`uint64`](/index/type-aliases/uint64)
