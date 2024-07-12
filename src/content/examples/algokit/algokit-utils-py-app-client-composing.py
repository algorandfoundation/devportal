from algokit_utils import ApplicationClient
from algosdk.atomic_transaction_composer import AtomicTransactionComposer

client = ApplicationClient(...)
atc = AtomicTransactionComposer()
client.compose_call(atc, "hello", name="world")
... # additional compose calls

response = client.execute_atc(atc)