CREATE TABLE `blogs`.`blog` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `auto_generated` TINYINT NOT NULL,
  `topic` LONGTEXT NULL,
  `generated` LONGTEXT NULL,
  `written` LONGTEXT NULL COMMENT '	',
  PRIMARY KEY (`id`));

ALTER TABLE `blogs`.`blog` 
ADD COLUMN `created_date` DATETIME NULL AFTER `written`,
ADD COLUMN `created_by` VARCHAR(45) NULL AFTER `created_date`,
ADD COLUMN `is_active` VARCHAR(45) NULL AFTER `created_by`;

CREATE TABLE `blogs`.`categories` (
  `id` INT GENERATED ALWAYS AS (),
  `category` VARCHAR(45) NOT NULL,
  `created_by` VARCHAR(45) NULL,
  `created_date` DATETIME NOT NULL,
  `is_active` TINYINT NULL,
  PRIMARY KEY (`id`));