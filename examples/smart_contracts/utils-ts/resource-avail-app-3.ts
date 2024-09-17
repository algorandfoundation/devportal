const response = await AppRefAppClient.incrementViaInnerWithArg(
{ app: counterAppId },
{ sendParams: { fee: algokit.algos(0.002) } }, // doubling the fee to cover inner txn
)
console.log('Method #3 Increment via inner', response.return)
