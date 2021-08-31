import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/BasePage.module.css'

const BlogHome: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Blog
        </h1>
      </main>
    </div>
  )
}

export default BlogHome
