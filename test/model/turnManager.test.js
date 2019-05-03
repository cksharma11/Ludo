const TurnManager = require("../../model/turn_manager");

beforeEach(() => {
  players = ["A", "B", "C", "D"];
  turnManager = new TurnManager(players);
});

test("turn manager should return the current player", () => {
  expect(turnManager.getCurrentPlayer()).toBe("A");
});

test("turn manager should update the current player", ()=>{
  turnManager.updateTurn();
  expect(turnManager.getCurrentPlayer()).toBe("B");
})

test("turn manager should update update the turn after a round", ()=>{
  /** Ludo has 4 player so after each round current player should be the first player */
  turnManager.updateTurn();
  turnManager.updateTurn();
  turnManager.updateTurn();
  turnManager.updateTurn();
  
  expect(turnManager.getCurrentPlayer()).toBe("A");
})