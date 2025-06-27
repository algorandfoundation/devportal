---
title: 'Box'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / Box

# Variable: Box

> `const` **Box**: `object`

Defined in: [packages/algo-ts/src/op.ts:605](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L605)

Get or modify box state

## Type declaration

### create()

create a box named A, of length B. Fail if the name A is empty or B exceeds 32,768. Returns 0 if A already existed, else 1
Newly created boxes are filled with 0 bytes. `box_create` will fail if the referenced box already exists with a different size. Otherwise, existing boxes are unchanged by `box_create`.

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

##### b

[`uint64`](/index/type-aliases/uint64)

#### Returns

`boolean`

#### See

Native TEAL opcode: [`box_create`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_create)
Min AVM version: 8

### delete()

delete box named A if it exists. Return 1 if A existed, 0 otherwise

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

`boolean`

#### See

Native TEAL opcode: [`box_del`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_del)
Min AVM version: 8

### extract()

read C bytes from box A, starting at offset B. Fail if A does not exist, or the byte range is outside A's size.

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

##### b

[`uint64`](/index/type-aliases/uint64)

##### c

[`uint64`](/index/type-aliases/uint64)

#### Returns

[`bytes`](/index/type-aliases/bytes)

#### See

Native TEAL opcode: [`box_extract`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_extract)
Min AVM version: 8

### get()

X is the contents of box A if A exists, else ''. Y is 1 if A exists, else 0.
For boxes that exceed 4,096 bytes, consider `box_create`, `box_extract`, and `box_replace`

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

readonly \[[`bytes`](/index/type-aliases/bytes), `boolean`\]

#### See

Native TEAL opcode: [`box_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_get)
Min AVM version: 8

### length()

X is the length of box A if A exists, else 0. Y is 1 if A exists, else 0.

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

#### See

Native TEAL opcode: [`box_len`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_len)
Min AVM version: 8

### put()

replaces the contents of box A with byte-array B. Fails if A exists and len(B) != len(box A). Creates A if it does not exist
For boxes that exceed 4,096 bytes, consider `box_create`, `box_extract`, and `box_replace`

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

##### b

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

#### See

Native TEAL opcode: [`box_put`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_put)
Min AVM version: 8

### replace()

write byte-array C into box A, starting at offset B. Fail if A does not exist, or the byte range is outside A's size.

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

##### b

[`uint64`](/index/type-aliases/uint64)

##### c

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

#### See

Native TEAL opcode: [`box_replace`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_replace)
Min AVM version: 8

### resize()

change the size of box named A to be of length B, adding zero bytes to end or removing bytes from the end, as needed. Fail if the name A is empty, A is not an existing box, or B exceeds 32,768.

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

##### b

[`uint64`](/index/type-aliases/uint64)

#### Returns

`void`

#### See

Native TEAL opcode: [`box_resize`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_resize)
Min AVM version: 10

### splice()

set box A to contain its previous bytes up to index B, followed by D, followed by the original bytes of A that began at index B+C.
Boxes are of constant length. If C < len(D), then len(D)-C bytes will be removed from the end. If C > len(D), zero bytes will be appended to the end to reach the box length.

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

##### b

[`uint64`](/index/type-aliases/uint64)

##### c

[`uint64`](/index/type-aliases/uint64)

##### d

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

#### See

Native TEAL opcode: [`box_splice`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_splice)
Min AVM version: 10
