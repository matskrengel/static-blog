import type { NextPage } from 'next'
import Head from 'next/head'
import { getAboutHomeContent } from '../../lib/contentRepository'
import styles from '../../styles/BasePage.module.css'
import PostBody from '../../lib/components/post-body'

const AboutHome: NextPage = ({ aboutContent }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {aboutContent.title}
        </h1>

        Author: {aboutContent.author}
        <br />
        Date: {aboutContent.date}
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
