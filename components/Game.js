import Answers from 'components/Answers';
import Guess from 'components/Guess';
import Letters from 'components/Letters';
import Message from 'components/Message';
import Score from 'components/Score';
import { getLetters, scoreGuess } from 'lib/api';
import { useState } from 'react';

export default function Game({ keyLetter, letters, possibleScore }) {
  const [ totalScore, setScore ] = useState(0);
  const [ currentMessage, setMessage ] = useState(' ');
  const [ answers, setAnswers ] = useState([]);

  const submitGuess = async (guess) => {
    const { score, message } = await scoreGuess(keyLetter, letters, answers, guess);
    if (score > 0) { setAnswers(answers.concat(guess)) }
    setScore(totalScore + score);
    setMessage(' '); // ensures a re-render for animation
    setMessage(message);
  };

  return (
    <form>
      <Letters keyLetter={keyLetter} letters={letters ?? []} />
      <Guess submitGuess={submitGuess} />
      <Score score={totalScore} possibleScore={possibleScore} />
      <Message message={currentMessage} />
      <Answers answers={answers} />
    </form>
  );
}
