---
title: 'Scratch'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / Scratch

# Variable: Scratch

> `const` **Scratch**: `object`

Defined in: [packages/algo-ts/src/op.ts:3292](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3292)

Load or store scratch values

## Type declaration

### loadBytes()

Ath scratch space value. All scratch spaces are 0 at program start.

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

#### See

Native TEAL opcode: [`loads`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#loads)
Min AVM version: 5

### loadUint64()

Ath scratch space value. All scratch spaces are 0 at program start.

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`uint64`](/index/type-aliases/uint64)

#### See

Native TEAL opcode: [`loads`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#loads)
Min AVM version: 5

### store()

store B to the Ath scratch space

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64)

##### b

[`uint64`](/index/type-aliases/uint64) | [`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

#### See

Native TEAL opcode: [`stores`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#stores)
Min AVM version: 5
