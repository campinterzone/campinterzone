export default function About() {
  return (
    <section id="story" className="bg-[#F5EDD8] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] text-center mb-6">
          The Story
        </p>

        {/* Rule */}
        <div className="w-16 border-t border-[#B85C38] mx-auto mb-10" />

        <h2 className="font-heading font-semibold uppercase tracking-[0.15em] text-[#1E120A] text-center mb-12">
          The International Zone
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Column 1 */}
          <div className="font-body text-[#1E120A] leading-loose">
            <p className="mb-6">
              In the 1950s, the port city of Tangier existed outside the
              jurisdiction of any nation. The International Zone — neither
              French Morocco nor Spanish Morocco nor British territory — drew
              writers, artists, and wanderers who had run out of room elsewhere.
              William Burroughs wrote <em>Naked Lunch</em> there. Paul Bowles
              never left.
            </p>
            <p>
              It was a city of thresholds: between cultures, between languages,
              between the life you had lived and the one you might become. A
              place where judgment arrived late, if it arrived at all, and where
              the afternoon light fell a particular shade of gold through the
              shuttered windows of a borrowed room.
            </p>
          </div>

          {/* Column 2 */}
          <div className="font-body text-[#1E120A] leading-loose">
            <p className="mb-6">
              Camp Interzone lives in that spirit. We set up a café in the
              desert: a covered space with cold draft beer on tap, a library of
              free books, live music most evenings, and workshops that range
              from Buddhism to breathwork to board games.
            </p>
            <p>
              Nothing is for sale. Nothing is required. You are welcome here
              exactly as you are — and if you find, somewhere between the dust
              and the music, that you have become someone slightly different,
              that is entirely the point.
            </p>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="border-t border-[#B85C38] mt-20" />
      </div>
    </section>
  );
}
