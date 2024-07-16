import algokit_utils

# perform an idempotent (safely retryable) deployment of the smart contract app
app_client.deploy(
    on_schema_break=algokit_utils.OnSchemaBreak.AppendApp,
    on_update=algokit_utils.OnUpdate.AppendApp,
)

# perform a simple deployment of the smart contract app
app_client.app_client.create()
