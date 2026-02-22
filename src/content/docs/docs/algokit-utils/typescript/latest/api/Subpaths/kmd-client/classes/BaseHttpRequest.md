---
editUrl: false
next: false
prev: false
title: "BaseHttpRequest"
---

Defined in: [packages/kmd\_client/src/core/base-http-request.ts:19](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/core/base-http-request.ts#L19)

## Extended by

- [`FetchHttpRequest`](/algokit-utils-ts/api/subpaths/kmd-client/classes/fetchhttprequest/)

## Constructors

### Constructor

> **new BaseHttpRequest**(`config`): `BaseHttpRequest`

Defined in: [packages/kmd\_client/src/core/base-http-request.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/core/base-http-request.ts#L20)

#### Parameters

##### config

[`ClientConfig`](/algokit-utils-ts/api/subpaths/kmd-client/interfaces/clientconfig/)

#### Returns

`BaseHttpRequest`

## Properties

### config

> `readonly` **config**: [`ClientConfig`](/algokit-utils-ts/api/subpaths/kmd-client/interfaces/clientconfig/)

Defined in: [packages/kmd\_client/src/core/base-http-request.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/core/base-http-request.ts#L20)

## Methods

### request()

> `abstract` **request**\<`T`\>(`options`): `Promise`\<`T`\>

Defined in: [packages/kmd\_client/src/core/base-http-request.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/core/base-http-request.ts#L21)

#### Type Parameters

##### T

`T`

#### Parameters

##### options

[`ApiRequestOptions`](/algokit-utils-ts/api/subpaths/kmd-client/interfaces/apirequestoptions/)

#### Returns

`Promise`\<`T`\>
