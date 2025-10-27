import GamesList from "@/components/GamesList";
import { db } from "@/db";
import { gamesTable } from "@/db/schema";

export default async function Tours() {
	const games = await db.select().from(gamesTable);

	return (
		<div className="flex flex-col gap-10">
			<GamesList games={games} />
		</div>
	)
}
