import styles from 'styles/Score.module.css';

export default function Score({ score }) {
  return (
    <span id={'result'} className={styles.result}>Score: {score}</span>
  );
}
