from algopy import Box, BoxMap, String, UInt64, arc4, BoxRef, Global, Txn, Bytes

class BoxContract(arc4.ARC4Contract):

    @arc4.abimethod
    def test_box_ref(self) -> None:
        box_ref = BoxRef(key=String("blob"))
        assert box_ref.create(size=32)
        assert box_ref, "has data"

        # manipulate data
        sender_bytes = Txn.sender.bytes
        app_address = Global.current_application_address.bytes
        value_3 = Bytes(b"hello")
        box_ref.replace(0, sender_bytes)
        box_ref.splice(0, 0, app_address)
        box_ref.replace(64, value_3)
        prefix = box_ref.extract(0, 32 * 2 + value_3.length)
        assert prefix == app_address + sender_bytes + value_3
    
