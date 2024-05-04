import React from 'react'
import Image from 'next/image'

interface PhotoShootType {
  src: string
  title: string
  photoWidth: number
  photoHeight: number
  alt: string
}

export default function PhotoShootPreview(params: PhotoShootType) {
  return (
    <section className="flex items-center justify-center">
      <span className="absolute z-10 text-xl font-medium text-white">
        {params.title}
      </span>
      <Image
        className="pb-2 brightness-50 transition hover:brightness-100"
        width={params.photoWidth}
        height={params.photoHeight}
        src={params.src}
        alt={params.alt}
      />
    </section>
  )
}
