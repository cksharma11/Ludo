const rollDice = (randomGenerator) => {
  return Math.floor(randomGenerator() * 6 + 1);
};

module.exports = rollDice;
