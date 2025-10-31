---
title: ContractOptions
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / [\<internal\>](/reference/algorand-typescript/api/index/-internal-/readme/) / ContractOptions

> **ContractOptions** = `object`

Defined in: [base-contract.ts:41](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/base-contract.ts#L41)

Additional configuration options for a contract

## Properties

### avmVersion?

> `optional` **avmVersion**: `10` \| `11` \| `12` \| `13`

Defined in: [base-contract.ts:46](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/base-contract.ts#L46)

Determines which AVM version to use, this affects what operations are supported.
Defaults to value provided on command line (which defaults to current mainnet version)

---

### name?

> `optional` **name**: `string`

Defined in: [base-contract.ts:52](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/base-contract.ts#L52)

Override the name of the logic signature when generating build artifacts.
Defaults to the class name

---

### scratchSlots?

> `optional` **scratchSlots**: (`number` \| [`NumberRange`](NumberRange))[]

Defined in: [base-contract.ts:65](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/base-contract.ts#L65)

Allows you to mark a slot ID or range of slot IDs as "off limits" to Puya.
These slot ID(s) will never be written to or otherwise manipulating by the compiler itself.
This is particularly useful in combination with `op.gload_bytes` / `op.gload_uint64`
which lets a contract in a group transaction read from the scratch slots of another contract
that occurs earlier in the transaction group.

In the case of inheritance, scratch slots reserved become cumulative. It is not an error
to have overlapping ranges or values either, so if a base class contract reserves slots
0-5 inclusive and the derived contract reserves 5-10 inclusive, then within the derived
contract all slots 0-10 will be marked as reserved.

---

### stateTotals?

> `optional` **stateTotals**: [`StateTotals`](StateTotals)

Defined in: [base-contract.ts:79](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/base-contract.ts#L79)

Allows defining what values should be used for global and local uint and bytes storage
values when creating a contract. Used when outputting ARC-32 application.json schemas.

If left unspecified, the totals will be determined by the compiler based on state
variables assigned to `this`.

This setting is not inherited, and only applies to the exact `Contract` it is specified
on. If a base class does specify this setting, and a derived class does not, a warning
will be emitted for the derived class. To resolve this warning, `stateTotals` must be
specified. An empty object may be provided in order to indicate that this contract should
revert to the default behaviour
