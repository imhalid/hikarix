'use client'
import React, { useEffect, useState } from 'react'
export default  function ScrollYAxis({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {

const scrollLeft = () => {
const element = document.querySelector('.scroll-y-axis')
  if (element) {
    element.scrollBy({ left: -522, behavior: 'smooth' })
  }
}
const scrollRight = () => {
  const element = document.querySelector('.scroll-y-axis')
  if (element) {
    console.log(element.scrollLeft)
    element.scrollBy({ left: 522, behavior: 'smooth' })
  }
}

  return (
    <div className="mt-10 group relative h-full text-white">
      <button className=" left-0 absolute group-hover:opacity-100 opacity-0 z-50 transition-all  flex pr-2 items-center h-full rounded" onClick={scrollLeft}>
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
            <path fill="currentColor" d="M7.94 13.06a1.5 1.5 0 0 1 0-2.12l5.656-5.658a1.5 1.5 0 1 1 2.121 2.122L11.122 12l4.596 4.596a1.5 1.5 0 1 1-2.12 2.122l-5.66-5.658Z" />
          </g>
        </svg>
      </button>
      <button className="right-0 absolute group-hover:opacity-100 z-50 opacity-0 transition-all  flex pl-2 h-full items-center rounded" onClick={scrollRight}>
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
            <path fill="currentColor" d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z" />
          </g>
        </svg>
      </button>
      <div className="w-full  h-full pointer-events-none flex justify-between absolute top-0 left-0 z-10">
        <div className="h-full w-32 bg-gradient-to-r from-neutral-950 to-transparent"></div>
        <div className="h-full w-32 bg-gradient-to-l from-neutral-950 to-transparent"></div>
      </div>
      <div className="inline-flex scroll-y-axis flex-nowrap  overflow-x-auto space-x-3 h-full relative scrollbar-hidden">{children}</div>
    </div>
  )
}
