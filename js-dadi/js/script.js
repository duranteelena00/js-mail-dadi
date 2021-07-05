/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato. */

//Initial variables
var resultPlaceholder = document.getElementById("game-result-message");

//Pick two random numbers (one for each player) between 1 and 6
var player1Number = Math.floor(Math.random() * 6) + 1;
console.log("G1: " + player1Number);
var player2Number = Math.floor(Math.random() * 6) + 1;
console.log("G2: " + player2Number);

//Determine the result of the dice game (the bigger number wins)
var winnerNumber;
var loserNumber;
var winner;
var result;

if (player1Number !== player2Number) {
  if (player1Number > player2Number) {
    winnerNumber = player1Number;
    loserNumber = player2Number;
    winner = "G1";
  } else {
    winnerNumber = player2Number;
    loserNumber = player1Number;
    winner = "G2";
  }
  var winningMessage = winner + " vince il gioco di dadi con " +  winnerNumber + " a " + loserNumber;
  result = winningMessage
} else {
  var tieMessage = "Il gioco di dadi si conclude in pareggio con " + player1Number + " a " + player2Number;
  result = tieMessage;
}

//Print an appropriate message
resultPlaceholder.innerHTML = result;