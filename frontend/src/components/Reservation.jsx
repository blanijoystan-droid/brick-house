"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  MapPin,
} from "lucide-react";

export default function Reservation() {
  return (
    <section
      id="reserve"
      className="bg-[#8b4530] px-6 py-28 text-[#f3eee5] md:px-12 md:py-40"
    >
      <div
        id="visit"
        className="mx-auto max-w-[1500px]"
      >

        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">

          <div>

            <p className="mb-7 text-xs uppercase tracking-[0.3em] text-white/60">
              05 — Come by
            </p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-6xl leading-[0.9] tracking-tight md:text-[9vw]"
            >
              Your table
              <br />
              is waiting.
            </motion.h2>

            <button className="group mt-12 inline-flex items-center gap-4 rounded-full bg-[#f3eee5] px-7 py-4 text-sm text-[#171614] transition duration-300 hover:bg-white">

              Reserve a table

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </button>

          </div>

          <div className="self-end border-t border-white/20 pt-8">

            <div className="mb-8 flex gap-5">

              <MapPin size={20} />

              <div>

                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/50">
                  Find us
                </p>

                <p className="font-display text-2xl">
                  24 Brick Lane
                  <br />
                  Your City, India
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <Clock size={20} />

              <div>

                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/50">
                  Opening hours
                </p>

                <p className="text-sm leading-7 text-white/80">
                  Monday — Friday · 7:30 AM — 10:30 PM
                  <br />
                  Saturday — Sunday · 8:00 AM — 11:30 PM
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}