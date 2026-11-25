---
title: Emitting ARC-28 Events
description: Code examples for emitting ARC-28 events from your smart contracts.
---

To emit ARC-28 events from your smart contract you can use the following syntax.

## Algorand Python

```python
@arc4.abimethod
def emit_swapped(self, a: arc4.UInt64, b: arc4.UInt64) -> None:
    arc4.emit("MyEvent", a, b)
```

OR:

```python
class MyEvent(arc4.Struct):
    a: arc4.String
    b: arc4.UInt64

# ...

@arc4.abimethod
def emit_swapped(self, a: arc4.String, b: arc4.UInt64) -> None:
    arc4.emit(MyEvent(a, b))
```

## TealScript

```typescript
MyEvent = new EventLogger<{
  stringField: string
  intField: uint64
}>();

// ...

this.MyEvent.log({
  stringField: "a"
  intField: 2
})
```

## PyTEAL

```python
class MyEvent(pt.abi.NamedTuple):
    stringField: pt.abi.Field[pt.abi.String]
    intField: pt.abi.Field[pt.abi.Uint64]

# ...

@app.external()
def myMethod(a: pt.abi.String, b: pt.abi.Uint64) -> pt.Expr:
    # ...
    return pt.Seq(
        # ...
        (event := MyEvent()).set(a, b),
        pt.Log(pt.Concat(pt.MethodSignature("MyEvent(byte[],uint64)"), event._stored_value.load())),
        pt.Approve(),
    )
```

Note: if your event doesn't have any dynamic ARC-4 types in it then you can simplify that to something like this:

```python
pt.Log(pt.Concat(pt.MethodSignature("MyEvent(byte[],uint64)"), a.get(), pt.Itob(b.get()))),
```

## TEAL

```teal
method "MyEvent(byte[],uint64)"
frame_dig 0 // or any other command to put the ARC-4 encoded bytes for the event on the stack
concat
log
```
