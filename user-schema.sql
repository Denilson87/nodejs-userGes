CREATE TABLE `usermannage`.`user` ( `id` INT NOT NULL AUTO_INCREMENT , `first_name` VARCHAR(50) NOT NULL , `Last_name` VARCHAR(50) NOT NULL , `email` VARCHAR(50) NOT NULL , `phone` VARCHAR(50) NOT NULL , `comments` TEXT NOT NULL , `status` VARCHAR(200) NOT NULL DEFAULT 'active' , PRIMARY KEY (`id`)) ENGINE = InnoDB;