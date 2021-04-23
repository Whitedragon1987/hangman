const { keyIn } = require("readline-sync");
const {
  displayWordSoFar,
  isGameWon,
  isGameLost,
  guessedWrong,
} = require("./gamelogic");
const drawGallow = require("./gallow");

function game(word, guesses) {
  console.log("You tried this: ", guesses);
  const wordSoFar = displayWordSoFar(word, guesses);
  console.log(`
    ${wordSoFar}
  `);


  const letter = keyIn("Gues a letter: ", {
    limit: "abcdefghijklmnopqrstuvwxyz",
    caseSensitive: true,
  });

  if (!guesses.includes(letter)) {
    guesses.push(letter);
  } else {
    console.log("You already guessed that one ... ");
  }

  const gameWon = isGameWon(word, guesses);
  if (gameWon) {
    console.log("You won!");
    // returning to make the game function stop running
    return;
  }

  const wrongGuessesCount = guessedWrong(word, guesses);
  console.log(`Try again, or  ${7 - wrongGuessesCount} time(s), before you hang!`);
  drawGallow(wrongGuessesCount);

  const gameLost = isGameLost(word, guesses);
  if (gameLost) {
    console.log("You gotted hanged");
    // returning to make the game function stop running
    return;
  }

  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);