// Generate random empty Algorand accounts
const alice = algorand.account.random();

// Retrieve the localnet dispenser account
const dispenser = await algorand.account.dispenser();

// Send 10 Algos from the dispenser to Alice
await algorand.send.payment({
    sender: dispenser.addr,
    receiver: alice.addr,
    amount: algokit.algos(10),
})