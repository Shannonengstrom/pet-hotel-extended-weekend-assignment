
-- OWNERS
CREATE TABLE owners (
	"id" SERIAL PRIMARY KEY, 
	"first_name" VARCHAR(80) NOT NULL, 
	"last_name" VARCHAR(80) NOT NULL 
);

INSERT INTO owners ("first_name", "last_name") 
VALUES ('Cookie', 'Fleck'), ('Harlan', 'Pepper'), ('Sherri Ann', 'Cabot'), ('Scott', 'Donlan') ;

SELECT * FROM owners;
DELETE FROM owners WHERE id = 1;

SELECT owners.first_name, count(owners_id) FROM owners
LEFT JOIN pets ON owners.id = pets.owners_id
GROUP BY owners.first_name;


-- PETS
CREATE TABLE pets (
	"id" SERIAL PRIMARY KEY, 
	"owners_id" integer REFERENCES owners ON DELETE CASCADE,
	"pet_name" VARCHAR(80) NOT NULL, 
	"color" VARCHAR (30) NOT NULL, 
	"breed" VARCHAR(30) NOT NULL, 
	"is_checked_in" DATE 
);

INSERT INTO pets ("owners_id", "pet_name", "color", "breed") 
VALUES (1, 'Winky', 'golden', 'Norwich Terrier'), (2, 'Hubert', 'red', 'Bloodhound'), (3, 'Rhapsody in White a.k.a. Butch', 'Standard Poodle', 'white'), (4, 'Miss Agnes', 'Shih Tzu', 'white and silver');

SELECT * FROM pets
JOIN owners ON pets.owners_id = owners.id;

SELECT owners.first_name, owners.id, count(owners_id) FROM owners
LEFT JOIN pets ON owners.id = pets.owners_id
GROUP BY owners.first_name, owners.id;

DELETE FROM pets WHERE id = 6;

UPDATE pets
SET is_checked_in = CURRENT_TIMESTAMP IS NULL AND id=2;
SELECT * FROM pets WHERE id=2;


-- If I get to stretch goals

CREATE TABLE owners_pets(
owner_id INT NOT NULL REFERENCES owners ON DELETE CASCADE,
pet_id INT NOT NULL REFERENCES pets,
PRIMARY KEY( owner_id, pet_id)
);

INSERT INTO owners_pets
VALUES (1, 1), (2, 2), (3, 3), (4, 4);
