from algopy import ARC4Contract, LocalState, arc4, Account

class KitchenSink(ARC4Contract):
    def __init__(self) -> None:
        self.local_account = LocalState(Account) # Account

    @arc4.abimethod
    def delete_local_data(self, for_account: Account) -> None:
        assert self.local_account
        del self.local_account[for_account]
        assert not self.local_account
