import styles from 'styles/Message.module.css';

export default function Score({ message }) {
  return (
    <div id={'message'}
         className={styles.message}
         dangerouslySetInnerHTML={{ __html: message }}>
    </div>
  );
}
