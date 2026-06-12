"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Edit events here, the first entry renders as the featured card.
const EVENTS = [
  {
    title: "Evening with Bhutan",
    date: "May 2026",
    location: "Bangkok",
    description:
      "100+ founders, executives, and government and embassy officials at our first gathering, Bangkok, May 2026.",
  },
];

const EVENT_PHOTOS = [
  { src: "/ewb-2026-1.jpg", alt: "Guests toasting at a BHTCC gathering in Bangkok" },
  { src: "/ewb-2026-2.jpg", alt: "A full room at a BHTCC community event" },
  { src: "/ewb-2026-3.jpg", alt: "Members and guests at a BHTCC event in Bangkok" },
];

export default function Events() {
  return (
    <section id="events" className="pt-20 lg:pt-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-0.5" style={{ backgroundColor: "#E1A101" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#E1A101" }}>
              What We Deliver
            </span>
            <span className="w-6 h-0.5" style={{ backgroundColor: "#E1A101" }} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight" style={{ color: "#4D7084" }}>
            Networking Events
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Curated gatherings in Bangkok and Thimphu, where the Bhutan-Thailand community actually meets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          {EVENTS.map((event) => (
            <div
              key={event.title}
              className="rounded-3xl p-6 md:p-10 text-center"
              style={{ backgroundColor: "#EEDFC0" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#E1A101" }}>
                Our First Gathering · {event.date} · {event.location}
              </p>
              <h3 className="text-2xl font-extrabold mb-3" style={{ color: "#4D7084" }}>
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto mb-6">
                {event.description}
              </p>

              <div className="grid grid-cols-3 gap-2 md:gap-3 mb-2">
                {EVENT_PHOTOS.map((photo) => (
                  <Image
                    key={photo.src}
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={533}
                    className="rounded-xl object-cover w-full h-24 sm:h-36 md:h-44"
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500 mb-7">From our 2026 gatherings in Bangkok</p>

              <p className="text-sm font-semibold mb-5" style={{ color: "#4D7084" }}>
                The next gathering is announced to the list first.
              </p>
              <a
                href="/join"
                className="inline-flex items-center px-7 py-3 rounded-full text-sm font-semibold text-white shadow transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                style={{ backgroundColor: "#E1A101" }}
              >
                Get Invited to the Next One
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
