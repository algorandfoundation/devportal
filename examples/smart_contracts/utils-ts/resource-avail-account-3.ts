const response = await AccountReferenceAppClient.getAccountBalanceWithArg({ acct: alice.addr })
console.log('Method #3 Account Balance', response.return)
