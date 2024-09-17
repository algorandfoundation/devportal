const response = await AccountReferenceAppClient.getAccountBalance({}, { accounts: [alice.addr] })
console.log('Method #1 Account Balance', response.return)
