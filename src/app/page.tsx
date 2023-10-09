import HomeBanner from '@/components/HomeBanner'
import HomeContent from '@/components/HomeContent'
import NavBar from '@/components/NavBar'
import { fetchHome } from '@/services/hygraphApi'

export default async function Home() {
  const homeData = await fetchHome()

  return (
    <div>
      <NavBar />

      <HomeBanner
        title={homeData.title}
        bottomText={homeData.bottomText}
        bgImage={homeData.homeBackground.url}
      />

      <HomeContent />
    </div>
  )
}
