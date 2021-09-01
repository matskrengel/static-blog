import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import PostBody from '../../lib/components/postBody'
import { getAllBlogPosts, getBlogPostBySlug } from '../../lib/contentRepository'
import Link from 'next/link'
import Container from '../../lib/components/container'
import Grid from '../../lib/components/grid'
import Title from '../../lib/components/title'
import CoverImage from '../../lib/components/coverImage'
import SectionSeparator from '../../lib/components/sectionSeparator'

export default function Post({ post }: any) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{post.title} | Picsum & Ipsum Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <main>
          <Grid>
            <div>
              <CoverImage alt={`${post.title} Cover Image`} src={post.coverImage} width="300" height="300"></CoverImage>
            </div>

            <div>
              <Title>
                {post.title}
              </Title>
            </div>

            <div>
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>

            <div>
              <Link href="/about">
                <a>About</a>
              </Link>
            </div>

            <div>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </div>

            <SectionSeparator />

            <div>
              By {post.author}
            </div>

            <div>
              <PostBody content={post.markdownHtml} />
            </div>
          </Grid>
        </main>
      </Container>
    </>
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
