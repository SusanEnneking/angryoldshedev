CREATE DATABASE blogs;

-- Deciding to rebuild the tables from scratch when something changes until schema is in use
-- Also changing table names to singular based on advice in this stack overflow article
-- https://stackoverflow.com/questions/338156/table-naming-dilemma-singular-vs-plural-names
CREATE TABLE `blogs`.`blog` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `body_id` INT UNSIGNED NOT NULL,
  `auto_generated` TINYINT NOT NULL,
  `topic` LONGTEXT NULL,
  `generated` LONGTEXT NULL,
  `written` LONGTEXT NULL COMMENT '	',
  `created_date` DATETIME NULL,
  `created_by` VARCHAR(45) NULL,
  `is_active` TINYINT NOT NULL,
  `category_id` INT UNSIGNED NULL,
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

INSERT INTO blog_body (body)
VALUES ("This is what I have to say about culture.");

INSERT INTO blog_body (body)
VALUES ("This is what I have to say about technical topics.");

INSERT INTO blog_body (body)
VALUES ("This is what I have to say about inclusion.");

INSERT INTO blog_body (body)
VALUES ("This is what I have to say about stuff I like to rant about.");

INSERT INTO blog (body_id, auto_generated, topic, written, created_date, created_by, is_active, category_id)
VALUES (1, 0, "Culture Topic", "Well written culture question.", curdate(), 'init', 1, 1);

INSERT INTO blog (body_id, auto_generated, topic, written, created_date, created_by, is_active, category_id)
VALUES (2, 0, "Technical Topic", "Well written technical question.", curdate(), 'init', 1, 2);

INSERT INTO blog (body_id, auto_generated, topic, written, created_date, created_by, is_active, category_id)
VALUES (3, 0, "Inclusion Topic", "Well written inclusion question.", curdate(), 'init', 1, 3);

INSERT INTO blog (body_id, auto_generated, topic, written, created_date, created_by, is_active, category_id)
VALUES (4, 0, "Random Rant Topic", "Well written random rant question.", curdate(), 'init', 1, 4);