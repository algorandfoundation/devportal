from algopy import ARC4Contract, Bytes, arc4, Global, Txn, box_ref

class KitchenSink(ARC4Contract):
    @arc4.abimethod
    def box_blob_extract(self) -> None:
        sender_bytes = Txn.sender.bytes
        app_address = Global.current_application_address.bytes
        value_3 = Bytes(b"hello")
        prefix = box_ref.extract(0, 32 * 2 + value_3.length)
        assert prefix == app_address + sender_bytes + value_3