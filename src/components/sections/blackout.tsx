"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldOff } from "lucide-react";

export function Blackout() {
  return (
    <section
      id="blackout"
      className="relative isolate py-28 lg:py-36 border-t border-line/60 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-black/95 to-bg" />
      </div>

      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Real Blackout screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[360px]"
          >
            <div className="relative aspect-[1206/2622] overflow-hidden rounded-[42px] border border-line bg-black shadow-elevated">
              <Image
                src="/screenshots/blackout.png"
                alt="Blackout Active — 14:53 remaining, all apps and websites locked"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-contain"
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[60px] bg-glow-pearl blur-3xl"
            />
          </motion.div>

          <div className="order-first lg:order-last">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="h-eyebrow mb-7"
            >
              <span className="h-px w-6 bg-ink-dim" /> Blackout Mode
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="h-section text-balance"
            >
              Blackout mode. No exits.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lead mt-6"
            >
              A higher gear of discipline. Apps and websites lock for the full
              session. Asking to leave starts a ten-minute countdown: keep
              your eyes on the timer, because switching apps or locking your
              screen starts it over. Built for the days you need to prove
              something to yourself.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-line bg-surface/60 px-5 py-4"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-ink/10 text-ink">
                <ShieldOff className="h-4 w-4" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">
                  Protected sprint
                </p>
                <p className="text-[14px] text-ink">
                  Stricter controls. Stronger commitment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
