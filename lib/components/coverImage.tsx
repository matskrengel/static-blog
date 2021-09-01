import Image from 'next/image'

export default function CoverImage({ alt, src, height, width }: any) {
  return (
    <div className="mx-auto">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  )
}
