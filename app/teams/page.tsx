async function getTeams() {
  const res = await fetch(
    "https://opensheet.elk.sh/1WD4uEfx7Hi5-EoB4H8by9x2yeiLCz7lLAbBKdBuTL_4/Teams",
    {
      next: { revalidate: 0 },
    }
  );

  return res.json();
}

export default async function TeamsPage() {
  const data = await getTeams();

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-400">
        Teams
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        {data.map((team: any, index: number) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:border-yellow-400 transition"
          >

            <h2 className="text-2xl font-bold">
              {team.Team}
            </h2>

            <p className="mt-3 text-gray-400">
              Country: {team.Country}
            </p>

            <p className="mt-2 text-yellow-400">
              Wins: {team.Wins}
            </p>

          </div>
        ))}

      </div>

    </main>
  );
}