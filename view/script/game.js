const coin = color => {
  return `<div class="coin_symbol dark_${color}" />`;
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
  // document.getElementById("44").innerHTML = coin("red");
  // document.getElementById("24").innerHTML = coin("blue") + coin("yellow");
  // document.getElementById("54").innerHTML = coin("green");
  // document.getElementById("14").innerHTML = coin("yellow");

  fetch("/game")
    .then(res => res.json())
    .then(res => createGameView(res));
};

window.onload = getGame;
