from algopy import ARC4Contract, UInt64, Account
from algopy.arc4 import abimethod


class AccountReference(ARC4Contract):

    @abimethod
    def get_account_balance(self) -> UInt64:
        return Account(
            "WMHF4FLJNKY2BPFK7YPV5ID6OZ7LVDB2B66ZTXEAMLL2NX4WJZRJFVX66M"
        ).balance  # Replace with your account address

    @abimethod
    def get_account_balance_with_arg(self, acct: Account) -> UInt64:
        return acct.balance
