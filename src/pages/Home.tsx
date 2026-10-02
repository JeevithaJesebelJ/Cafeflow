import Navbar from "../components/Navbar.tsx";
import { ArrowRight, CalendarDays, Coffee, UtensilsCrossed, Wifi } from "lucide-react";

const featuredItems = [
  {
    name: "Coffee",
    description: "Freshly brewed coffee and crafted favourites.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Food",
    description: "Comforting plates, bakes and dishes made to linger over.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Something sweet",
    description: "A little something to go with your coffee.",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-[#F6F1E8] text-[#3D392F]">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative isolate min-h-[78vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=2200&q=90"
            alt="Warm cafe interior with tables and natural light"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-[#2F382D]/45" />

          <div className="mx-auto flex min-h-[78vh] max-w-7xl items-end px-6 pb-16 pt-28 sm:px-10 lg:px-16 lg:pb-24">
            <div className="max-w-3xl text-[#FFFDF7]">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-[#DCE8D2]">
                CaféFlow · Jayanagar
              </p>

              <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-8xl">
                Good coffee.
                <br />
                Good food.
                <br />
                <span className="text-[#DDE8D3]">A place to stay awhile.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-[#F4F0E8] sm:text-lg">
                Come for the coffee, stay for the food, conversation and
                unhurried moments that make a café feel like your own place.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B9CDB0] px-7 py-3.5 text-sm font-semibold text-[#293126] transition hover:bg-[#D6E2CF]"
                >
                  Explore Menu
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#booking"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F4F0E8]/70 bg-[#FFFDF7]/10 px-7 py-3.5 text-sm font-semibold text-[#FFFDF7] backdrop-blur-sm transition hover:bg-[#FFFDF7]/20"
                >
                  <CalendarDays size={17} />
                  Book a Table
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#71856A]">
                The CaféFlow experience
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                A café made for slowing down.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#6A655B]">
                Whether you are meeting someone, grabbing your favourite
                coffee or settling in with your laptop, CaféFlow is designed
                to give you a little more room to stay.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <article className="group rounded-[2rem] border border-[#DCD5C7] bg-[#FBF8F1] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#B9CDB0]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DDE8D3] text-[#4E6247]">
                  <Coffee size={22} />
                </div>
                <h3 className="mt-7 font-serif text-3xl">Coffee</h3>
                <p className="mt-3 leading-7 text-[#6A655B]">
                  Thoughtfully crafted coffee for a slow morning, a quick
                  catch-up or a long afternoon.
                </p>
              </article>

              <article className="group rounded-[2rem] border border-[#DCD5C7] bg-[#FBF8F1] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#B9CDB0]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DDE8D3] text-[#4E6247]">
                  <UtensilsCrossed size={22} />
                </div>
                <h3 className="mt-7 font-serif text-3xl">Food</h3>
                <p className="mt-3 leading-7 text-[#6A655B]">
                  From comforting plates to freshly baked treats, there is
                  something worth lingering over.
                </p>
              </article>

              <article className="group rounded-[2rem] border border-[#DCD5C7] bg-[#FBF8F1] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#B9CDB0]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DDE8D3] text-[#4E6247]">
                  <Wifi size={22} />
                </div>
                <h3 className="mt-7 font-serif text-3xl">Work & Unwind</h3>
                <p className="mt-3 leading-7 text-[#6A655B]">
                  Need a little focus time? Selected work-friendly seating
                  can be reserved ahead of your visit.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Featured */}
        <section id="menu" className="bg-[#E7E3D7] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#71856A]">
                  From the kitchen
                </p>
                <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
                  Something for every mood.
                </h2>
              </div>

              <a
                href="/menu"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4E6247] transition hover:text-[#2F3C2C]"
              >
                View full menu
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {featuredItems.map((item) => (
                <article key={item.name} className="group overflow-hidden rounded-[2rem] bg-[#FBF8F1]">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-serif text-3xl">{item.name}</h3>
                    <p className="mt-2 leading-7 text-[#6A655B]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Workspace */}
        <section id="booking" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#53664D] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-8 text-[#FFFDF7] sm:p-12 lg:p-16">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#DDE8D3]">
                Work-friendly seating
              </p>

              <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                Make space for your work.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#E9E8DF]">
                Reserve a designated work-friendly table before you arrive
                and settle in without worrying about peak-hour availability.
                Other café seating remains available for normal walk-in
                customers.
              </p>

              <div className="mt-8">
                <a
                  href="/booking"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F6F1E8] px-7 py-3.5 text-sm font-semibold text-[#3D392F] transition hover:bg-white"
                >
                  Book a Table
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>

            <div className="min-h-[360px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=90"
                alt="Calm workspace with tables and natural light"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#DCD5C7] bg-[#F6F1E8] px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-3xl">CaféFlow</p>
            <p className="mt-2 text-sm text-[#6A655B]">Jayanagar, Bengaluru</p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-[#5B6655]">
            <a
  href="/menu"
  className="inline-flex items-center gap-2 text-sm font-semibold text-[#4E6247] transition hover:text-[#2F3C2C]"
>
  View full menu
  <ArrowRight size={16} />
</a>
            <a href="/booking" className="transition hover:text-[#2F3C2C]">
              Book a Table
            </a>
            <a href="/contact" className="transition hover:text-[#2F3C2C]">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Home;
