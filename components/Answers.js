import styles from 'styles/Answer.module.css';

export default function Answer({ answers }) {
  return (
    <div className={styles.answers}>{answers.sort().join(', ')} </div>
  );
}
