---
title: algokit_utils.clients.dispenser_api_client.TestNetDispenserApiClient
---

#### _class_ algokit_utils.clients.dispenser_api_client.TestNetDispenserApiClient(auth_token: str | None = None, request_timeout: int = DISPENSER_REQUEST_TIMEOUT)

Client for interacting with the [AlgoKit TestNet Dispenser API](<[https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md](https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md)>).
To get started create a new access token via algokit dispenser login –ci
and pass it to the client constructor as auth_token.
Alternatively set the access token as environment variable ALGOKIT_DISPENSER_ACCESS_TOKEN,
and it will be auto loaded. If both are set, the constructor argument takes precedence.

Default request timeout is 15 seconds. Modify by passing request_timeout to the constructor.

#### auth*token *: str\_

#### request*timeout *= 15\_

#### fund(address: str, amount: int) → [DispenserFundResponse](#algokit_utils.clients.dispenser_api_client.DispenserFundResponse)

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
  ```pycon
  >>> dispenser_client = TestNetDispenserApiClient()
  >>> dispenser_client.fund(address="SENDER_ADDRESS", amount=1000000)
  ```

#### refund(refund_txn_id: str) → None

Register a refund for a transaction with the dispenser API

#### get_limit(address: str) → [DispenserLimitResponse](#algokit_utils.clients.dispenser_api_client.DispenserLimitResponse)

Get current limit for an account with Algos from the dispenser API
