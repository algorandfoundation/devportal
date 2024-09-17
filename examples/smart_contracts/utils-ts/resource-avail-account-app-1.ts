response = await AccountAndAppRefAppClient.getMyCounter({}, { accounts: [alice.addr], apps: [counterAppId] })
console.log('Method #1 My Counter', response.return)