let player1 = Math.floor(Math.random() * 6) + 1;
let player2 = Math.floor(Math.random() * 6) + 1;
console.log(player1);
console.log(player2);
if (player1 > player2) {
  document.querySelector("h1").textContent = "Player 1 Won 🔥";
} else if (player1 < player2) {
  document.querySelector("h1").textContent = "Player 2 Won 🔥";
} else {
  document.querySelector("h1").textContent = "Its a Tie 🤷‍♂️";
}
document
  .getElementById("img1")
  .setAttribute("src", "./images/dice" + player1 + ".png");

document
  .getElementById("img2")
  .setAttribute("src", "./images/dice" + player2 + ".png");
