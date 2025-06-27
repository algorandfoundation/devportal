---
title: 'btoi'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / btoi

# Function: btoi()

> **btoi**(`a`): [`uint64`](/index/type-aliases/uint64)

Defined in: [packages/algo-ts/src/op.ts:707](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L707)

converts big-endian byte array A to uint64. Fails if len(A) > 8. Padded by leading 0s if len(A) < 8.
`btoi` fails if the input is longer than 8 bytes.

## Parameters

### a

[`bytes`](/index/type-aliases/bytes)

## Returns

[`uint64`](/index/type-aliases/uint64)

## See

Native TEAL opcode: [`btoi`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#btoi)
Min AVM version: 1
