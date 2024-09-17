const response = await AccountAndAssetRefAppClient.getAssetBalance({}, { assets: [Number(assetId)], accounts: [alice.addr] })
console.log('Method #1 Asset Balance', response.return)