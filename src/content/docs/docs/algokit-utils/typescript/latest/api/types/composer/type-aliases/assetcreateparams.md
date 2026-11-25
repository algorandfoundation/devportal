---
editUrl: false
next: false
prev: false
title: "AssetCreateParams"
---

> **AssetCreateParams** = [`CommonTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/commontransactionparams/) & `object`

Defined in: [src/types/composer.ts:103](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L103)

Parameters to define an asset create transaction.

The account that sends this transaction will automatically be opted in to the asset and will hold all units after creation.

## Type Declaration

### assetName?

> `optional` **assetName?**: `string`

The optional name of the asset.

Max size is 32 bytes.

This field can only be specified upon asset creation.

### clawback?

> `optional` **clawback?**: `string` \| `Address`

The address of the optional account that can clawback holdings of this asset from any account.

**This field should be used with caution** as the clawback account has the ability to **unconditionally take assets from any account**.

If empty, clawback is not permitted.

If not set (`undefined` or `""`) at asset creation or subsequently set to empty by the manager the field is permanently empty.

### decimals?

> `optional` **decimals?**: `number`

The amount of decimal places the asset should have.

If unspecified then the asset will be in whole units (i.e. `0`).

* If 0, the asset is not divisible;
* If 1, the base unit of the asset is in tenths;
* If 2, the base unit of the asset is in hundredths;
* If 3, the base unit of the asset is in thousandths;
* and so on up to 19 decimal places.

This field can only be specified upon asset creation.

### defaultFrozen?

> `optional` **defaultFrozen?**: `boolean`

Whether the asset is frozen by default for all accounts.
Defaults to `false`.

If `true` then for anyone apart from the creator to hold the
asset it needs to be unfrozen per account using an asset freeze
transaction from the `freeze` account, which must be set on creation.

This field can only be specified upon asset creation.

### freeze?

> `optional` **freeze?**: `string` \| `Address`

The address of the optional account that can be used to freeze or unfreeze holdings of this asset for any account.

If empty, freezing is not permitted.

If not set (`undefined` or `""`) at asset creation or subsequently set to empty by the manager the field is permanently empty.

### manager?

> `optional` **manager?**: `string` \| `Address`

The address of the optional account that can manage the configuration of the asset and destroy it.

The configuration fields it can change are `manager`, `reserve`, `clawback`, and `freeze`.

If not set (`undefined` or `""`) at asset creation or subsequently set to empty by the `manager` the asset becomes permanently immutable.

### metadataHash?

> `optional` **metadataHash?**: `string` \| `Uint8Array`

32-byte hash of some metadata that is relevant to your asset and/or asset holders.

The format of this metadata is up to the application.

This field can only be specified upon asset creation.

### reserve?

> `optional` **reserve?**: `string` \| `Address`

The address of the optional account that holds the reserve (uncirculated supply) units of the asset.

This address has no specific authority in the protocol itself and is informational only.

Some standards like [ARC-19](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0019.md)
rely on this field to hold meaningful data.

It can be used in the case where you want to signal to holders of your asset that the uncirculated units
of the asset reside in an account that is different from the default creator account.

If not set (`undefined` or `""`) at asset creation or subsequently set to empty by the manager the field is permanently empty.

### total

> **total**: `bigint`

The total amount of the smallest divisible (decimal) unit to create.

For example, if `decimals` is, say, 2, then for every 100 `total` there would be 1 whole unit.

This field can only be specified upon asset creation.

### unitName?

> `optional` **unitName?**: `string`

The optional name of the unit of this asset (e.g. ticker name).

Max size is 8 bytes.

This field can only be specified upon asset creation.

### url?

> `optional` **url?**: `string`

Specifies an optional URL where more information about the asset can be retrieved (e.g. metadata).

Max size is 96 bytes.

This field can only be specified upon asset creation.
