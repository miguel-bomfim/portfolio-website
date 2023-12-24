'use client'

import Image from 'next/image'

interface HomeBannerProps {
  title: string
  bottomText: string
  bgImage: string
}

export default function HomeBanner({
  title,
  bottomText,
  bgImage,
}: HomeBannerProps) {
  return (
    <>
      <div className="grid h-screen justify-center">
        <h1 className="self-end justify-self-center font-sans text-8xl uppercase">
          {title}
        </h1>
        <p
          onClick={() => window.location.replace('/#mainHome')}
          className="cursor-pointer self-end justify-self-center text-lg"
        >
          {bottomText}
        </p>
      </div>
      <Image
        src={bgImage}
        alt="Website introduction banner"
        fill
        className="-z-10 w-screen object-cover opacity-50"
      />
    </>
  )
}
