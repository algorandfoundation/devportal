---
title: 'AppGlobal'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / AppGlobal

# Variable: AppGlobal

> `const` **AppGlobal**: `object`

Defined in: [packages/algo-ts/src/op.ts:185](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L185)

Get or modify Global app state

## Type declaration

### delete()

delete key A from the global state of the current application

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

#### See

Native TEAL opcode: [`app_global_del`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_del)
Min AVM version: 2

### getBytes()

global state of the key A in the current application

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

[`bytes`](/index/type-aliases/bytes)

value. The value is zero (of type uint64) if the key does not exist.

#### See

Native TEAL opcode: [`app_global_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_get)
Min AVM version: 2

### getExBytes()

X is the global state of application A, key B. Y is 1 if key existed, else 0

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Application`](/index/type-aliases/application)

##### b

[`bytes`](/index/type-aliases/bytes)

#### Returns

readonly \[[`bytes`](/index/type-aliases/bytes), `boolean`\]

did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.

#### See

Native TEAL opcode: [`app_global_get_ex`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_get_ex)
Min AVM version: 2

### getExUint64()

X is the global state of application A, key B. Y is 1 if key existed, else 0

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Application`](/index/type-aliases/application)

##### b

[`bytes`](/index/type-aliases/bytes)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.

#### See

Native TEAL opcode: [`app_global_get_ex`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_get_ex)
Min AVM version: 2

### getUint64()

global state of the key A in the current application

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

#### Returns

[`uint64`](/index/type-aliases/uint64)

value. The value is zero (of type uint64) if the key does not exist.

#### See

Native TEAL opcode: [`app_global_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_get)
Min AVM version: 2

### put()

write B to key A in the global state of the current application

#### Parameters

##### a

[`bytes`](/index/type-aliases/bytes)

##### b

[`uint64`](/index/type-aliases/uint64) | [`bytes`](/index/type-aliases/bytes)

#### Returns

`void`

#### See

Native TEAL opcode: [`app_global_put`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_put)
Min AVM version: 2
