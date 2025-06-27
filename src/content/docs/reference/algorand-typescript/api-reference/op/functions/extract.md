---
title: 'extract'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / extract

# Function: extract()

## Call Signature

> **extract**(`a`, `b`): [`bytes`](/index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/op.ts:4032](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4032)

A range of bytes from A starting at B up to the end of the sequence

### Parameters

#### a

[`bytes`](/index/type-aliases/bytes)

#### b

[`uint64`](/index/type-aliases/uint64)

### Returns

[`bytes`](/index/type-aliases/bytes)

## Call Signature

> **extract**(`a`, `b`, `c`): [`bytes`](/index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/op.ts:4037](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4037)

A range of bytes from A starting at B up to but not including B+C. If B+C is larger than the array length, the program fails

### Parameters

#### a

[`bytes`](/index/type-aliases/bytes)

#### b

[`uint64`](/index/type-aliases/uint64)

#### c

[`uint64`](/index/type-aliases/uint64)

### Returns

[`bytes`](/index/type-aliases/bytes)
