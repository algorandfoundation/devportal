---
editUrl: false
next: false
prev: false
title: "AppClientCreateOnComplete"
---

> **AppClientCreateOnComplete** = `object`

Defined in: [src/types/app-client.ts:236](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L236)

On-complete action parameter for creating a contract using ApplicationClient

## Properties

### onCompleteAction?

> `optional` **onCompleteAction?**: `Exclude`\<[`AppCallType`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltype/), `"clear_state"`\> \| `Exclude`\<`OnApplicationComplete`, `OnApplicationComplete.ClearStateOC`\>

Defined in: [src/types/app-client.ts:238](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L238)

Override the on-completion action for the create call; defaults to NoOp
