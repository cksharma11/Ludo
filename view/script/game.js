const coin = color => {
  return `<div class="coin_symbol dark_${color}" />`;
};

const startGame = () => {
  fetch("/startGame");
};

const createGameView = gameData => {
  const playerName = gameData.players[0].name;
  document.getElementById("player_name").innerText = playerName;

  gameData.players.forEach(player => {
    for (let coinNumber = 1; coinNumber < 5; coinNumber++) {
      document.getElementById(`${player.color}_coin_${coinNumber}`).innerHTML = coin(
        player.color
      );
    }
  });
};

const getGame = () => {
  console.log("lol")
  fetch("/game")
    .then(res => res.json())
    .then(res => {
      console.log(res)
      createGameView(res)
    });
};

window.onload = getGame;
