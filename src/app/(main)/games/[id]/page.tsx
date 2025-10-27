import TourList from "@/components/TourList";
import { db } from "@/db";
import { gamesTable, tournamentsTable } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{ id: string }>
}

export default async function Game({ params }: Props) {
	const { id } = await params;
	const [game] = await db.select().from(gamesTable).where(eq(gamesTable.id, Number(id)));
	if (!game) notFound();

	const tours = await db.select().from(tournamentsTable).where(eq(tournamentsTable.game_id, Number(id))).innerJoin(gamesTable, eq(tournamentsTable.game_id, gamesTable.id)).orderBy(desc(tournamentsTable.id))
		.then(res => res.map(tour => {
			return {
				...tour.tournaments,
				image_url: tour.games.image_url
			}
		})
		);

	return (
		<div className="flex flex-col gap-25">
			<div className="flex flex-col items-center gap-5">
				<img src={game.image_url} alt={game.name} width={200} />
				<div className="flex flex-col items-center gap-3">
					<h2 className="text-3xl">{game.name}</h2>
					<p className="text-zinc-400 uppercase">{game.type}</p>
				</div>
			</div>
			{tours?.length > 0 ? (
				<TourList tours={tours} />
			) : (
				<div>
					<h2 className="text-2xl">هنوز تورنومنتی برای این بازی برگزار نشده</h2>
				</div>
			)}
		</div>
	)
}
