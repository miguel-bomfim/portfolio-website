'use client'

import React from 'react'

import Image from 'next/image'
import ArrowRight from './svg/ArrowRight'
import Link from 'next/link'

export default function HomeBannerComponent({
  title,
  bannerText,
  imageSrc,
}: {
  title: string
  bannerText: string
  imageSrc: string
}) {
  return (
    <header>
      <div className="flex h-screen justify-center">
        <h1
          className={`self-center justify-self-center font-mono text-2xl font-black uppercase md:text-7xl`}
        >
          {title}
        </h1>
      </div>
      <Image
        src={imageSrc}
        alt="Website introduction banner"
        fill
        className="-z-10 w-screen object-cover px-2 pt-2 opacity-50"
      />
    </header>
  )
}
