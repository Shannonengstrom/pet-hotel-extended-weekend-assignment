CREATE TABLE owners (
	"id" SERIAL PRIMARY KEY, 
	"name" VARCHAR(80) NOT NULL 
);

INSERT INTO owners ("name") 
VALUES ('Cookie Fleck'), ('Harlan Pepper'), ('Sherri Ann Cabot'), ('Scott Donlan');

CREATE TABLE pets (
	"id" SERIAL PRIMARY KEY, 
	"owners_id" integer REFERENCES owners,
	"pet_name" VARCHAR(80) NOT NULL, 
	"color" VARCHAR (30) NOT NULL, 
	"breed" VARCHAR(30) NOT NULL, 
	"status" VARCHAR DEFAULT 'no'
);

INSERT INTO pets ("owners_id", "pet_name", "color", "breed") 
VALUES (1, 'Winky', 'golden', 'Norwich Terrier'), (2, 'Hubert', 'red', 'Bloodhound'), (3, 'Rhapsody in White a.k.a. Butch', 'Standard Poodle', 'white'), (4, 'Miss Agnes', 'Shih Tzu', 'white and silver');

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_date date,
    total numeric(4,2),
    address_id integer REFERENCES pets
);
