'use client'

import { useState } from 'react'

const faqs = [
  {
    question: '¿Hasta cuando tengo tiempo de inscribirme?',
    answer:
      'Tenés tiempo hasta que termine la fase de grupos, es decir, hasta el 27 de junio del 2026 o hasta agotar los 5000 cupos disponibles.',
  },
  {
    question: '¿En qué consiste la promo? ',
    answer:
      'Si Argentina gana la Copa del Mundo, los pasajeros inscriptos en la Promo 2028 de Wolf Travel acceden a un 50% de descuento en su viaje de egresados a Camboriú. ',
  },
  {
    question: '¿Quiénes pueden acceder al beneficio? ',
    answer:
      'Participan todos los alumnos que se encuentren inscriptos a la Promo 2028 de Wolf Travel y cumplan con las condiciones de la campaña. ',
  },
  {
    question: '¿Cuál es el valor de la inscripción?',
    answer:
      'Para acceder al beneficio es necesario estar correctamente inscripto en Wolf Travel según las condiciones comerciales vigentes. La inscripción tiene un valor de 300USD, monto que luego será tenido en cuenta dentro del valor total de tu viaje.',
  },
  {
    question: '¿Qué pasa si Argentina no gana?  ',
    answer:
      'La promo queda sujeta a la condición establecida: el beneficio del 50% se activa únicamente si Argentina gana la Copa del Mundo.',
  },
  {
    question: '¿El descuento es sobre cualquier viaje?',
    answer:
      'El beneficio aplica sobre el viaje de egresados contratado dentro de la Promo 2028 de Wolf Travel, según condiciones de la campaña.',
  },
   {
    question: '¿Puedo acceder si ya estoy inscripto? ',
    answer:
      '¡Sí! Si tu inscripción corresponde a la Promo 2028 y cumple con los requisitos de la campaña, participás automáticamente.',
  },
   {
    question: '¿Dónde puedo consultar las bases y condiciones?',
    answer:
      'Podés consultar todas las condiciones de la campaña en esta misma página o comunicándote con el equipo de Wolf Travel.',
  },

]

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
          setOpenIndex(openIndex === index ? null : index)
    }
  

  return (
    <section className="w-full py-16" id="faqs">
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