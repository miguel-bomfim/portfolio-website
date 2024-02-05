import React from 'react'
import { fetchPorfolio } from '@/services/hygraphApi'
import Image from 'next/image'
import Link from 'next/link'

export default async function page() {
  const portfolioData = await fetchPorfolio()

  return (
    <div className="pt-20">
      <ul className="columns-5">
        {portfolioData.map((item, idx) => {
          return (
            <li key={idx}>
              <Link href={`/portfolio/${item.slug}`}>
                <Image
                  className="pb-4"
                  width={item.thumbnail.width}
                  height={item.thumbnail.height}
                  src={item.thumbnail.url}
                  alt=""
                />{' '}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
