import type { NextPage } from 'next'
import Head from 'next/head'
import { getAllBlogPosts, getBlogHomeContent } from '../../lib/contentRepository'
import PostBody from '../../lib/components/postBody'
import Link from 'next/link'
import { ContentData } from '../../lib/models/contentData'
import Container from '../../lib/components/container'
import Grid from '../../lib/components/grid'
import Title from '../../lib/components/title'
import CoverImage from '../../lib/components/coverImage'
import SectionSeparator from '../../lib/components/sectionSeparator'
import { PostListLine } from '../../lib/components/postListLine'

const BlogHome: NextPage = ({ blogHomeContent, allPosts }: any) => {
  return (
    <>
      <Head>
        <title>{blogHomeContent.title} | Picsum & Ipsum Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <main>
          <Grid>
            <div>
              <CoverImage alt="Blog Cover Image" src={blogHomeContent.coverImage} width="300" height="300"></CoverImage>
            </div>

            <div>
              <Title>
                {blogHomeContent.title}
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

            <SectionSeparator />

            <div>
              <PostBody content={blogHomeContent.markdownHtml} />
            </div>

            <div>
              {allPosts.map((post: ContentData) => (
                <PostListLine title={post.title} slug={post.slug} excerpt={post.excerpt} author={post.author} />
              ))}
            </div>
          </Grid>
        </main>
      </Container>
    </>
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