---
title: types/app-spec
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / types/app-spec

## Table of contents

### Interfaces

- [AppSources](/reference/algokit-utils-ts/api/interfaces/types_app_specappsources/)
- [AppSpec](/reference/algokit-utils-ts/api/interfaces/types_app_specappspec/)
- [CallConfig](/reference/algokit-utils-ts/api/interfaces/types_app_speccallconfig/)
- [DeclaredSchemaValueSpec](/reference/algokit-utils-ts/api/interfaces/types_app_specdeclaredschemavaluespec/)
- [Hint](/reference/algokit-utils-ts/api/interfaces/types_app_spechint/)
- [ReservedSchemaValueSpec](/reference/algokit-utils-ts/api/interfaces/types_app_specreservedschemavaluespec/)
- [Schema](/reference/algokit-utils-ts/api/interfaces/types_app_specschema/)
- [SchemaSpec](/reference/algokit-utils-ts/api/interfaces/types_app_specschemaspec/)
- [StateSchemaSpec](/reference/algokit-utils-ts/api/interfaces/types_app_specstateschemaspec/)
- [Struct](/reference/algokit-utils-ts/api/interfaces/types_app_specstruct/)

### Type Aliases

- [ABIType](/reference/algokit-utils-ts/api/modules/types_app_spec/#abitype)
- [AVMType](/reference/algokit-utils-ts/api/modules/types_app_spec/#avmtype)
- [CallConfigValue](/reference/algokit-utils-ts/api/modules/types_app_spec/#callconfigvalue)
- [DefaultArgument](/reference/algokit-utils-ts/api/modules/types_app_spec/#defaultargument)
- [FieldName](/reference/algokit-utils-ts/api/modules/types_app_spec/#fieldname)
- [HintSpec](/reference/algokit-utils-ts/api/modules/types_app_spec/#hintspec)
- [StateSchema](/reference/algokit-utils-ts/api/modules/types_app_spec/#stateschema)
- [StructElement](/reference/algokit-utils-ts/api/modules/types_app_spec/#structelement)

### Functions

- [arc32ToArc56](/reference/algokit-utils-ts/api/modules/types_app_spec/#arc32toarc56)

## Type Aliases

### ABIType

Ƭ **ABIType**: `string`

The string name of an ABI type

#### Defined in

[src/types/app-spec.ts:212](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L212)

---

### AVMType

Ƭ **AVMType**: `"uint64"` \| `"bytes"`

AVM data type

#### Defined in

[src/types/app-spec.ts:268](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L268)

---

### CallConfigValue

Ƭ **CallConfigValue**: `"NEVER"` \| `"CALL"` \| `"CREATE"` \| `"ALL"`

The various call configs:

- `NEVER`: Will not be called
- `CALL`: Can be called during a non-create call i.e. app id != 0
- `CREATE`: Can be called during a create call i.e. app id = 0
- `ALL`: Can be during a create OR non-create call

#### Defined in

[src/types/app-spec.ts:183](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L183)

---

### DefaultArgument

Ƭ **DefaultArgument**: \{ `data`: `ABIMethodParams` ; `source`: `"abi-method"` } \| \{ `data`: `string` ; `source`: `"global-state"` } \| \{ `data`: `string` ; `source`: `"local-state"` } \| \{ `data`: `string` \| `number` ; `source`: `"constant"` }

Defines a strategy for obtaining a default value for a given ABI arg.

#### Defined in

[src/types/app-spec.ts:228](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L228)

---

### FieldName

Ƭ **FieldName**: `string`

The name of a field

#### Defined in

[src/types/app-spec.ts:209](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L209)

---

### HintSpec

Ƭ **HintSpec**: `Record`\<`string`, [`Hint`](/reference/algokit-utils-ts/api/interfaces/types_app_spechint/)\>

A lookup of encoded method call spec to hint

#### Defined in

[src/types/app-spec.ts:167](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L167)

---

### StateSchema

Ƭ **StateSchema**: `Object`

Schema spec summary for global or local storage

#### Type declaration

| Name              | Type     | Description          |
| :---------------- | :------- | :------------------- |
| `num_byte_slices` | `number` | Number of byte slots |
| `num_uints`       | `number` | Number of uint slots |

#### Defined in

[src/types/app-spec.ts:317](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L317)

---

### StructElement

Ƭ **StructElement**: [[`FieldName`](/reference/algokit-utils-ts/api/modules/types_app_spec/#fieldname), [`ABIType`](/reference/algokit-utils-ts/api/modules/types_app_spec/#abitype)]

The elements of the struct/tuple: `FieldName`, `ABIType`

#### Defined in

[src/types/app-spec.ts:215](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L215)

## Functions

### arc32ToArc56

▸ **arc32ToArc56**(`appSpec`): [`Arc56Contract`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56arc56contract/)

Converts an ARC-32 Application Specification to an ARC-56 Contract

#### Parameters

| Name      | Type                                                                           | Description                          |
| :-------- | :----------------------------------------------------------------------------- | :----------------------------------- |
| `appSpec` | [`AppSpec`](/reference/algokit-utils-ts/api/interfaces/types_app_specappspec/) | The ARC-32 Application Specification |

#### Returns

[`Arc56Contract`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56arc56contract/)

The ARC-56 Contract

**`Example`**

```typescript
const arc56AppSpec = arc32ToArc56(arc32AppSpec);
```

#### Defined in

[src/types/app-spec.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L16)
