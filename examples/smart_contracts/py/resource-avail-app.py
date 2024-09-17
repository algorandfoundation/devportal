from algopy import ARC4Contract, UInt64, Application, arc4
from algopy.arc4 import abimethod


class Counter(ARC4Contract):

    def __init__(self) -> None:
        self.counter = UInt64(0)

    @abimethod
    def increment(self) -> UInt64:
        self.counter += 1
        return self.counter


class ApplicationReference(ARC4Contract):

    @abimethod
    def increment_via_inner(self) -> UInt64:
        app = Application(1717)  # Replace with your application id

        counter_result, call_txn = arc4.abi_call(
            Counter.increment,
            fee=0,
            app_id=app,
        )
        return counter_result

    @abimethod
    def increment_via_inner_with_arg(self, app: Application) -> UInt64:
        counter_result, call_txn = arc4.abi_call(Counter.increment, fee=0, app_id=app)
        return counter_result
