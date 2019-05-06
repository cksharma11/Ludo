const Coins = require("../../model/coins");
const routes = require("../../data/routes.json")

beforeEach(() => {
  coinSet = new Coins("red");
});

test("should create set of 4 coins with initial position 0", () => {
  const expected = {
    color: "red",
    coins: {
      1: { position: 0, isCleared: false, isActive: false },
      2: { position: 0, isCleared: false, isActive: false },
      3: { position: 0, isCleared: false, isActive: false },
      4: { position: 0, isCleared: false, isActive: false }
    },
    route : routes["red"]
  };

  expect(coinSet).toEqual(expected);
});

test("should increase position of given coin by given value", () => {
  coinSet.moveCoin(1, 2);
  expect(coinSet.getCoinPosition(1)).toBe(2);
});

test("should reset the coin position to 0", () => {
  coinSet.moveCoin(1, 2);
  coinSet.moveCoin(1, 2);
  coinSet.resetPosition(1);

  expect(coinSet.getCoinPosition(1)).toBe(0);
});

test("should mark the coin as clear", () => {
  coinSet.clear(1);
  expect(coinSet.isClearedCoin(1)).toBeTruthy;
});

test("should make given coin active", () => {
  coinSet.makeCoinActive(1);
  expect(coinSet.isActiveCoin(1)).toBeTruthy;
});
