"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section
      id="story"
      className="noise bg-[#f3eee5] px-6 py-28 md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-[1500px]">

        <div className="mb-20 grid gap-8 md:grid-cols-[1fr_2fr]">

          <p className="text-xs uppercase tracking-[0.3em] text-[#716b62]">
            01 — Our story
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl leading-[0.95] tracking-tight md:text-8xl"
          >
            A little corner
            <br />
            <span className="italic">
              worth staying for.
            </span>
          </motion.h2>

        </div>

        <div className="grid gap-12 md:grid-cols-2 md:items-end">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="image-hover relative aspect-[4/5]"
          >
            <Image
              src="/images/cafe-interior.png"
              
              alt="Brick House interior"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="max-w-xl pb-5 md:pl-10">

            <p className="font-display text-3xl leading-tight md:text-5xl">
              We believe the best cafés aren't just places
              to drink coffee. They're places where life happens.
            </p>

            <p className="mt-8 text-sm leading-7 text-[#716b62]">
              Brick House was created around a simple idea —
              create a warm, beautiful space where exceptional
              coffee, thoughtful food and genuine hospitality
              come together.
            </p>

            <div className="mt-10 flex gap-12 border-t border-black/10 pt-7">

              <div>
                <div className="font-display text-3xl">
                  08+
                </div>

                <div className="mt-1 text-xs uppercase tracking-widest text-[#716b62]">
                  Signature dishes
                </div>
              </div>

              <div>
                <div className="font-display text-3xl">
                  07:30
                </div>

                <div className="mt-1 text-xs uppercase tracking-widest text-[#716b62]">
                  We open
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}