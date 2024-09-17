// Configurate automatic resource population per app call
response = await AccountAndAppRefAppClient.getMyCounter({}, { sendParams: { populateAppCallResources: true } })
console.log('Method #2 My Counter', response.return)

// OR

// Set the default value for populateAppCallResources to true once and apply to all contract invocations
algokit.Config.configure({ populateAppCallResources: true }) 

response = await AccountAndAppRefAppClient.getMyCounter({})
console.log('Method #2 My Counter', response.return)