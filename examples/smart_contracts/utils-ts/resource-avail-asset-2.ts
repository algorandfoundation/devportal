// Configurate automatic resource population per app call
const response = await AssetRefAppClient.getAssetTotalSupply({}, { sendParams: { populateAppCallResources: true } })
console.log('Method #2 Asset Total Supply', response.return)

// OR

// Set the default value for populateAppCallResources to true once and apply to all contract invocations
algokit.Config.configure({ populateAppCallResources: true }) 

const response = await AssetRefAppClient.getAssetTotalSupply({})
console.log('Method #2 Asset Total Supply', response.return)