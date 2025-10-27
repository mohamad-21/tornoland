import { db } from "@/db";
import { gamesTable, tournamentPlayersTable, tournamentsTable, usersTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq, inArray } from "drizzle-orm";
import { notFound } from "next/navigation";
import TourData from "./TourData";

type Props = {
	params: Promise<{ id: string }>
}

export default async function Tour({ params }: Props) {
	const sess = await auth();
	const { id } = await params;
	const [tour] = await db.select().from(tournamentsTable).where(eq(tournamentsTable.id, Number(id)));
	if (!tour) notFound();

	const [game] = await db.select().from(gamesTable).where(eq(gamesTable.id, tour.game_id));

	let tourPlayers: typeof usersTable.$inferSelect[] = [];
	const tourPlayersId = (await db.select().from(tournamentPlayersTable).where(eq(tournamentPlayersTable.tour_id, tour.id)))?.map(tourPlayers => {
		return tourPlayers.player_id
	});

	if (tourPlayersId.length > 0) {
		tourPlayers = await db.select().from(usersTable).where(inArray(usersTable.id, tourPlayersId));
	}

	let user: typeof usersTable.$inferSelect | null = null;

	if (sess?.user) {
		[user] = await db.select().from(usersTable).where(eq(usersTable.email, sess?.user?.email!));
	}
	const userIsJoined = tourPlayers.some(player => player.id === user?.id);

	return (
		<TourData params={params} user={user} tour={tour} game={game} tourPlayers={tourPlayers} userIsJoined={userIsJoined} />
	)
}
