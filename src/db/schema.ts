import { date, decimal, int, mysqlEnum, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core';

export const usersTable = mysqlTable('users', {
	id: int().primaryKey().autoincrement(),
	name: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull().unique(),
	password: varchar({ length: 255 }).notNull()
});

export const gamesTable = mysqlTable('games', {
	id: int().primaryKey().autoincrement(),
	name: varchar({ length: 255 }).notNull(),
	type: varchar({ length: 255 }).notNull(),
	description: text().notNull(),
	image_url: varchar({ length: 255 }).notNull(),
});

export const tournamentsTable = mysqlTable('tournaments', {
	id: int().primaryKey().autoincrement(),
	name: varchar({ length: 255 }).notNull(),
	type: varchar({ length: 255 }).notNull(),
	status: mysqlEnum(["pending", "progress", "finished"]).notNull(),
	duration: int().notNull(),
	entry_fee: decimal().notNull(),
	award_fee: decimal().notNull(),
	start_date: date().notNull(),
	game_id: int().references(() => gamesTable.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
	player_id: int().references(() => usersTable.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
});

export const tournamentPlayersTable = mysqlTable("tournament_players", {
	id: int().primaryKey().autoincrement(),
	tour_id: int().references(() => tournamentsTable.id, { onDelete: "cascade", onUpdate: "cascade" }),
	player_id: int().references(() => usersTable.id, { onDelete: "cascade", onUpdate: "cascade" })
})

export const contactTable = mysqlTable("contacts", {
	id: int().primaryKey().autoincrement(),
	name: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull(),
	message: text().notNull(),
});