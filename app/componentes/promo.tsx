'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import flayer from '../../public/flayer.jpeg'

const images = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
]

export default function FlyerGallery() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
     <section className="flex items-center justify-center w-full py-16" id="promo">
  <div className="mx-auto flex flex-col items-center gap-8 px-6 lg:flex-row lg:justify-center">

    {/* Flyer */}
    <div className="relative h-[500px] w-[320px] overflow-hidden rounded-3xl shadow-xl lg:h-[600px] lg:w-[400px]">
      <Image
        src={flayer}
        alt="Flyer de campaña"
        fill
        className="object-cover"
      />
    </div>

    {/* Slider */}
    <div className="relative h-[500px] w-[320px] overflow-hidden rounded-3xl shadow-xl lg:h-[600px] lg:w-[400px]">
      <Image
        src={images[current]}
        alt={`Foto ${current + 1}`}
        fill
        className="object-cover transition-all duration-500"
      />

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/80 px-4 py-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full ${
              current === index ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>

  </div>
</section>
  )
}