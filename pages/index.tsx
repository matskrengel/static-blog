import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getHomeContent } from '../lib/contentRepository'
import PostBody from '../lib/components/postBody'
import Container from '../lib/components/container'
import CoverImage from '../lib/components/coverImage'
import Grid from '../lib/components/grid'
import Title from '../lib/components/title'
import SectionSeparator from '../lib/components/sectionSeparator'

const Home: NextPage = ({ homeContent }: any) => {
  return (
    <>
      <Head>
        <title>{homeContent.title} | Picsum & Ipsum Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <main>
          <Grid>
            <div>
              <CoverImage alt="Home Cover Image" src={homeContent.coverImage} width="300" height="300"></CoverImage>
            </div>

            <div>
              <Title>
                {homeContent.title}
              </Title>
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
              <PostBody content={homeContent.markdownHtml} />
            </div>
          </Grid>
        </main>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const homeContent = await getHomeContent()

  return {
    props: {
      homeContent,
    },
  }
}

export default Home
