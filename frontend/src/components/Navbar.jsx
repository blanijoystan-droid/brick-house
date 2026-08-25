"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Story", "#story"],
    ["Menu", "#menu"],
    ["Experience", "#experience"],
    ["Visit", "#visit"],
  ];

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-8 md:py-5">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between rounded-full border border-white/20 bg-black/25 px-5 py-3 text-white shadow-lg backdrop-blur-xl md:px-7">

          <a
            href="#"
            className="font-display text-xl tracking-tight md:text-2xl"
          >
            BRICK HOUSE
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="text-[11px] uppercase tracking-[0.2em] text-white/75 transition duration-300 hover:text-white"
              >
                {name}
              </a>
            ))}

            <a
              href="#reserve"
              className="rounded-full bg-white px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] text-black transition duration-300 hover:bg-[#e9e1d4]"
            >
              Reserve
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-20 z-40 rounded-3xl bg-[#171614] p-7 text-white shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {links.map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl"
                >
                  {name}
                </a>
              ))}

              <a
                href="#reserve"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-white px-5 py-3 text-center text-sm text-black"
              >
                Reserve a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}