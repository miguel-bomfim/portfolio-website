'use client'

import React, { useEffect } from 'react'

import Image from 'next/image'

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
        <h1 className="self-end justify-self-center text-8xl font-semibold uppercase">
          {title}
        </h1>
        <p className="cursor-pointer self-end justify-self-center text-lg">
          {bannerText}
        </p>
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
