---
title: AppParams
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / AppParams

> `const` **AppParams**: `object`

Defined in: [op.ts:332](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L332)

## Type declaration

### appAddress()

> **appAddress**(`a`): readonly \[[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/), `boolean`\]

Address for which this application has authority
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/), `boolean`\]

### appApprovalProgram()

> **appApprovalProgram**(`a`): readonly \[[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/), `boolean`\]

Bytecode of Approval Program
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/), `boolean`\]

### appClearStateProgram()

> **appClearStateProgram**(`a`): readonly \[[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/), `boolean`\]

Bytecode of Clear State Program
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/), `boolean`\]

### appCreator()

> **appCreator**(`a`): readonly \[[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/), `boolean`\]

Creator address
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/), `boolean`\]

### appExtraProgramPages()

> **appExtraProgramPages**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

Number of Extra Program Pages of code space
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### appGlobalNumByteSlice()

> **appGlobalNumByteSlice**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

Number of byte array values allowed in Global State
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### appGlobalNumUint()

> **appGlobalNumUint**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

Number of uint64 values allowed in Global State
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### appLocalNumByteSlice()

> **appLocalNumByteSlice**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

Number of byte array values allowed in Local State
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### appLocalNumUint()

> **appLocalNumUint**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

Number of uint64 values allowed in Local State
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### appVersion()

> **appVersion**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

Version of the app, incremented each time the approval or clear program changes
Min AVM version: 12

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]
