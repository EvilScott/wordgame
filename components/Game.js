import styles from 'styles/Game.module.css';
import { scoreGuess } from 'lib/api';

export default function Game({ keyLetter, letters }) {
  async function handleKeyPress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      const guess = e.target.value;
      e.target.value = '';
      const score = await scoreGuess(keyLetter, letters, guess);
      console.log(score)
    }
  }

  return (
    <form className={styles.game}>
      <div>
        <span className={styles.letter}>{keyLetter}</span>
        { letters.map((letter, idx) => <span key={`l-${idx}`} className={styles.letter}>{letter}</span>) }
      </div>

      <div>
        <input className={styles.guesses} type={'text'} tabIndex={0} onKeyDown={handleKeyPress} />
      </div>

      <div>
        <span id={'result'} className={styles.result}>Enter a guess!</span>
      </div>
    </form>
  )
}