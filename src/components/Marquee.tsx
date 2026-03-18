export default function Marquee() {
  const items = [
    "Trade Facilitation",
    "Investment Access",
    "Bilateral Networking",
    "Market Entry",
    "Business Delegations",
  ];

  // Repeat 3x for seamless infinite loop
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden py-4"
      style={{ backgroundColor: "#EAF2F8" }}
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {repeatedItems.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-3 mx-6 text-sm font-semibold tracking-wide uppercase"
            style={{ color: "#1B4F72" }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#C9960C" }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
