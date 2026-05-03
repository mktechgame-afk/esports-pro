async function getLeaderboard() {
  const res = await fetch(
    "https://opensheet.elk.sh/1WD4uEfx7Hi5-EoB4H8by9x2yeiLCz7lLAbBKdBuTL_4/Leaderboard",
    {
      next: { revalidate: 0 },
    }
  );

  return res.json();
}

export default async function LeaderboardPage() {
  const data = await getLeaderboard();

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-400">
        Leaderboard
      </h1>

      <div className="mt-10 overflow-x-auto">

        <table className="w-full border border-zinc-800">

          <thead className="bg-zinc-900">
            <tr>
              <th className="p-4 text-left">Rank</th>
              <th className="p-4 text-left">Player</th>
              <th className="p-4 text-left">Kills</th>
              <th className="p-4 text-left">Points</th>
            </tr>
          </thead>

          <tbody>

            {data.map((player: any, index: number) => (
              <tr
                key={index}
                className="border-t border-zinc-800"
              >
                <td className="p-4">{player.Rank}</td>
                <td className="p-4">{player.Player}</td>
                <td className="p-4">{player.Kills}</td>
                <td className="p-4">{player.Points}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}