
// perform an idempotent (safely retryable) deployment of the smart contract app 
const app = await appClient.deploy({
    onSchemaBreak: 'append',
    onUpdate: 'append',
  })

// perform a simple deployment of the smart contract app
const app = await appClient.appClient.create()