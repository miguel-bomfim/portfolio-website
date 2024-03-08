'use client'

import React, { useEffect } from 'react'

import Image from 'next/image'
import ArrowRight from './svg/ArrowRight'

export default function HomeBannerComponent({
  title,
  bannerText,
  imageSrc,
}: {
  title: string
  bannerText: string
  imageSrc: string
}) {
  useEffect(() => {
    const headerElement = document.querySelector('header')
    const navElement = document.querySelector('nav')

    if (headerElement && navElement) {
      window.addEventListener('wheel', function () {
        const headerBound = headerElement.getBoundingClientRect()

        if (headerBound.top <= -350) {
          navElement.style.backgroundColor = '#fff'
        } else {
          navElement.style.backgroundColor = 'transparent'
        }
      })
    }
  }, [])

  return (
    <header>
      <div className="grid h-screen justify-center">
        <h1
          className={`self-end justify-self-center font-mono text-2xl font-black uppercase md:text-9xl`}
        >
          {title}
        </h1>
        <div className="flex flex-col items-center justify-center gap-2 self-end pb-4">
          <p className="justify-self-center px-4 text-center text-sm md:text-lg">
            {bannerText}
          </p>
          <ArrowRight className="rotate-90" />
        </div>
      </div>
      <Image
        src={imageSrc}
        alt="Website introduction banner"
        fill
        className="-z-10 w-screen object-cover opacity-50"
      />
    </header>
  )
}
