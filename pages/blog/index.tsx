import type { NextPage } from 'next'
import Head from 'next/head'
import { getAllBlogPosts, getBlogHomeContent } from '../../lib/contentRepository'
import PostBody from '../../lib/components/post-body'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/BasePage.module.css'
import { ContentData } from '../../lib/models/contentData'

const BlogHome: NextPage = ({ blogHomeContent, allPosts }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{blogHomeContent.title} | Picsum & Ipsum Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={blogHomeContent.coverImage} width="300" height="300"></Image>
        <h1 className={styles.title}>
          {blogHomeContent.title}
        </h1>

        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <PostBody content={blogHomeContent.markdownHtml} />

        <div>
          {allPosts.map((post: ContentData) => (
            <div>
              <Link href={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
              <div>{post.excerpt}</div>
            </div>
          ))}
        </div>

      </main>
    </div>
  )
}

export default BlogHome

export async function getStaticProps() {
  const blogHomeContent = await getBlogHomeContent()
  const allPosts = await getAllBlogPosts()

  return {
    props: { blogHomeContent, allPosts },
  }
}