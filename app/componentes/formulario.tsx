'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    const data = await response.json()

    if (data.success) {
      alert('Mensaje enviado')
      setForm({
        nombre: '',
        email: '',
        mensaje: '',
      })
    } else {
      alert('Error al enviar')
    }

    setLoading(false)
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="mb-8 text-center text-4xl font-bold">
          Contacto
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Nombre"
            required
            value={form.nombre}
            onChange={(e) =>
              setForm({
                ...form,
                nombre: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          />

          <input
            type="email"
            placeholder="Correo"
            required
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          />

          <textarea
            rows={6}
            placeholder="Mensaje"
            required
            value={form.mensaje}
            onChange={(e) =>
              setForm({
                ...form,
                mensaje: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-black py-4 text-white"
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </section>
  )
}