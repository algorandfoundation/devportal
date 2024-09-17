const response = await AssetRefAppClient.getAssetTotalSupply({}, { assets: [Number(assetId)] })
console.log('Method #1 Asset Total Supply', response.return)