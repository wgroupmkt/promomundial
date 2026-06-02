export default function CampaignVideo() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold">
            Video de Campaña
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Conoce nuestras propuestas y el trabajo que queremos realizar.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <video
            className="w-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/video.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>
      </div>
    </section>
  )
}