# This example is from the default AlgoKit smart contract template
from smart_contracts.artifacts.hello_world.hello_world_client import (
    HelloWorldClient,
)

app_client = HelloWorldClient(
    algod_client,
    creator=deployer,
    indexer_client=indexer_client,
)
