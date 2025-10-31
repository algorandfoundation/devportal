---
title: LogicSigOptions
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / [\<internal\>](/reference/algorand-typescript/api/index/-internal-/readme/) / LogicSigOptions

> **LogicSigOptions** = `object`

Defined in: [logic-sig.ts:31](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/logic-sig.ts#L31)

Defines optional configuration for a logic signature

## Properties

### avmVersion?

> `optional` **avmVersion**: `10` \| `11` \| `12` \| `13`

Defined in: [logic-sig.ts:36](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/logic-sig.ts#L36)

Determines which AVM version to use, this affects what operations are supported.
Defaults to value provided on command line (which defaults to current mainnet version)

---

### name?

> `optional` **name**: `string`

Defined in: [logic-sig.ts:41](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/logic-sig.ts#L41)

Override the name of the logic signature when generating build artifacts.
Defaults to the class name

---

### scratchSlots?

> `optional` **scratchSlots**: (`number` \| [`NumberRange`](NumberRange-1))[]

Defined in: [logic-sig.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/logic-sig.ts#L49)

Allows you to mark a slot ID or range of slot IDs as "off limits" to Puya.
These slot ID(s) will never be written to or otherwise manipulating by the compiler itself.
This is particularly useful in combination with `op.gload_bytes` / `op.gload_uint64`
which lets a contract in a group transaction read from the scratch slots of another contract
that occurs earlier in the transaction group.
