const { algod, indexer, testAccount } = fixture.context
const result = await algokit.deployApp(getAppDeploymentParams(), algod, indexer)
expect(
  logging.testLogger.getLogSnapshot({
    accounts: [testAccount],
    transactions: [result.transaction],
    apps: [result.appId],
  }),
).toMatchSnapshot()
