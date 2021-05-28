import styles from 'styles/Game.module.css';
import Message from 'components/Message';
import Score from 'components/Score';
import { scoreGuess } from 'lib/api';
import { useState } from 'react';

export default function Game({ keyLetter, letters }) {
  const [ totalScore, setScore ] = useState(0);
  const [ currentMessage, setMessage ] = useState('');
  const handleKeyPress = async (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const guess = e.target.value;
      e.target.value = '';
      const { score, message } = await scoreGuess(keyLetter, letters, guess);
      setScore(totalScore + score);
      setMessage(message);
    }
  };

  return (
    <form className={styles.game}>
      <div>
        <span className={`${styles.letter} blue`}>{keyLetter}</span>
        { letters.map((letter, idx) => <span key={`l-${idx}`} className={styles.letter}>{letter}</span>) }
      </div>

      <div>
        <input className={styles.guesses} type={'text'} tabIndex={0} onKeyDown={handleKeyPress} />
      </div>

      <div>
        <Score score={totalScore} />
        <Message message={currentMessage} />
      </div>
    </form>
  );
}
