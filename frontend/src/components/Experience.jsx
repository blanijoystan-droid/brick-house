"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    title: "Slow mornings",
    image: "/images/cafe-interior.png",
  },
  {
    number: "02",
    title: "Long conversations",
    image: "/images/cafe-hero.png",
  },
  {
    number: "03",
    title: "Evenings that linger",
    image: "/images/cafe-exterior.png",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#171614] px-6 py-28 text-[#f3eee5] md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-[1500px]">

        <div className="mb-20">

          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
            03 — The experience
          </p>

          <h2 className="max-w-5xl font-display text-5xl leading-[0.95] md:text-8xl">
            Come for the coffee.
            <br />

            <span className="italic text-white/50">
              Stay for everything else.
            </span>
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {experiences.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className={index % 2 === 0 ? "md:mt-20" : ""}
            >

              <div className="image-hover relative aspect-[3/4]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="mt-5">

                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  {item.number}
                </span>

                <h3 className="mt-2 font-display text-3xl">
                  {item.title}
                </h3>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}