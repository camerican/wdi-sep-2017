-- Sqlite Create Schema

-- User Table
CREATE TABLE user (
	`id` INTEGER PRIMARY KEY,
	`first` VARCHAR(64),
	`last` VARCHAR(64),
	`photo` VARCHAR(256),
	`slack` VARCHAR(32),
	`github` VARCHAR(32)
);
-- Payment Table
CREATE TABLE payment(
	`id` INTEGER PRIMARY KEY,
	`payer_id` INTEGER,
	`payee_id` INTEGER,
	`amount` DECIMAL(10,2),
	`created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY(`payer_id`) REFERENCES user(`id`),
	FOREIGN KEY(`payee_id`) REFERENCES user(`id`)
);