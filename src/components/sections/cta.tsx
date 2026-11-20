"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section
      id="invite"
      className="relative isolate py-28 lg:py-40 border-t border-line/60 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg to-black" />
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow-pearl blur-[150px]" />
      </div>

      <div className="container-narrow">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="h-eyebrow justify-center text-center mb-7"
        >
          <span className="h-px w-6 bg-ink-dim" /> Available on the App Store
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center font-sans text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.98] tracking-tight-3 font-bold text-ink text-balance"
        >
          Your attention. Your time. Your move.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mx-auto mt-7 max-w-[50ch] text-center text-[17px] leading-[1.55] text-ink-muted text-pretty"
        >
          WakeApp is free to download on the App Store. Set up your first
          routine in a few minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-10 flex flex-col items-center"
        >
          <Button href={site.appStore} size="lg" variant="primary">
            <span>Download on the App Store</span>
            <ArrowRight className="h-4 w-4" />
          </Button>

          <p className="mt-6 text-center text-[12px] text-ink-dim font-mono tracking-wide">
            iPhone · iPad · iOS 16 or later · Free to download
          </p>
        </motion.div>
      </div>
    </section>
  );
}
