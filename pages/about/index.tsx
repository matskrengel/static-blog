import type { NextPage } from 'next'
import Head from 'next/head'
import { getAboutHomeContent } from '../../lib/contentRepository'
import styles from '../../styles/BasePage.module.css'
import PostBody from '../../lib/components/post-body'
import Image from 'next/image'
import Link from 'next/link'

const AboutHome: NextPage = ({ aboutContent }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{aboutContent.title} | Picsum & Ipsum Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={aboutContent.coverImage} width="300" height="300"></Image>
        <h1 className={styles.title}>
          {aboutContent.title}
        </h1>

        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/blog">
          <a>Blog</a>
        </Link>

        <PostBody content={aboutContent.markdownHtml} />

      </main>
    </div>
  )
}

export default AboutHome

export async function getStaticProps() {
  const aboutContent = await getAboutHomeContent()

  return {
    props: {
      aboutContent
    },
  }
}
