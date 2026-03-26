---
title: 'algokit_subscriber.types.arc28'
---

<div class="api-ref">

## Classes

| [`Arc28EventArg`](#class-arc28eventarg)         | Represents an argument of an ARC-28 event.                                             |
| ----------------------------------------------- | -------------------------------------------------------------------------------------- |
| [`Arc28Event`](#class-arc28event)               | The definition of metadata for an ARC-28 event as per the ARC-28 specification.        |
| [`Arc28EventGroup`](#class-arc28eventgroup)     | Specifies a group of ARC-28 event definitions along with instructions for              |
| [`Arc28EventFilter`](#class-arc28eventfilter)   | A reference to an ARC-28 group and event, used to filter for transactions that emit it |
| [`EmittedArc28Event`](#class-emittedarc28event) | Represents an ARC-28 event that was emitted.                                           |

## Module Contents

### _class_ Arc28EventArg

Represents an argument of an ARC-28 event.

#### type _: str_

The type of the argument

#### name _: str | None_ _= None_

An optional, user-friendly name for the argument

#### desc _: str | None_ _= None_

An optional, user-friendly description for the argument

### _class_ Arc28Event

The definition of metadata for an ARC-28 event as per the ARC-28 specification.

#### name _: str_

The name of the event

#### args _: list[[Arc28EventArg](#class-arc28eventarg)]_

The arguments of the event, in order

#### desc _: str | None_ _= None_

An optional, user-friendly description for the event

#### _property_ signature _: str_

The signature of the event e.g. EventName(type1,type2)

#### _property_ prefix _: bytes_

The prefix for the event

#### _property_ abi*type *: algokit*abi.abi.ABIType*

The ABI type of the event

### _class_ Arc28EventGroup

Specifies a group of ARC-28 event definitions along with instructions for
when to attempt to process the events.

#### group*name *: str\_

The name to designate for this group of events.

#### events _: list[[Arc28Event](#class-arc28event)]_ _= []_

The list of ARC-28 event definitions.

#### process*for_app_ids *: list[int] | None\_ _= None_

Optional list of app IDs that this group should apply to.

#### process*transaction *: Callable[[algokit_indexer_client.models.Transaction], bool] | None\_ _= None_

Optional predicate to indicate if these ARC-28 events should be processed
for the given transaction.

#### continue*on_error *: bool\_ _= False_

Whether or not to silently (with warning log) continue if an error is
encountered processing the ARC-28 event data; default = False.

### _class_ Arc28EventFilter

A reference to an ARC-28 group and event, used to filter for transactions that emit it

#### group*name *: str\_

The name of the ARC-28 event group the event belongs to

#### event*name *: str\_

The name of the ARC-28 event that was triggered

### _class_ EmittedArc28Event

Represents an ARC-28 event that was emitted.

#### group*name *: str\_

The name of the ARC-28 event group the event belongs to

#### event*name *: str\_

The name of the ARC-28 event that was triggered

#### event*signature *: str\_

The signature of the event e.g. EventName(type1,type2)

#### event*prefix *: str\_

The 4-byte hex prefix for the event

#### event*definition *: [Arc28Event](#class-arc28event)\_

The ARC-28 definition of the event

#### args _: list[Any]_

The ordered arguments extracted from the event that was emitted

#### args*by_name *: dict[str, Any]\_

The named arguments extracted from the event that was emitted (where the
arguments had a name defined)

</div>
