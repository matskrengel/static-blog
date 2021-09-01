import type { NextPage } from 'next'
import Head from 'next/head'

import Container from '../../lib/components/container'
import MoreStories from '../../lib/components/more-stories'
import HeroPost from '../../lib/components/hero-post'
import Intro from '../../lib/components/intro'
import Layout from '../../lib/components/layout'
import { getAllBlogPosts, getBlogHomeContent } from '../../lib/contentRepository'
import PostBody from '../../lib/components/post-body'

const BlogHome: NextPage = ({ blogHomeContent, allPosts }: any) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <>
      <Layout preview={null}>
        <Head>
          <title>{blogHomeContent.title}</title>
        </Head>
        <Container>
          <Intro />
          <h1>{blogHomeContent.title}</h1>

          <PostBody content={blogHomeContent.markdownHtml}></PostBody>

          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
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