---
title: ConventionalRouting
type: interface
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](/reference/algorand-typescript/api/arc4/readme/) / ConventionalRouting

Defined in: [arc4/index.ts:31](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L31)

Defines conventional routing method names. When used, methods with these names will be implicitly routed to the corresponding
application lifecycle event.

## Remarks

This behaviour is independent of a contract explicitly implementing this interface. The interface is provided simply to improve
the developer experience of using this feature.

## Properties

### closeOutOfApplication?

> `optional` **closeOutOfApplication**: [`AnyFunction`](/reference/algorand-typescript/api/arc4/-internal-/type-aliases/anyfunction/)

Defined in: [arc4/index.ts:35](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L35)

The function to invoke when closing out of this application

---

### createApplication?

> `optional` **createApplication**: [`AnyFunction`](/reference/algorand-typescript/api/arc4/-internal-/type-aliases/anyfunction/)

Defined in: [arc4/index.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L39)

The function to invoke when creating this application

---

### deleteApplication?

> `optional` **deleteApplication**: [`AnyFunction`](/reference/algorand-typescript/api/arc4/-internal-/type-aliases/anyfunction/)

Defined in: [arc4/index.ts:43](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L43)

The function to invoke when deleting this application

---

### optInToApplication?

> `optional` **optInToApplication**: [`AnyFunction`](/reference/algorand-typescript/api/arc4/-internal-/type-aliases/anyfunction/)

Defined in: [arc4/index.ts:47](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L47)

The function to invoke when opting in to this application

---

### updateApplication?

> `optional` **updateApplication**: [`AnyFunction`](/reference/algorand-typescript/api/arc4/-internal-/type-aliases/anyfunction/)

Defined in: [arc4/index.ts:51](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L51)

The function to invoke when updating this application
