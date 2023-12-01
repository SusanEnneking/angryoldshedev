CREATE TABLE `blogs`.`category` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) NOT NULL,
  `created_by` VARCHAR(45) NOT NULL,
  `created_date` DATETIME NOT NULL,
  `is_active` TINYINT NOT NULL,
  PRIMARY KEY (`id`));