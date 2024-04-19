import './globals.css'

import Image from 'next/image'

import { fetchHome } from '@/services/hygraphApi'
import Link from 'next/link'
import HomeBannerComponent from '@/components/HomeBannerComponent'
import ArrowRight from '@/components/svg/ArrowRight'

export default async function Home() {
  const homeData = await fetchHome()

  return (
    <div className="p-2">
      <HomeBannerComponent
        title={homeData.title}
        bannerText={homeData.bannerText}
        imageSrc={homeData.homeBackground.url}
      />

      <div className="flex flex-col gap-2">
        <p className="max-w-md text-xl">{homeData.spoilerText}</p>

        {homeData.homePhotos.map((photo, idx) => {
          return (
            <Image width={500} height={500} src={photo.url} alt="" key={idx} />
          )
        })}
      </div>

      <div className="flex h-[50vh] items-center justify-end md:pr-28">
        <Link
          className="flex items-center gap-3 hover:underline"
          href="/portfolio"
        >
          Tudo isso foi uma pequena prévia do que você vai encontrar aqui
          <ArrowRight />
        </Link>
      </div>
    </div>
  )
}
