import type { NextPage } from 'next'
import Head from 'next/head'
import { getAboutHomeContent } from '../../lib/contentRepository'
import PostBody from '../../lib/components/postBody'
import Link from 'next/link'
import Container from '../../lib/components/container'
import Grid from '../../lib/components/grid'
import Title from '../../lib/components/title'
import CoverImage from '../../lib/components/coverImage'
import SectionSeparator from '../../lib/components/sectionSeparator'

const AboutHome: NextPage = ({ aboutContent }: any) => {
  return (
    <>
      <Head>
        <title>{aboutContent.title} | Picsum & Ipsum Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <main>
          <Grid>
            <div>
              <CoverImage alt="About Cover Image" src={aboutContent.coverImage} width="300" height="300"></CoverImage>
            </div>

            <div>
              <Title>
                {aboutContent.title}
              </Title>
            </div>


            <div>
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>

            <div>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </div>

            <SectionSeparator />

            <div>
              <PostBody content={aboutContent.markdownHtml} />
            </div>
          </Grid>
        </main>
      </Container>
    </>
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
