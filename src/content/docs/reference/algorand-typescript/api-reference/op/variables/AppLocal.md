---
title: 'AppLocal'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / AppLocal

# Variable: AppLocal

> `const` **AppLocal**: `object`

Defined in: [packages/algo-ts/src/op.ts:254](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L254)

Get or modify Local app state

## Type declaration

### delete()

delete key B from account A's local state of the current application

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

##### b

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

#### See

Native TEAL opcode: [`app_local_del`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_del)
Min AVM version: 2

### getBytes()

local state of the key B in the current application in account A

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

##### b

[`bytes`](/index/type-aliases/bytes)

#### Returns

[`bytes`](/index/type-aliases/bytes)

value. The value is zero (of type uint64) if the key does not exist.

#### See

Native TEAL opcode: [`app_local_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_get)
Min AVM version: 2

### getExBytes()

X is the local state of application B, key C in account A. Y is 1 if key existed, else 0

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

##### b

[`uint64`](/index/type-aliases/uint64) | [`Application`](/index/type-aliases/application)

##### c

[`bytes`](/index/type-aliases/bytes)

#### Returns

readonly \[[`bytes`](/index/type-aliases/bytes), `boolean`\]

did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.

#### See

Native TEAL opcode: [`app_local_get_ex`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_get_ex)
Min AVM version: 2

### getExUint64()

X is the local state of application B, key C in account A. Y is 1 if key existed, else 0

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

##### b

[`uint64`](/index/type-aliases/uint64) | [`Application`](/index/type-aliases/application)

##### c

[`bytes`](/index/type-aliases/bytes)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.

#### See

Native TEAL opcode: [`app_local_get_ex`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_get_ex)
Min AVM version: 2

### getUint64()

local state of the key B in the current application in account A

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

##### b

[`bytes`](/index/type-aliases/bytes)

#### Returns

[`uint64`](/index/type-aliases/uint64)

value. The value is zero (of type uint64) if the key does not exist.

#### See

Native TEAL opcode: [`app_local_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_get)
Min AVM version: 2

### put()

write C to key B in account A's local state of the current application

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

##### b

[`bytes`](/index/type-aliases/bytes)

##### c

[`uint64`](/index/type-aliases/uint64) | [`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

#### See

Native TEAL opcode: [`app_local_put`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_put)
Min AVM version: 2
