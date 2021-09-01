import style from './postBody.module.css'

export default function PostBody({ content }: any) {
  return (
    <div className={style.wrapper}>
      <div
        className={style.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
