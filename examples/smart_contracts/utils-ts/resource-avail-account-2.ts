// Configurate automatic resource population per app call
const response = await AccountReferenceAppClient.getAccountBalance({}, { sendParams: { populateAppCallResources: true } })
console.log('Method #2 Account Balance', response.return)

// OR

// Set the default value for populateAppCallResources to true once and apply to all contract invocations
algokit.Config.configure({ populateAppCallResources: true }) 

const response = await AccountReferenceAppClient.getAccountBalance({})
console.log('Method #2 Account Balance', response.return)

