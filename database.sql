CREATE TABLE owners (
	"id" SERIAL PRIMARY KEY, 
	"first_name" VARCHAR(80) NOT NULL, 
	"last_name" VARCHAR(80) NOT NULL 
);

INSERT INTO owners ("first_name", "last_name") 
VALUES ('Cookie', 'Fleck'), ('Harlan', 'Pepper'), ('Sherri Ann', 'Cabot'), ('Scott', 'Donlan') ;

INSERT INTO owners ("first_name", "last_name", "pet_count") 
VALUES ('Shannon', 'Engstrom', 1);

CREATE TABLE pets (
	"id" SERIAL PRIMARY KEY, 
	"owners_id" integer REFERENCES owners ON DELETE CASCADE,
	"pet_name" VARCHAR(80) NOT NULL, 
	"color" VARCHAR (30) NOT NULL, 
	"breed" VARCHAR(30) NOT NULL, 
	"is_checked_in" VARCHAR DEFAULT 'no', 
	"checkin_date" DATE  
);

INSERT INTO pets ("owners_id", "pet_name", "color", "breed") 
VALUES (1, 'Winky', 'golden', 'Norwich Terrier'), (2, 'Hubert', 'red', 'Bloodhound'), (3, 'Rhapsody in White a.k.a. Butch', 'Standard Poodle', 'white'), (4, 'Miss Agnes', 'Shih Tzu', 'white and silver');

INSERT INTO pets ("owners_id", "pet_name", "color", "breed") 
VALUES (6, 'Cheech', 'black and white', 'Terrier');

SELECT * FROM pets
JOIN owners ON pets.owners_id = owners.id;

CREATE TABLE owners_pets(
owner_id INT NOT NULL REFERENCES owners ON DELETE CASCADE,
pet_id INT NOT NULL REFERENCES pets,
PRIMARY KEY( owner_id, pet_id)
);


INSERT INTO owners_pets
VALUES (1, 1), (2, 2), (3, 3), (4, 4);


SELECT * FROM owners;
DELETE FROM owners WHERE id = 1;



SELECT owners.first_name, count(owners_id) FROM owners
LEFT JOIN pets ON owners.id = pets.owners_id
GROUP BY owners.first_name;







