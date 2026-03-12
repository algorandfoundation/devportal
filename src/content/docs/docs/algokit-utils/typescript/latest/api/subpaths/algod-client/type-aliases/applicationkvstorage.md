---
editUrl: false
next: false
prev: false
title: "ApplicationKvStorage"
---

> **ApplicationKvStorage** = `object`

Defined in: [packages/algod\_client/src/models/application-kv-storage.ts:9](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/application-kv-storage.ts#L9)

An application's global/local/box state.

## Properties

### account?

> `optional` **account**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/algod\_client/src/models/application-kv-storage.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/application-kv-storage.ts#L18)

The address of the account associated with the local state.

***

### kvs

> **kvs**: [`AvmKeyValue`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/avmkeyvalue/)[]

Defined in: [packages/algod\_client/src/models/application-kv-storage.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/application-kv-storage.ts#L13)

Key-Value pairs representing application states.
