---
title: 'StateTotals'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/readme) / [\<internal\>](/reference/readme) / StateTotals

# Type Alias: StateTotals

> **StateTotals**: `object`

Defined in: [packages/algo-ts/src/base-contract.ts:31](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/base-contract.ts#L31)

Options class to manually define the total amount of global and local state contract will use.

This is not required when all state is assigned to `this.`, but is required if a
contract dynamically interacts with state via `AppGlobal.getBytes` etc, or if you want
to reserve additional state storage for future contract updates, since the Algorand protocol
doesn't allow increasing them after creation.

## Type declaration

### globalBytes?

> `optional` **globalBytes**: `number`

### globalUints?

> `optional` **globalUints**: `number`

### localBytes?

> `optional` **localBytes**: `number`

### localUints?

> `optional` **localUints**: `number`
