import { getToursWithAvatar } from "@/actions";
import GamesList from "@/components/GamesList";
import Hero from "@/components/Hero";
import TourList from "@/components/TourList";
import { db } from "@/db";
import { gamesTable } from "@/db/schema";

export default async function Home() {
  const games = await db.select().from(gamesTable).limit(4);
  const tours = await getToursWithAvatar(4);

  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <TourList tours={tours} limited />
      <GamesList games={games} limited />
    </div>
  )
}
