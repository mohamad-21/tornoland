CREATE TABLE `tournament_players` (
	`id` int AUTO_INCREMENT NOT NULL,
	`tour_id` int,
	`player_id` int,
	CONSTRAINT `tournament_players_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `tournament_players` ADD CONSTRAINT `tournament_players_tour_id_tournaments_id_fk` FOREIGN KEY (`tour_id`) REFERENCES `tournaments`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `tournament_players` ADD CONSTRAINT `tournament_players_player_id_users_id_fk` FOREIGN KEY (`player_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE cascade;