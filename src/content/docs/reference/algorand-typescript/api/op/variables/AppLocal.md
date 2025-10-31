---
title: AppLocal
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [op](docs/_md/op/README) / AppLocal

> `const` **AppLocal**: `object`

Defined in: [op.ts:255](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L255)

Get or modify Local app state

## Type declaration

### delete()

> **delete**(`a`, `b`): `void`

delete key B from account A's local state of the current application

#### Parameters

##### a

Txn.Accounts offset (or, since v4, an _available_ account address), state key.
Deleting a key which is already absent has no effect on the application local state. (In particular, it does _not_ cause the program to fail.)

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

##### b

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

#### See

Native TEAL opcode: [`app_local_del`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_local_del)
Min AVM version: 2

### getBytes()

> **getBytes**(`a`, `b`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

local state of the key B in the current application in account A

#### Parameters

##### a

Txn.Accounts offset (or, since v4, an _available_ account address), state key.

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

##### b

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

value. The value is zero (of type uint64) if the key does not exist.

#### See

Native TEAL opcode: [`app_local_get`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_local_get)
Min AVM version: 2

### getExBytes()

> **getExBytes**(`a`, `b`, `c`): readonly \[[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/), `boolean`\]

X is the local state of application B, key C in account A. Y is 1 if key existed, else 0

#### Parameters

##### a

Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset), state key.

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

##### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

##### c

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

readonly \[[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/), `boolean`\]

did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.

#### See

Native TEAL opcode: [`app_local_get_ex`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_local_get_ex)
Min AVM version: 2

### getExUint64()

> **getExUint64**(`a`, `b`, `c`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

X is the local state of application B, key C in account A. Y is 1 if key existed, else 0

#### Parameters

##### a

Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset), state key.

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

##### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

##### c

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.

#### See

Native TEAL opcode: [`app_local_get_ex`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_local_get_ex)
Min AVM version: 2

### getUint64()

> **getUint64**(`a`, `b`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

local state of the key B in the current application in account A

#### Parameters

##### a

Txn.Accounts offset (or, since v4, an _available_ account address), state key.

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

##### b

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

value. The value is zero (of type uint64) if the key does not exist.

#### See

Native TEAL opcode: [`app_local_get`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_local_get)
Min AVM version: 2

### put()

> **put**(`a`, `b`, `c`): `void`

write C to key B in account A's local state of the current application

#### Parameters

##### a

Txn.Accounts offset (or, since v4, an _available_ account address), state key, value.

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

##### b

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

##### c

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`void`

#### See

Native TEAL opcode: [`app_local_put`](https://dev.algorand.co/reference/algorand-teal/opcodes#app_local_put)
Min AVM version: 2
