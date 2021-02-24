// Randomly generate dice number

var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;

// Set Dice to random random Number

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Set output message according to dice

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
