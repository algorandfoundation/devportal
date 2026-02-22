---
editUrl: false
next: false
prev: false
title: "BaseHttpRequest"
---

Defined in: [packages/indexer\_client/src/core/base-http-request.ts:19](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/core/base-http-request.ts#L19)

## Extended by

- [`FetchHttpRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/fetchhttprequest/)

## Constructors

### Constructor

> **new BaseHttpRequest**(`config`): `BaseHttpRequest`

Defined in: [packages/indexer\_client/src/core/base-http-request.ts:20](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/core/base-http-request.ts#L20)

#### Parameters

##### config

[`ClientConfig`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/interfaces/clientconfig/)

#### Returns

`BaseHttpRequest`

## Properties

### config

> `readonly` **config**: [`ClientConfig`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/interfaces/clientconfig/)

Defined in: [packages/indexer\_client/src/core/base-http-request.ts:20](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/core/base-http-request.ts#L20)

## Methods

### request()

> `abstract` **request**\<`T`\>(`options`): `Promise`\<`T`\>

Defined in: [packages/indexer\_client/src/core/base-http-request.ts:21](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/core/base-http-request.ts#L21)

#### Type Parameters

##### T

`T`

#### Parameters

##### options

[`ApiRequestOptions`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/interfaces/apirequestoptions/)

#### Returns

`Promise`\<`T`\>
