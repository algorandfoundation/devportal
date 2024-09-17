const payMbr2 = await algorand.transactions.payment({
  amount: algokit.microAlgos(boxMBR),
  sender: alice.addr,
  receiver: counterAppAddress,
})

const response = await AliceCounterClient.incrementBoxCounter(
  { payMbr: payMbr2 },
  { sendParams: { populateAppCallResources: true } },
)
console.log('Method #2 Box Counter', response.return)

// OR

// Set the default value for populateAppCallResources to true once and apply to all contract invocations
algokit.Config.configure({ populateAppCallResources: true }) 

const response = await AliceCounterClient.incrementBoxCounter({ payMbr: payMbr2 })
console.log('Method #2 Box Counter', response.return)