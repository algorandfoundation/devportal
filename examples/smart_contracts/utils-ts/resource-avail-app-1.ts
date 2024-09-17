const response = await AppRefAppClient.incrementViaInner(
{},
{ apps: [Number(counterAppId)], sendParams: { fee: algokit.algos(0.002) } }, // doubling the fee to cover inner txn
)
console.log('Method #1 Increment via inner', response.return)