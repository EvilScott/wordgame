import Head from 'next/head';
import styles from 'styles/Home.module.css';
import Game from 'components/Game';
import { getLetters } from 'lib/api';

export default function Home({ keyLetter, letters }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>WordGame</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>WordGame</h1>

        <p className={styles.description}>
          Spell as many words as you can with the following letters,<br />
          but every word <i>must</i> use the <span className={'blue'}>blue</span> letter{' '}
          and be at least 4 letters long.
        </p>

        <Game keyLetter={keyLetter} letters={letters} />
      </main>

      <footer className={styles.footer}>
        R. Scott Reis &copy; 2021
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const [ keyLetter, ...letters ] = await getLetters();
  return {
    props: { keyLetter, letters }
  }
}
