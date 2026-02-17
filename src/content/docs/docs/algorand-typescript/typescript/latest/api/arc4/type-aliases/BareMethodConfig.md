---
title: BareMethodConfig
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/README/) / BareMethodConfig

> **BareMethodConfig** = `object`

Defined in: [arc4/index.ts:179](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L179)

Configuration options for a bare method

## Properties

### allowActions?

> `optional` **allowActions**: [`OnCompleteActionStr`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/OnCompleteActionStr/) \| [`OnCompleteActionStr`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/OnCompleteActionStr/)[]

Defined in: [arc4/index.ts:184](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L184)

Which on complete action(s) are allowed when invoking this method.

#### Default

```ts
'NoOp';
```

---

### onCreate?

> `optional` **onCreate**: [`CreateOptions`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/CreateOptions/)

Defined in: [arc4/index.ts:189](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L189)

Whether this method should be callable when creating the application.

#### Default

```ts
'disallow';
```
