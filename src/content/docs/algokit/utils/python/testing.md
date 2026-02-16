---
title: Testing
---

The following is a collection of useful snippets that can help you get started with testing your Algorand applications using AlgoKit utils. For the sake of simplicity, we’ll use [pytest](https://docs.pytest.org/en/latest/) in the examples below.

## Basic Test Setup

Here’s a basic test setup using pytest fixtures that provides common testing utilities:

```python
import pytest
from algokit_utils import Account, SigningAccount
from algokit_utils.algorand import AlgorandClient
from algokit_utils.models.amount import AlgoAmount

@pytest.fixture
def algorand() -> AlgorandClient:
    """Get an AlgorandClient instance configured for LocalNet"""
    return AlgorandClient.default_localnet()

@pytest.fixture
def funded_account(algorand: AlgorandClient) -> SigningAccount:
    """Create and fund a test account with ALGOs"""
    new_account = algorand.account.random()
    dispenser = algorand.account.localnet_dispenser()
    algorand.account.ensure_funded(
        new_account,
        dispenser,
        min_spending_balance=AlgoAmount.from_algos(100),
        min_funding_increment=AlgoAmount.from_algos(1)
    )
    algorand.set_signer(sender=new_account.address, signer=new_account.signer)
    return new_account
```

Refer to [pytest fixture scopes](https://docs.pytest.org/en/latest/how-to/fixtures.html#fixture-scopes) for more information on how to control lifecycle of fixtures.

## Creating Test Assets

Here’s a helper function to create test ASAs (Algorand Standard Assets):

```python
def generate_test_asset(algorand: AlgorandClient, sender: Account, total: int | None = None) -> int:
    """Create a test asset and return its ID"""
    if total is None:
        total = random.randint(20, 120)

    create_result = algorand.send.asset_create(
        AssetCreateParams(
            sender=sender.address,
            total=total,
            decimals=0,
            default_frozen=False,
            unit_name="TST",
            asset_name=f"Test Asset {random.randint(1,100)}",
            url="https://example.com",
            manager=sender.address,
            reserve=sender.address,
            freeze=sender.address,
            clawback=sender.address,
        )
    )

    return int(create_result.confirmation["asset-index"])
```

## Testing Application Deployments

Here’s how one can test smart contract application deployments:

```python
def test_app_deployment(algorand: AlgorandClient, funded_account: SigningAccount):
    """Test deploying a smart contract application"""

    # Load the application spec
    app_spec = Path("artifacts/application.json").read_text()

    # Create app factory
    factory = algorand.client.get_app_factory(
        app_spec=app_spec,
        default_sender=funded_account.address
    )

    # Deploy the app
    app_client, deploy_response = factory.deploy(
        compilation_params={
            "deletable": True,
            "updatable": True,
            "deploy_time_params": {"VERSION": 1},
        },
    )

    # Verify deployment
    assert deploy_response.app.app_id > 0
    assert deploy_response.app.app_address
```

## Testing Asset Transfers

Here’s how one can test ASA transfers between accounts:

```python
def test_asset_transfer(algorand: AlgorandClient, funded_account: SigningAccount):
    """Test ASA transfers between accounts"""

    # Create receiver account
    receiver = algorand.account.random()
    algorand.account.ensure_funded(
        account_to_fund=receiver,
        dispenser_account=funded_account,
        min_spending_balance=AlgoAmount.from_algos(1)
    )

    # Create test asset
    asset_id = generate_test_asset(algorand, funded_account, 100)

    # Opt receiver into asset
    algorand.send.asset_opt_in(
        AssetOptInParams(
            sender=receiver.address,
            asset_id=asset_id,
            signer=receiver.signer
        )
    )

    # Transfer asset
    transfer_amount = 5
    result = algorand.send.asset_transfer(
        AssetTransferParams(
            sender=funded_account.address,
            receiver=receiver.address,
            asset_id=asset_id,
            amount=transfer_amount
        )
    )

    # Verify transfer
    receiver_balance = algorand.asset.get_account_information(receiver, asset_id)
    assert receiver_balance.balance == transfer_amount
```

## Testing Application Calls

Here’s how to test application method calls:

```python
def test_app_method_call(algorand: AlgorandClient, funded_account: SigningAccount):
    """Test calling ABI methods on an application"""

    # Deploy application first
    app_spec = Path("artifacts/application.json").read_text()
    factory = algorand.client.get_app_factory(
        app_spec=app_spec,
        default_sender=funded_account.address
    )
    app_client, _ = factory.deploy()

    # Call application method
    result = app_client.send.call(
        AppClientMethodCallParams(
            method="hello",
            args=["world"]
        )
    )

    # Verify result
    assert result.abi_return == "Hello, world"
```

## Testing Box Storage

Here’s how to test application box storage:

```python
def test_box_storage(algorand: AlgorandClient, funded_account: SigningAccount):
    """Test application box storage"""

    # Deploy application
    app_spec = Path("artifacts/application.json").read_text()
    factory = algorand.client.get_app_factory(
        app_spec=app_spec,
        default_sender=funded_account.address
    )
    app_client, _ = factory.deploy()

    # Fund app account for box storage MBR
    app_client.fund_app_account(
        FundAppAccountParams(amount=AlgoAmount.from_algos(1))
    )

    # Store value in box
    box_name = b"test_box"
    box_value = "test_value"
    app_client.send.call(
        AppClientMethodCallParams(
            method="set_box",
            args=[box_name, box_value],
            box_references=[box_name]
        )
    )

    # Verify box value
    stored_value = app_client.get_box_value(box_name)
    assert stored_value == box_value.encode()
```
