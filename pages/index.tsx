import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/BasePage.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Home
        </h1>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </main>
    </div>
  )
}

export default Home
