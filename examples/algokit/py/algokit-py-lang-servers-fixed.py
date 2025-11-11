from algopy import ARC4Contract, arc4, Txn, BoxMap
from algopy.arc4 import abimethod

class UserVotes(ARC4Contract):
    def __init__(self) -> None:
        # Each user can vote for multiple proposals
        self.votes = BoxMap(arc4.Address, arc4.DynamicArray[arc4.UInt64])

    @abimethod()
    def cast_vote(self, proposal_id: arc4.UInt64) -> arc4.DynamicArray[arc4.UInt64]:
        voter = arc4.Address(Txn.sender)

        if voter in self.votes:
            current_votes = self.votes[voter].copy()
            current_votes.append(proposal_id)
            
            # Bug Fixed in next line: Added mutable reference to ARC-4-encoded value must be copied using .copy() when being assigned
            self.votes[voter] = current_votes.copy()  
        else:
            self.votes[voter] = arc4.DynamicArray[arc4.UInt64](proposal_id)

        return self.votes[voter]
