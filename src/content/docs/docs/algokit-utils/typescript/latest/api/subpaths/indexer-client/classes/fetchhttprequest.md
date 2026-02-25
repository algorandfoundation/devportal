---
editUrl: false
next: false
prev: false
title: 'FetchHttpRequest'
---

Defined in: [packages/indexer_client/src/core/fetch-http-request.ts:61](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/core/fetch-http-request.ts#L61)

## Extends

- [`BaseHttpRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/basehttprequest/)

## Constructors

### Constructor

> **new FetchHttpRequest**(`config`): `FetchHttpRequest`

Defined in: [packages/indexer_client/src/core/base-http-request.ts:20](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/core/base-http-request.ts#L20)

#### Parameters

##### config

[`ClientConfig`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/interfaces/clientconfig/)

#### Returns

`FetchHttpRequest`

#### Inherited from

[`BaseHttpRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/basehttprequest/).[`constructor`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/basehttprequest/#constructor)

## Properties

### config

> `readonly` **config**: [`ClientConfig`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/interfaces/clientconfig/)

Defined in: [packages/indexer_client/src/core/base-http-request.ts:20](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/core/base-http-request.ts#L20)

#### Inherited from

[`BaseHttpRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/basehttprequest/).[`config`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/basehttprequest/#config)

## Methods

### request()

> **request**\<`T`\>(`options`): `Promise`\<`T`\>

Defined in: [packages/indexer_client/src/core/fetch-http-request.ts:62](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/core/fetch-http-request.ts#L62)

#### Type Parameters

##### T

`T`

#### Parameters

##### options

[`ApiRequestOptions`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/interfaces/apirequestoptions/)

#### Returns

`Promise`\<`T`\>

#### Overrides

[`BaseHttpRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/basehttprequest/).[`request`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/basehttprequest/#request)
