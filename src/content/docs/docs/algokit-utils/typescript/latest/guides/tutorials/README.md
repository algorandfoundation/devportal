---
title: Quick Start
---

Get up and running with AlgoKit Utils in 5 minutes.

## Prerequisites

- Node.js >= 20.0
- [AlgoKit CLI](https://github.com/algorandfoundation/algokit-cli) installed
- LocalNet running (`algokit localnet start`)

## Installation

```bash
npm install @algorandfoundation/algokit-utils
```

## Your First Transaction

Create a file called `hello-algorand.ts`:

```typescript
import { AlgorandClient, AlgoAmount } from '@algorandfoundation/algokit-utils'

async function main() {
  // 1. Connect to LocalNet
  const algorand = AlgorandClient.defaultLocalNet()

  // 2. Create a new random account
  const sender = algorand.account.random()
  console.log('Created account:', sender.addr)

  // 3. Fund the account from the LocalNet dispenser
  await algorand.account.ensureFunded(sender, AlgoAmount.Algo(10))
  console.log('Funded account with 10 ALGO')

  // 4. Check the balance
  const info = await algorand.account.getInformation(sender)
  console.log('Balance:', AlgoAmount.MicroAlgo(info.balance).algo, 'ALGO')

  // 5. Create a second account and send a payment
  const receiver = algorand.account.random()

  const result = await algorand.send.payment({
    sender: sender.addr,
    receiver: receiver.addr,
    amount: AlgoAmount.Algo(1),
  })

  console.log('Payment sent! Transaction ID:', result.txIds[0])

  // 6. Check receiver balance
  const receiverInfo = await algorand.account.getInformation(receiver)
  console.log('Receiver balance:', AlgoAmount.MicroAlgo(receiverInfo.balance).algo, 'ALGO')
}

main().catch(console.error)
```

Run it:

```bash
npx tsx hello-algorand.ts
```

## What's Next?

- [AlgorandClient](/docs/algokit-utils/typescript/latest/guides/concepts/core/algorand-client/) - Learn about the main entry point
- [Account Management](/docs/algokit-utils/typescript/latest/guides/concepts/core/account/) - Different ways to create and manage accounts
- [Transaction Management](/docs/algokit-utils/typescript/latest/guides/concepts/core/transaction/) - Build and send transactions
- [Examples](https://github.com/algorandfoundation/algokit-utils-ts/tree/decoupling/examples) - Browse 100+ runnable examples
