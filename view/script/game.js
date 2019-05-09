const coin = color => {
  return `<div class="coin_symbol dark_${color}" />`;
};

let lastUpdateTime = Date.now();

const rollDice = () => {
  fetch("/rollDice", { method: "POST" })
    .then(res => res.json())
    .then(gameData => {
      if (gameData.diceValue == 6) makeMoveAndRollDice(gameData);
    });
};

const enableActiveCoinOption = playerCoinColor => {
  for (let position = 100; position <= 400; position += 100) {
    const coinDiv = document.getElementById(`${playerCoinColor}_coin_${position}`);
    if (coinDiv) coinDiv.style.border = `3px solid black`;
  }
};

const makeMoveAndRollDice = gameData => {
  const playerCoinColor = gameData.currentPlayer.color;
  enableActiveCoinOption(playerCoinColor);
};

const createGameView = gameData => {
  if (lastUpdateTime == gameData.lastUpdated) return;
  lastUpdateTime = gameData.lastUpdated;
  const cookie = cookieParser(document.cookie);
  document.getElementById("player_name").innerText = cookie.playerName;
  document.getElementById("dice").innerText = gameData.diceValue;

  gameData.players.forEach(player => {
    for (let coinNumber = 1; coinNumber <= 4; coinNumber++) {
      const position = player.coins.coins[coinNumber].position;
      console.log(`${player.color}_coin_${position}`);
      (
        document.getElementById(`${player.color}_coin_${position}`) ||
        document.getElementById(`${position}`)
      ).innerHTML = coin(player.color);
    }
  });
};

const getGame = () => {
  setInterval(() => {
    fetch("/game")
      .then(res => res.json())
      .then(res => createGameView(res));
  }, 500);
};

window.onload = getGame;
