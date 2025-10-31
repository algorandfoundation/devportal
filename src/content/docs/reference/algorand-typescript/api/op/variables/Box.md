---
title: Box
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [op](docs/_md/op/README) / Box

> `const` **Box**: `object`

Defined in: [op.ts:614](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L614)

Get or modify box state

## Type declaration

### create()

> **create**(`a`, `b`): `boolean`

create a box named A, of length B. Fail if the name A is empty or B exceeds 32,768. Returns 0 if A already existed, else 1
Newly created boxes are filled with 0 bytes. `box_create` will fail if the referenced box already exists with a different size. Otherwise, existing boxes are unchanged by `box_create`.

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

##### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`boolean`

#### See

Native TEAL opcode: [`box_create`](https://dev.algorand.co/reference/algorand-teal/opcodes#box_create)
Min AVM version: 8

### delete()

> **delete**(`a`): `boolean`

delete box named A if it exists. Return 1 if A existed, 0 otherwise

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`boolean`

#### See

Native TEAL opcode: [`box_del`](https://dev.algorand.co/reference/algorand-teal/opcodes#box_del)
Min AVM version: 8

### extract()

> **extract**(`a`, `b`, `c`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

read C bytes from box A, starting at offset B. Fail if A does not exist, or the byte range is outside A's size.

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

##### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### c

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### See

Native TEAL opcode: [`box_extract`](https://dev.algorand.co/reference/algorand-teal/opcodes#box_extract)
Min AVM version: 8

### get()

> **get**(`a`): readonly \[[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/), `boolean`\]

X is the contents of box A if A exists, else ''. Y is 1 if A exists, else 0.
For boxes that exceed 4,096 bytes, consider `box_create`, `box_extract`, and `box_replace`

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

readonly \[[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/), `boolean`\]

#### See

Native TEAL opcode: [`box_get`](https://dev.algorand.co/reference/algorand-teal/opcodes#box_get)
Min AVM version: 8

### length()

> **length**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

X is the length of box A if A exists, else 0. Y is 1 if A exists, else 0.

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

#### See

Native TEAL opcode: [`box_len`](https://dev.algorand.co/reference/algorand-teal/opcodes#box_len)
Min AVM version: 8

### put()

> **put**(`a`, `b`): `void`

replaces the contents of box A with byte-array B. Fails if A exists and len(B) != len(box A). Creates A if it does not exist
For boxes that exceed 4,096 bytes, consider `box_create`, `box_extract`, and `box_replace`

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

##### b

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

#### See

Native TEAL opcode: [`box_put`](https://dev.algorand.co/reference/algorand-teal/opcodes#box_put)
Min AVM version: 8

### replace()

> **replace**(`a`, `b`, `c`): `void`

write byte-array C into box A, starting at offset B. Fail if A does not exist, or the byte range is outside A's size.

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

##### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### c

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

#### See

Native TEAL opcode: [`box_replace`](https://dev.algorand.co/reference/algorand-teal/opcodes#box_replace)
Min AVM version: 8

### resize()

> **resize**(`a`, `b`): `void`

change the size of box named A to be of length B, adding zero bytes to end or removing bytes from the end, as needed. Fail if the name A is empty, A is not an existing box, or B exceeds 32,768.

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

##### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Returns

`void`

#### See

Native TEAL opcode: [`box_resize`](https://dev.algorand.co/reference/algorand-teal/opcodes#box_resize)
Min AVM version: 10

### splice()

> **splice**(`a`, `b`, `c`, `d`): `void`

set box A to contain its previous bytes up to index B, followed by D, followed by the original bytes of A that began at index B+C.
Boxes are of constant length. If C < len(D), then len(D)-C bytes will be removed from the end. If C > len(D), zero bytes will be appended to the end to reach the box length.

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

##### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### c

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

##### d

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

#### See

Native TEAL opcode: [`box_splice`](https://dev.algorand.co/reference/algorand-teal/opcodes#box_splice)
Min AVM version: 10
