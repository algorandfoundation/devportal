// Configurate automatic resource population per app call
const response = await AppRefAppClient.incrementViaInner(
    {},
    { sendParams: { populateAppCallResources: true, fee: algokit.algos(0.002) } }, // doubling the fee to cover inner txn
)
console.log('Method #2 Increment via inner', response.return)

// OR

// Set the default value for populateAppCallResources to true once and apply to all contract invocations
algokit.Config.configure({ populateAppCallResources: true }) 

const response = await AppRefAppClient.incrementViaInner(
    {},
    { sendParams: { fee: algokit.algos(0.002) } }, // doubling the fee to cover inner txn
)
console.log('Method #2 Increment via inner', response.return)