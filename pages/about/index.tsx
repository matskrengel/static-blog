import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/BasePage.module.css'

const AboutHome: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About
        </h1>
      </main>
    </div>
  )
}

export default AboutHome
