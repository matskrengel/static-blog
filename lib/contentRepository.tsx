import fs from 'fs'
import { join } from 'path'

import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import * as matter from 'gray-matter';
import { unified } from 'unified'
import { ContentData } from './models/contentData'

const blogDirectory = join(process.cwd(), 'content/blog')
const blogPostsDirectory = join(process.cwd(), 'content/blog/posts')
const aboutDirectory = join(process.cwd(), 'content/about')
const homeDirectory = join(process.cwd(), 'content')

export function getBlogSlugs() {
  return fs.readdirSync(blogPostsDirectory)
}

export function getBlogPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')

  return getContent(blogPostsDirectory, realSlug)
}

export function getAllBlogPosts() {
  const slugs = getBlogSlugs()
  const posts = slugs.map((slug) => getBlogPostBySlug(slug))

  return Promise.all(posts)
}

export function getBlogHomeContent() {
  return getContent(blogDirectory, 'index')
}

export function getAboutHomeContent() {
  return getContent(aboutDirectory, 'index')
}

export function getHomeContent() {
  return getContent(homeDirectory, 'index')
}

async function getContent(directory: string, filename: string): Promise<ContentData> {
  const fullPath = join(directory, `${filename}.md`)
  // const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter.read(fullPath)

  let result: ContentData = {
    title: data['title'],
    slug: filename || null,
    coverImage: data['coverImage'],
    author: data['author'] || null,
    markdownHtml: await markdownToHtml(content),
    excerpt: data['excerpt'] || null
  };

  return result;
}

export async function markdownToHtml(markdown: string) {
  const result = await unified().use(remarkParse).use(remarkHtml).process(markdown)
  return result.toString()
}
