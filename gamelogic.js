function displayWordSoFar(word, guesses) {
  // // WRITE ME
  const wordArray = word.split("");

  let wordToGues = "";
  for (let i = 0; i < wordArray.length; i++){
    const wordIncludesLetter = wordArray[i];
    const guessesIncludes = guesses.includes(wordIncludesLetter);

    if (!guessesIncludes) {
      wordToGues = wordToGues + "_ ";
    }

    if (guessesIncludes) {
      wordToGues = wordToGues + wordIncludesLetter + " ";
    }
  }
  return wordToGues
  }

function isGameWon(word, guesses) {
  // WRITE ME
  const wordArray = word.split("");

  for (let i = 0; i < wordArray.length; i++) {
    const wordIncludesLetter = wordArray[i];
    const guessesIncludes = guesses.includes(wordIncludesLetter);

    if (!guessesIncludes){
      return false;
    }
  }
return (true);
}


function isGameLost(word, guesses) {
  // WRITE ME
  const wrongGuessesCount = guessedWrong(word, guesses);

  const maxWrongGuesses = 7;
  if (wrongGuessesCount >= maxWrongGuesses) {
    return true;
  } else {
    return false;
  }
}

function guessedWrong(word, guesses) {
  let wrongGuessesCount = 0;
  for (let index = 0; index < guesses.length; index++) {
    const guess = guesses[index];
    const isGuessCorrect = word.includes(guess);
    if (!isGuessCorrect) {
      wrongGuessesCount = wrongGuessesCount+ 1;
    }
  }
  return wrongGuessesCount;
}
console.log(isGameLost("javascript", ["u", "d", "o", "q", "l", "m", "n"]));


module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  guessedWrong : guessedWrong,
};