export default function CampaignMessage() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-4xl px-6">

        {/* Descripción */}
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Nuestro Compromiso
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            Trabajamos para construir un futuro mejor para todos.
            Creemos en la participación, la transparencia y el
            desarrollo de proyectos que generen oportunidades reales
            para la comunidad. Te invitamos a conocer más sobre
            nuestras propuestas y objetivos.
          </p>
        </div>

        {/* Video */}
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <video
            className="aspect-video w-full"
            controls
            poster="/poster.jpg"
          >
            <source src="/campania.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>

      </div>
    </section>
  )
}