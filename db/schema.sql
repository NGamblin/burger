CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
burger_id int NOT NULL AUTO_INCREMENT,
burger_name varchar(256) NOT NULL,
devoured boolean default false, 
PRIMARY KEY (id)
);


