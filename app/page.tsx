export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="flex flex-col md:flex-row items-center justify-between gap-5 px-4 sm:px-6 md:px-8 py-5 border-b border-zinc-800">

        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-yellow-400 text-center md:text-left">
          4Wings Esports
        </h1>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">

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

      {/* ================= HERO SECTION ================= */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20 sm:py-24 md:py-32">

        {/* Glow Effect */}
        <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] bg-yellow-400/20 blur-3xl rounded-full"></div>

        {/* Heading */}
        <h1 className="relative text-4xl sm:text-6xl md:text-8xl font-extrabold text-yellow-400 leading-tight">
          ESPORTS
          <br />
          ARENA
        </h1>

        {/* Description */}
        <p className="relative mt-6 max-w-2xl text-gray-300 text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
          The ultimate BGMI & esports tournament platform.
          Compete with the best teams and dominate the leaderboard.
        </p>

        {/* Buttons */}
        <div className="relative mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full sm:w-auto">

          <a
            href="/events"
            className="w-full sm:w-auto bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition text-center"
          >
            Explore Events
          </a>

          <a
            href="/leaderboard"
            className="w-full sm:w-auto border border-yellow-400 px-8 py-4 rounded-2xl hover:bg-yellow-400 hover:text-black transition text-center"
          >
            View Rankings
          </a>

        </div>
      </section>

      {/* ================= TOURNAMENT SECTION ================= */}
      <section className="px-4 sm:px-6 md:px-20 py-16 sm:py-20">

        <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400">
          Upcoming Tournaments
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-14">

          {/* Card 1 */}
          <div className="bg-zinc-900 p-5 sm:p-6 rounded-3xl border border-zinc-800 hover:border-yellow-400 transition">

            <h3 className="text-2xl font-bold">
              BGMI Championship
            </h3>

            <p className="text-gray-400 mt-3 text-sm sm:text-base">
              Starts: 20 June 2026
            </p>

            <p className="text-yellow-400 mt-4 font-semibold text-sm sm:text-base">
              Prize Pool: ₹5,00,000
            </p>

            <a
              href="/events"
              className="inline-block mt-6 bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold w-full text-center"
            >
              Register
            </a>

          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900 p-5 sm:p-6 rounded-3xl border border-zinc-800 hover:border-yellow-400 transition">

            <h3 className="text-2xl font-bold">
              Free Fire Clash
            </h3>

            <p className="text-gray-400 mt-3 text-sm sm:text-base">
              Starts: 05 July 2026
            </p>

            <p className="text-yellow-400 mt-4 font-semibold text-sm sm:text-base">
              Prize Pool: ₹2,00,000
            </p>

            <a
              href="/events"
              className="inline-block mt-6 bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold w-full text-center"
            >
              Register
            </a>

          </div>

          {/* Card 3 */}
          <div className="bg-zinc-900 p-5 sm:p-6 rounded-3xl border border-zinc-800 hover:border-yellow-400 transition">

            <h3 className="text-2xl font-bold">
              Valorant Masters
            </h3>

            <p className="text-gray-400 mt-3 text-sm sm:text-base">
              Starts: 15 July 2026
            </p>

            <p className="text-yellow-400 mt-4 font-semibold text-sm sm:text-base">
              Prize Pool: ₹10,00,000
            </p>

            <a
              href="/events"
              className="inline-block mt-6 bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold w-full text-center"
            >
              Register
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}