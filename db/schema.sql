CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE `burgers`
(
id INTEGER NOT NULL AUTO_INCREMENT,
burger_name VARCHAR
(150),
devoured BOOLEAN,
primary key
(id)
  
);

