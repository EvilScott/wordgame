import styles from 'styles/Score.module.css';

export default function Score({ score, possibleScore }) {
  return (
    <div className={styles.result}>
      Score: {score} / {possibleScore}
    </div>
  );
}
