import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getHomeContent } from '../lib/contentRepository'
import styles from '../styles/BasePage.module.css'
import PostBody from '../lib/components/post-body'
import Image from 'next/image'

const Home: NextPage = ({ homeContent }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{homeContent.title} | Picsum & Ipsum Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={homeContent.coverImage} width="300" height="300"></Image>
        <h1 className={styles.title}>
          {homeContent.title}
        </h1>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/blog">
          <a>Blog</a>
        </Link>

        <PostBody content={homeContent.markdownHtml} />

      </main>
    </div>
  )
}

export async function getStaticProps() {
  const homeContent = await getHomeContent()

  return {
    props: {
      homeContent,
    },
  }
}

export default Home
