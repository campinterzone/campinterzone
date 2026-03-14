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
    span: "col-span-2",
  },
  {
    src: "/images/gallery/library-sign.jpg",
    alt: "The Lost Times Library sign at dawn",
    caption: "The Lost Times Library",
    span: "",
  },
  {
    src: "/images/gallery/camp-exterior.jpg",
    alt: "Camp exterior with the chalkboard sign — Lounge, Cold Tap Beer, Free Books",
    caption: "Open for business",
    span: "",
  },
  {
    src: "/images/gallery/bar-scene.jpg",
    alt: "The bar crew at Library Loud Hours",
    caption: "Library Loud Hours",
    span: "",
  },
  {
    src: "/images/gallery/camp-team.jpg",
    alt: "Camp Interzone crew with the Interzone sign",
    caption: "The crew, 2024",
    span: "",
  },
  {
    src: "/images/gallery/camp-net.jpg",
    alt: "Camp members in the net structure at night",
    caption: "After dark",
    span: "col-span-2",
  },
  {
    src: "/images/gallery/Burning Man 2022 Sept 4.jpg",
    alt: "Camp Interzone at Burning Man 2022",
    caption: "Black Rock City, 2022",
    span: "",
  },
  {
    src: "/images/gallery/Burning Mud Man 2023.jpeg",
    alt: "Burning Mud Man 2023",
    caption: "Burning Mud Man, 2023",
    span: "",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#EDE8DF] pt-24">
        {/* Header */}
        <div className="max-w-5xl mx-auto px-6 py-20 text-center border-b border-[#906558]">
          <p className="font-heading uppercase tracking-widest text-xs text-[#6B5045] mb-6">
            The Archive
          </p>
          <div className="w-16 border-t border-[#906558] mx-auto mb-10" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className={`border-4 border-[#1E120A] ${photo.span === "col-span-2" ? "md:col-span-2" : ""}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1400}
                  height={photo.span === "col-span-2" ? 750 : 600}
                  className={`block w-full object-cover ${photo.span === "col-span-2" ? "aspect-[16/7]" : "aspect-[4/3]"}`}
                />
                <div className="border-t border-[#1E120A] px-4 py-3">
                  <p className="font-heading uppercase tracking-widest text-xs text-[#6B5045]">
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
