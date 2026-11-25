---
editUrl: false
next: false
prev: false
title: "AppParams"
---

> `const` **AppParams**: `object`

Defined in: [op.ts:432](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L432)

## Type Declaration

### appAddress()

> **appAddress**(`a`): readonly \[[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/), `boolean`\]

Address for which this application has authority
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

#### Returns

readonly \[[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/), `boolean`\]

### appApprovalProgram()

> **appApprovalProgram**(`a`): readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), `boolean`\]

Bytecode of Approval Program
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

#### Returns

readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), `boolean`\]

### appClearStateProgram()

> **appClearStateProgram**(`a`): readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), `boolean`\]

Bytecode of Clear State Program
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

#### Returns

readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), `boolean`\]

### appCreator()

> **appCreator**(`a`): readonly \[[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/), `boolean`\]

Creator address
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

#### Returns

readonly \[[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/), `boolean`\]

### appExtraProgramPages()

> **appExtraProgramPages**(`a`): readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

Number of Extra Program Pages of code space
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

### appFamilyBoxAccess()

> **appFamilyBoxAccess**(`a`): readonly \[`boolean`, `boolean`\]

This app's boxes may be read and written by any app (existing or future) with the same creator
Min AVM version: 13

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

#### Returns

readonly \[`boolean`, `boolean`\]

### appForeignBoxReads()

> **appForeignBoxReads**(`a`): readonly \[`boolean`, `boolean`\]

This app's boxes may be read by any app
Min AVM version: 13

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

#### Returns

readonly \[`boolean`, `boolean`\]

### appGlobalNumByteSlice()

> **appGlobalNumByteSlice**(`a`): readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

Number of byte array values allowed in Global State
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

### appGlobalNumUint()

> **appGlobalNumUint**(`a`): readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

Number of uint64 values allowed in Global State
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

### appLocalNumByteSlice()

> **appLocalNumByteSlice**(`a`): readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

Number of byte array values allowed in Local State
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

### appLocalNumUint()

> **appLocalNumUint**(`a`): readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

Number of uint64 values allowed in Local State
Min AVM version: 5

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

### appSizeSponsor()

> **appSizeSponsor**(`a`): readonly \[[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/), `boolean`\]

If non-zero, this account is responsible for the app's extra pages and global state balance requirement
Min AVM version: 13

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

#### Returns

readonly \[[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/), `boolean`\]

### appVersion()

> **appVersion**(`a`): readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]

Version of the app, incremented each time the approval or clear program changes
Min AVM version: 12

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

#### Returns

readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `boolean`\]
