import styles from 'styles/Layout.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title ?? 'WordGame'}</title>
      </Head>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <Link href={'/about'}><a>About</a></Link>
        <span className={styles.separator}>//</span>
        <a href={'https://github.com/EvilScott/wordgame'} target={'_blank'}>Source code</a>
        <span className={styles.separator}>//</span>
        <span>R. Scott Reis &copy; 2021</span>
      </footer>
    </div>
  );
}
