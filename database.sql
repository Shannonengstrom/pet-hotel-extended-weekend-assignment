CREATE TABLE owners (
	"id" SERIAL PRIMARY KEY, 
	"first_name" VARCHAR(80) NOT NULL, 
	"last_name" VARCHAR(80) NOT NULL, 
	"pet_count" integer 
);

INSERT INTO owners ("first_name", "last_name", "pet_count") 
VALUES ('Cookie', 'Fleck', 1), ('Harlan', 'Pepper', 1), ('Sherri Ann', 'Cabot', 3), ('Scott', 'Donlan', 1);

CREATE TABLE pets (
	"id" SERIAL PRIMARY KEY, 
	"owners_id" integer REFERENCES owners,
	"pet_name" VARCHAR(80) NOT NULL, 
	"color" VARCHAR (30) NOT NULL, 
	"breed" VARCHAR(30) NOT NULL, 
	"is_checked_in" VARCHAR DEFAULT 'no'
);

INSERT INTO pets ("owners_id", "pet_name", "color", "breed") 
VALUES (1, 'Winky', 'golden', 'Norwich Terrier'), (2, 'Hubert', 'red', 'Bloodhound'), (3, 'Rhapsody in White a.k.a. Butch', 'Standard Poodle', 'white'), (4, 'Miss Agnes', 'Shih Tzu', 'white and silver');

