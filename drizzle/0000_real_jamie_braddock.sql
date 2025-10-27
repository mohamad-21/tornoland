CREATE TABLE `games` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`type` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`image_url` varchar(255) NOT NULL,
	CONSTRAINT `games_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `tournaments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`type` varchar(255) NOT NULL,
	`status` enum('pending','progress','finished') NOT NULL,
	`duration` int NOT NULL,
	`entry_fee` decimal NOT NULL,
	`award_fee` decimal NOT NULL,
	`start_date` date NOT NULL,
	`game_id` int NOT NULL,
	`player_id` int NOT NULL,
	CONSTRAINT `tournaments_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `tournaments` ADD CONSTRAINT `tournaments_game_id_games_id_fk` FOREIGN KEY (`game_id`) REFERENCES `games`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `tournaments` ADD CONSTRAINT `tournaments_player_id_users_id_fk` FOREIGN KEY (`player_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE cascade;