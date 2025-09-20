---
title: TealTemplateParams
slug: reference/algokit-utils-ts/api/interfaces/types_apptealtemplateparams
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app](/reference/algokit-utils-ts/api/modules/types_app/) / TealTemplateParams



[types/app](/reference/algokit-utils-ts/api/modules/types_app/).TealTemplateParams

Dictionary of deploy-time parameters to replace in a teal template.

Note: Looks for `TMPL_{parameter}` for template replacements i.e. you can leave out the `TMPL_`.

## Indexable

▪ [key: `string`]: `string` \| `bigint` \| `number` \| `Uint8Array`