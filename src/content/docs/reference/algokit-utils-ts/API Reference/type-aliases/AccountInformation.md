---
editUrl: false
next: false
prev: false
title: "AccountInformation"
---

> **AccountInformation**: `Omit`\<[`NumberConverter`](/reference/algokit-utils-ts/API Reference/type-aliases/numberconverter/)\<`AccountInformationModel`\>, `"getEncodingSchema"` \| `"toEncodingData"` \| `"authAddr"`\> & `object`

Defined in: [src/account/account.ts:135](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/account/account.ts#L135)

:::caution[Deprecated]
Account information at a given round.
:::

## Type declaration

### ~~authAddr?~~

> `optional` **authAddr**: `string`

(spend) the address against which signing should be checked. If empty, the address of the current account is used. This field can be updated in any transaction by setting the RekeyTo field.
