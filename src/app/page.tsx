import './globals.css'

import Image from 'next/image'

import { fetchHome } from '@/services/hygraphApi'
import Link from 'next/link'
import HomeBannerComponent from '@/components/HomeBannerComponent'

export default async function Home() {
  const homeData = await fetchHome()

  return (
    <div>
      <HomeBannerComponent
        title={homeData.title}
        bannerText={homeData.bannerText}
        imageSrc={homeData.homeBackground.url}
      />

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
