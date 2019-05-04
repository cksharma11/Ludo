const coin = (color) => {
  return `<div class="coin_symbol dark_${color}" />`;
};

const createGameView = gameData => {
  const playerName = gameData.players[0].name;
  document.getElementById("player_name").innerText = playerName;

  document.getElementById("red_coin_1").innerHTML = coin("red");
  document.getElementById("red_coin_2").innerHTML = coin("red");
  document.getElementById("red_coin_3").innerHTML = coin("red");
  document.getElementById("red_coin_4").innerHTML = coin("red");

  document.getElementById("blue_coin_1").innerHTML = coin("blue");
  document.getElementById("blue_coin_2").innerHTML = coin("blue");
  document.getElementById("blue_coin_3").innerHTML = coin("blue");
  document.getElementById("blue_coin_4").innerHTML = coin("blue");

  document.getElementById("green_coin_1").innerHTML = coin("green");
  document.getElementById("green_coin_2").innerHTML = coin("green");
  document.getElementById("green_coin_3").innerHTML = coin("green");
  document.getElementById("green_coin_4").innerHTML = coin("green");

  document.getElementById("yellow_coin_1").innerHTML = coin("yellow");
  document.getElementById("yellow_coin_2").innerHTML = coin("yellow");
  document.getElementById("yellow_coin_3").innerHTML = coin("yellow");
  document.getElementById("yellow_coin_4").innerHTML = coin("yellow");
};

const getGame = () => {
  fetch("/game")
    .then(res => res.json())
    .then(res => createGameView(res));
};

window.onload = getGame;
