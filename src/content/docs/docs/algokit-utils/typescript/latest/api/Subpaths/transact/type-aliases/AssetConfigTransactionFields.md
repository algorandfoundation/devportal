---
editUrl: false
next: false
prev: false
title: "AssetConfigTransactionFields"
---

> **AssetConfigTransactionFields** = `object`

Defined in: [packages/transact/src/transactions/asset-config.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-config.ts#L13)

Represents an asset configuration transaction that creates, reconfigures, or destroys assets.

## Properties

### assetId

> **assetId**: `bigint`

Defined in: [packages/transact/src/transactions/asset-config.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-config.ts#L21)

ID of the asset to operate on.

For asset creation, this must be 0.
For asset reconfiguration this is the ID of the existing asset to be reconfigured,
For asset destroy this is the ID of the existing asset to be destroyed.

***

### assetName?

> `optional` **assetName**: `string`

Defined in: [packages/transact/src/transactions/asset-config.ts:67](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-config.ts#L67)

The optional name of the asset.

Max size is 32 bytes.

This field can only be specified upon asset creation.

***

### clawback?

> `optional` **clawback**: [`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/transactions/asset-config.ts:138](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-config.ts#L138)

The address of the optional account that can clawback holdings of this asset from any account.

**This field should be used with caution** as the clawback account has the ability to **unconditionally take assets from any account**.

If empty, clawback is not permitted.

If not set or set to the Zero address the field is permanently empty.

***

### decimals?

> `optional` **decimals**: `number`

Defined in: [packages/transact/src/transactions/asset-config.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-config.ts#L46)

The amount of decimal places the asset should have.

If unspecified then the asset will be in whole units (i.e. `0`).
* If 0, the asset is not divisible;
* If 1, the base unit of the asset is in tenths;
* If 2, the base unit of the asset is in hundredths;
* If 3, the base unit of the asset is in thousandths;

and so on up to 19 decimal places.

This field can only be specified upon asset creation.

***

### defaultFrozen?

> `optional` **defaultFrozen**: `boolean`

Defined in: [packages/transact/src/transactions/asset-config.ts:58](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-config.ts#L58)

Whether the asset is frozen by default for all accounts.
Defaults to `false`.

If `true` then for anyone apart from the creator to hold the
asset it needs to be unfrozen per account using an asset freeze
transaction from the `freeze` account, which must be set on creation.

This field can only be specified upon asset creation.

***

### freeze?

> `optional` **freeze**: [`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/transactions/asset-config.ts:127](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-config.ts#L127)

The address of the optional account that can be used to freeze or unfreeze holdings of this asset for any account.

If empty, freezing is not permitted.

If not set or set to the Zero address the field is permanently empty.

***

### manager?

> `optional` **manager**: [`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/transactions/asset-config.ts:103](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-config.ts#L103)

The address of the optional account that can manage the configuration of the asset and destroy it.

The configuration fields it can change are `manager`, `reserve`, `clawback`, and `freeze`.

If not set or set to the Zero address the asset becomes permanently immutable.

***

### metadataHash?

> `optional` **metadataHash**: `Uint8Array`

Defined in: [packages/transact/src/transactions/asset-config.ts:94](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-config.ts#L94)

32-byte hash of some metadata that is relevant to your asset and/or asset holders.

The format of this metadata is up to the application.

This field can only be specified upon asset creation.

***

### reserve?

> `optional` **reserve**: [`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/transactions/asset-config.ts:118](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-config.ts#L118)

The address of the optional account that holds the reserve (uncirculated supply) units of the asset.

This address has no specific authority in the protocol itself and is informational only.

Some standards like [ARC-19](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0019.md)
rely on this field to hold meaningful data.

It can be used in the case where you want to signal to holders of your asset that the uncirculated units
of the asset reside in an account that is different from the default creator account.

If not set or set to the Zero address the field is permanently empty.

***

### total?

> `optional` **total**: `bigint`

Defined in: [packages/transact/src/transactions/asset-config.ts:31](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-config.ts#L31)

The total amount of the smallest divisible (decimal) unit to create.

Required when creating a new asset.
For example, if creating a asset with 2 decimals and wanting a total supply of 100 units, this value should be 10000.

This field can only be specified upon asset creation.

***

### unitName?

> `optional` **unitName**: `string`

Defined in: [packages/transact/src/transactions/asset-config.ts:76](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-config.ts#L76)

The optional name of the unit of this asset (e.g. ticker name).

Max size is 8 bytes.

This field can only be specified upon asset creation.

***

### url?

> `optional` **url**: `string`

Defined in: [packages/transact/src/transactions/asset-config.ts:85](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-config.ts#L85)

Specifies an optional URL where more information about the asset can be retrieved (e.g. metadata).

Max size is 96 bytes.

This field can only be specified upon asset creation.
