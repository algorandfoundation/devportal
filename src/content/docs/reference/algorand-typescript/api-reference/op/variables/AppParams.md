---
title: 'AppParams'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / AppParams

# Variable: AppParams

> `const` **AppParams**: `object`

Defined in: [packages/algo-ts/src/op.ts:331](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L331)

## Type declaration

### appAddress()

Address for which this application has authority
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Application`](/index/type-aliases/application)

#### Returns

readonly \[[`Account`](/index/type-aliases/account), `boolean`\]

### appApprovalProgram()

Bytecode of Approval Program
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Application`](/index/type-aliases/application)

#### Returns

readonly \[[`bytes`](/index/type-aliases/bytes), `boolean`\]

### appClearStateProgram()

Bytecode of Clear State Program
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Application`](/index/type-aliases/application)

#### Returns

readonly \[[`bytes`](/index/type-aliases/bytes), `boolean`\]

### appCreator()

Creator address
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Application`](/index/type-aliases/application)

#### Returns

readonly \[[`Account`](/index/type-aliases/account), `boolean`\]

### appExtraProgramPages()

Number of Extra Program Pages of code space
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Application`](/index/type-aliases/application)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### appGlobalNumByteSlice()

Number of byte array values allowed in Global State
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Application`](/index/type-aliases/application)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### appGlobalNumUint()

Number of uint64 values allowed in Global State
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Application`](/index/type-aliases/application)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### appLocalNumByteSlice()

Number of byte array values allowed in Local State
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Application`](/index/type-aliases/application)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### appLocalNumUint()

Number of uint64 values allowed in Local State
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Application`](/index/type-aliases/application)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]
