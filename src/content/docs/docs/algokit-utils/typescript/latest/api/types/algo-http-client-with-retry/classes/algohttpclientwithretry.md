---
editUrl: false
next: false
prev: false
title: "AlgoHttpClientWithRetry"
---

Defined in: [src/types/algo-http-client-with-retry.ts:6](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L6)

A HTTP Client that wraps the Algorand SDK HTTP Client with retries

## Extends

- `URLTokenBaseHTTPClient`

## Constructors

### Constructor

> **new AlgoHttpClientWithRetry**(`tokenHeader`, `baseServer`, `port?`, `defaultHeaders?`): `AlgoHttpClientWithRetry`

Defined in: node\_modules/algosdk/dist/types/client/urlTokenBaseHTTPClient.d.ts:27

#### Parameters

##### tokenHeader

`TokenHeader`

##### baseServer

`string`

##### port?

`string` \| `number`

##### defaultHeaders?

`Record`\<`string`, `any`\>

#### Returns

`AlgoHttpClientWithRetry`

#### Inherited from

`URLTokenBaseHTTPClient.constructor`

## Methods

### delete()

> **delete**(`relativePath`, `data`, `query?`, `requestHeaders?`): `Promise`\<`BaseHTTPClientResponse`\>

Defined in: [src/types/algo-http-client-with-retry.ts:100](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L100)

#### Parameters

##### relativePath

`string`

##### data

`Uint8Array`

##### query?

`Query`\<`string`\>

##### requestHeaders?

`Record`\<`string`, `string`\> = `{}`

#### Returns

`Promise`\<`BaseHTTPClientResponse`\>

#### Overrides

`URLTokenBaseHTTPClient.delete`

***

### get()

> **get**(`relativePath`, `query?`, `requestHeaders?`): `Promise`\<`BaseHTTPClientResponse`\>

Defined in: [src/types/algo-http-client-with-retry.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L57)

#### Parameters

##### relativePath

`string`

##### query?

`Query`\<`string`\>

##### requestHeaders?

`Record`\<`string`, `string`\> = `{}`

#### Returns

`Promise`\<`BaseHTTPClientResponse`\>

#### Overrides

`URLTokenBaseHTTPClient.get`

***

### post()

> **post**(`relativePath`, `data`, `query?`, `requestHeaders?`): `Promise`\<`BaseHTTPClientResponse`\>

Defined in: [src/types/algo-http-client-with-retry.ts:91](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algo-http-client-with-retry.ts#L91)

#### Parameters

##### relativePath

`string`

##### data

`Uint8Array`

##### query?

`Query`\<`string`\>

##### requestHeaders?

`Record`\<`string`, `string`\> = `{}`

#### Returns

`Promise`\<`BaseHTTPClientResponse`\>

#### Overrides

`URLTokenBaseHTTPClient.post`
