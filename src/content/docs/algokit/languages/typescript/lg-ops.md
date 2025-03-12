---
title: AVM Operations
---

Algorand TypeScript allows you to express [every op code the AVM has available](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/) excluding those that manipulate the stack or control execution as these would interfere with the compiler. These are all exported from the [ops module](api/op/README). It is possible to import ops individually or via the entire namespace.

```ts
// Import op from module root
import { assert, Contract, op } from '@algorandfoundation/algorand-typescript';
// Import whole module from ./op
import * as op2 from '@algorandfoundation/algorand-typescript/op';
// Import individual ops
import { bzero } from '@algorandfoundation/algorand-typescript/op';

class MyContract extends Contract {
  test() {
    const a = bzero(8).bitwiseInvert();
    const b = op2.btoi(a);
    assert(b === 2 ** 64 - 1);

    const c = op.shr(b, 32);

    assert(c === 2 ** 32 - 1);
  }
}
```

## Txn, Global, and other Enums

Many of the AVM ops which take an enum argument have been abstracted into a static type with a property or function per enum member

```ts
import { Contract, Global, log, Txn } from '@algorandfoundation/algorand-typescript';
import { AppParams } from '@algorandfoundation/algorand-typescript/op';

class MyContract extends Contract {
  test() {
    log(Txn.sender);
    log(Txn.applicationArgs(0));
    log(Global.groupId);
    log(Global.creatorAddress);
    log(...AppParams.appAddress(123));
  }
}
```
