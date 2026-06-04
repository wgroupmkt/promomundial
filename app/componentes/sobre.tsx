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
           En Wolf Travel llevamos más de 11 años acompañando a miles de estudiantes en una de las experiencias más importantes de su vida: el viaje de egresados. Somos una empresa líder del interior del país, especializada en crear experiencias únicas, seguras y memorables, combinando diversión, organización y acompañamiento profesional. Mientras los estudiantes disfrutan momentos inolvidables, las familias cuentan con la tranquilidad de estar respaldadas por un equipo comprometido en cada etapa del viaje.
          </p>
        </div>

        {/* Video */}
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <video
             className="w-full"
             autoPlay
             muted
             loop
             playsInline
           >
             <source
               src="https://res.cloudinary.com/dx2pj0vkm/video/upload/v1780501774/cambo_zccyfe.mp4"
               type="video/mp4"
             />
             Tu navegador no soporta videos.
           </video>
        </div>

      </div>
    </section>
  )
}