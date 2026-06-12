import CalendlyLink from "@/components/CalendlyLink";

const SUMMARY: { heading: string; items: { text: string; href?: string }[] }[] = [
  {
    heading: "What we do",
    items: [
      { text: "Curated networking events in Bangkok and Thimphu" },
      { text: "Trade facilitation between Bhutan and Thailand" },
      { text: "Cultural and artistic exchange between two Buddhist kingdoms" },
    ],
  },
  {
    heading: "Who it's for",
    items: [
      { text: "Founders and operators working across the corridor" },
      { text: "Investors exploring Bhutan and Thailand" },
      { text: "Artists and cultural organizers from both kingdoms" },
    ],
  },
  {
    heading: "How to get involved",
    items: [
      { text: "Join our list for event invitations and updates", href: "/join" },
      { text: "Register interest in the founding circle", href: "/membership" },
      { text: "Book an intro call with our team", href: "https://calendly.com/contact-bhutanthailandchamber/30min" },
    ],
  },
];

export default function Summary() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-12" style={{ color: "#4D7084" }}>
          BHTCC at a Glance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {SUMMARY.map((group) => (
            <div key={group.heading}>
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4 pb-3 border-b-2"
                style={{ color: "#E1A101", borderColor: "#E1A101" }}
              >
                {group.heading}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span
                      className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#E1A101" }}
                    />
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-gray-600 underline underline-offset-4 decoration-[#E1A101]/60 hover:text-[#4D7084]"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-600">{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Closing CTA, the last thing a scroller sees before the footer */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/join"
            className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold text-white shadow-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
            style={{ backgroundColor: "#E1A101" }}
          >
            Get Invited to Our Next Event
          </a>
          <CalendlyLink
            className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold border-2 transition-all duration-200 hover:bg-[#4D7084] hover:text-white"
            style={{ color: "#4D7084", borderColor: "#4D7084" }}
          >
            Book an Intro Call
          </CalendlyLink>
        </div>
      </div>
    </section>
  );
}
