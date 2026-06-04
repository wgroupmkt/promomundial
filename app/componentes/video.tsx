export default function CampaignVideo() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl shadow-2xl">
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