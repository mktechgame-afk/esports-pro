export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">

        <h1 className="text-2xl font-extrabold text-yellow-400">
          ESPORTS PRO
        </h1>

        <div className="flex gap-6 text-sm md:text-base">

          <a
            href="/"
            className="hover:text-yellow-400 transition"
          >
            Home
          </a>

          <a
            href="/events"
            className="hover:text-yellow-400 transition"
          >
            Tournaments
          </a>

          <a
            href="/leaderboard"
            className="hover:text-yellow-400 transition"
          >
            Leaderboard
          </a>

          <a
            href="/teams"
            className="hover:text-yellow-400 transition"
          >
            Teams
          </a>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32">

        {/* Glow Effect */}
        <div className="absolute w-[500px] h-[500px] bg-yellow-400/20 blur-3xl rounded-full"></div>

        <h1 className="relative text-6xl md:text-8xl font-extrabold text-yellow-400">
          ESPORTS ARENA
        </h1>

        <p className="relative mt-6 max-w-2xl text-gray-300 text-lg md:text-xl">
          The ultimate BGMI & esports tournament platform.
          Compete with the best teams and dominate the leaderboard.
        </p>

        {/* Buttons */}
        <div className="relative mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="/events"
            className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Explore Events
          </a>

          <a
            href="/leaderboard"
            className="border border-yellow-400 px-8 py-4 rounded-2xl hover:bg-yellow-400 hover:text-black transition"
          >
            View Rankings
          </a>

        </div>
      </section>

      {/* Tournament Section */}
      <section className="px-6 md:px-20 py-20">

        <h2 className="text-4xl font-bold text-center text-yellow-400">
          Upcoming Tournaments
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {/* Card 1 */}
          <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:border-yellow-400 transition">

            <h3 className="text-2xl font-bold">
              BGMI Championship
            </h3>

            <p className="text-gray-400 mt-3">
              Starts: 20 June 2026
            </p>

            <p className="text-yellow-400 mt-4 font-semibold">
              Prize Pool: ₹5,00,000
            </p>

            <a
              href="/events"
              className="inline-block mt-6 bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold"
            >
              Register
            </a>

          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:border-yellow-400 transition">

            <h3 className="text-2xl font-bold">
              Free Fire Clash
            </h3>

            <p className="text-gray-400 mt-3">
              Starts: 05 July 2026
            </p>

            <p className="text-yellow-400 mt-4 font-semibold">
              Prize Pool: ₹2,00,000
            </p>

            <a
              href="/events"
              className="inline-block mt-6 bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold"
            >
              Register
            </a>

          </div>

          {/* Card 3 */}
          <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:border-yellow-400 transition">

            <h3 className="text-2xl font-bold">
              Valorant Masters
            </h3>

            <p className="text-gray-400 mt-3">
              Starts: 15 July 2026
            </p>

            <p className="text-yellow-400 mt-4 font-semibold">
              Prize Pool: ₹10,00,000
            </p>

            <a
              href="/events"
              className="inline-block mt-6 bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold"
            >
              Register
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}