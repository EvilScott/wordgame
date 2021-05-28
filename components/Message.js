import styles from 'styles/Message.module.css';

export default function Score({ message }) {
  return (
    <div className={styles.messageContainer}
         dangerouslySetInnerHTML={{
           __html: `<span class="${styles.message}">${message}</span>`,
         }}>
    </div>
  );
}
