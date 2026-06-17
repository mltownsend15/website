export function VideoIntroSection() {
    return (
        <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <div className="aspect-video overflow-hidden rounded-xl bg-pink-100 shadow-lg">
                    <video
                        className="h-full w-full object-cover"
                        src="https://ewgh8tja1jmkmw44.public.blob.vercel-storage.com/video/TMS%20Intro-lMTdysRIYqeimpxynKwU9b79266orl.mp4"
                        title="Townsend Medical Services Introduction Video"
                        controls
                        preload="metadata"
                        playsInline
                    />
                </div>
            </div>
        </section>
    );
}
