export default function LoudHours() {
  return (
    <section id="loud-hours" className="bg-[#1E120A] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section label */}
        <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-6">
          Camp Offering
        </p>

        {/* Rule */}
        <div className="w-16 border-t border-[#B85C38] mx-auto mb-10" />

        <h2 className="font-heading font-semibold uppercase tracking-[0.15em] text-[#F5EDD8] mb-6">
          Library Loud Hours
        </h2>

        <p className="font-body text-[#EAD9B8] text-base leading-loose max-w-2xl mx-auto mb-16">
          Once a day — usually the afternoon, when the heat has settled into
          something almost tolerable — the library goes loud. Live music.
          Cold draft beer, gifted, no transaction required. The books stay on
          the shelves, the people come out, and for a few hours the dust
          itself seems to have an opinion about the rhythm section.
        </p>

        {/* Two columns: What / When */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#B85C38] max-w-2xl mx-auto mb-12">
          <div className="p-10 border-b md:border-b-0 md:border-r border-[#B85C38]">
            <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-4">
              What
            </p>
            <p className="font-body text-[#EAD9B8] leading-loose">
              Live music from camp and guest musicians. Cold draft beer, poured
              freely. The library as venue. No stage, no cover, no queue.
            </p>
          </div>
          <div className="p-10">
            <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-4">
              When
            </p>
            <p className="font-body text-[#EAD9B8] leading-loose">
              Daily at the Interzone. Check our camp schedule on the playa for
              exact times each day. Walk-ins always welcome.
            </p>
          </div>
        </div>

        {/* Rule */}
        <div className="border-t border-[#B85C38] mt-20" />
      </div>
    </section>
  );
}
