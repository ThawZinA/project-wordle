import React from 'react';

function GuessInput({handleSubmitGuesses}) {
  const [guess, setGuess] = React.useState('');
  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuesses(guess)
    setGuess("")
  }
  return (
  <form 
    class="guess-input-wrapper"
    onSubmit={handleSubmit}
    >
    <label for="guess-input">Enter guess:</label>
    <input 
      required={true}
      minLength={5}
      maxLength={5}
      pattern="[a-zA-Z]{5}"
      title="5 letter word"
      id="guess-input" 
      type="text"
      value={guess}
      onChange={(e) =>{
        const nextGuess = e.target.value.toLocaleUpperCase();
        setGuess(nextGuess)
      }}
      />
  </form>
  );
}

export default GuessInput;
