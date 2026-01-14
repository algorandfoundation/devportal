---
title: types/arc-28
---

# types/arc-28

## Interfaces

### Arc28Event

Defined in: [src/types/arc-28.ts:8](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L8)

The definition of metadata for an ARC-28 event per https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0028.md#event.

#### Properties

| Property                  | Type       | Description                                       | Defined in                                                                                                   |
| ------------------------- | ---------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| <a id="args"></a> `args`  | `object`[] | The arguments of the event, in order              | [src/types/arc-28.ts:14](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L14) |
| <a id="desc"></a> `desc?` | `string`   | Optional, user-friendly description for the event | [src/types/arc-28.ts:12](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L12) |
| <a id="name"></a> `name`  | `string`   | The name of the event                             | [src/types/arc-28.ts:10](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L10) |

---

### Arc28EventGroup

Defined in: [src/types/arc-28.ts:47](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L47)

Specifies a group of ARC-28 event definitions along with instructions for when to attempt to process the events.

#### Properties

| Property                                              | Type                          | Description                                                                                                                         | Defined in                                                                                                   |
| ----------------------------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| <a id="continueonerror"></a> `continueOnError?`       | `boolean`                     | Whether or not to silently (with warning log) continue if an error is encountered processing the ARC-28 event data; default = false | [src/types/arc-28.ts:55](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L55) |
| <a id="events"></a> `events`                          | [`Arc28Event`](#arc28event)[] | The list of ARC-28 event definitions                                                                                                | [src/types/arc-28.ts:57](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L57) |
| <a id="groupname"></a> `groupName`                    | `string`                      | The name to designate for this group of events.                                                                                     | [src/types/arc-28.ts:49](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L49) |
| <a id="processforappids"></a> `processForAppIds?`     | `bigint`[]                    | Optional list of app IDs that this event should apply to                                                                            | [src/types/arc-28.ts:51](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L51) |
| <a id="processtransaction"></a> `processTransaction?` | (`transaction`) => `boolean`  | Optional predicate to indicate if these ARC-28 events should be processed for the given transaction                                 | [src/types/arc-28.ts:53](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L53) |

---

### Arc28EventToProcess

Defined in: [src/types/arc-28.ts:25](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L25)

An ARC-28 event to be processed

#### Extended by

- [`EmittedArc28Event`](#emittedarc28event)

#### Properties

| Property                                       | Type                        | Description                                              | Defined in                                                                                                   |
| ---------------------------------------------- | --------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| <a id="eventdefinition"></a> `eventDefinition` | [`Arc28Event`](#arc28event) | The ARC-28 definition of the event                       | [src/types/arc-28.ts:35](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L35) |
| <a id="eventname"></a> `eventName`             | `string`                    | The name of the ARC-28 event that was triggered          | [src/types/arc-28.ts:29](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L29) |
| <a id="eventprefix"></a> `eventPrefix`         | `string`                    | The 4-byte hex prefix for the event                      | [src/types/arc-28.ts:33](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L33) |
| <a id="eventsignature"></a> `eventSignature`   | `string`                    | The signature of the event e.g. `EventName(type1,type2)` | [src/types/arc-28.ts:31](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L31) |
| <a id="groupname-1"></a> `groupName`           | `string`                    | The name of the ARC-28 event group the event belongs to  | [src/types/arc-28.ts:27](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L27) |

---

### EmittedArc28Event

Defined in: [src/types/arc-28.ts:39](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L39)

An emitted ARC-28 event extracted from an app call log.

#### Extends

- [`Arc28EventToProcess`](#arc28eventtoprocess)

#### Properties

| Property                                         | Type                             | Description                                                                                            | Inherited from                                                                      | Defined in                                                                                                   |
| ------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| <a id="args-1"></a> `args`                       | `ABIValue`[]                     | The ordered arguments extracted from the event that was emitted                                        | -                                                                                   | [src/types/arc-28.ts:41](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L41) |
| <a id="argsbyname"></a> `argsByName`             | `Record`\<`string`, `ABIValue`\> | The named arguments extracted from the event that was emitted (where the arguments had a name defined) | -                                                                                   | [src/types/arc-28.ts:43](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L43) |
| <a id="eventdefinition-1"></a> `eventDefinition` | [`Arc28Event`](#arc28event)      | The ARC-28 definition of the event                                                                     | [`Arc28EventToProcess`](#arc28eventtoprocess).[`eventDefinition`](#eventdefinition) | [src/types/arc-28.ts:35](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L35) |
| <a id="eventname-1"></a> `eventName`             | `string`                         | The name of the ARC-28 event that was triggered                                                        | [`Arc28EventToProcess`](#arc28eventtoprocess).[`eventName`](#eventname)             | [src/types/arc-28.ts:29](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L29) |
| <a id="eventprefix-1"></a> `eventPrefix`         | `string`                         | The 4-byte hex prefix for the event                                                                    | [`Arc28EventToProcess`](#arc28eventtoprocess).[`eventPrefix`](#eventprefix)         | [src/types/arc-28.ts:33](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L33) |
| <a id="eventsignature-1"></a> `eventSignature`   | `string`                         | The signature of the event e.g. `EventName(type1,type2)`                                               | [`Arc28EventToProcess`](#arc28eventtoprocess).[`eventSignature`](#eventsignature)   | [src/types/arc-28.ts:31](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L31) |
| <a id="groupname-2"></a> `groupName`             | `string`                         | The name of the ARC-28 event group the event belongs to                                                | [`Arc28EventToProcess`](#arc28eventtoprocess).[`groupName`](#groupname-1)           | [src/types/arc-28.ts:27](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L27) |
