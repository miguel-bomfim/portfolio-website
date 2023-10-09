import React from 'react'

export default function NavBar() {
  return (
    <nav className="fixed z-10 flex w-full justify-center">
      <ul className="flex items-center justify-center gap-6 p-6">
        <li>Portfolio</li>
        <li>Blog</li>
      </ul>
    </nav>
  )
}
