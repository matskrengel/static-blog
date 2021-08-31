import type { NextPage } from 'next'
import Head from 'next/head'

import Container from '../../lib/components/container'
import MoreStories from '../../lib/components/more-stories'
import HeroPost from '../../lib/components/hero-post'
import Intro from '../../lib/components/intro'
import Layout from '../../lib/components/layout'
import { getAllBlogPosts, getBlogHomeContent, markdownToHtml } from '../../lib/contentRepository'

// TODO: load content/blog index content

const BlogHome: NextPage = ({ blogHomeContent, content, allPosts }: any) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  console.log(heroPost)
  console.log(morePosts)

  return (
    <>
      <Layout preview={null}>
        <Head>
          <title>{blogHomeContent.title}</title>
        </Head>
        <Container>
          <Intro />
          <h1>{blogHomeContent.title}</h1>
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
  const blogHomeContent = getBlogHomeContent([
    'title',
    'date',
    'author',
    'coverImage',
  ])

  const content = await markdownToHtml(blogHomeContent.content || '')


  const allPosts = getAllBlogPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { blogHomeContent, content, allPosts },
  }
}