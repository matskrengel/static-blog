import Link from 'next/link'
import style from './postListLine.module.css'

export function PostListLine({ slug, title, excerpt, author }: any) {
  return (
    <div>
      <Link href={`/blog/${slug}`}>
        <a className={style.title}>{title}</a>
      </Link>
      <div className={style.excerpt}>{excerpt}</div>
      <div className={style.author}>By {author}</div>
    </div>
  )
}