const boxPrefix = 'account_box_counter' // box identifier prefix
const encoder = new TextEncoder()
const boxPrefixBytes = encoder.encode(boxPrefix) //UInt8Array of boxPrefix
const publicKey = decodeAddress(alice.addr).publicKey

const payMbr = await algorand.transactions.payment({
  amount: algokit.microAlgos(boxMBR),
  sender: alice.addr,
  receiver: counterAppAddress,
})

const response = await AliceCounterClient.incrementBoxCounter(
  { payMbr: payMbr },
  { boxes: [new Uint8Array([...boxPrefixBytes, ...publicKey])] },
)
console.log('Method #1 Box Counter', response.return)

