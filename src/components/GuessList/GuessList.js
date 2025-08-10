import React from 'react';
import Guess from '../Guess/Guess';

function GuessList({guesses,answer}) {
  return (
    <Guess guesses={guesses} answer={answer} />
  );
}

export default GuessList;
