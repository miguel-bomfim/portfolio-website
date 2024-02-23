import React from 'react'
import { fetchPorfolio } from '@/services/hygraphApi'
import Link from 'next/link'
import PhotoShootPreview from '@/components/PhotoShootPreview'

export default async function page() {
  const portfolioData = await fetchPorfolio()

  return (
    <div className="pt-20">
      <ul className="columns-5">
        {portfolioData.map((item, idx) => {
          return (
            <li key={idx}>
              <Link href={`/portfolio/${item.slug}`}>
                <PhotoShootPreview
                  src={item.thumbnail.url}
                  title={item.title}
                  photoWidth={750}
                  photoHeight={item.thumbnail.height}
                  alt=""
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
