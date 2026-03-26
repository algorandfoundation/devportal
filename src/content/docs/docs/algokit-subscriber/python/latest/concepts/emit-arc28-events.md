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

## Algorand TypeScript

Algorand TypeScript uses the same Puya compiler as Algorand Python and has similar syntax for emitting ARC-28 events:

```typescript
import { Contract, arc4, emit } from '@algorandfoundation/algorand-typescript';

class MyEvent extends arc4.Struct {
  a: arc4.Str;
  b: arc4.Uint64;
}

class MyContract extends Contract {
  @arc4.abimethod()
  emitSwapped(a: arc4.Str, b: arc4.Uint64): void {
    emit(new MyEvent({ a, b }));
  }
}
```

OR with explicit event signature:

```typescript
@arc4.abimethod()
emitSwapped(a: arc4.Uint64, b: arc4.Uint64): void {
  emit('MyEvent(uint64,uint64)', a, b)
}
```

OR with inferred types:

```typescript
@arc4.abimethod()
emitSwapped(a: arc4.Uint64, b: arc4.Uint64): void {
  emit('MyEvent', a, b)
}
```

## TEAL

```teal
method "MyEvent(byte[],uint64)"
frame_dig 0 // or any other command to put the ARC-4 encoded bytes for the event on the stack
concat
log
```
