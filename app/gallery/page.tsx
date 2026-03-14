import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gallery — Camp Interzone",
  description: "Images and video from Camp Interzone on the playa.",
};

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
            Photographs from the playa. Still life from the desert. The library
            in the afternoon light.
          </p>
        </div>

        {/* Gallery grid — populated with FramedImage components when photos are added */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="font-body text-[#6B4C35] text-center">
            Photos coming soon — check back before the burn.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
