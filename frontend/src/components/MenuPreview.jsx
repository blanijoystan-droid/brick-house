"use client";

import { motion } from "framer-motion";

const menuItems = [
  {
    category: "Coffee",
    items: [
      {
        name: "House Cappuccino",
        description: "Double espresso, silky milk, cacao",
        price: "₹190",
      },
      {
        name: "Flat White",
        description: "Espresso, textured milk",
        price: "₹210",
      },
      {
        name: "Honey Latte",
        description: "Espresso, steamed milk, wild honey",
        price: "₹230",
      },
      {
        name: "Cold Brew",
        description: "18-hour slow extraction",
        price: "₹220",
      },
    ],
  },

  {
    category: "Kitchen",
    items: [
      {
        name: "House Breakfast",
        description: "Eggs, sourdough, greens, roasted tomatoes",
        price: "₹420",
      },
      {
        name: "Mushroom Toast",
        description: "Wild mushrooms, cream cheese, herbs",
        price: "₹390",
      },
      {
        name: "Brick House Burger",
        description: "Smash patty, cheddar, house sauce",
        price: "₹480",
      },
      {
        name: "Truffle Fries",
        description: "Parmesan, herbs, truffle oil",
        price: "₹320",
      },
    ],
  },
];

export default function MenuPreview() {
  return (
    <section
      id="menu"
      className="bg-[#e9e1d4] px-6 py-28 md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-[1200px]">

        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#716b62]">
              02 — From the kitchen
            </p>

            <h2 className="font-display text-6xl tracking-tight md:text-8xl">
              The menu
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-[#716b62]">
            Simple ingredients. Thoughtful combinations.
            Everything made with a little more care.
          </p>

        </div>

        <div className="grid gap-20 md:grid-cols-2">

          {menuItems.map((section) => (
            <div key={section.category}>

              <h3 className="mb-8 border-b border-black/20 pb-4 font-display text-3xl italic">
                {section.category}
              </h3>

              <div>
                {section.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group border-b border-black/10 py-6"
                  >
                    <div className="flex items-start justify-between gap-5">

                      <div>
                        <h4 className="font-display text-2xl transition-transform duration-300 group-hover:translate-x-1">
                          {item.name}
                        </h4>

                        <p className="mt-2 text-sm text-[#716b62]">
                          {item.description}
                        </p>
                      </div>

                      <span className="whitespace-nowrap text-sm">
                        {item.price}
                      </span>

                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          ))}

        </div>

        <div className="mt-16 text-center">

          <button className="rounded-full border border-black px-8 py-4 text-xs uppercase tracking-[0.2em] transition duration-300 hover:bg-black hover:text-white">
            View full menu
          </button>

        </div>

      </div>
    </section>
  );
}