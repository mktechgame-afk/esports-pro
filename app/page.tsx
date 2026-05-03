import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* ================= BGMI STYLE BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>

        {/* Glow Effects */}
        <div className="absolute top-[-200px] left-[-100px] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-yellow-400/15 blur-3xl rounded-full"></div>

        <div className="absolute bottom-[-250px] right-[-150px] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-orange-500/15 blur-3xl rounded-full"></div>

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        ></div>

      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="relative z-20 flex items-center justify-between px-4 md:px-12 py-5 border-b border-white/10 backdrop-blur-xl bg-black/30">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="relative">
            <Image
              src="/logo.JPG"
              alt="4 Wings Esport"
              width={55}
              height={55}
              className="rounded-xl border border-yellow-400 shadow-[0_0_25px_rgba(255,204,0,0.4)]"
            />

            <div className="absolute inset-0 rounded-xl border border-yellow-400/40 animate-pulse"></div>
          </div>

          <div>
            <h1 className="text-lg sm:text-2xl font-black tracking-wide text-yellow-400">
              4 Wings Esport
            </h1>

            <p className="text-zinc-400 text-[10px] sm:text-xs tracking-[3px] uppercase">
              Elite Gaming
            </p>
          </div>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
          <a href="/" className="hover:text-yellow-400 transition">Home</a>
          <a href="/events" className="hover:text-yellow-400 transition">Events</a>
          <a href="/leaderboard" className="hover:text-yellow-400 transition">Leaderboard</a>
          <a href="/teams" className="hover:text-yellow-400 transition">Teams</a>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden border border-yellow-400/30 px-4 py-2 rounded-xl text-sm">
          Menu
        </button>

      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20 md:pt-28 pb-24 md:pb-36">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 rounded-full text-yellow-300 text-[10px] sm:text-sm tracking-[3px] uppercase backdrop-blur-md">
          #1 Esports Tournament Platform
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-none max-w-7xl">

          PLAY.
          <br />

          <span className="text-yellow-400 drop-shadow-[0_0_30px_rgba(255,204,0,0.4)]">
            COMPETE.
          </span>

          <br />

          DOMINATE.
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-sm sm:text-lg md:text-2xl text-zinc-400 leading-7 md:leading-9">
          Join high-level BGMI, Valorant and Free Fire tournaments.
          Track live rankings, teams and competitive esports action.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full sm:w-auto">

          <a
            href="/events"
            className="w-full sm:w-auto bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black text-base md:text-lg hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(255,204,0,0.35)]"
          >
            Explore Tournaments
          </a>

          <a
            href="/leaderboard"
            className="w-full sm:w-auto border border-yellow-400/40 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl text-base md:text-lg hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            Live Rankings
          </a>

        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 mt-16 md:mt-24 w-full max-w-6xl">

          {[
            {
              number: "50+",
              label: "Tournaments",
            },
            {
              number: "10K+",
              label: "Players",
            },
            {
              number: "₹25L+",
              label: "Prize Pool",
            },
            {
              number: "24/7",
              label: "Live Action",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-8"
            >
              <h2 className="text-3xl md:text-5xl font-black text-yellow-400">
                {item.number}
              </h2>

              <p className="mt-2 md:mt-3 text-zinc-400 uppercase tracking-wider text-[10px] md:text-sm">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* ================= FEATURED SECTION ================= */}
      <section className="relative z-10 px-4 md:px-14 pb-20 md:pb-28">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10 md:mb-12">

          <div>
            <p className="text-yellow-400 uppercase tracking-widest text-xs md:text-sm">
              Competitive Events
            </p>

            <h2 className="mt-2 md:mt-3 text-3xl md:text-5xl font-black">
              Featured Tournaments
            </h2>
          </div>

          <a
            href="/events"
            className="text-yellow-400 hover:underline text-sm"
          >
            View All Events
          </a>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {[
            {
              status: "LIVE NOW",
              game: "BGMI",
              title: "BGMI Pro League",
              desc: "High-intensity custom room battles featuring top esports organizations.",
              prize: "₹5,00,000",
              color: "yellow",
            },
            {
              status: "UPCOMING",
              game: "Valorant",
              title: "Valorant Masters",
              desc: "Tactical competitive gaming with elite squads and strategy.",
              prize: "₹10,00,000",
              color: "blue",
            },
            {
              status: "SOON",
              game: "Free Fire",
              title: "Free Fire Clash",
              desc: "Battle royale esports action with aggressive gameplay.",
              prize: "₹2,00,000",
              color: "green",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 md:p-8 hover:border-yellow-400/60 hover:-translate-y-2 transition duration-500 overflow-hidden relative"
            >

              <div className="relative z-10">

                <div className="flex items-center justify-between">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    {card.status}
                  </span>

                  <span className="text-zinc-500 uppercase text-xs tracking-wider">
                    {card.game}
                  </span>
                </div>

                <h3 className="mt-6 text-3xl md:text-4xl font-black leading-tight">
                  {card.title}
                </h3>

                <p className="mt-4 text-zinc-400 leading-7 text-sm md:text-base">
                  {card.desc}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider">
                      Prize Pool
                    </p>

                    <h4 className="text-yellow-400 text-2xl md:text-3xl font-black mt-2">
                      {card.prize}
                    </h4>
                  </div>

                  <a
                    href="/events"
                    className="bg-yellow-400 text-black px-5 py-3 rounded-xl font-bold hover:scale-105 transition text-sm"
                  >
                    Join
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 border-t border-white/10 py-8 md:py-10 text-center text-zinc-500 text-xs md:text-sm backdrop-blur-xl bg-black/30">
        © 2026 4 Wings Esport. All Rights Reserved.
      </footer>

    </main>
  );
}