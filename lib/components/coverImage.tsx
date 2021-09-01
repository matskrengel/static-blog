export default function CoverImage({ alt, src, height, width }: any) {
  return (
    <div className="mx-auto">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  )
}
