-- Create a school table
DROP TABLE IF EXISTS school;
CREATE TABLE school (
	`id` INTEGER PRIMARY KEY AUTOINCREMENT,
	`name` VARCHAR(64) NOT NULL,
	`url_source` VARCHAR(256) DEFAULT NULL,
	`url_school` VARCHAR(256) DEFAULT NULL
);
-- Capture school data
DROP TABLE IF EXISTS school_capture;
CREATE TABLE school_capture (
	`school_id` INTEGER,
	`batch` INTEGER,
	`applicants` INTEGER DEFAULT NULL,
	`acceptance_rate` INTEGER DEFAULT NULL,
	`sat_reading_lo` INTEGER(3) DEFAULT NULL,
	`sat_reading_hi` INTEGER(3) DEFAULT NULL,
	`sat_math_lo` INTEGER(3) DEFAULT NULL,
	`sat_math_hi` INTEGER(3) DEFAULT NULL,
	`sat_writing_lo` INTEGER(3) DEFAULT NULL,
	`sat_writing_hi` INTEGER(3) DEFAULT NULL,
	`act_lo` INTEGER(2) DEFAULT NULL,
	`act_hi` INTEGER(2) DEFAULT NULL,
	`selectivity_rating` INTEGER(3) DEFAULT NULL,
	`deadline_early` DATE DEFAULT NULL,
	`deadline_late` DATE DEFAULT NULL,
	`created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`school_id`, `batch`)
);