import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED} from '../../constants'
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>{letter}</span>;
}

function Guess({guesses,answer}) {
  return <div class="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map(item=> {
      const result = checkGuess(guesses[item],answer);
      return (
        <p key={item} className="guess">
         { range(5).map(num=> {
          return <Cell 
            key={num} 
              letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
          >
            {guesses[item] ? guesses[item][num] : undefined}
          </Cell>
         })}
        </p>
      )
    })}
</div>;
}

export default Guess;
