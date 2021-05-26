import Head from 'next/head';
import styles from 'styles/Home.module.css';

function handleKeyPress(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    const guess = e.target.value;
  }
}

export default function Home(props) {
  const { letters } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>WordGame</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>WordGame</h1>

        <p className={styles.description}>
          Spell as many words as you can with the following letters, but
          every word <i>must</i> use the blue letter.
        </p>

        <p>
          { letters.map((letter, idx) => <span id={`l-${idx}`} className={styles.letter}>{letter}</span>) }
        </p>

        <p>
          <input className={styles.guesses} type={'text'} tabIndex={0} onKeyDown={handleKeyPress} />
        </p>

        <p>
          <span id={'result'} className={styles.result}>Enter a guess!</span>
        </p>
      </main>

      <footer className={styles.footer}>
        R. Scott Reis &copy; 2021
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/letters');
  const { letters } = await res.json();
  return {
    props: { letters },
  };
}
