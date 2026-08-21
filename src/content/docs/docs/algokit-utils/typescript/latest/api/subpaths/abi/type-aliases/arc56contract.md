---
editUrl: false
next: false
prev: false
title: 'Arc56Contract'
---

> **Arc56Contract** = `object`

Defined in: [packages/abi/src/arc56-contract.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L32)

Describes the entire contract. This type is an extension of the type described in ARC-4

## Properties

### arcs

> **arcs**: `number`[]

Defined in: [packages/abi/src/arc56-contract.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L34)

The ARCs used and/or supported by this contract. All contracts implicitly support ARC4 and ARC56

---

### bareActions

> **bareActions**: `object`

Defined in: [packages/abi/src/arc56-contract.ts:82](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L82)

Supported bare actions for the contract. An action is a combination of call/create and an OnComplete

#### call

> **call**: (`"NoOp"` \| `"OptIn"` \| `"CloseOut"` \| `"ClearState"` \| `"UpdateApplication"` \| `"DeleteApplication"`)[]

OnCompletes this method allows when appID !== 0

#### create

> **create**: (`"NoOp"` \| `"OptIn"` \| `"DeleteApplication"`)[]

OnCompletes this method allows when appID === 0

---

### byteCode?

> `optional` **byteCode**: `object`

Defined in: [packages/abi/src/arc56-contract.ts:103](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L103)

The compiled bytecode for the application. MUST be omitted if included as part of ARC23

#### approval

> **approval**: `string`

The approval program

#### clear

> **clear**: `string`

The clear program

---

### compilerInfo?

> `optional` **compilerInfo**: `object`

Defined in: [packages/abi/src/arc56-contract.ts:110](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L110)

Information used to get the given byteCode and/or PC values in sourceInfo. MUST be given if byteCode or PC values are present

#### compiler

> **compiler**: `"algod"` \| `"puya"`

The name of the compiler

#### compilerVersion

> **compilerVersion**: `object`

Compiler version information

##### compilerVersion.commitHash?

> `optional` **commitHash**: `string`

##### compilerVersion.major

> **major**: `number`

##### compilerVersion.minor

> **minor**: `number`

##### compilerVersion.patch

> **patch**: `number`

---

### desc?

> `optional` **desc**: `string`

Defined in: [packages/abi/src/arc56-contract.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L38)

Optional, user-friendly description for the type

---

### events?

> `optional` **events**: [`Event`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/event/)[]

Defined in: [packages/abi/src/arc56-contract.ts:122](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L122)

ARC-28 events that MAY be emitted by this contract

---

### methods

> **methods**: [`Arc56Method`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/arc56method/)[]

Defined in: [packages/abi/src/arc56-contract.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L55)

All of the methods that the contract implements

---

### name

> **name**: `string`

Defined in: [packages/abi/src/arc56-contract.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L36)

A user-friendly name for the contract

---

### networks?

> `optional` **networks**: `object`

Defined in: [packages/abi/src/arc56-contract.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L46)

Optional object listing the contract instances across different networks.
The key is the base64 genesis hash of the network, and the value contains
information about the deployed contract in the network indicated by the
key. A key containing the human-readable name of the network MAY be
included, but the corresponding genesis hash key MUST also be defined

#### Index Signature

\[`network`: `string`\]: `object`

---

### scratchVariables?

> `optional` **scratchVariables**: `object`

Defined in: [packages/abi/src/arc56-contract.ts:133](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L133)

The scratch variables used during runtime

#### Index Signature

\[`name`: `string`\]: `object`

---

### source?

> `optional` **source**: `object`

Defined in: [packages/abi/src/arc56-contract.ts:96](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L96)

The pre-compiled TEAL that may contain template variables. MUST be omitted if included as part of ARC23

#### approval

> **approval**: `string`

The approval program

#### clear

> **clear**: `string`

The clear program

---

### sourceInfo?

> `optional` **sourceInfo**: `object`

Defined in: [packages/abi/src/arc56-contract.ts:89](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L89)

Information about the TEAL programs

#### approval

> **approval**: [`ProgramSourceInfo`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/programsourceinfo/)

Approval program information

#### clear

> **clear**: [`ProgramSourceInfo`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/programsourceinfo/)

Clear program information

---

### state

> **state**: `object`

Defined in: [packages/abi/src/arc56-contract.ts:56](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L56)

#### keys

> **keys**: `object`

Mapping of human-readable names to StorageKey objects

##### keys.box

> **box**: `object`

###### Index Signature

\[`name`: `string`\]: [`StorageKey`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/storagekey/)

##### keys.global

> **global**: `object`

###### Index Signature

\[`name`: `string`\]: [`StorageKey`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/storagekey/)

##### keys.local

> **local**: `object`

###### Index Signature

\[`name`: `string`\]: [`StorageKey`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/storagekey/)

#### maps

> **maps**: `object`

Mapping of human-readable names to StorageMap objects

##### maps.box

> **box**: `object`

###### Index Signature

\[`name`: `string`\]: [`StorageMap`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/storagemap/)

##### maps.global

> **global**: `object`

###### Index Signature

\[`name`: `string`\]: [`StorageMap`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/storagemap/)

##### maps.local

> **local**: `object`

###### Index Signature

\[`name`: `string`\]: [`StorageMap`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/storagemap/)

#### schema

> **schema**: `object`

Defines the values that should be used for GlobalNumUint, GlobalNumByteSlice, LocalNumUint, and LocalNumByteSlice when creating the application

##### schema.global

> **global**: `object`

##### schema.global.bytes

> **bytes**: `number`

##### schema.global.ints

> **ints**: `number`

##### schema.local

> **local**: `object`

##### schema.local.bytes

> **bytes**: `number`

##### schema.local.ints

> **ints**: `number`

---

### structs

> **structs**: `object`

Defined in: [packages/abi/src/arc56-contract.ts:53](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L53)

Named structs used by the application. Each struct field appears in the same order as ABI encoding.

#### Index Signature

\[`structName`: `string`\]: [`StructField`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/structfield/)[]

---

### templateVariables?

> `optional` **templateVariables**: `object`

Defined in: [packages/abi/src/arc56-contract.ts:124](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L124)

A mapping of template variable names as they appear in the TEAL (not including TMPL\_ prefix) to their respective types and values (if applicable)

#### Index Signature

\[`name`: `string`\]: `object`
