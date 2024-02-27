import React from 'react'

export default function page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black py-16">
      <h1 className="text-4xl font-semibold uppercase leading-normal text-white md:text-5xl">
        Em construção ⚠️
      </h1>
      <div className="flex flex-col items-center justify-center">
        <iframe
          src="https://giphy.com/embed/Mah9dFWo1WZX0WM62Q"
          width="480"
          height="480"
          allowFullScreen
        ></iframe>
        <a
          className="self-end text-[10px] text-white"
          href="https://giphy.com/gifs/pudgypenguins-building-build-brick-Mah9dFWo1WZX0WM62Q"
        >
          via GIPHY
        </a>
      </div>
    </div>
  )
}
