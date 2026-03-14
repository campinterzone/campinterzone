export default function Gifting() {
  return (
    <section id="gifting" className="bg-[#EAD9B8] py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section label */}
        <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-6">
          Our Philosophy
        </p>

        {/* Rule */}
        <div className="w-16 border-t border-[#B85C38] mx-auto mb-10" />

        <h2 className="font-heading font-semibold uppercase tracking-[0.15em] text-[#1E120A] mb-10">
          The Gift
        </h2>

        {/* Large quote */}
        <blockquote className="border-l-4 border-[#B85C38] pl-8 text-left mb-12">
          <p className="font-body text-[#1E120A] text-lg leading-loose italic">
            &ldquo;The economy of the Interzone is the economy of the gift.
            Nothing is for sale here. Everything is offered without
            expectation of return. You are not a customer. You are not a
            visitor. You are a guest — and a guest, in Tangier as on the
            playa, is sacred.&rdquo;
          </p>
        </blockquote>

        <p className="font-body text-[#1E120A] leading-loose mb-8">
          The books in our library are yours to keep. The beer at Loud Hours
          is poured with no tab attached. The workshops cost nothing. This is
          not a promotional strategy. It is how we understand our presence on
          the playa — and, perhaps, in the world.
        </p>

        <p className="font-body text-[#1E120A] leading-loose">
          Burning Man&#39;s gift economy is not a new idea; it is an old one,
          recovered. In Tangier&#39;s cafés, hospitality was the first
          principle. We try to practice the same.
        </p>

        {/* Bottom rule */}
        <div className="border-t border-[#B85C38] mt-20" />
      </div>
    </section>
  );
}
