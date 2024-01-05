import Image from 'next/image'

import NavBar from '@/components/NavBar'
import { fetchHome } from '@/services/hygraphApi'

export default async function Home() {
  const homeData = await fetchHome()

  return (
    <div>
      <NavBar />

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

      <main id="mainHome" className="mt-10">
        <p>{homeData.spoilerText}</p>

        <ul>
          <img src={homeData.homePhotos[0].url} alt="" />
          <img src={homeData.homePhotos[1].url} alt="" />
          <img src={homeData.homePhotos[2].url} alt="" />
        </ul>
      </main>
    </div>
  )
}
