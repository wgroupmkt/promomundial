import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { nombre, email, mensaje } = await request.json()

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // Puerto 465 usa SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.EMAIL_USER}>`,
      to: 'mundial@wolftravel.com.ar',
      replyTo: email,
      subject: `Nuevo mensaje de ${nombre}`,
      html: `
        <h2>Nuevo mensaje desde la web</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Error enviando email:', error)

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    )
  }
}