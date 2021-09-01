import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import PostBody from '../../lib/components/post-body'
import { getAllBlogPosts, getBlogPostBySlug } from '../../lib/contentRepository'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/BasePage.module.css'

export default function Post({ post }: any) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title} | Picsum & Ipsum Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={post.coverImage} width="300" height="300"></Image>
        <h1 className={styles.title}>
          {post.title}
        </h1>

        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/blog">
          <a>Blog</a>
        </Link>

        <PostBody content={post.markdownHtml} />

      </main>
    </div>
  )
}

export async function getStaticProps({ params }: any) {
  const post = await getBlogPostBySlug(params.slug)

  return {
    props: { post },
  }
}

export async function getStaticPaths() {
  const posts = await getAllBlogPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
