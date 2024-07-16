// Generate random empty Algorand accounts for localnet testing. In production, you would use existing accounts retrieved from a wallet or other source like use-wallet.
const alice = algorand.account.random();
const bob = algorand.account.random();

assetId = 1234 // Change to the assetId of an ASA you want to transfer

// Build a transaction that transfers one unit of the ASA with asset id 1234 from Bob to Alice
const assetTransferTxn = await algorand.transactions.assetTransfer({
    sender: bob.addr,
    receiver: alice.addr,
    assetId,
    amount: 1n,
  })