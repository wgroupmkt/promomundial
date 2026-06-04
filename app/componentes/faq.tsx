'use client'

import { useState } from 'react'

const faqs = [
  {
    question: '¿Cuál es el principal objetivo de la campaña?',
    answer:
      'Trabajar en propuestas concretas que mejoren la calidad de vida de los vecinos y promuevan el desarrollo de la comunidad.',
  },
  {
    question: '¿Cómo puedo participar?',
    answer:
      'Puedes participar asistiendo a reuniones, eventos, actividades comunitarias o contactándonos a través de nuestros canales oficiales.',
  },
  {
    question: '¿Dónde puedo conocer las propuestas completas?',
    answer:
      'Las propuestas estarán disponibles en nuestras redes sociales, materiales informativos y eventos de campaña.',
  },
  {
    question: '¿Cómo puedo comunicarme con ustedes?',
    answer:
      'Puedes hacerlo mediante el formulario de contacto, redes sociales o los medios de comunicación publicados en el sitio.',
  },
]

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
          setOpenIndex(openIndex === index ? null : index)
    }
  

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Preguntas Frecuentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between p-5 text-left font-semibold"
              >
                {faq.question}

                <span
                  className={`transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`transition-all duration-300 ${
                  openIndex === index
                    ? 'max-h-40 p-5 pt-0'
                    : 'max-h-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}