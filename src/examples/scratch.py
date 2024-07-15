from algopy import ARC4Contract, Bytes, UInt64, arc4, op, urange


class HelloWorld(ARC4Contract, scratch_slots=(1, urange(3, 20))):
    @arc4.abimethod()
    def hello(self) -> bool:
        op.Scratch.store(1, UInt64(5))
        op.Scratch.store(7, Bytes(b"Hello World"))

        assert op.Scratch.load_uint64(1) == UInt64(5)
        assert op.Scratch.load_bytes(7) == b"Hello World"

        return True