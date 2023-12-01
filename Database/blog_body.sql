-- this stack overflow article suggests that blobs and text columns should be stored separately since
-- theres a field length calclulation performance hit with these types
-- https://stackoverflow.com/questions/5458376/what-column-data-type-should-i-use-for-storing-large-amounts-of-text-or-html
CREATE TABLE `blogs`.`blog_body` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `body` TEXT,
  PRIMARY KEY (`id`));
