'use client'

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { useScrollDirection } from '../hooks'

export default function NavBar() {
  const pathname = usePathname()
  const scrollDirection = useScrollDirection()

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
      className={`fixed top-0 z-10 flex w-full justify-center p-5 duration-500
      ${pathname !== '/' && '!bg-white'}
      ${scrollDirection === 'down' && pathname !== '/' && '!top-[-5rem]'}
      `}
    >
      <Link
        href="/"
        className="absolute left-9 text-2xl font-bold leading-none"
      >
        SH
      </Link>
      <ul className="flex items-center justify-center gap-6 ">
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
