// This example is from the default AlgoKit smart contract template
const response = await appClient.hello({ name: 'world' })
console.log(response.return) // logs 'Hello, world'