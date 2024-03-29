const Player = require("../../model/player");
const routes = require("../../data/routes.json");

beforeEach(() => {
  player = new Player("A", "red");
});

test("sould create player with set of coins", () => {
  const expected = {
    coins: {
      coins: {
        1: {
          isActive: false,
          isCleared: false,
          position: 100
        },
        2: {
          isActive: false,
          isCleared: false,
          position: 200
        },
        3: {
          isActive: false,
          isCleared: false,
          position: 300
        },
        4: {
          isActive: false,
          isCleared: false,
          position: 400
        }
      },
      color: "red",
      route: routes["red"]
    },
    color: "red",
    name: "A"
  };

  expect(player).toEqual(expected);
});

test("Player shold be able to make move", () => {
  player.moveCoin(1, 2);
  expect(player.coins.getCoinPosition(1)).toBe(2);
});

test("Player should be able to make coin active", () => {
  player.makeCoinActive(1);
  expect(player.coins.isActiveCoin(1)).toBeTruthy;
});

test("Player should be able reset coin position", () => {
  player.moveCoin(1, 2);
  player.resetCoinPosition(1);
  expect(player.coins.getCoinPosition(1)).toBe(0);
});

test("Player should be able to clear coin", () => {
  player.clearCoin(1);
  expect(player.coins.isClearedCoin(1)).toBeTruthy;
});
