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
