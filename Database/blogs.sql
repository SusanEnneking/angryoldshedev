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

ALTER TABLE `blogs`.`blog` 
ADD COLUMN `category` INT NULL AFTER `is_active`;
