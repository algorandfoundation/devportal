// Get a wallet account that seeded the LocalNet network
const defaultDispenserAccount = await kmdAccountManager.getWalletAccount(
    'unencrypted-default-wallet',
    (a) => a.status !== 'Offline' && a.amount > 1_000_000_000,
  )
  // Same as above, but dedicated method call for convenience
  const localNetDispenserAccount = await kmdAccountManager.getLocalNetDispenserAccount()
  // Idempotently get (if exists) or create (if it doesn't exist yet) an account by name using KMD
  // if creating it then fund it with 2 Algos from the default dispenser account
  const newAccount = await kmdAccountManager.getOrCreateWalletAccount('account1', (2).algos())
  // This will return the same account as above since the name matches
  const existingAccount = await kmdAccountManager.getOrCreateWalletAccount('account1')