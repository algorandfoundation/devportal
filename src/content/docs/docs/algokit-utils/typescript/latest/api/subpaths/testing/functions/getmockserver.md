---
editUrl: false
next: false
prev: false
title: "getMockServer"
---

> **getMockServer**(`clientType`): `Promise`\<[`MockServer`](/docs/algokit-utils/typescript/latest/api/subpaths/testing/interfaces/mockserver/)\>

Defined in: [packages/testing/src/mockServer.ts:92](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/testing/src/mockServer.ts#L92)

Get a mock server instance for the specified client type.

Reads the appropriate environment variable (MOCK_ALGOD_URL, MOCK_INDEXER_URL, or MOCK_KMD_URL)
and validates that the server is reachable before returning a MockServer instance.

## Parameters

### clientType

[`ClientType`](/docs/algokit-utils/typescript/latest/api/subpaths/testing/type-aliases/clienttype/)

The type of client to get a mock server for ('algod', 'indexer', or 'kmd')

## Returns

`Promise`\<[`MockServer`](/docs/algokit-utils/typescript/latest/api/subpaths/testing/interfaces/mockserver/)\>

Promise resolving to a MockServer instance

## Throws

Error if the environment variable is not set or the server is not reachable

## Example

```typescript
const server = await getMockServer('algod')
const client = new AlgodClient(DEFAULT_TOKEN, server.baseUrl)
// ... run tests ...
```
