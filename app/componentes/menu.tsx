'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logomundialhora from '../../public/logomundialhori.png'
import logowolfmundial from '../../public/logowolfmundial.png'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
     <header className="w-full border-b bg-[#333366]">
   <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-6">
  
  <div className="flex justify-start">
    <Image
      src={logowolfmundial}
      alt="Logo Wolf Mundial"
      width={70}
      height={60}
      priority
    />
  </div>

  <div className="flex justify-center">
    <Image
      src={logomundialhora}
      alt="Logo Campaña Mundial"
      width={100}
      height={60}
      priority
    />
  </div>

  <nav className="hidden justify-end gap-8 text-lg font-medium text-white md:flex">
    <Link href="#promo">Promo</Link>
    <Link href="#sobre">Sobre</Link>
    <Link href="#faqs">FAQ's</Link>
    <Link href="#contacto">Contacto</Link>
  </nav>

  <button
    onClick={() => setOpen(!open)}
    className="justify-self-end text-3xl text-white md:hidden mr-6"
  >
    ☰
  </button>

</div>

  {open && (
    <nav className="flex justify-center items-center flex-col gap-4 bg-white px-6 py-4 md:hidden">
      <Link href="#promo">Promo</Link>
      <Link href="#sobre">Sobre</Link>
      <Link href="#faqs">FAQ's</Link>
      <Link href="#contacto">Contacto</Link>
    </nav>
  )}
</header>
  )
}