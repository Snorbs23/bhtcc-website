"use client";

import { track } from "@/lib/track";

const CALENDLY_URL = "https://calendly.com/contact-bhutanthailandchamber/30min";

export default function CalendlyLink({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={() => track("book_call_click")}
    >
      {children}
    </a>
  );
}
