---
editUrl: false
next: false
prev: false
title: "AppBox"
---

> `const` **AppBox**: `object`

Defined in: [op.ts:196](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L196)

Get or modify box state of other applications

## Type Declaration

### create()

> **create**(`a`, `b`, `c`): `boolean`

create a box named B, of length C, for app A. Fail if the name B is empty or C exceeds 32,768. Returns 0 if B already existed, else 1
Newly created boxes are filled with 0 bytes. `app_box_create` will fail if the referenced box already exists with a different size. Otherwise, existing boxes are unchanged by `app_box_create`.

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

##### b

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

##### c

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

#### Returns

`boolean`

#### See

Native TEAL opcode: [`app_box_create`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_box_create)
Min AVM version: 13

### delete()

> **delete**(`a`, `b`): `boolean`

delete box named B of app A if it exists. Return 1 if B existed, 0 otherwise

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

##### b

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### Returns

`boolean`

#### See

Native TEAL opcode: [`app_box_del`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_box_del)
Min AVM version: 13

### extract()

> **extract**(`a`, `b`, `c`, `d`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

read D bytes from box B of app A, starting at offset C. Fail if box B does not exist, or the byte range is outside B's size.

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

##### b

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

##### c

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

##### d

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### See

Native TEAL opcode: [`app_box_extract`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_box_extract)
Min AVM version: 13

### get()

> **get**(`a`, `b`): readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), `boolean`\]

X is the contents of box B of app A if B exists, else ''. Y is 1 if B exists, else 0.
For boxes that exceed 4,096 bytes, consider `app_box_create`, `app_box_extract`, and `app_box_replace`

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

##### b

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### Returns

readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), `boolean`\]

#### See

Native TEAL opcode: [`app_box_get`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_box_get)
Min AVM version: 13

### length()

> **length**(`a`, `b`): readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

X is the length of box B of app A if B exists, else 0. Y is 1 if B exists, else 0.

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

##### b

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### Returns

readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

#### See

Native TEAL opcode: [`app_box_len`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_box_len)
Min AVM version: 13

### put()

> **put**(`a`, `b`, `c`): `void`

replaces the contents of box B of app A with byte-array C. Fails if B exists and len(C) != len(box B). Creates B if it does not exist
For boxes that exceed 4,096 bytes, consider `app_box_create`, `app_box_extract`, and `app_box_replace`

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

##### b

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

##### c

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### Returns

`void`

#### See

Native TEAL opcode: [`app_box_put`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_box_put)
Min AVM version: 13

### replace()

> **replace**(`a`, `b`, `c`, `d`): `void`

write byte-array D into box B of app A, starting at offset C. Fail if box B does not exist, or the byte range is outside B's size.

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

##### b

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

##### c

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

##### d

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### Returns

`void`

#### See

Native TEAL opcode: [`app_box_replace`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_box_replace)
Min AVM version: 13

### resize()

> **resize**(`a`, `b`, `c`): `void`

change the size of box named B of app A to be of length C, adding zero bytes to end or removing bytes from the end, as needed. Fail if the name B is empty, B is not an existing box, or C exceeds 32,768.

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

##### b

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

##### c

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

#### Returns

`void`

#### See

Native TEAL opcode: [`app_box_resize`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_box_resize)
Min AVM version: 13

### splice()

> **splice**(`a`, `b`, `c`, `d`, `e`): `void`

set box B of app A to contain its previous bytes up to index C, followed by E, followed by the original bytes of B that began at index C+D.
Boxes are of constant length. If D < len(E), then len(E)-D bytes will be removed from the end. If D > len(E), zero bytes will be appended to the end to reach the box length.

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

##### b

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

##### c

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

##### d

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

##### e

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### Returns

`void`

#### See

Native TEAL opcode: [`app_box_splice`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_box_splice)
Min AVM version: 13
