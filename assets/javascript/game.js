// Whenever a key is pressed, alert "pressed a button".

var wins = 0;
var losses = 0;
var guessesLeft = 0;
var listofGuesses;
var compGuess;
var userGuess;

function NewRound() {
  compGuess = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  guessesLeft = 10;
  listofGuesses = [];
}

document.onkeyup = function(event) {
  if (guessesLeft === 0) NewRound();
  userGuess = event.key;
  if (userGuess.match(/^[a-z]$/)) {
    guessesLeft--;
    listofGuesses.push(userGuess);
    if (userGuess === compGuess) {
      wins++;
      alert("Congrats, you did the thing! The computer's letter was '" + compGuess + "'");
      NewRound();
    } else {
      if (guessesLeft === 0) {
        losses++;
        alert("Next time, bud! The computer's letter was '" + compGuess + "'");
        NewRound();
      }
    }

    var html =
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + listofGuesses.join(", ") + "</p>";
  
    document.querySelector("#game").innerHTML = html;
  } else console.log("Cheater. It's '" + compGuess + "'");
}