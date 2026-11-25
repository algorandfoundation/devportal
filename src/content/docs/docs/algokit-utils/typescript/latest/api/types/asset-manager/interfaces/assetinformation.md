---
editUrl: false
next: false
prev: false
title: "AssetInformation"
---

Defined in: [src/types/asset-manager.ts:17](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L17)

Information about an asset.

## Properties

### assetId

> **assetId**: `bigint`

Defined in: [src/types/asset-manager.ts:19](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L19)

The ID of the asset.

***

### assetName?

> `optional` **assetName?**: `string`

Defined in: [src/types/asset-manager.ts:110](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L110)

The optional name of the asset.

Max size is 32 bytes.

***

### assetNameAsBytes?

> `optional` **assetNameAsBytes?**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/types/asset-manager.ts:116](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L116)

The optional name of the asset.

Max size is 32 bytes.

***

### clawback?

> `optional` **clawback?**: `string`

Defined in: [src/types/asset-manager.ts:92](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L92)

The address of the optional account that can clawback holdings of this asset from any account.

The clawback account has the ability to **unconditionally take assets from any account**.

If empty, clawback is not permitted.

If not set the field is permanently empty.

***

### creator

> **creator**: `string`

Defined in: [src/types/asset-manager.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L27)

The address of the account that created the asset.

This is the address where the parameters for this asset can be found,
and also the address where unwanted asset units can be sent when
closing out an asset position and opting-out of the asset.

***

### decimals

> **decimals**: `number`

Defined in: [src/types/asset-manager.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L43)

The amount of decimal places the asset was created with.

* If 0, the asset is not divisible;
* If 1, the base unit of the asset is in tenths;
* If 2, the base unit of the asset is in hundredths;
* If 3, the base unit of the asset is in thousandths;
* and so on up to 19 decimal places.

***

### defaultFrozen?

> `optional` **defaultFrozen?**: `boolean`

Defined in: [src/types/asset-manager.ts:51](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L51)

Whether the asset was frozen by default for all accounts.

If `true` then for anyone apart from the creator to hold the
asset it needs to be unfrozen per account using an asset freeze
transaction from the `freeze` account.

***

### freeze?

> `optional` **freeze?**: `string`

Defined in: [src/types/asset-manager.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L81)

The address of the optional account that can be used to freeze or unfreeze holdings of this asset for any account.

If empty, freezing is not permitted.

If not set the field is permanently empty.

***

### manager?

> `optional` **manager?**: `string`

Defined in: [src/types/asset-manager.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L57)

The address of the optional account that can manage the configuration of the asset and destroy it.

If not set the asset is permanently immutable.

***

### metadataHash?

> `optional` **metadataHash?**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/types/asset-manager.ts:134](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L134)

32-byte hash of some metadata that is relevant to the asset and/or asset holders.

The format of this metadata is up to the application.

***

### reserve?

> `optional` **reserve?**: `string`

Defined in: [src/types/asset-manager.ts:72](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L72)

The address of the optional account that holds the reserve (uncirculated supply) units of the asset.

This address has no specific authority in the protocol itself and is informational only.

Some standards like [ARC-19](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0019.md)
rely on this field to hold meaningful data.

It can be used in the case where you want to signal to holders of your asset that the uncirculated units
of the asset reside in an account that is different from the default creator account.

If not set the field is permanently empty.

***

### total

> **total**: `bigint`

Defined in: [src/types/asset-manager.ts:33](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L33)

The total amount of the smallest divisible (decimal) units that were created of the asset.

For example, if `decimals` is, say, 2, then for every 100 `total` there is 1 whole unit.

***

### unitName?

> `optional` **unitName?**: `string`

Defined in: [src/types/asset-manager.ts:98](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L98)

The optional name of the unit of this asset (e.g. ticker name).

Max size is 8 bytes.

***

### unitNameAsBytes?

> `optional` **unitNameAsBytes?**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/types/asset-manager.ts:104](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L104)

The optional name of the unit of this asset (e.g. ticker name).

Max size is 8 bytes.

***

### url?

> `optional` **url?**: `string`

Defined in: [src/types/asset-manager.ts:122](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L122)

Optional URL where more information about the asset can be retrieved (e.g. metadata).

Max size is 96 bytes.

***

### urlAsBytes?

> `optional` **urlAsBytes?**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/types/asset-manager.ts:128](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L128)

Optional URL where more information about the asset can be retrieved (e.g. metadata).

Max size is 96 bytes.
