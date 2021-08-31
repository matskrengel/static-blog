import type { NextPage } from 'next'
import Head from 'next/head'
import { getAboutHomeContent, markdownToHtml } from '../../lib/contentRepository'
import styles from '../../styles/BasePage.module.css'
import PostBody from '../../lib/components/post-body'

const AboutHome: NextPage = ({ aboutContent, content }: any) => {
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

        Author: {aboutContent.author.name}
        <br />
        Date: {aboutContent.date}
        <PostBody content={content} />
      </main>
    </div>
  )
}

export default AboutHome

export async function getStaticProps() {
  const aboutContent = getAboutHomeContent([
    'title',
    'date',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])

  console.log(aboutContent)

  const content = await markdownToHtml(aboutContent.content || '')

  return {
    props: {
      aboutContent,
      content
    },
  }
}
