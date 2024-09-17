const response = await AccountAndAssetRefAppClient.getAssetBalanceWithArg({ acct: alice.addr, asset: assetId })
console.log('Method #3 Asset Balance', response.return)
