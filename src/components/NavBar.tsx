'use client'

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavBar() {
  const pathname = usePathname()

  useEffect(() => {
    const navElement = document.querySelector('nav')

    if (navElement) {
      window.history.pushState({ page: 1 }, '', '')
      window.onpopstate = function (event) {
        if (event) {
          navElement.style.backgroundColor = 'transparent'
        }
      }
    }
  }, [])

  return (
    <nav
      className={`fixed z-10 flex w-full justify-center duration-200 ${
        pathname !== '/' && '!bg-white'
      } `}
    >
      <ul className="flex items-center justify-center gap-6 p-5">
        <li className={`${pathname.includes('/portfolio') && 'font-semibold'}`}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className={`${pathname.includes('/blog') && 'font-semibold'}`}>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  )
}
