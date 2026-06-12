// Edit these proof points in one place, they render as a slim bar under the hero.
const PROOF_POINTS = [
  "100+ leaders at Evening with Bhutan · Bangkok, May 2026",
  "Founding board of five across Bhutan and Thailand",
  "Network spanning Bangkok and Thimphu",
];

export default function ProofBar() {
  return (
    <div style={{ backgroundColor: "#4D7084" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ul className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 sm:divide-x sm:divide-white/20 text-center">
          {PROOF_POINTS.map((point) => (
            <li
              key={point}
              className="text-xs sm:text-sm font-medium tracking-wide px-5"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
