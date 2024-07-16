// This example is from the default AlgoKit smart contract template
import { HelloWorldClient } from '../artifacts/hello_world/HelloWorldClient' // Import the auto-generated typed HelloWorld app client

const algod = algorand.client.algod // Get the algod client from the Algorand client
const indexer = algorand.client.indexer // Get the indexer client from the Algorand client

// Create an instance of the HelloWorld app client using the 'creatorAndName' resolver
const appClient = new HelloWorldClient(
    {
        resolveBy: 'creatorAndName',
        findExistingUsing: indexer,
        sender: deployer, // This is an Algorand account object
        creatorAddress: deployer.addr,
      },
      algod,
    )

// Create an instance of the HelloWorld app client using the 'id' resolver
const appClient = new HelloWorldClient(
    {
        resolveBy: 'id',
        id: 0, // 0 when not deployed, otherwise the app id
        sender: deployer, // This is an Algorand account object
      },
      algod,
    )
