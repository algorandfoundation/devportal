import * as algokit from '@algorandfoundation/algokit-utils' 

// Point to the network configured through environment variables or
//  if no environment variables it will point to the default LocalNet
//  configuration
const algorand = algokit.AlgorandClient.fromEnvironment()
// Point to default LocalNet configuration
const algorand = algokit.AlgorandClient.defaultLocalNet()
// Point to TestNet using AlgoNode free tier
const algorand = algokit.AlgorandClient.testNet()
// Point to MainNet using AlgoNode free tier
const algorand = algokit.AlgorandClient.mainNet()
// Point to a pre-created algod client
const algorand = algokit.AlgorandClient.fromClients({ algod })
// Point to pre-created algod, indexer and kmd clients
const algorand = algokit.AlgorandClient.fromClients({ algod, indexer, kmd })
// Point to custom configuration for algod
const algorand = algokit.AlgorandClient.fromConfig({ algodConfig })
// Point to custom configuration for algod, indexer and kmd
const algorand = algokit.AlgorandClient.fromConfig({ algodConfig, indexerConfig, kmdConfig })
