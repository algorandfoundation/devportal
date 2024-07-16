# This example is from the default AlgoKit smart contract template
name = "world"
response = app_client.hello(name=name)
print(response.return_value)  # prints "Hello, world"
