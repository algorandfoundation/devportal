// Configurate automatic resource population per app call
const response = await AccountAndAssetRefAppClient.getAssetBalance(
{},
{ sendParams: { populateAppCallResources: true } },
)
console.log('Method #2 Asset Balance', response.return)

// OR

// Set the default value for populateAppCallResources to true once and apply to all contract invocations
algokit.Config.configure({ populateAppCallResources: true }) 

const response = await AccountAndAssetRefAppClient.getAssetBalance({})
console.log('Method #2 Asset Balance', response.return)