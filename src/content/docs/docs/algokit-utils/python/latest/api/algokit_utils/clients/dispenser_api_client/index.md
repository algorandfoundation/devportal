---
title: 'algokit_utils.clients.dispenser_api_client'
---

<div class="api-ref">

# algokit_utils.clients.dispenser_api_client

## Attributes

| [`DISPENSER_ASSETS`](#algokit_utils.clients.dispenser_api_client.DISPENSER_ASSETS)                     |     |
| ------------------------------------------------------------------------------------------------------ | --- |
| [`DISPENSER_REQUEST_TIMEOUT`](#algokit_utils.clients.dispenser_api_client.DISPENSER_REQUEST_TIMEOUT)   |     |
| [`DISPENSER_ACCESS_TOKEN_KEY`](#algokit_utils.clients.dispenser_api_client.DISPENSER_ACCESS_TOKEN_KEY) |     |

## Classes

| [`DispenserApiConfig`](#algokit_utils.clients.dispenser_api_client.DispenserApiConfig)               |                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`DispenserAssetName`](#algokit_utils.clients.dispenser_api_client.DispenserAssetName)               | Enum where members are also (and must be) ints                                                                                                                                                                                                                                                              |
| [`DispenserAsset`](#algokit_utils.clients.dispenser_api_client.DispenserAsset)                       |                                                                                                                                                                                                                                                                                                             |
| [`DispenserFundResponse`](#algokit_utils.clients.dispenser_api_client.DispenserFundResponse)         |                                                                                                                                                                                                                                                                                                             |
| [`DispenserLimitResponse`](#algokit_utils.clients.dispenser_api_client.DispenserLimitResponse)       |                                                                                                                                                                                                                                                                                                             |
| [`TestNetDispenserApiClient`](#algokit_utils.clients.dispenser_api_client.TestNetDispenserApiClient) | Client for interacting with the [AlgoKit TestNet Dispenser API](</docs/algokit-utils/python/latest/api/algokit_utils/clients/dispenser_api_client/[https:/github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md](https:/github.com/algorandfoundation/algokit/blob/main/docs/testnet_api/)>). |

## Module Contents

### _class_ DispenserApiConfig

#### BASE_URL _= 'https://api.dispenser.algorandfoundation.tools'_

### _class_ DispenserAssetName

Bases: `enum.IntEnum`

Enum where members are also (and must be) ints

#### ALGO _= 0_

### _class_ DispenserAsset

#### asset_id _: int_

The ID of the asset

#### decimals _: int_

The amount of decimal places the asset was created with

#### description _: str_

The description of the asset

### _class_ DispenserFundResponse

#### tx_id _: str_

The transaction ID of the funded transaction

#### amount _: int_

The amount of Algos funded

### _class_ DispenserLimitResponse

#### amount _: int_

The amount of Algos that can be funded

### DISPENSER_ASSETS

### DISPENSER_REQUEST_TIMEOUT _= 15_

### DISPENSER_ACCESS_TOKEN_KEY _= 'ALGOKIT_DISPENSER_ACCESS_TOKEN'_

### _class_ TestNetDispenserApiClient(auth_token: str | None = None, request_timeout: int = DISPENSER_REQUEST_TIMEOUT)

Client for interacting with the [AlgoKit TestNet Dispenser API](</docs/algokit-utils/python/latest/api/algokit_utils/clients/dispenser_api_client/[https:/github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md](https:/github.com/algorandfoundation/algokit/blob/main/docs/testnet_api/)>).
To get started create a new access token via algokit dispenser login –ci
and pass it to the client constructor as auth_token.
Alternatively set the access token as environment variable ALGOKIT_DISPENSER_ACCESS_TOKEN,
and it will be auto loaded. If both are set, the constructor argument takes precedence.

Default request timeout is 15 seconds. Modify by passing request_timeout to the constructor.

#### auth_token _: str_

#### request_timeout _= 15_

#### fund(address: str, amount: int, asset_id: int | None = None) → [DispenserFundResponse](#algokit_utils.clients.dispenser_api_client.DispenserFundResponse)

Fund an account with Algos from the dispenser API

- **Parameters:**
  - **address** – The address to fund
  - **amount** – The amount of Algos to fund
  - **asset_id** – The asset ID to fund (deprecated)
- **Returns:**
  The transaction ID of the funded transaction
- **Raises:**
  **Exception** – If the dispenser API request fails
- **Example:**
  ```python
  dispenser_client = TestNetDispenserApiClient()
  dispenser_client.fund(address="SENDER_ADDRESS", amount=1000000)
  ```

#### refund(refund_txn_id: str) → None

Register a refund for a transaction with the dispenser API

#### get_limit(address: str) → [DispenserLimitResponse](#algokit_utils.clients.dispenser_api_client.DispenserLimitResponse)

Get current limit for an account with Algos from the dispenser API

</div>
