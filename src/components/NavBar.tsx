import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="fixed z-10 flex w-full justify-center">
      <ul className="flex items-center justify-center gap-6 p-6">
        <li>
          <Link href="portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="blog">Blog</Link>
        </li>
      </ul>
    </nav>
  )
}
