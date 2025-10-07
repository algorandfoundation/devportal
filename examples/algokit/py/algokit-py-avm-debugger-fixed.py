@arc4.abimethod
def move(self, game_id: UInt64, x: UInt64, y: UInt64) -> None:
    game = self.games[game_id].copy()

    assert not game.is_over.native

    assert game.board[self.coord_to_matrix_index(x, y)] == arc4.Byte()

    assert Txn.sender == game.host.native or Txn.sender == game.guest.native
    is_host = Txn.sender == game.host.native

    if is_host:
        assert game.turns.native % 2 == 0
        self.games[game_id].board[self.coord_to_matrix_index(x, y)] = arc4.Byte(
            HOST_MARK
        )
    else:
        assert game.turns.native % 2 == 1
        self.games[game_id].board[self.coord_to_matrix_index(x, y)] = arc4.Byte(
            GUEST_MARK
        )

    self.games[game_id].turns = arc4.UInt8(self.games[game_id].turns.native + UInt64(1))

    is_over, is_draw = self.is_game_over(self.games[game_id].board.copy())
    if is_over:
        self.games[game_id].is_over = arc4.Bool(True)
        self.games_played[game.host.native] += UInt64(1)
        self.games_played[game.guest.native] += UInt64(1)  # changed here

        if not is_draw:
            winner = game.host if is_host else game.guest
            self.games_won[winner.native] += UInt64(1)
