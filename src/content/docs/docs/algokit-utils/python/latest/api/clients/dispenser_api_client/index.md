---
title: clients.dispenser_api_client
sidebar:
  label: Index
  order: 0
---
## Attributes

| [`DISPENSER_ASSETS`](#algokit_utils.clients.dispenser_api_client.DISPENSER_ASSETS)                     |    |
|--------------------------------------------------------------------------------------------------------|----|
| [`DISPENSER_REQUEST_TIMEOUT`](#algokit_utils.clients.dispenser_api_client.DISPENSER_REQUEST_TIMEOUT)   |    |
| [`DISPENSER_ACCESS_TOKEN_KEY`](#algokit_utils.clients.dispenser_api_client.DISPENSER_ACCESS_TOKEN_KEY) |    |

## Classes

| [`DispenserApiConfig`](#algokit_utils.clients.dispenser_api_client.DispenserApiConfig)               |                                                                                                                                                                                                                              |
|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`DispenserAssetName`](#algokit_utils.clients.dispenser_api_client.DispenserAssetName)               | Enum where members are also (and must be) ints                                                                                                                                                                               |
| [`DispenserAsset`](#algokit_utils.clients.dispenser_api_client.DispenserAsset)                       |                                                                                                                                                                                                                              |
| [`DispenserFundResponse`](#algokit_utils.clients.dispenser_api_client.DispenserFundResponse)         |                                                                                                                                                                                                                              |
| [`DispenserLimitResponse`](#algokit_utils.clients.dispenser_api_client.DispenserLimitResponse)       |                                                                                                                                                                                                                              |
| [`TestNetDispenserApiClient`](#algokit_utils.clients.dispenser_api_client.TestNetDispenserApiClient) | Client for interacting with the [AlgoKit TestNet Dispenser API]([https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md](https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md)). |

## Module Contents

### *class* algokit_utils.clients.dispenser_api_client.DispenserApiConfig

#### BASE_URL *= 'https://api.dispenser.algorandfoundation.tools'*

### *class* algokit_utils.clients.dispenser_api_client.DispenserAssetName

Bases: `enum.IntEnum`

Enum where members are also (and must be) ints

#### ALGO *= 0*

### *class* algokit_utils.clients.dispenser_api_client.DispenserAsset

#### asset_id *: int*

The ID of the asset

#### decimals *: int*

The amount of decimal places the asset was created with

#### description *: str*

The description of the asset

### *class* algokit_utils.clients.dispenser_api_client.DispenserFundResponse

#### tx_id *: str*

The transaction ID of the funded transaction

#### amount *: int*

The amount of Algos funded

### *class* algokit_utils.clients.dispenser_api_client.DispenserLimitResponse

#### amount *: int*

The amount of Algos that can be funded

### algokit_utils.clients.dispenser_api_client.DISPENSER_ASSETS

### algokit_utils.clients.dispenser_api_client.DISPENSER_REQUEST_TIMEOUT *= 15*

### algokit_utils.clients.dispenser_api_client.DISPENSER_ACCESS_TOKEN_KEY *= 'ALGOKIT_DISPENSER_ACCESS_TOKEN'*

### *class* algokit_utils.clients.dispenser_api_client.TestNetDispenserApiClient(auth_token: str | None = None, request_timeout: int = DISPENSER_REQUEST_TIMEOUT)

Client for interacting with the [AlgoKit TestNet Dispenser API]([https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md](https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md)).
To get started create a new access token via algokit dispenser login –ci
and pass it to the client constructor as auth_token.
Alternatively set the access token as environment variable ALGOKIT_DISPENSER_ACCESS_TOKEN,
and it will be auto loaded. If both are set, the constructor argument takes precedence.

Default request timeout is 15 seconds. Modify by passing request_timeout to the constructor.

#### auth_token *: str*

#### request_timeout *= 15*

#### fund(address: str, amount: int) → [DispenserFundResponse](#algokit_utils.clients.dispenser_api_client.DispenserFundResponse)

#### fund(address: str, amount: int, asset_id: int | None = None) → [DispenserFundResponse](#algokit_utils.clients.dispenser_api_client.DispenserFundResponse)

Fund an account with Algos from the dispenser API

* **Parameters:**
  * **address** – The address to fund
  * **amount** – The amount of Algos to fund
  * **asset_id** – The asset ID to fund (deprecated)
* **Returns:**
  The transaction ID of the funded transaction
* **Raises:**
  **Exception** – If the dispenser API request fails
* **Example:**
  ```python
  dispenser_client = TestNetDispenserApiClient()
  dispenser_client.fund(address="SENDER_ADDRESS", amount=1000000)
  ```

#### refund(refund_txn_id: str) → None

Register a refund for a transaction with the dispenser API

#### get_limit(address: str) → [DispenserLimitResponse](#algokit_utils.clients.dispenser_api_client.DispenserLimitResponse)

Get current limit for an account with Algos from the dispenser API