export default function GetInTouch() {
  return (
    <section style={{ backgroundColor: "#EEDFC0" }} className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-black mb-3" style={{ color: "#4D7084" }}>
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-7">
          Questions, partnerships, or just curious? Write to us at{" "}
          <a
            href="mailto:contact@bhutanthailandchamber.org"
            className="font-semibold underline underline-offset-4"
            style={{ color: "#4D7084" }}
          >
            contact@bhutanthailandchamber.org
          </a>{" "}
          or{" "}
          <a href="/contact" className="font-semibold underline underline-offset-4" style={{ color: "#4D7084" }}>
            use the contact form
          </a>
          .
        </p>
        <a
          href="/join"
          className="inline-flex items-center px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
          style={{ backgroundColor: "#4D7084" }}
        >
          Get Event Invitations
        </a>
      </div>
    </section>
  );
}
