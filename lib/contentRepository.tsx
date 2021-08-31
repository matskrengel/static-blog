import fs from 'fs'
import { join } from 'path'

import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import matter from 'gray-matter'
import { unified } from 'unified'

const blogDirectory = join(process.cwd(), 'content/blog')
const blogPostsDirectory = join(process.cwd(), 'content/blog/posts')
const aboutDirectory = join(process.cwd(), 'content/about')
const homeDirectory = join(process.cwd(), 'content')

export function getBlogSlugs() {
  return fs.readdirSync(blogPostsDirectory)
}

export function getBlogPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')

  return getContent(blogPostsDirectory, realSlug, fields)
}

export function getAllBlogPosts(fields = []) {
  const slugs = getBlogSlugs()
  console.log('getAllPosts')
  console.log(slugs)
  const posts = slugs
    .map((slug) => getBlogPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getBlogHomeContent(fields = []) {
  return getContent(blogDirectory, 'index', fields)
}

export function getAboutHomeContent(fields = []) {
  return getContent(aboutDirectory, 'index', fields)
}

export function getHomeContent(fields = []) {
  return getContent(homeDirectory, 'index', fields)
}

function getContent(directory: string, filename: string, fields = []) {
  const fullPath = join(directory, `${filename}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = filename
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export async function markdownToHtml(markdown) {
  const result = await unified().use(remarkParse).use(remarkHtml).process(markdown)
  return result.toString()
}
