---
title: AlgoHttpClientWithRetry
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/algo-http-client-with-retry](/reference/algokit-utils-ts/api/modules/types_algo_http_client_with_retry/) / AlgoHttpClientWithRetry

[types/algo-http-client-with-retry](/reference/algokit-utils-ts/api/modules/types_algo_http_client_with_retry/).AlgoHttpClientWithRetry

A HTTP Client that wraps the Algorand SDK HTTP Client with retries

## Hierarchy

- `URLTokenBaseHTTPClient`

  ↳ **`AlgoHttpClientWithRetry`**

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [MAX_BACKOFF_MS](#max_backoff_ms)
- [MAX_TRIES](#max_tries)
- [RETRY_ERROR_CODES](#retry_error_codes)
- [RETRY_STATUS_CODES](#retry_status_codes)

### Methods

- [callWithRetry](#callwithretry)
- [delete](#delete)
- [get](#get)
- [post](#post)

## Constructors

### constructor

• **new AlgoHttpClientWithRetry**(`tokenHeader`, `baseServer`, `port?`, `defaultHeaders?`): [`AlgoHttpClientWithRetry`]()

#### Parameters

| Name              | Type                        |
| :---------------- | :-------------------------- |
| `tokenHeader`     | `TokenHeader`               |
| `baseServer`      | `string`                    |
| `port?`           | `string` \| `number`        |
| `defaultHeaders?` | `Record`\<`string`, `any`\> |

#### Returns

[`AlgoHttpClientWithRetry`]()

#### Inherited from

URLTokenBaseHTTPClient.constructor

#### Defined in

node_modules/algosdk/dist/types/client/urlTokenBaseHTTPClient.d.ts:27

## Properties

### MAX_BACKOFF_MS

▪ `Static` `Private` `Readonly` **MAX_BACKOFF_MS**: `10000`

#### Defined in

[src/types/algo-http-client-with-retry.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L8)

---

### MAX_TRIES

▪ `Static` `Private` `Readonly` **MAX_TRIES**: `5`

#### Defined in

[src/types/algo-http-client-with-retry.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L7)

---

### RETRY_ERROR_CODES

▪ `Static` `Private` `Readonly` **RETRY_ERROR_CODES**: `string`[]

#### Defined in

[src/types/algo-http-client-with-retry.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L13)

---

### RETRY_STATUS_CODES

▪ `Static` `Private` `Readonly` **RETRY_STATUS_CODES**: `number`[]

#### Defined in

[src/types/algo-http-client-with-retry.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L12)

## Methods

### callWithRetry

▸ **callWithRetry**(`func`): `Promise`\<`BaseHTTPClientResponse`\>

#### Parameters

| Name   | Type                                        |
| :----- | :------------------------------------------ |
| `func` | () => `Promise`\<`BaseHTTPClientResponse`\> |

#### Returns

`Promise`\<`BaseHTTPClientResponse`\>

#### Defined in

[src/types/algo-http-client-with-retry.ts:25](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L25)

---

### delete

▸ **delete**(`relativePath`, `data`, `query?`, `requestHeaders?`): `Promise`\<`BaseHTTPClientResponse`\>

#### Parameters

| Name             | Type                           |
| :--------------- | :----------------------------- |
| `relativePath`   | `string`                       |
| `data`           | `Uint8Array`                   |
| `query?`         | `Query`\<`string`\>            |
| `requestHeaders` | `Record`\<`string`, `string`\> |

#### Returns

`Promise`\<`BaseHTTPClientResponse`\>

#### Overrides

URLTokenBaseHTTPClient.delete

#### Defined in

[src/types/algo-http-client-with-retry.ts:100](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L100)

---

### get

▸ **get**(`relativePath`, `query?`, `requestHeaders?`): `Promise`\<`BaseHTTPClientResponse`\>

#### Parameters

| Name             | Type                           |
| :--------------- | :----------------------------- |
| `relativePath`   | `string`                       |
| `query?`         | `Query`\<`string`\>            |
| `requestHeaders` | `Record`\<`string`, `string`\> |

#### Returns

`Promise`\<`BaseHTTPClientResponse`\>

#### Overrides

URLTokenBaseHTTPClient.get

#### Defined in

[src/types/algo-http-client-with-retry.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L57)

---

### post

▸ **post**(`relativePath`, `data`, `query?`, `requestHeaders?`): `Promise`\<`BaseHTTPClientResponse`\>

#### Parameters

| Name             | Type                           |
| :--------------- | :----------------------------- |
| `relativePath`   | `string`                       |
| `data`           | `Uint8Array`                   |
| `query?`         | `Query`\<`string`\>            |
| `requestHeaders` | `Record`\<`string`, `string`\> |

#### Returns

`Promise`\<`BaseHTTPClientResponse`\>

#### Overrides

URLTokenBaseHTTPClient.post

#### Defined in

[src/types/algo-http-client-with-retry.ts:91](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L91)
