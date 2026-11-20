"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const controls = [
  "Block individual apps via Apple's native picker",
  "Block specific websites and domains",
  "Global NSFW shield",
  "Schedule deliberate pauses",
  "On iPhone, your app and website selections and usage records stay on your device",
];

export function ScreenTime() {
  return (
    <section
      id="screen-time"
      className="relative py-28 lg:py-36 border-t border-line/60"
    >
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="h-eyebrow mb-7"
            >
              <span className="h-px w-6 bg-ink-dim" /> Screen Time Control
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="h-section text-balance"
            >
              Take your phone back from itself.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lead mt-6"
            >
              WakeApp uses Apple&apos;s Screen Time API to block apps and
              websites at the system level — not a workaround, not a browser
              extension. Real restrictions, deliberately hard to bypass.
            </motion.p>

            <ul className="mt-9 space-y-2.5">
              {controls.map((c, i) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.04 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-start gap-3 text-[14.5px] text-ink-muted"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-dim" />
                  <span>{c}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[340px]"
          >
            <div className="relative aspect-[1206/2622] overflow-hidden rounded-[42px] border border-line bg-black shadow-elevated">
              <Image
                src="/screenshots/screen-time.png"
                alt="Screen Time Control — blocked apps, blocked websites, NSFW shield, pause"
                fill
                sizes="(max-width: 1024px) 100vw, 340px"
                className="object-contain"
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[60px] bg-glow-mist blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
