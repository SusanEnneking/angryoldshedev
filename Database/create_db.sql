CREATE DATABASE blogs;

-- Deciding to rebuild the tables from scratch when something changes until schema is in use
-- Also changing table names to singular based on advice in this stack overflow article
-- https://stackoverflow.com/questions/338156/table-naming-dilemma-singular-vs-plural-names
CREATE TABLE `blogs`.`blog` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `body_id` INT UNSIGNED NOT NULL,
  `auto_generated` TINYINT NOT NULL,
  `topic` LONGTEXT NULL,
  `title` LONGTEXT NULL,
  `question_posed_to_open_ai` LONGTEXT NULL COMMENT '	',
  `created_date` DATETIME NULL,
  `created_by` VARCHAR(45) NULL,
  `is_active` TINYINT NOT NULL,
  `category_id` INT UNSIGNED NULL,
  `image_url` TEXT NULL,
  `image_text` TEXT NULL,
   PRIMARY KEY (`id`));

CREATE TABLE `blogs`.`category` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) NOT NULL,
  `created_by` VARCHAR(45) NOT NULL,
  `created_date` DATETIME NOT NULL,
  `is_active` TINYINT NOT NULL,
  PRIMARY KEY (`id`));

-- this stack overflow article suggests that blobs and text columns should be stored separately since
-- there's a field length calclulation performance hit with these types
-- https://stackoverflow.com/questions/5458376/what-column-data-type-should-i-use-for-storing-large-amounts-of-text-or-html
CREATE TABLE `blogs`.`blog_body` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `body` TEXT,
  PRIMARY KEY (`id`));

USE blogs;

INSERT INTO category (category, created_by, created_date, is_active)
VALUES ('Culture', 'init', curdate(), 1);

INSERT INTO category (category, created_by, created_date, is_active)
VALUES ('Technical', 'init', curdate(), 1);

INSERT INTO category (category, created_by, created_date, is_active)
VALUES ('Inclusion', 'init', curdate(), 1);

INSERT INTO category (category, created_by, created_date, is_active)
VALUES ('Random Rant', 'init', curdate(), 1);

INSERT INTO category (category, created_by, created_date, is_active)
VALUES ('Introduction', 'Susan', curdate(), 1);

INSERT INTO blog_body (body)
VALUES ("This is what I have to say about culture.");

INSERT INTO blog_body (body)
VALUES ("This is what I have to say about technical topics.");

INSERT INTO blog_body (body)
VALUES ("This is what I have to say about inclusion.");

INSERT INTO blog_body (body)
VALUES ("This is what I have to say about stuff I like to rant about.");

INSERT INTO blog_body (body)
VALUES ("Hi.  I'm Susan, the angry old she dev.  On most days, though, I'm not angry. On Most days, I'm thankful to be a Software Engineer.");

INSERT INTO blog (body_id, auto_generated, topic, title, question_posed_to_open_ai, created_date, created_by, is_active, category_id, image_url, image_text)
VALUES (1, 0, "Culture Topic", "A culture Blog", "Well written culture question.", curdate(), 'init', 1, 1, 'https://source.unsplash.com/random?wallpapers', 'Thank you unsplash!');

INSERT INTO blog (body_id, auto_generated, topic, title, question_posed_to_open_ai, created_date, created_by, is_active, category_id, image_url, image_text)
VALUES (2, 0, "Technical Topic", "A Technical Blog", "Well written technical question.", curdate(), 'init', 1, 2, 'https://source.unsplash.com/random?wallpapers', 'Thank you unsplash!');

INSERT INTO blog (body_id, auto_generated, topic, title, question_posed_to_open_ai, created_date, created_by, is_active, category_id, image_url, image_text)
VALUES (3, 0, "Inclusion Topic", "An Inclusion Blog", "Well written inclusion question.", curdate(), 'init', 1, 3, 'https://source.unsplash.com/random?wallpapers', 'Thank you unsplash!');

INSERT INTO blog (body_id, auto_generated, topic, title, question_posed_to_open_ai, created_date, created_by, is_active, category_id, image_url, image_text)
VALUES (4, 0, "Random Rant Topic", "A Random Rant--My Specialty", "Well written random rant question.", curdate(), 'init', 1, 4, 'https://source.unsplash.com/random?wallpapers', 'Thank you unsplash!');

INSERT INTO blog (body_id, auto_generated, topic, title, question_posed_to_open_ai, created_date, created_by, is_active, category_id, image_url, image_text)
VALUES (5, 0, "Introduction", "Welcome!", "Introduction", curdate(), 'init', 1, 5, 'https://source.unsplash.com/random?wallpapers', 'Thank you unsplash!');