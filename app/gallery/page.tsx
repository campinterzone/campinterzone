import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gallery — Camp Interzone",
  description: "Images and video from Camp Interzone on the playa.",
};

const photos = [
  {
    src: "/images/gallery/camp-night.jpg",
    alt: "Camp Interzone at dusk — the tent glowing against the playa sky",
    caption: "Black Rock City, 2024",
    wide: true,
  },
  {
    src: "/images/gallery/library-sign.jpg",
    alt: "The Lost Times Library sign at dawn",
    caption: "The Lost Times Library",
    wide: false,
  },
  {
    src: "/images/gallery/camp-exterior.jpg",
    alt: "Camp exterior with the chalkboard sign — Lounge, Cold Tap Beer, Free Books",
    caption: "Open for business",
    wide: false,
  },
  {
    src: "/images/gallery/bar-scene.jpg",
    alt: "The bar crew at Library Loud Hours",
    caption: "Library Loud Hours",
    wide: false,
  },
  {
    src: "/images/gallery/camp-team.jpg",
    alt: "Camp Interzone crew with the Interzone sign",
    caption: "The crew, 2024",
    wide: false,
  },
  {
    src: "/images/gallery/camp-net.jpg",
    alt: "Camp members in the net structure at night",
    caption: "After dark",
    wide: false,
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#F5EDD8] pt-24">
        {/* Header */}
        <div className="max-w-5xl mx-auto px-6 py-20 text-center border-b border-[#B85C38]">
          <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-6">
            The Archive
          </p>
          <div className="w-16 border-t border-[#B85C38] mx-auto mb-10" />
          <h1 className="font-heading font-semibold uppercase tracking-[0.2em] text-[#1E120A]">
            Gallery
          </h1>
          <p className="font-body text-[#1E120A] mt-6 max-w-xl mx-auto leading-loose">
            Photographs from the playa. The library at dawn. The bar at
            dusk. The dust, always the dust.
          </p>
        </div>

        {/* Photo grid */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          {/* Hero image — full width */}
          <div className="border-4 border-[#1E120A] mb-8">
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              width={1400}
              height={800}
              className="block w-full object-cover"
              priority
            />
            <div className="border-t border-[#1E120A] px-4 py-3">
              <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35]">
                {photos[0].caption}
              </p>
            </div>
          </div>

          {/* 2-column grid for remaining photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {photos.slice(1).map((photo) => (
              <div key={photo.src} className="border-4 border-[#1E120A]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={700}
                  height={500}
                  className="block w-full object-cover aspect-[4/3]"
                />
                <div className="border-t border-[#1E120A] px-4 py-3">
                  <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35]">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
