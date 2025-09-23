---
title: Arc56Contract
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app-arc56](/reference/algokit-utils-ts/api/modules/types_app_arc56/) / Arc56Contract



[types/app-arc56](/reference/algokit-utils-ts/api/modules/types_app_arc56/).Arc56Contract

Describes the entire contract. This interface is an extension of the interface described in ARC-4

## Table of contents

### Properties

- [arcs](#arcs)
- [bareActions](#bareactions)
- [byteCode](#bytecode)
- [compilerInfo](#compilerinfo)
- [desc](#desc)
- [events](#events)
- [methods](#methods)
- [name](#name)
- [networks](#networks)
- [scratchVariables](#scratchvariables)
- [source](#source)
- [sourceInfo](#sourceinfo)
- [state](#state)
- [structs](#structs)
- [templateVariables](#templatevariables)

## Properties

### arcs

• **arcs**: `number`[]

The ARCs used and/or supported by this contract. All contracts implicitly support ARC4 and ARC56

#### Defined in

[src/types/app-arc56.ts:250](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L250)

___

### bareActions

• **bareActions**: `Object`

Supported bare actions for the contract. An action is a combination of call/create and an OnComplete

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | (``"NoOp"`` \| ``"OptIn"`` \| ``"DeleteApplication"`` \| ``"CloseOut"`` \| ``"ClearState"`` \| ``"UpdateApplication"``)[] | OnCompletes this method allows when appID !== 0 |
| `create` | (``"NoOp"`` \| ``"OptIn"`` \| ``"DeleteApplication"``)[] | OnCompletes this method allows when appID === 0 |

#### Defined in

[src/types/app-arc56.ts:298](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L298)

___

### byteCode

• `Optional` **byteCode**: `Object`

The compiled bytecode for the application. MUST be omitted if included as part of ARC23

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `approval` | `string` | The approval program |
| `clear` | `string` | The clear program |

#### Defined in

[src/types/app-arc56.ts:319](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L319)

___

### compilerInfo

• `Optional` **compilerInfo**: `Object`

Information used to get the given byteCode and/or PC values in sourceInfo. MUST be given if byteCode or PC values are present

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `compiler` | ``"algod"`` \| ``"puya"`` | The name of the compiler |
| `compilerVersion` | \{ `commitHash?`: `string` ; `major`: `number` ; `minor`: `number` ; `patch`: `number`  } | Compiler version information |
| `compilerVersion.commitHash?` | `string` | - |
| `compilerVersion.major` | `number` | - |
| `compilerVersion.minor` | `number` | - |
| `compilerVersion.patch` | `number` | - |

#### Defined in

[src/types/app-arc56.ts:326](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L326)

___

### desc

• `Optional` **desc**: `string`

Optional, user-friendly description for the interface

#### Defined in

[src/types/app-arc56.ts:254](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L254)

___

### events

• `Optional` **events**: [`Event`]()[]

ARC-28 events that MAY be emitted by this contract

#### Defined in

[src/types/app-arc56.ts:338](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L338)

___

### methods

• **methods**: [`Method`]()[]

All of the methods that the contract implements

#### Defined in

[src/types/app-arc56.ts:271](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L271)

___

### name

• **name**: `string`

A user-friendly name for the contract

#### Defined in

[src/types/app-arc56.ts:252](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L252)

___

### networks

• `Optional` **networks**: `Object`

Optional object listing the contract instances across different networks.
The key is the base64 genesis hash of the network, and the value contains
information about the deployed contract in the network indicated by the
key. A key containing the human-readable name of the network MAY be
included, but the corresponding genesis hash key MUST also be defined

#### Index signature

▪ [network: `string`]: \{ `appID`: `number`  }

#### Defined in

[src/types/app-arc56.ts:262](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L262)

___

### scratchVariables

• `Optional` **scratchVariables**: `Object`

The scratch variables used during runtime

#### Index signature

▪ [name: `string`]: \{ `slot`: `number` ; `type`: [`ABIType`](/reference/algokit-utils-ts/api/modules/types_app_arc56/#abitype) \| [`AVMType`](/reference/algokit-utils-ts/api/modules/types_app_arc56/#avmtype) \| [`StructName`](/reference/algokit-utils-ts/api/modules/types_app_arc56/#structname)  }

#### Defined in

[src/types/app-arc56.ts:349](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L349)

___

### source

• `Optional` **source**: `Object`

The pre-compiled TEAL that may contain template variables. MUST be omitted if included as part of ARC23

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `approval` | `string` | The approval program |
| `clear` | `string` | The clear program |

#### Defined in

[src/types/app-arc56.ts:312](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L312)

___

### sourceInfo

• `Optional` **sourceInfo**: `Object`

Information about the TEAL programs

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `approval` | [`ProgramSourceInfo`]() | Approval program information |
| `clear` | [`ProgramSourceInfo`]() | Clear program information |

#### Defined in

[src/types/app-arc56.ts:305](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L305)

___

### state

• **state**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | \{ `box`: \{ `[name: string]`: [`StorageKey`]();  } ; `global`: \{ `[name: string]`: [`StorageKey`]();  } ; `local`: \{ `[name: string]`: [`StorageKey`]();  }  } | Mapping of human-readable names to StorageKey objects |
| `keys.box` | \{ `[name: string]`: [`StorageKey`]();  } | - |
| `keys.global` | \{ `[name: string]`: [`StorageKey`]();  } | - |
| `keys.local` | \{ `[name: string]`: [`StorageKey`]();  } | - |
| `maps` | \{ `box`: \{ `[name: string]`: [`StorageMap`]();  } ; `global`: \{ `[name: string]`: [`StorageMap`]();  } ; `local`: \{ `[name: string]`: [`StorageMap`]();  }  } | Mapping of human-readable names to StorageMap objects |
| `maps.box` | \{ `[name: string]`: [`StorageMap`]();  } | - |
| `maps.global` | \{ `[name: string]`: [`StorageMap`]();  } | - |
| `maps.local` | \{ `[name: string]`: [`StorageMap`]();  } | - |
| `schema` | \{ `global`: \{ `bytes`: `number` ; `ints`: `number`  } ; `local`: \{ `bytes`: `number` ; `ints`: `number`  }  } | Defines the values that should be used for GlobalNumUint, GlobalNumByteSlice, LocalNumUint, and LocalNumByteSlice when creating the application |
| `schema.global` | \{ `bytes`: `number` ; `ints`: `number`  } | - |
| `schema.global.bytes` | `number` | - |
| `schema.global.ints` | `number` | - |
| `schema.local` | \{ `bytes`: `number` ; `ints`: `number`  } | - |
| `schema.local.bytes` | `number` | - |
| `schema.local.ints` | `number` | - |

#### Defined in

[src/types/app-arc56.ts:272](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L272)

___

### structs

• **structs**: `Object`

Named structs used by the application. Each struct field appears in the same order as ABI encoding.

#### Index signature

▪ [structName: [`StructName`](/reference/algokit-utils-ts/api/modules/types_app_arc56/#structname)]: [`StructField`]()[]

#### Defined in

[src/types/app-arc56.ts:269](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L269)

___

### templateVariables

• `Optional` **templateVariables**: `Object`

A mapping of template variable names as they appear in the TEAL (not including TMPL_ prefix) to their respective types and values (if applicable)

#### Index signature

▪ [name: `string`]: \{ `type`: [`ABIType`](/reference/algokit-utils-ts/api/modules/types_app_arc56/#abitype) \| [`AVMType`](/reference/algokit-utils-ts/api/modules/types_app_arc56/#avmtype) \| [`StructName`](/reference/algokit-utils-ts/api/modules/types_app_arc56/#structname) ; `value?`: `string`  }

#### Defined in

[src/types/app-arc56.ts:340](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L340)