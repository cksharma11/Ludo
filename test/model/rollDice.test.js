const rollDice = require("../../model/dice");

/**
 * I don't think there is a meaning of below tests
 * I just done it because of learning purpose
 */

const mockRandomGenerator = jest
  .fn()
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(3);

test("Should roll dice and give result", () => {
  expect(rollDice(mockRandomGenerator)).toBe(13);
  expect(rollDice(mockRandomGenerator)).toBe(19);
});
