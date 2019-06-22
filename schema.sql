DROP DATABASE IF EXISTS restaurants;

CREATE DATABASE restaurants;

USE restaurants;

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  username VARCHAR(100),
  PRIMARY KEY(id)
);

CREATE TABLE places (
    id                INT AUTO_INCREMENT,
    name              VARCHAR(100),
    img               VARCHAR(250),
    location          VARCHAR(100),
    price             VARCHAR(10),
    PRIMARY KEY(id)
);

CREATE TABLE preferances (
  userid INT NOT NULL,
  placeid INT NOT NULL
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
