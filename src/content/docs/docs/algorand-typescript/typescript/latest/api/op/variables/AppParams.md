---
editUrl: false
next: false
prev: false
title: 'AppParams'
---

> `const` **AppParams**: `object`

Defined in: [op.ts:332](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L332)

## Type Declaration

### appAddress()

> **appAddress**(`a`): readonly \[[`Account`](/algorand-typescript/api/index/type-aliases/account/), `boolean`\]

Address for which this application has authority
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`Account`](/algorand-typescript/api/index/type-aliases/account/), `boolean`\]

### appApprovalProgram()

> **appApprovalProgram**(`a`): readonly \[[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/), `boolean`\]

Bytecode of Approval Program
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/), `boolean`\]

### appClearStateProgram()

> **appClearStateProgram**(`a`): readonly \[[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/), `boolean`\]

Bytecode of Clear State Program
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/), `boolean`\]

### appCreator()

> **appCreator**(`a`): readonly \[[`Account`](/algorand-typescript/api/index/type-aliases/account/), `boolean`\]

Creator address
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`Account`](/algorand-typescript/api/index/type-aliases/account/), `boolean`\]

### appExtraProgramPages()

> **appExtraProgramPages**(`a`): readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

Number of Extra Program Pages of code space
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### appGlobalNumByteSlice()

> **appGlobalNumByteSlice**(`a`): readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

Number of byte array values allowed in Global State
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### appGlobalNumUint()

> **appGlobalNumUint**(`a`): readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

Number of uint64 values allowed in Global State
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### appLocalNumByteSlice()

> **appLocalNumByteSlice**(`a`): readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

Number of byte array values allowed in Local State
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### appLocalNumUint()

> **appLocalNumUint**(`a`): readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

Number of uint64 values allowed in Local State
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### appVersion()

> **appVersion**(`a`): readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

Version of the app, incremented each time the approval or clear program changes
Min AVM version: 12

#### Parameters

##### a

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`Application`](/algorand-typescript/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]
