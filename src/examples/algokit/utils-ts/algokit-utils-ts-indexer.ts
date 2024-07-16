const transactions = await executePaginatedRequest(
    (response: TransactionSearchResults) => {
      return response.transactions
    },
    (nextToken) => {
      let s = indexer.searchForTransactions().txType('pay').address(myAddress).limit(1000)
      if (nextToken) {
        s = s.nextToken(nextToken)
      }
      return s
    },
  )