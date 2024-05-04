import { fetchSinglePorfolio } from '@/services/hygraphApi'
import Image from 'next/image'

export default async function Page({ params }: { params: { slug: string } }) {
  const singlePortfolioData = await fetchSinglePorfolio(params.slug)
  return (
    <ul className="mt-16 flex flex-col items-center gap-2">
      {singlePortfolioData.photos.map((photo, idx) => {
        return (
          <li key={idx}>
            <Image width={750} height={photo.height} src={photo.url} alt="" />
          </li>
        )
      })}
    </ul>
  )
}
