---
title: Arc56Contract
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/app-arc56](/docs/algokit-utils/typescript/latest/api/modules/types_app_arc56/) / Arc56Contract

[types/app-arc56](/docs/algokit-utils/typescript/latest/api/modules/types_app_arc56/).Arc56Contract

Describes the entire contract. This interface is an extension of the interface described in ARC-4

## Table of contents

### Properties

- [arcs](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.Arc56Contract/#arcs)
- [bareActions](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.Arc56Contract/#bareactions)
- [byteCode](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.Arc56Contract/#bytecode)
- [compilerInfo](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.Arc56Contract/#compilerinfo)
- [desc](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.Arc56Contract/#desc)
- [events](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.Arc56Contract/#events)
- [methods](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.Arc56Contract/#methods)
- [name](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.Arc56Contract/#name)
- [networks](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.Arc56Contract/#networks)
- [scratchVariables](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.Arc56Contract/#scratchvariables)
- [source](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.Arc56Contract/#source)
- [sourceInfo](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.Arc56Contract/#sourceinfo)
- [state](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.Arc56Contract/#state)
- [structs](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.Arc56Contract/#structs)
- [templateVariables](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.Arc56Contract/#templatevariables)

## Properties

### arcs

• **arcs**: `number`[]

The ARCs used and/or supported by this contract. All contracts implicitly support ARC4 and ARC56

#### Defined in

[src/types/app-arc56.ts:250](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L250)

---

### bareActions

• **bareActions**: `Object`

Supported bare actions for the contract. An action is a combination of call/create and an OnComplete

#### Type declaration

| Name     | Type                                                                                                          | Description                                     |
| :------- | :------------------------------------------------------------------------------------------------------------ | :---------------------------------------------- |
| `call`   | (`"NoOp"` \| `"OptIn"` \| `"DeleteApplication"` \| `"CloseOut"` \| `"ClearState"` \| `"UpdateApplication"`)[] | OnCompletes this method allows when appID !== 0 |
| `create` | (`"NoOp"` \| `"OptIn"` \| `"DeleteApplication"`)[]                                                            | OnCompletes this method allows when appID === 0 |

#### Defined in

[src/types/app-arc56.ts:298](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L298)

---

### byteCode

• `Optional` **byteCode**: `Object`

The compiled bytecode for the application. MUST be omitted if included as part of ARC23

#### Type declaration

| Name       | Type     | Description          |
| :--------- | :------- | :------------------- |
| `approval` | `string` | The approval program |
| `clear`    | `string` | The clear program    |

#### Defined in

[src/types/app-arc56.ts:319](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L319)

---

### compilerInfo

• `Optional` **compilerInfo**: `Object`

Information used to get the given byteCode and/or PC values in sourceInfo. MUST be given if byteCode or PC values are present

#### Type declaration

| Name                          | Type                                                                                     | Description                  |
| :---------------------------- | :--------------------------------------------------------------------------------------- | :--------------------------- |
| `compiler`                    | `"algod"` \| `"puya"`                                                                    | The name of the compiler     |
| `compilerVersion`             | \{ `commitHash?`: `string` ; `major`: `number` ; `minor`: `number` ; `patch`: `number` } | Compiler version information |
| `compilerVersion.commitHash?` | `string`                                                                                 | -                            |
| `compilerVersion.major`       | `number`                                                                                 | -                            |
| `compilerVersion.minor`       | `number`                                                                                 | -                            |
| `compilerVersion.patch`       | `number`                                                                                 | -                            |

#### Defined in

[src/types/app-arc56.ts:326](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L326)

---

### desc

• `Optional` **desc**: `string`

Optional, user-friendly description for the interface

#### Defined in

[src/types/app-arc56.ts:254](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L254)

---

### events

• `Optional` **events**: [`Event`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.Event/)[]

ARC-28 events that MAY be emitted by this contract

#### Defined in

[src/types/app-arc56.ts:338](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L338)

---

### methods

• **methods**: [`Method`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.Method/)[]

All of the methods that the contract implements

#### Defined in

[src/types/app-arc56.ts:271](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L271)

---

### name

• **name**: `string`

A user-friendly name for the contract

#### Defined in

[src/types/app-arc56.ts:252](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L252)

---

### networks

• `Optional` **networks**: `Object`

Optional object listing the contract instances across different networks.
The key is the base64 genesis hash of the network, and the value contains
information about the deployed contract in the network indicated by the
key. A key containing the human-readable name of the network MAY be
included, but the corresponding genesis hash key MUST also be defined

#### Index signature

▪ [network: `string`]: \{ `appID`: `number` }

#### Defined in

[src/types/app-arc56.ts:262](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L262)

---

### scratchVariables

• `Optional` **scratchVariables**: `Object`

The scratch variables used during runtime

#### Index signature

▪ [name: `string`]: \{ `slot`: `number` ; `type`: [`ABIType`](/docs/algokit-utils/typescript/latest/api/modules/types_app_arc56/#abitype) \| [`AVMType`](/docs/algokit-utils/typescript/latest/api/modules/types_app_arc56/#avmtype) \| [`StructName`](/docs/algokit-utils/typescript/latest/api/modules/types_app_arc56/#structname) }

#### Defined in

[src/types/app-arc56.ts:349](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L349)

---

### source

• `Optional` **source**: `Object`

The pre-compiled TEAL that may contain template variables. MUST be omitted if included as part of ARC23

#### Type declaration

| Name       | Type     | Description          |
| :--------- | :------- | :------------------- |
| `approval` | `string` | The approval program |
| `clear`    | `string` | The clear program    |

#### Defined in

[src/types/app-arc56.ts:312](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L312)

---

### sourceInfo

• `Optional` **sourceInfo**: `Object`

Information about the TEAL programs

#### Type declaration

| Name       | Type                                                                                                           | Description                  |
| :--------- | :------------------------------------------------------------------------------------------------------------- | :--------------------------- |
| `approval` | [`ProgramSourceInfo`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.ProgramSourceInfo/) | Approval program information |
| `clear`    | [`ProgramSourceInfo`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.ProgramSourceInfo/) | Clear program information    |

#### Defined in

[src/types/app-arc56.ts:305](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L305)

---

### state

• **state**: `Object`

#### Type declaration

| Name                  | Type                                                                                                                                                                                                                                                                                                                                                                                                          | Description                                                                                                                                     |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| `keys`                | \{ `box`: \{ `[name: string]`: [`StorageKey`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.StorageKey/); } ; `global`: \{ `[name: string]`: [`StorageKey`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.StorageKey/); } ; `local`: \{ `[name: string]`: [`StorageKey`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.StorageKey/); } } | Mapping of human-readable names to StorageKey objects                                                                                           |
| `keys.box`            | \{ `[name: string]`: [`StorageKey`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.StorageKey/); }                                                                                                                                                                                                                                                                                      | -                                                                                                                                               |
| `keys.global`         | \{ `[name: string]`: [`StorageKey`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.StorageKey/); }                                                                                                                                                                                                                                                                                      | -                                                                                                                                               |
| `keys.local`          | \{ `[name: string]`: [`StorageKey`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.StorageKey/); }                                                                                                                                                                                                                                                                                      | -                                                                                                                                               |
| `maps`                | \{ `box`: \{ `[name: string]`: [`StorageMap`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.StorageMap/); } ; `global`: \{ `[name: string]`: [`StorageMap`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.StorageMap/); } ; `local`: \{ `[name: string]`: [`StorageMap`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.StorageMap/); } } | Mapping of human-readable names to StorageMap objects                                                                                           |
| `maps.box`            | \{ `[name: string]`: [`StorageMap`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.StorageMap/); }                                                                                                                                                                                                                                                                                      | -                                                                                                                                               |
| `maps.global`         | \{ `[name: string]`: [`StorageMap`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.StorageMap/); }                                                                                                                                                                                                                                                                                      | -                                                                                                                                               |
| `maps.local`          | \{ `[name: string]`: [`StorageMap`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.StorageMap/); }                                                                                                                                                                                                                                                                                      | -                                                                                                                                               |
| `schema`              | \{ `global`: \{ `bytes`: `number` ; `ints`: `number` } ; `local`: \{ `bytes`: `number` ; `ints`: `number` } }                                                                                                                                                                                                                                                                                                 | Defines the values that should be used for GlobalNumUint, GlobalNumByteSlice, LocalNumUint, and LocalNumByteSlice when creating the application |
| `schema.global`       | \{ `bytes`: `number` ; `ints`: `number` }                                                                                                                                                                                                                                                                                                                                                                     | -                                                                                                                                               |
| `schema.global.bytes` | `number`                                                                                                                                                                                                                                                                                                                                                                                                      | -                                                                                                                                               |
| `schema.global.ints`  | `number`                                                                                                                                                                                                                                                                                                                                                                                                      | -                                                                                                                                               |
| `schema.local`        | \{ `bytes`: `number` ; `ints`: `number` }                                                                                                                                                                                                                                                                                                                                                                     | -                                                                                                                                               |
| `schema.local.bytes`  | `number`                                                                                                                                                                                                                                                                                                                                                                                                      | -                                                                                                                                               |
| `schema.local.ints`   | `number`                                                                                                                                                                                                                                                                                                                                                                                                      | -                                                                                                                                               |

#### Defined in

[src/types/app-arc56.ts:272](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L272)

---

### structs

• **structs**: `Object`

Named structs used by the application. Each struct field appears in the same order as ABI encoding.

#### Index signature

▪ [structName: [`StructName`](/docs/algokit-utils/typescript/latest/api/modules/types_app_arc56/#structname)]: [`StructField`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56.StructField/)[]

#### Defined in

[src/types/app-arc56.ts:269](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L269)

---

### templateVariables

• `Optional` **templateVariables**: `Object`

A mapping of template variable names as they appear in the TEAL (not including TMPL\_ prefix) to their respective types and values (if applicable)

#### Index signature

▪ [name: `string`]: \{ `type`: [`ABIType`](/docs/algokit-utils/typescript/latest/api/modules/types_app_arc56/#abitype) \| [`AVMType`](/docs/algokit-utils/typescript/latest/api/modules/types_app_arc56/#avmtype) \| [`StructName`](/docs/algokit-utils/typescript/latest/api/modules/types_app_arc56/#structname) ; `value?`: `string` }

#### Defined in

[src/types/app-arc56.ts:340](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L340)
