const coin = color => {
  return `<div class="coin_symbol dark_${color}" />`;
};

const startGame = () => {
  fetch("/startGame");
};

const createGameView = gameData => {
  const cookie = cookieParser(document.cookie);
  document.getElementById("player_name").innerText = cookie.playerName;

  gameData.players.forEach(player => {
    for (let coinNumber = 1; coinNumber < 5; coinNumber++) {
      document.getElementById(`${player.color}_coin_${coinNumber}`).innerHTML = coin(
        player.color
      );
    }
  });
};

const getGame = () => {
  fetch("/game")
    .then(res => res.json())
    .then(res => createGameView(res));
};

window.onload = getGame;
