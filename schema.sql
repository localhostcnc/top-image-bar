DROP DATABASE  IF EXISTS photogallery;
CREATE DATABASE photogallery;

USE photogallery;

CREATE TABLE listings(
    id INT  AUTO_INCREMENT UNIQUE,
    name VARCHAR(255)
);

CREATE TABLE images(
    id INT AUTO_INCREMENT UNIQUE, 
    url VARCHAR(255) NOT NULL, 
    listings_id INT,
    FOREIGN KEY(listings_id)
        REFERENCES listings(id)
);



INSERT INTO images (url) VALUES ('https://image.coms');