from algokit_utils import TestNetDispenserApiClient

# Using constructor argument

client = TestNetDispenserApiClient(auth_token="your_auth_token")

# Using environment variable

import os
os.environ["ALGOKIT_DISPENSER_ACCESS_TOKEN"] = "your_auth_token"
client = TestNetDispenserApiClient()