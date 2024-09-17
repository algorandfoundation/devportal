response = await AccountAndAppRefAppClient.getMyCounterWithArg({ acct: alice.addr, app: counterAppId })
console.log('Method #3 My Counter', response.return)