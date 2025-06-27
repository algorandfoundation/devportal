---
title: 'LogicSigOptions'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/readme) / [\<internal\>](/reference/readme) / LogicSigOptions

# Type Alias: LogicSigOptions

> **LogicSigOptions**: `object`

Defined in: [packages/algo-ts/src/logic-sig.ts:31](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/logic-sig.ts#L31)

Defines optional configuration for a logic signature

## Type declaration

### avmVersion?

> `optional` **avmVersion**: `10` \| `11`

Determines which AVM version to use, this affects what operations are supported.
Defaults to value provided supplied on command line (which defaults to current mainnet version)

### name?

> `optional` **name**: `string`

Override the name of the logic signature when generating build artifacts.
Defaults to the class name

### scratchSlots?

> `optional` **scratchSlots**: (`number` \| [`NumberRange`](/reference/algorand-typescript/numberrange))[]

Allows you to mark a slot ID or range of slot IDs as "off limits" to Puya.
These slot ID(s) will never be written to or otherwise manipulating by the compiler itself.
This is particularly useful in combination with `op.gload_bytes` / `op.gload_uint64`
which lets a contract in a group transaction read from the scratch slots of another contract
that occurs earlier in the transaction group.
