---
title: Method
slug: reference/algokit-utils-ts/api/interfaces/types_app_arc56method
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app-arc56](/reference/algokit-utils-ts/api/modules/types_app_arc56/) / Method

[types/app-arc56](/reference/algokit-utils-ts/api/modules/types_app_arc56/).Method

Describes a method in the contract. This interface is an extension of the interface described in ARC-4

## Table of contents

### Properties

- [actions](#actions)
- [args](#args)
- [desc](#desc)
- [events](#events)
- [name](#name)
- [readonly](#readonly)
- [recommendations](#recommendations)
- [returns](#returns)

## Properties

### actions

• **actions**: `Object`

an action is a combination of call/create and an OnComplete

#### Type declaration

| Name     | Type                                                                                                          | Description                                     |
| :------- | :------------------------------------------------------------------------------------------------------------ | :---------------------------------------------- |
| `call`   | (`"NoOp"` \| `"OptIn"` \| `"DeleteApplication"` \| `"CloseOut"` \| `"ClearState"` \| `"UpdateApplication"`)[] | OnCompletes this method allows when appID !== 0 |
| `create` | (`"NoOp"` \| `"OptIn"` \| `"DeleteApplication"`)[]                                                            | OnCompletes this method allows when appID === 0 |

#### Defined in

[src/types/app-arc56.ts:399](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L399)

---

### args

• **args**: \{ `defaultValue?`: \{ `data`: `string` ; `source`: `"method"` \| `"box"` \| `"global"` \| `"local"` \| `"literal"` ; `type?`: `string` } ; `desc?`: `string` ; `name?`: `string` ; `struct?`: `string` ; `type`: `string` }[]

The arguments of the method, in order

#### Defined in

[src/types/app-arc56.ts:364](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L364)

---

### desc

• `Optional` **desc**: `string`

Optional, user-friendly description for the method

#### Defined in

[src/types/app-arc56.ts:362](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L362)

---

### events

• `Optional` **events**: [`Event`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56event/)[]

ARC-28 events that MAY be emitted by this method

#### Defined in

[src/types/app-arc56.ts:408](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L408)

---

### name

• **name**: `string`

The name of the method

#### Defined in

[src/types/app-arc56.ts:360](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L360)

---

### readonly

• `Optional` **readonly**: `boolean`

If this method does not write anything to the ledger (ARC-22)

#### Defined in

[src/types/app-arc56.ts:406](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L406)

---

### recommendations

• `Optional` **recommendations**: `Object`

Information that clients can use when calling the method

#### Type declaration

| Name                     | Type                                                                                     | Description                                                           |
| :----------------------- | :--------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| `accounts?`              | `string`[]                                                                               | Recommended foreign accounts                                          |
| `apps?`                  | `number`[]                                                                               | Recommended foreign apps                                              |
| `assets?`                | `number`[]                                                                               | Recommended foreign assets                                            |
| `boxes?`                 | \{ `app?`: `number` ; `key`: `string` ; `readBytes`: `number` ; `writeBytes`: `number` } | Recommended box references to include                                 |
| `boxes.app?`             | `number`                                                                                 | The app ID for the box                                                |
| `boxes.key`              | `string`                                                                                 | The base64 encoded box key                                            |
| `boxes.readBytes`        | `number`                                                                                 | The number of bytes being read from the box                           |
| `boxes.writeBytes`       | `number`                                                                                 | The number of bytes being written to the box                          |
| `innerTransactionCount?` | `number`                                                                                 | The number of inner transactions the caller should cover the fees for |

#### Defined in

[src/types/app-arc56.ts:410](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L410)

---

### returns

• **returns**: `Object`

Information about the method's return value

#### Type declaration

| Name      | Type     | Description                                                                                                                                                   |
| :-------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `desc?`   | `string` | Optional, user-friendly description for the return value                                                                                                      |
| `struct?` | `string` | If the type is a struct, the name of the struct                                                                                                               |
| `type`    | `string` | The type of the return value, or "void" to indicate no return value. The `struct` field should also be checked to determine if this return value is a struct. |

#### Defined in

[src/types/app-arc56.ts:390](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L390)
