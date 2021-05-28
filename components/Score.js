import styles from 'styles/Score.module.css';

export default function Score({ score, possibleScore }) {
  return (
    <span id={'result'} className={styles.result}>
      Score: {score} / {possibleScore}
    </span>
  );
}
