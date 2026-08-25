"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "SPECIALTY COFFEE",
    "FRESH BAKES",
    "SLOW MORNINGS",
    "GOOD MUSIC",
    "GOOD PEOPLE",
  ];

  return (
    <section className="overflow-hidden border-b border-white/10 bg-[#171614] py-5 text-[#f3eee5]">

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
        className="flex w-max gap-10"
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-10 whitespace-nowrap text-xs tracking-[0.3em]"
          >
            {item}

            <span className="text-[#8b4530]">
              ✦
            </span>
          </div>
        ))}
      </motion.div>

    </section>
  );
}