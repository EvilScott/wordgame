import styles from 'styles/Guess.module.css';

export default function Guess({ submitGuess }) {
  const handleKeyPress = async (e) => {
    if (e.keyCode !== 13) { return false }
    e.preventDefault();
    const guess = e.target.value;
    e.target.value = '';
    return submitGuess(guess);
  };

  return (
    <div>
      <input className={styles.guesses} type={'text'} tabIndex={0} onKeyDown={handleKeyPress}/>
    </div>
  );
}
