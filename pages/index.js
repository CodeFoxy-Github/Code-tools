import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Code-tools!</a>
        </h1>

        <p className={styles.description}>Get started by Clicking any Tool.</p>

        <div className={styles.grid}>
          <a href="https://embed.code-tools.cf/" className={styles.card}>
            <h3>Embed Maker&rarr;</h3>
            <p>Make Embed code For Any Platform.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.app" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>Vercel</b>
        </a>
      </footer>
    </div>
  );
}
