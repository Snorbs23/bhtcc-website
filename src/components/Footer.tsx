export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1B4F72" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left — Logo */}
          <div>
            {/* TODO: Replace with <Image src="/logo.png" /> when logo is available */}
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-extrabold text-white tracking-wide">
                BHTCC
              </span>
              <span className="text-xs font-medium mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                Bhutan-Thai Chamber of Commerce
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Fostering bilateral trade and investment between Bhutan and Thailand.
            </p>
          </div>

          {/* Center — Copyright */}
          <div className="text-center">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              © 2025 Bhutan-Thai Chamber of Commerce.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Right — Nav links */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start md:items-end gap-3 md:text-right">
            {[
              { label: "About", href: "#about" },
              { label: "Membership", href: "#membership" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom divider + fine print */}
        <div
          className="mt-10 pt-6 border-t text-center"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            Registered under the laws of the Kingdom of Bhutan. All membership applications are subject to Board approval.
          </p>
        </div>
      </div>
    </footer>
  );
}
