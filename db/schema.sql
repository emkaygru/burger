CREATE DATABASE burgers_db;

USE burgers_db;

create table burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name string,
    devoured boolean
)