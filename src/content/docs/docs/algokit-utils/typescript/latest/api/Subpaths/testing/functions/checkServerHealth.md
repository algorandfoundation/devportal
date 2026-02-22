---
editUrl: false
next: false
prev: false
title: "checkServerHealth"
---

> **checkServerHealth**(`url`, `timeout`): `Promise`\<`boolean`\>

Defined in: [packages/testing/src/mockServer.ts:45](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/testing/src/mockServer.ts#L45)

Check if a server is reachable by performing a health check.

## Parameters

### url

`string`

The base URL of the server to check

### timeout

`number` = `5000`

Maximum time to wait for the server to respond (default: 5000ms)

## Returns

`Promise`\<`boolean`\>

Promise resolving to true if server is healthy, false otherwise
