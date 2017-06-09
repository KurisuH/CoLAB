CREATE TABLE `users` (
	`id` int NOT NULL AUTO_INCREMENT,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`surname` varchar(255) NOT NULL,
	`position` int(255) NOT NULL,
	`phone` varchar(255) NOT NULL,
	`birth_date` DATE NOT NULL,
	`gender` varchar(255) NOT NULL,
	`register_date` DATETIME(6) NOT NULL,
	`fax` varchar(255) NOT NULL,
	`location` varchar(255) NOT NULL,
	`avatar` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `position` (
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`permission_level` int(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `PostIt` (
	`id` int NOT NULL AUTO_INCREMENT,
	`author` int NOT NULL UNIQUE,
	`title` varchar(255) NOT NULL,
	`content_text` varchar(255),
	`content_image` varchar(255) UNIQUE,
	`clicks` int(255) NOT NULL DEFAULT '0',
	`answers` int(255) NOT NULL DEFAULT '0',
	`isPost` bool NOT NULL DEFAULT '1',
	`responseTo` int,
	`date` DATETIME NOT NULL,
	`lastModified` TIMESTAMP,
	PRIMARY KEY (`id`)
);

INSERT INTO position
VALUES (1, 'User', 1); 

ALTER TABLE `users` ADD CONSTRAINT `users_fk0` FOREIGN KEY (`position`) REFERENCES `position`(`id`);

ALTER TABLE `PostIt` ADD CONSTRAINT `PostIt_fk0` FOREIGN KEY (`author`) REFERENCES `users`(`id`);

