---
title: AppGlobal
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [op](docs/_md/op/README) / AppGlobal

> `const` **AppGlobal**: `object`

Defined in: [op.ts:186](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L186)

Get or modify Global app state

## Type declaration

### delete()

> **delete**(`a`): `void`

delete key A from the global state of the current application

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

state key.
Deleting a key which is already absent has no effect on the application global state. (In particular, it does _not_ cause the program to fail.)

#### Returns

`void`

#### See

Native TEAL opcode: [`app_global_del`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_global_del)
Min AVM version: 2

### getBytes()

> **getBytes**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

global state of the key A in the current application

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

state key.

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

value. The value is zero (of type uint64) if the key does not exist.

#### See

Native TEAL opcode: [`app_global_get`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_global_get)
Min AVM version: 2

### getExBytes()

> **getExBytes**(`a`, `b`): readonly \[[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/), `boolean`\]

X is the global state of application A, key B. Y is 1 if key existed, else 0

#### Parameters

##### a

Txn.ForeignApps offset (or, since v4, an _available_ application id), state key.

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

##### b

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

readonly \[[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/), `boolean`\]

did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.

#### See

Native TEAL opcode: [`app_global_get_ex`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_global_get_ex)
Min AVM version: 2

### getExUint64()

> **getExUint64**(`a`, `b`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

X is the global state of application A, key B. Y is 1 if key existed, else 0

#### Parameters

##### a

Txn.ForeignApps offset (or, since v4, an _available_ application id), state key.

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

##### b

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.

#### See

Native TEAL opcode: [`app_global_get_ex`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_global_get_ex)
Min AVM version: 2

### getUint64()

> **getUint64**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

global state of the key A in the current application

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

state key.

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

value. The value is zero (of type uint64) if the key does not exist.

#### See

Native TEAL opcode: [`app_global_get`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_global_get)
Min AVM version: 2

### put()

> **put**(`a`, `b`): `void`

write B to key A in the global state of the current application

#### Parameters

##### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

##### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

#### See

Native TEAL opcode: [`app_global_put`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_global_put)
Min AVM version: 2
