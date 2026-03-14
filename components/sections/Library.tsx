import Button from "@/components/Button";

export default function Library() {
  const genres = [
    "Travel & Exploration",
    "Literature & Fiction",
    "Philosophy & Buddhism",
    "Art & Photography",
    "Beat Generation",
    "Poetry",
    "History & Culture",
    "Mysteries & Noir",
  ];

  return (
    <section id="library" className="bg-[#EAD9B8] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section label */}
        <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-6">
          Camp Offering
        </p>

        {/* Rule */}
        <div className="w-16 border-t border-[#B85C38] mx-auto mb-10" />

        <h2 className="font-heading font-semibold uppercase tracking-[0.15em] text-[#1E120A] mb-6">
          The Lost Times Library
        </h2>

        <p className="font-body text-[#1E120A] text-base leading-loose max-w-2xl mx-auto mb-12">
          Named for a fictional Tangier newspaper that may or may not have
          existed, the Lost Times Library is exactly what it sounds like: a
          collection of books, freely given. Browse the shelves. Take what
          calls to you. Leave something behind if you like — though nothing is
          required. A book is a gift. We offer many.
        </p>

        {/* Genre grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#1E120A] mb-12">
          {genres.map((genre, i) => (
            <div
              key={genre}
              className={`font-heading uppercase tracking-widest text-xs text-[#1E120A] py-5 px-4 flex items-center justify-center text-center ${
                i % 4 !== 3 ? "border-r border-[#1E120A]" : ""
              } ${i < 4 ? "border-b border-[#1E120A]" : ""}`}
            >
              {genre}
            </div>
          ))}
        </div>

        {/* Checkout card detail */}
        <div className="max-w-sm mx-auto border-2 border-[#1E120A] p-8 mb-12 text-left">
          <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-4">
            Library Card
          </p>
          <div className="border-b border-dotted border-[#1E120A] pb-3 mb-4">
            <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-1">
              Name of Borrower
            </p>
            <p className="font-body text-[#1E120A]">You</p>
          </div>
          <div className="border-b border-dotted border-[#1E120A] pb-3 mb-4">
            <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-1">
              Book Selected
            </p>
            <p className="font-body text-[#1E120A] italic">Your choice</p>
          </div>
          <div>
            <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-1">
              Due Date
            </p>
            <p className="font-body text-[#1E120A]">Never.</p>
          </div>
        </div>

        <Button href="/join" variant="outline">
          Find Us on the Playa
        </Button>

        {/* Bottom rule */}
        <div className="border-t border-[#B85C38] mt-20" />
      </div>
    </section>
  );
}
