---
title: AlgoHttpClientWithRetry
slug: reference/algokit-utils-ts/api/classes/types_algo_http_client_with_retryalgohttpclientwithretry
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/algo-http-client-with-retry](/reference/algokit-utils-ts/api/modules/types_algo_http_client_with_retry/) / AlgoHttpClientWithRetry



[types/algo-http-client-with-retry](/reference/algokit-utils-ts/api/modules/types_algo_http_client_with_retry/).AlgoHttpClientWithRetry

A HTTP Client that wraps the Algorand SDK HTTP Client with retries

## Hierarchy

- `URLTokenBaseHTTPClient`

  ↳ **`AlgoHttpClientWithRetry`**

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [MAX\_BACKOFF\_MS](#max_backoff_ms)
- [MAX\_TRIES](#max_tries)
- [RETRY\_ERROR\_CODES](#retry_error_codes)
- [RETRY\_STATUS\_CODES](#retry_status_codes)

### Methods

- [callWithRetry](#callwithretry)
- [delete](#delete)
- [get](#get)
- [post](#post)

## Constructors

### constructor

• **new AlgoHttpClientWithRetry**(`tokenHeader`, `baseServer`, `port?`, `defaultHeaders?`): [`AlgoHttpClientWithRetry`](/reference/algokit-utils-ts/api/classes/types_algo_http_client_with_retryalgohttpclientwithretry/)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenHeader` | `TokenHeader` |
| `baseServer` | `string` |
| `port?` | `string` \| `number` |
| `defaultHeaders?` | `Record`\<`string`, `any`\> |

#### Returns

[`AlgoHttpClientWithRetry`](/reference/algokit-utils-ts/api/classes/types_algo_http_client_with_retryalgohttpclientwithretry/)

#### Inherited from

URLTokenBaseHTTPClient.constructor

#### Defined in

node_modules/algosdk/dist/types/client/urlTokenBaseHTTPClient.d.ts:27

## Properties

### MAX\_BACKOFF\_MS

▪ `Static` `Private` `Readonly` **MAX\_BACKOFF\_MS**: ``10000``

#### Defined in

[src/types/algo-http-client-with-retry.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L8)

___

### MAX\_TRIES

▪ `Static` `Private` `Readonly` **MAX\_TRIES**: ``5``

#### Defined in

[src/types/algo-http-client-with-retry.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L7)

___

### RETRY\_ERROR\_CODES

▪ `Static` `Private` `Readonly` **RETRY\_ERROR\_CODES**: `string`[]

#### Defined in

[src/types/algo-http-client-with-retry.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L13)

___

### RETRY\_STATUS\_CODES

▪ `Static` `Private` `Readonly` **RETRY\_STATUS\_CODES**: `number`[]

#### Defined in

[src/types/algo-http-client-with-retry.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L12)

## Methods

### callWithRetry

▸ **callWithRetry**(`func`): `Promise`\<`BaseHTTPClientResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | () => `Promise`\<`BaseHTTPClientResponse`\> |

#### Returns

`Promise`\<`BaseHTTPClientResponse`\>

#### Defined in

[src/types/algo-http-client-with-retry.ts:25](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L25)

___

### delete

▸ **delete**(`relativePath`, `data`, `query?`, `requestHeaders?`): `Promise`\<`BaseHTTPClientResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `relativePath` | `string` |
| `data` | `Uint8Array` |
| `query?` | `Query`\<`string`\> |
| `requestHeaders` | `Record`\<`string`, `string`\> |

#### Returns

`Promise`\<`BaseHTTPClientResponse`\>

#### Overrides

URLTokenBaseHTTPClient.delete

#### Defined in

[src/types/algo-http-client-with-retry.ts:100](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L100)

___

### get

▸ **get**(`relativePath`, `query?`, `requestHeaders?`): `Promise`\<`BaseHTTPClientResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `relativePath` | `string` |
| `query?` | `Query`\<`string`\> |
| `requestHeaders` | `Record`\<`string`, `string`\> |

#### Returns

`Promise`\<`BaseHTTPClientResponse`\>

#### Overrides

URLTokenBaseHTTPClient.get

#### Defined in

[src/types/algo-http-client-with-retry.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L57)

___

### post

▸ **post**(`relativePath`, `data`, `query?`, `requestHeaders?`): `Promise`\<`BaseHTTPClientResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `relativePath` | `string` |
| `data` | `Uint8Array` |
| `query?` | `Query`\<`string`\> |
| `requestHeaders` | `Record`\<`string`, `string`\> |

#### Returns

`Promise`\<`BaseHTTPClientResponse`\>

#### Overrides

URLTokenBaseHTTPClient.post

#### Defined in

[src/types/algo-http-client-with-retry.ts:91](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L91)