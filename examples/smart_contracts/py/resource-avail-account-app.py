from algopy import (
    ARC4Contract,
    UInt64,
    Account,
    Application,
    op,
    Txn,
    LocalState,
    Global,
)
from algopy.arc4 import abimethod


class Counter(ARC4Contract):

    def __init__(self) -> None:
        self.my_counter = LocalState(UInt64)

    @abimethod(allow_actions=["OptIn"])
    def opt_in(self) -> None:
        self.my_counter[Txn.sender] = UInt64(0)

    @abimethod
    def increment_my_counter(self) -> UInt64:
        assert Txn.sender.is_opted_in(Global.current_application_id)

        self.my_counter[Txn.sender] += 1
        return self.my_counter[Txn.sender]


class AccountAndAppReference(ARC4Contract):

    @abimethod
    def get_my_counter(self) -> UInt64:
        acct = Account(
            "WMHF4FLJNKY2BPFK7YPV5ID6OZ7LVDB2B66ZTXEAMLL2NX4WJZRJFVX66M"
        )  # Replace with your account address
        app = Application(1717)  # Replace with your application id
        my_count, exist = op.AppLocal.get_ex_uint64(acct, app, b"my_counter")
        if exist:
            return my_count
        return UInt64(0)

    @abimethod
    def get_my_counter_with_arg(self, acct: Account, app: Application) -> UInt64:
        my_count, exist = op.AppLocal.get_ex_uint64(acct, app, b"my_counter")
        if exist:
            return my_count
        return UInt64(0)
