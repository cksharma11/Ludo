const coin = color => {
  return `<div class="coin_symbol dark_${color}" />`;
};

let lastUpdateTime = Date.now();

const rollDice = () => {
  fetch("/rollDice", { method: "POST" });
};

const createGameView = gameData => {
  if (lastUpdateTime == gameData.lastUpdated) return;
  lastUpdateTime = gameData.lastUpdated;
  const cookie = cookieParser(document.cookie);
  document.getElementById("player_name").innerText = cookie.playerName;
  document.getElementById("dice").innerText = gameData.diceValue;

  gameData.players.forEach(player => {
    for (let coinNumber = 1; coinNumber < 5; coinNumber++) {
      document.getElementById(`${player.color}_coin_${coinNumber}`).innerHTML = coin(
        player.color
      );
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
