# static-blog

This is a simple static blog with support for markdown, tailwindcss using next.js with Typescript.

# Content updates

The content markdown files live in the `./content` directory. 

`/` -> `content/index.md`
`/about` -> `content/about/index.md`
`/blog` -> `content/blog/index.md`
`/blog/:SLUG` -> `content/blog/:SLUG.md`

## Content Metadata
Index content support the following metadata:
* `title` - Page Title as well as HTML header title.
* `coverImage` - A header image to be used prominently. Could be a path in `/public/images` OR an image from `https://picsum.photos/` i.e. `https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U`

Blog Post content supports the following metadata:
* `title` - Page Title as well as HTML header title.
* `author` - Author of the blog post.
* `excerpt` - A short description of the blog post to be displayed on `/blog`.
* `coverImage` - A header image to be used prominently. Could be a path in `/public/images` OR an image from `https://picsum.photos/` i.e. `https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U`

# Deploying

A push to the `main` branch triggers a production deployment on Netlify which will be available at https://determined-lewin-afaa0a.netlify.app/.

# Sources

Sources used:
* https://nextjs.org/blog/markdown
* https://github.com/vercel/next.js/tree/canary/examples/blog-starter
* https://javascript.plainenglish.io/how-to-use-markdown-with-next-js-733b75364eba#76ed
* https://tailwindcss.com/docs/guides/nextjs
