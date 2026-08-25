"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#171614] text-white">

      <Image
        src="/images/cafe-hero.png"
        alt="Brick House Cafe"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/30" />

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-10 md:px-12 md:pb-14">
        <div className="mx-auto w-full max-w-[1500px]">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/75"
          >
            <MapPin size={14} />
            Your neighbourhood, your second home
          </motion.div>

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_320px]">

            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[17vw] leading-[0.78] tracking-[-0.06em] md:text-[13vw]"
            >
              GOOD
              <br />
              <span className="italic">
                THINGS.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="max-w-sm"
            >
              <p className="mb-7 text-sm leading-7 text-white/75">
                Specialty coffee, honest food and a space designed
                for slow mornings, long conversations and everything
                in between.
              </p>

              <a
                href="#menu"
                className="group inline-flex items-center gap-3 border-b border-white/50 pb-2 text-xs uppercase tracking-[0.2em]"
              >
                Explore the menu

                <ArrowDownRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>
            </motion.div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden text-xs uppercase tracking-[0.25em] text-white/50 md:block">
        Est. 2024
      </div>

    </section>
  );
}