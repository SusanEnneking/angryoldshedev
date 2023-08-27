CREATE TABLE `blogs`.`blog` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `auto_generated` TINYINT NOT NULL,
  `topic` LONGTEXT NULL,
  `generated` LONGTEXT NULL,
  `written` LONGTEXT NULL COMMENT '	',
  PRIMARY KEY (`id`));