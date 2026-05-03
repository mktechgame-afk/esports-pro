export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-400">
        Upcoming Events
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
          <h2 className="text-2xl font-bold">
            BGMI Pro League
          </h2>

          <p className="mt-4 text-gray-400">
            Starts: 20 June 2026
          </p>

          <p className="mt-2 text-yellow-400">
            Prize Pool: ₹5,00,000
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
          <h2 className="text-2xl font-bold">
            Valorant Clash
          </h2>

          <p className="mt-4 text-gray-400">
            Starts: 10 July 2026
          </p>

          <p className="mt-2 text-yellow-400">
            Prize Pool: ₹10,00,000
          </p>
        </div>

      </div>

    </main>
  );
}