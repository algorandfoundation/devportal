---
title: 'Automated testing'
description: 'A collection of useful snippets and patterns for testing Algorand applications using AlgoKit Utils with pytest.'
---

Automated testing is a higher-order use case capability provided by AlgoKit Utils that builds on top of the core capabilities. It allows you to use terse, robust automated testing primitives that work with [pytest](https://docs.pytest.org/en/latest/) to facilitate fixture management, quickly generating isolated and funded test accounts, transaction logging, and log capture.

To see some usage examples check out all of the [automated tests](https://github.com/algorandfoundation/algokit-utils-py/tree/main/tests). Alternatively, you can see examples of using this library to test smart contracts with the various test files in the repository (AlgoKit Utils [dogfoods](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) its own testing library).

## Module import

AlgoKit Utils testing functionality is accessed through the main `algokit_utils` module along with standard pytest patterns:

```python
import pytest
from algokit_utils import AlgorandClient, AddressWithSigners
from algokit_utils.models.amount import AlgoAmount
```

## Algorand fixture

In general, the primary entrypoint for testing is creating a pytest fixture that provides an [`AlgorandClient`](/docs/algokit-utils/python/latest/guides/concepts/core/algorand-client/) configured for LocalNet. This fixture, combined with account fixtures, exposes all the functionality you need to write isolated, repeatable tests.

```python
import pytest
from algokit_utils import AlgorandClient

@pytest.fixture
def algorand() -> AlgorandClient:
    return AlgorandClient.default_localnet()
```

### Using with pytest

To integrate with [pytest](https://docs.pytest.org/en/latest/) you define fixtures and use them in your test functions. Pytest's fixture system provides automatic dependency injection and scope control.

#### Per-test isolation

```python
import pytest
from algokit_utils import AlgorandClient, AddressWithSigners
from algokit_utils.models.amount import AlgoAmount

@pytest.fixture
def algorand() -> AlgorandClient:
    return AlgorandClient.default_localnet()

@pytest.fixture
def test_account(algorand: AlgorandClient) -> AddressWithSigners:
    new_account = algorand.account.random()
    dispenser = algorand.account.localnet_dispenser()
    algorand.account.ensure_funded(
        new_account,
        dispenser,
        min_spending_balance=AlgoAmount.from_algo(10),
    )
    algorand.set_signer(sender=new_account.addr, signer=new_account.signer)
    return new_account

def test_my_test(algorand: AlgorandClient, test_account: AddressWithSigners):
    # Test stuff!
    pass
```

#### Test suite isolation

```python
import pytest
from algokit_utils import AlgorandClient, AddressWithSigners
from algokit_utils.models.amount import AlgoAmount

@pytest.fixture(scope="module")
def algorand() -> AlgorandClient:
    return AlgorandClient.default_localnet()

@pytest.fixture(scope="module")
def test_account(algorand: AlgorandClient) -> AddressWithSigners:
    new_account = algorand.account.random()
    dispenser = algorand.account.localnet_dispenser()
    algorand.account.ensure_funded(
        new_account,
        dispenser,
        min_spending_balance=AlgoAmount.from_algo(10),
    )
    algorand.set_signer(sender=new_account.addr, signer=new_account.signer)
    return new_account

def test_my_test(algorand: AlgorandClient, test_account: AddressWithSigners):
    # Test stuff!
    pass
```

Refer to [pytest fixture scopes](https://docs.pytest.org/en/latest/how-to/fixtures.html#fixture-scopes) for more information on how to control the lifecycle of fixtures.

### Fixture configuration

When creating your `AlgorandClient` fixture you can optionally configure the client setup:

- `AlgorandClient.default_localnet()` - Creates a client against default LocalNet (default, no configuration needed)
- `AlgorandClient.from_environment()` - Creates a client against environment variables defined network
- `AlgorandClient.from_clients(algod=..., indexer=..., kmd=...)` - Creates a client from specific SDK client instances
- `AlgorandClient.from_config(algod_config=..., indexer_config=..., kmd_config=...)` - Creates a client from specific client configurations

For test account funding, you can control the amount:

```python
@pytest.fixture
def test_account(algorand: AlgorandClient) -> AddressWithSigners:
    new_account = algorand.account.random()
    dispenser = algorand.account.localnet_dispenser()
    algorand.account.ensure_funded(
        new_account,
        dispenser,
        min_spending_balance=AlgoAmount.from_algo(100),  # Custom funding amount
    )
    return new_account
```

### Using the fixture context

The `algorand` fixture provides access to an [`AlgorandClient`](/docs/algokit-utils/python/latest/guides/concepts/core/algorand-client/) instance which exposes the following properties commonly used in testing:

- `algorand.client.algod` - Algod client instance
- `algorand.client.indexer` - Indexer client instance (if configured)
- `algorand.client.kmd` - KMD client instance (if configured)
- `algorand.account` - [`AccountManager`](/docs/algokit-utils/python/latest/guides/concepts/core/account/) for creating and managing test accounts
- `algorand.send` - Methods for sending transactions
- `algorand.app` - Methods for interacting with applications

You can create additional test account fixtures for specific test needs:

```python
@pytest.fixture
def funded_account(algorand: AlgorandClient) -> AddressWithSigners:
    new_account = algorand.account.random()
    dispenser = algorand.account.localnet_dispenser()
    algorand.account.ensure_funded(
        new_account,
        dispenser,
        min_spending_balance=AlgoAmount.from_algo(10),
    )
    algorand.set_signer(sender=new_account.addr, signer=new_account.signer)
    return new_account
```

## Log capture fixture

If you want to capture log messages from AlgoKit that are issued within your test so that you can assert on them or parse them for debugging information, you can configure the AlgoKit logger in a pytest fixture.

```python
import logging

@pytest.fixture(autouse=True)
def capture_logs(caplog: pytest.LogCaptureFixture):
    with caplog.at_level(logging.DEBUG):
        yield caplog
```

### Using with pytest

To capture logs in pytest, use the built-in `caplog` fixture:

```python
import logging
import pytest

@pytest.fixture(autouse=True)
def capture_logs(caplog: pytest.LogCaptureFixture):
    with caplog.at_level(logging.DEBUG):
        yield caplog

def test_my_test(algorand: AlgorandClient, test_account: AddressWithSigners, capture_logs):
    # Test stuff!

    # Access captured logs
    captured = capture_logs.text
    # do stuff with the logs
```

### Snapshot testing the logs

If you want to quickly pin some behaviour of what logic you have does in terms of invoking AlgoKit methods you can use [pytest-snapshot](https://pypi.org/project/pytest-snapshot/) or [syrupy](https://github.com/toptal/syrupy) for snapshot / approval testing of captured log output.

This might look something like this:

```python
def test_deploy_logging(algorand, test_account, capture_logs, snapshot):
    factory = algorand.client.get_app_factory(
        app_spec=app_spec,
        default_sender=test_account.addr,
    )
    app_client, result = factory.deploy()

    assert capture_logs.text == snapshot
```

## Getting a test account

When testing, it's often useful to ephemerally generate random accounts, fund them with some number of Algo and then use that account to perform transactions. By creating an ephemeral, random account you naturally get isolation between tests and test runs and don't need to start from a specific blockchain network state. This makes tests less flakey, and also means the same test can be run against LocalNet and (say) TestNet.

The key when generating a test account is getting hold of a [dispenser](/docs/algokit-utils/python/latest/guides/concepts/building/transfer/#dispenser) and then [ensuring the test account is funded](/docs/algokit-utils/python/latest/guides/concepts/building/transfer/#ensure_funded).

To make it easier to quickly get a test account, the following mechanisms are available:

- `algorand.account.random()` - Generates a new random Algorand account
- `algorand.account.localnet_dispenser()` - Gets the LocalNet [dispenser](/docs/algokit-utils/python/latest/guides/concepts/building/transfer/#dispenser) account for funding
- `algorand.account.dispenser_from_environment()` - Gets dispenser from environment variables or LocalNet
- `algorand.account.ensure_funded(account, dispenser, min_spending_balance=...)` - [Ensures the account is funded](/docs/algokit-utils/python/latest/guides/concepts/building/transfer/#ensure_funded) with a minimum balance
- `algorand.account.from_environment(name)` - Loads an account from environment variables (auto-creates on LocalNet)

A typical pattern for creating funded test accounts is:

```python
def generate_account(algorand: AlgorandClient, initial_funds: AlgoAmount = AlgoAmount.from_algo(10)) -> AddressWithSigners:
    account = algorand.account.random()
    dispenser = algorand.account.localnet_dispenser()
    algorand.account.ensure_funded(
        account,
        dispenser,
        min_spending_balance=initial_funds,
    )
    algorand.set_signer(sender=account.addr, signer=account.signer)
    return account
```

## Creating test assets

When testing functionality that involves [Algorand Standard Assets (ASAs)](/docs/algokit-utils/python/latest/guides/concepts/building/asset/), you can create test assets using a pytest fixture or helper function. This pairs with a funded test account fixture to create ephemeral assets for each test or test suite.

### Fixture approach

```python
import pytest
from algokit_utils import AlgorandClient, AddressWithSigners
from algokit_utils.models.amount import AlgoAmount
from algokit_utils.transactions.types import AssetCreateParams

@pytest.fixture
def algorand() -> AlgorandClient:
    return AlgorandClient.default_localnet()

@pytest.fixture
def test_account(algorand: AlgorandClient) -> AddressWithSigners:
    new_account = algorand.account.random()
    dispenser = algorand.account.localnet_dispenser()
    algorand.account.ensure_funded(
        new_account,
        dispenser,
        min_spending_balance=AlgoAmount.from_algo(10),
    )
    algorand.set_signer(sender=new_account.addr, signer=new_account.signer)
    return new_account

@pytest.fixture
def test_asset_id(algorand: AlgorandClient, test_account: AddressWithSigners) -> int:
    result = algorand.send.asset_create(
        AssetCreateParams(
            sender=test_account.addr,
            total=1000,
            decimals=0,
            default_frozen=False,
            unit_name="TEST",
            asset_name="Test Asset",
            url="https://example.com",
            manager=test_account.addr,
            reserve=test_account.addr,
            freeze=test_account.addr,
            clawback=test_account.addr,
        )
    )
    assert result.confirmation.asset_id is not None
    return int(result.confirmation.asset_id)

def test_asset_transfer(algorand: AlgorandClient, test_account: AddressWithSigners, test_asset_id: int):
    # Use the created asset in your test
    pass
```

### Helper function approach

For more flexibility (e.g. varying the total supply per test), use a helper function instead of a fixture:

```python
import math
import random
from algokit_utils import AlgorandClient, AddressWithSigners
from algokit_utils.transactions.types import AssetCreateParams

def generate_test_asset(algorand: AlgorandClient, sender: AddressWithSigners, total: int | None = None) -> int:
    if total is None:
        total = math.floor(random.random() * 100) + 20

    result = algorand.send.asset_create(
        AssetCreateParams(
            sender=sender.addr,
            total=total,
            decimals=0,
            default_frozen=False,
            unit_name="TST",
            asset_name=f"Test Asset {math.floor(random.random() * 1000)}",
            url="https://example.com",
            manager=sender.addr,
            reserve=sender.addr,
            freeze=sender.addr,
            clawback=sender.addr,
        )
    )
    assert result.confirmation.asset_id is not None
    return int(result.confirmation.asset_id)

def test_with_asset(algorand: AlgorandClient, test_account: AddressWithSigners):
    asset_id = generate_test_asset(algorand, test_account, total=500)
    # Use asset_id in your test
    pass
```

## Testing asset transfers

When testing [asset transfers](/docs/algokit-utils/python/latest/guides/concepts/building/asset/), the receiver must first opt in to the asset before receiving it. You can then transfer assets and assert on the resulting balances.

```python
import pytest
from algokit_utils import AlgorandClient, AddressWithSigners
from algokit_utils.models.amount import AlgoAmount
from algokit_utils.transactions.types import AssetCreateParams, AssetOptInParams, AssetTransferParams

@pytest.fixture
def algorand() -> AlgorandClient:
    return AlgorandClient.default_localnet()

@pytest.fixture
def sender(algorand: AlgorandClient) -> AddressWithSigners:
    new_account = algorand.account.random()
    dispenser = algorand.account.localnet_dispenser()
    algorand.account.ensure_funded(
        new_account,
        dispenser,
        min_spending_balance=AlgoAmount.from_algo(10),
    )
    algorand.set_signer(sender=new_account.addr, signer=new_account.signer)
    return new_account

@pytest.fixture
def receiver(algorand: AlgorandClient) -> AddressWithSigners:
    new_account = algorand.account.random()
    dispenser = algorand.account.localnet_dispenser()
    algorand.account.ensure_funded(
        new_account,
        dispenser,
        min_spending_balance=AlgoAmount.from_algo(10),
    )
    algorand.set_signer(sender=new_account.addr, signer=new_account.signer)
    return new_account

@pytest.fixture
def test_asset_id(algorand: AlgorandClient, sender: AddressWithSigners) -> int:
    result = algorand.send.asset_create(
        AssetCreateParams(
            sender=sender.addr,
            total=1000,
            decimals=0,
            default_frozen=False,
            unit_name="TEST",
            asset_name="Test Asset",
            manager=sender.addr,
            reserve=sender.addr,
            freeze=sender.addr,
            clawback=sender.addr,
        )
    )
    assert result.confirmation.asset_id is not None
    return int(result.confirmation.asset_id)

def test_asset_transfer(
    algorand: AlgorandClient,
    sender: AddressWithSigners,
    receiver: AddressWithSigners,
    test_asset_id: int,
):
    # Opt the receiver in to the asset
    algorand.send.asset_opt_in(
        AssetOptInParams(
            sender=receiver.addr,
            asset_id=test_asset_id,
        )
    )

    # Transfer assets from sender to receiver
    algorand.send.asset_transfer(
        AssetTransferParams(
            sender=sender.addr,
            receiver=receiver.addr,
            asset_id=test_asset_id,
            amount=50,
        )
    )

    # Assert on resulting balances
    receiver_info = algorand.asset.get_account_information(receiver, test_asset_id)
    assert receiver_info.balance == 50

    sender_info = algorand.asset.get_account_information(sender, test_asset_id)
    assert sender_info.balance == 950
```

## Testing application deployments

When testing [smart contract deployments](/docs/algokit-utils/python/latest/guides/concepts/building/app-deploy/), you can use the [`AppFactory`](/docs/algokit-utils/python/latest/guides/concepts/building/app-client/#appfactory) to deploy an application and then assert on the deployment result. The deploy result includes the operation performed, the app ID, and the app address.

```python
import json
from pathlib import Path
import pytest
from algokit_utils import AlgorandClient, AddressWithSigners
from algokit_utils.applications.app_factory import AppFactory
from algokit_utils.applications.app_deployer import OperationPerformed, OnUpdate
from algokit_utils.models.amount import AlgoAmount

@pytest.fixture
def algorand() -> AlgorandClient:
    return AlgorandClient.default_localnet()

@pytest.fixture
def test_account(algorand: AlgorandClient) -> AddressWithSigners:
    new_account = algorand.account.random()
    dispenser = algorand.account.localnet_dispenser()
    algorand.account.ensure_funded(
        new_account,
        dispenser,
        min_spending_balance=AlgoAmount.from_algo(10),
    )
    algorand.set_signer(sender=new_account.addr, signer=new_account.signer)
    return new_account

@pytest.fixture
def factory(algorand: AlgorandClient, test_account: AddressWithSigners) -> AppFactory:
    app_spec = json.loads(Path("path/to/application.json").read_text())
    return algorand.client.get_app_factory(
        app_spec=app_spec,
        default_sender=test_account.addr,
    )

def test_deploy_creates_app(factory: AppFactory):
    app_client, deploy_result = factory.deploy()

    assert deploy_result.operation_performed == OperationPerformed.Create
    assert deploy_result.create_result
    assert deploy_result.create_result.app_id > 0
    assert app_client.app_id == deploy_result.create_result.app_id

def test_deploy_updates_existing_app(factory: AppFactory):
    # First deploy creates the app
    _, create_result = factory.deploy(on_update=OnUpdate.UpdateApp)
    assert create_result.operation_performed == OperationPerformed.Create

    # Second deploy with same name triggers an update
    _, update_result = factory.deploy(on_update=OnUpdate.UpdateApp)
    assert update_result.operation_performed == OperationPerformed.Update
    assert update_result.update_result
    assert update_result.app.app_id == create_result.app.app_id
```

## Testing application calls

When testing [application calls](/docs/algokit-utils/python/latest/guides/concepts/building/app-client/), you can use an [`AppClient`](/docs/algokit-utils/python/latest/guides/concepts/building/app-client/#appclient) to call ABI methods and assert on the return values. The `app_client.send.call()` method returns a result with an `abi_return` field containing the decoded ABI return value.

```python
import json
from pathlib import Path
import pytest
from algokit_utils import AlgorandClient, AddressWithSigners
from algokit_utils.applications.app_client import AppClient, AppClientMethodCallParams
from algokit_utils.models.amount import AlgoAmount

@pytest.fixture
def algorand() -> AlgorandClient:
    return AlgorandClient.default_localnet()

@pytest.fixture
def test_account(algorand: AlgorandClient) -> AddressWithSigners:
    new_account = algorand.account.random()
    dispenser = algorand.account.localnet_dispenser()
    algorand.account.ensure_funded(
        new_account,
        dispenser,
        min_spending_balance=AlgoAmount.from_algo(10),
    )
    algorand.set_signer(sender=new_account.addr, signer=new_account.signer)
    return new_account

@pytest.fixture
def app_client(algorand: AlgorandClient, test_account: AddressWithSigners) -> AppClient:
    app_spec = json.loads(Path("path/to/application.json").read_text())
    factory = algorand.client.get_app_factory(
        app_spec=app_spec,
        default_sender=test_account.addr,
    )
    app_client, _ = factory.deploy()
    return app_client

def test_abi_method_call(app_client: AppClient):
    # Call an ABI method and assert on the return value
    result = app_client.send.call(
        AppClientMethodCallParams(method="hello", args=["world"])
    )
    assert result.abi_return == "Hello, world"

def test_abi_struct_return(app_client: AppClient):
    # ABI struct return values are decoded as dicts
    result = app_client.send.call(
        AppClientMethodCallParams(method="get_record", args=[1])
    )
    assert result.abi_return == {"id": 1, "name": "Alice"}
```

## Testing box storage

When testing [box storage](/docs/algokit-utils/python/latest/guides/concepts/building/app-client/#boxes) operations, you need to fund the application account to cover the minimum balance requirement (MBR) for boxes, then create, write, and read boxes via the [`AppClient`](/docs/algokit-utils/python/latest/guides/concepts/building/app-client/#appclient). Box references must be included in the transaction so the AVM can access them.

```python
import base64
import json
from pathlib import Path
import pytest
from algokit_utils import AlgorandClient, AddressWithSigners
from algokit_utils.applications.app_client import AppClient, AppClientMethodCallParams, FundAppAccountParams
from algokit_utils.models.amount import AlgoAmount

@pytest.fixture
def algorand() -> AlgorandClient:
    return AlgorandClient.default_localnet()

@pytest.fixture
def test_account(algorand: AlgorandClient) -> AddressWithSigners:
    new_account = algorand.account.random()
    dispenser = algorand.account.localnet_dispenser()
    algorand.account.ensure_funded(
        new_account,
        dispenser,
        min_spending_balance=AlgoAmount.from_algo(10),
    )
    algorand.set_signer(sender=new_account.addr, signer=new_account.signer)
    return new_account

@pytest.fixture
def app_client(algorand: AlgorandClient, test_account: AddressWithSigners) -> AppClient:
    app_spec = json.loads(Path("path/to/application.json").read_text())
    factory = algorand.client.get_app_factory(
        app_spec=app_spec,
        default_sender=test_account.addr,
    )
    app_client, _ = factory.deploy()
    # Fund the app account so it can hold boxes
    app_client.fund_app_account(FundAppAccountParams(amount=AlgoAmount.from_algo(1)))
    return app_client

def test_box_create_and_read(app_client: AppClient):
    box_name = bytes([0, 0, 0, 1])

    # Write a value to a box
    app_client.send.call(
        AppClientMethodCallParams(
            method="set_box",
            args=[box_name, "value1"],
            box_references=[box_name],
        )
    )

    # Read a single box value
    box_value = app_client.get_box_value(box_name)
    assert box_value == b"value1"

def test_box_list_all(app_client: AppClient):
    box_name1 = bytes([0, 0, 0, 1])
    box_name2 = bytes([0, 0, 0, 2])

    # Create two boxes
    app_client.send.call(
        AppClientMethodCallParams(
            method="set_box",
            args=[box_name1, "value1"],
            box_references=[box_name1],
        )
    )
    app_client.send.call(
        AppClientMethodCallParams(
            method="set_box",
            args=[box_name2, "value2"],
            box_references=[box_name2],
        )
    )

    # List all boxes and assert on values
    box_values = app_client.get_box_values()
    box1 = next(b for b in box_values if b.name.name_raw == box_name1)
    box2 = next(b for b in box_values if b.name.name_raw == box_name2)
    assert box1.value == b"value1"
    assert box2.value == b"value2"
```
