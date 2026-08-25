"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: "/images/cafe-hero.png",
    title: "The garden",
    className: "md:col-span-2",
  },
  {
    src: "/images/cafe-exterior.png",
    title: "After dark",
    className: "",
  },
  {
    src: "/images/cafe-interior.png",
    title: "Inside",
    className: "",
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#f3eee5] px-6 py-28 md:px-12 md:py-40">

      <div className="mx-auto max-w-[1500px]">

        <div className="mb-14 flex items-end justify-between">

          <div>

            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#716b62]">
              04 — Around here
            </p>

            <h2 className="font-display text-6xl md:text-8xl">
              Take a look.
            </h2>

          </div>

          <span className="hidden text-xs uppercase tracking-[0.2em] text-[#716b62] md:block">
            Scroll / Explore
          </span>

        </div>

        <div className="grid gap-5 md:grid-cols-3">

          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className={`image-hover relative aspect-square ${image.className}`}
            >

              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">

                <span className="text-sm text-white">
                  {image.title}
                </span>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}