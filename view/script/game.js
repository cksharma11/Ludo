const createGameView = gameData => {
  const playerName = gameData.players[0].name;
  document.getElementById("player_name").innerText = playerName;
};

const getGame = () => {
  fetch("/game")
    .then(res => res.json())
    .then(res => createGameView(res));
};
