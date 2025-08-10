import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function handleSubmitGuesses(newGuess) {
    // Add the new guess to the list of guesses.
    setGuesses([...guesses, newGuess]);
  }
  return <>
    <GuessList guesses={guesses} answer={answer} />
    <GuessInput handleSubmitGuesses={handleSubmitGuesses} />
  </>;
}

export default Game;
