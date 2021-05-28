import styles from 'styles/Letters.module.css';

export default function Letters({ keyLetter, letters }) {
  return (
    <div>
      <span className={`${styles.letter} blue`}>{keyLetter}</span>
      {letters.map((letter, idx) => <span key={`l-${idx}`} className={styles.letter}>{letter}</span>)}
    </div>
  );
};
