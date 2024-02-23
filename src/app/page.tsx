import './globals.css'

import Image from 'next/image'

import { fetchHome } from '@/services/hygraphApi'
import Link from 'next/link'

export default async function Home() {
  const homeData = await fetchHome()

  return (
    <div>
      <header>
        <div className="grid h-screen justify-center">
          <h1 className="self-end justify-self-center font-sans text-8xl uppercase">
            {homeData.title}
          </h1>
          <p className="cursor-pointer self-end justify-self-center text-lg">
            {homeData.bannerText}
          </p>
        </div>
        <Image
          src={homeData.homeBackground.url}
          alt="Website introduction banner"
          fill
          className="-z-10 w-screen object-cover opacity-50"
        />
      </header>

      <section className="spoilerSection">
        <div className="spoilerWrapSticky">
          <div className="spoilerWrap">
            <p>{homeData.spoilerText}</p>

            {homeData.homePhotos.map((photo, idx) => {
              return (
                <Image
                  width={500}
                  height={500}
                  src={photo.url}
                  alt=""
                  key={idx}
                />
              )
            })}
          </div>
        </div>
      </section>

      <div className="flex h-[50vh] items-center justify-end pr-28">
        <Link href="/portfolio">
          Tudo isso foi uma pequena prévia do que você vai encontrar aqui {'=>'}
        </Link>
      </div>
    </div>
  )
}
