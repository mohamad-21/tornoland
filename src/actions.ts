"use server";

import { db } from "@/db";
import { gamesTable, tournamentPlayersTable, tournamentsTable, usersTable } from "./db/schema";
import { and, desc, eq } from "drizzle-orm";
import { signIn, signOut } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function loginWithCredentials(formData: FormData) {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	const [user] = await db.select().from(usersTable).where(
		and(
			eq(usersTable.email, email),
			eq(usersTable.password, password)
		)
	);

	if (!user) {
		return { err: "ایمیل یا رمزعبور معتبر نیست." }
	}

	revalidatePath("/");
	await signIn("credentials", { email, password, redirectTo: "/" });
}

export async function logout() {
	await signOut({ redirectTo: "/login" });
}

export async function joinToTour({ tour_id, player_id }: { tour_id: number, player_id: number }) {
	await db.insert(tournamentPlayersTable).values({ tour_id, player_id });
}

export async function getToursWithAvatar(limit?: number) {
	const tours = await db.select().from(tournamentsTable).innerJoin(gamesTable, eq(tournamentsTable.game_id, gamesTable.id)).orderBy(desc(tournamentsTable.id)).limit(limit ? 4 : undefined)
		.then(res => res.map(tour => {
			return {
				...tour.tournaments,
				image_url: tour.games.image_url
			}
		})
		);
	return tours;
}