---
editUrl: false
next: false
prev: false
title: "BoxIdentifier"
---

> **BoxIdentifier** = `string` \| `Uint8Array` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/app.ts:70](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L70)

:::caution[Deprecated]
Use `types/app-manager/BoxIdentifier` instead.

Something that identifies a box name - either a:
 * `Uint8Array`
 * `string` (that will be encoded to a Uint8Array)
 * `SendTransactionFrom` (encoded into the public key address of the corresponding account)
:::
