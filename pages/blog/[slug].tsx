import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Container from '../../lib/components/container'
import PostBody from '../../lib/components/post-body'
import Header from '../../lib/components/header'
import PostHeader from '../../lib/components/post-header'
import Layout from '../../lib/components/layout'
import PostTitle from '../../lib/components/post-title'
import { getAllBlogPosts, getBlogPostBySlug } from '../../lib/contentRepository'

export default function Post({ post, preview }: any) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with Markdown
                </title>
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.markdownHtml} />
            </article>
          </>
        )}
      </Container>
    </Layout>
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
