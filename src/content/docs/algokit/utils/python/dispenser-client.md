---
title: TestNet Dispenser Client
---

The TestNet Dispenser Client is a utility for interacting with the AlgoKit TestNet Dispenser API. It provides methods to fund an account, register a refund for a transaction, and get the current limit for an account.

## Creating a Dispenser Client

To create a Dispenser Client, you need to provide an authorization token. This can be done in two ways:

1. Pass the token directly to the client constructor as `auth_token`.
2. Set the token as an environment variable `ALGOKIT_DISPENSER_ACCESS_TOKEN` (see [docs](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/features/dispenser#login) on how to obtain the token).

If both methods are used, the constructor argument takes precedence.

```python
import algokit_utils

# With auth token
dispenser = algorand.client.get_testnet_dispenser(
    auth_token="your_auth_token",
)

# With auth token and timeout
dispenser = algorand.client.get_testnet_dispenser(
    auth_token="your_auth_token",
    request_timeout=2,  # seconds
)

# From environment variables
# i.e. os.environ['ALGOKIT_DISPENSER_ACCESS_TOKEN'] = 'your_auth_token'
dispenser = algorand.client.get_testnet_dispenser_from_environment()

# Alternatively, you can construct it directly
from algokit_utils import TestNetDispenserApiClient

# Using constructor argument
client = TestNetDispenserApiClient(auth_token="your_auth_token")

# Using environment variable
import os
os.environ['ALGOKIT_DISPENSER_ACCESS_TOKEN'] = 'your_auth_token'
client = TestNetDispenserApiClient()
```

## Funding an Account

To fund an account with Algo from the dispenser API, use the `fund` method. This method requires the receiver’s address and the amount to be funded.

```python
response = dispenser.fund(
    receiver="RECEIVER_ADDRESS",
    amount=1000,  # Amount in microAlgos
)
```

The `fund` method returns a `DispenserFundResponse` object, which contains the transaction ID (`tx_id`) and the amount funded.

## Registering a Refund

To register a refund for a transaction with the dispenser API, use the `refund` method. This method requires the transaction ID of the refund transaction.

```python
dispenser.refund("transaction_id")
```

> Keep in mind, to perform a refund you need to perform a payment transaction yourself first by sending funds back to TestNet Dispenser, then you can invoke this refund endpoint and pass the txn_id of your refund txn. You can obtain dispenser address by inspecting the sender field of any issued fund transaction initiated via [fund]().

## Getting Current Limit

To get the current limit for an account with Algo from the dispenser API, use the `get_limit` method.

```python
response = dispenser.get_limit()
```

The `get_limit` method returns a `DispenserLimitResponse` object, which contains the current limit amount.

## Error Handling

If an error occurs while making a request to the dispenser API, an exception will be raised with a message indicating the type of error. Refer to [Error Handling docs](https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api#error-handling) for details on how you can handle each individual error `code`.

Here’s an example of handling errors:

```python
try:
    response = dispenser.fund(
        receiver="RECEIVER_ADDRESS",
        amount=1000,
    )
except Exception as e:
    print(f"Error occurred: {str(e)}")
```
