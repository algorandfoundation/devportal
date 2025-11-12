import { BoxMap, clone, Contract, Txn } from '@algorandfoundation/algorand-typescript'
import { Address, DynamicArray, Uint64 } from '@algorandfoundation/algorand-typescript/arc4'

export class UserVotes extends Contract {
  // Each user can vote for multiple proposals
  votes = BoxMap<Address, DynamicArray<Uint64>>({ keyPrefix: '' })

  castVote(proposalId: Uint64): DynamicArray<Uint64> {
    const voter = new Address(Txn.sender)

    if (this.votes(voter).exists) {

      // Bug in line below: cannot create multiple references to a mutable stack type, the value must be copied using clone(...) when being assigned to another variable
      const currentVotes = this.votes(voter).value
      currentVotes.push(proposalId)
      this.votes(voter).value = clone(currentVotes)
    } else {
      this.votes(voter).value = new DynamicArray(proposalId)
    }

    return this.votes(voter).value
  }
}
