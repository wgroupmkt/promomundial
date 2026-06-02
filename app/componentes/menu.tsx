'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logocampmundial from '../../public/logocampmundial.png'
import logowolfmundial from '../../public/logowolfmundial.png'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full border-b bg-[#333366]">
      <div className="mx-auto mr-[220px] flex max-w-7xl items-center justify-between px-6 py-6">
        
        {/* Logos */}
        <div className="flex items-center">
          <Image
            src={logowolfmundial}
            alt="Logo Wolf Mundial"
            width={100}
            height={60}
            priority
          />

            </div>
            <div>
          <Image  
            src={logocampmundial}
            alt="Logo Campaña Mundial"
            width={100}
            height={60}
            priority
          />
        </div>

        {/* Menú Desktop */}
        <nav className="hidden items-center gap-8 text-lg text-white font-medium md:flex">
          <Link
            href="#promo"
            className="transition hover:text-blue-600"
          >
            Promo
          </Link>

          <Link
            href="#sobre"
            className="transition hover:text-blue-600"
          >
            Sobre
          </Link>

          <Link
            href="#faqs"
            className="transition hover:text-blue-600"
          >
            FAQ's
          </Link>

          <Link
            href="#contacto"
            className="transition hover:text-blue-600"
          >
            Contacto
          </Link>
        </nav>

        {/* Botón Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Menú Mobile */}
      {open && (
        <nav className="flex flex-col gap-4 border-t bg-white px-6 py-4 md:hidden">
          <Link href="#promo">Promo</Link>
          <Link href="#sobre">Sobre</Link>
          <Link href="#faqs">FAQ's</Link>
          <Link href="#contacto">Contacto</Link>
        </nav>
      )}
    </header>
  )
}