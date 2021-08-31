import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getHomeContent, markdownToHtml } from '../lib/contentRepository'
import styles from '../styles/BasePage.module.css'
import PostBody from '../lib/components/post-body'

const Home: NextPage = ({homeContent, content}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {homeContent.title}
        </h1>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/blog">
          <a>Blog</a>
        </Link>

        <hr/>

        <PostBody content={content} />

      </main>
    </div>
  )
}

export async function getStaticProps() {
  const homeContent = getHomeContent([
    'title',
    'date',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])

  console.log(homeContent)

  const content = await markdownToHtml(homeContent.content || '')

  return {
    props: {
      homeContent,
      content
    },
  }
}

export default Home
