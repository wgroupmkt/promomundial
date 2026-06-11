export default function CampaignVideo() {
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl shadow-2xl">
           <video
              className="lg:w-[100%] h-[500px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
           >
             <source
               src="https://res.cloudinary.com/dx2pj0vkm/video/upload/v1780502032/video_qinekw.mp4"
               type="video/mp4"
             />
             Tu navegador no soporta videos.
           </video>
        </div>
      </div>
    </section>
  )
}