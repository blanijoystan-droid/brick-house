export default function Footer() {
  return (
    <footer className="bg-[#171614] px-6 py-10 text-[#f3eee5] md:px-12">

      <div className="mx-auto max-w-[1500px]">

        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-3">

          <div>

            <h2 className="font-display text-4xl">
              BRICK
              <br />
              <span className="italic">
                HOUSE.
              </span>
            </h2>

          </div>

          <div>

            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
              Follow along
            </p>

            <div className="flex gap-5 text-sm">

              <a
                href="#"
                className="transition hover:text-white/60"
              >
                Instagram
              </a>

              <a
                href="#"
                className="transition hover:text-white/60"
              >
                Facebook
              </a>

            </div>

          </div>

          <div>

            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
              Say hello
            </p>

            <a
              href="mailto:hello@brickhouse.com"
              className="text-sm underline underline-offset-4"
            >
              hello@brickhouse.com
            </a>

          </div>

        </div>

        <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-white/40 md:flex-row">

          <span>
            © 2026 Brick House
          </span>

          <span>
            Made with good coffee.
          </span>

        </div>

      </div>

    </footer>
  );
}