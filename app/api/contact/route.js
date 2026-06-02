import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { nombre, email, mensaje } = await request.json()

    await resend.emails.send({
      from: 'Formulario <onboarding@resend.dev>',
      to: 'tucorreo@gmail.com',
      subject: 'Nuevo mensaje desde la web',
      html: `
        <h2>Nuevo mensaje</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>

        <p>${mensaje}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error(error)

    return Response.json(
      { success: false },
      { status: 500 }
    )
  }
}