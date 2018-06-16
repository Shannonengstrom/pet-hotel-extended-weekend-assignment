const express = require('express'); 
const router = express.Router(); 
const pool = require('../modules/pool');


router.get('/', function (req, res) {
    console.log('in router GET');
    const queryText = `SELECT * FROM pets JOIN owners ON pets.owners_id = owners.id;`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('error getting all pets', err);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    console.log('in router.POST to create new pet', req.body );
    const newPet = req.body; 
    const queryTextA = `INSERT INTO pets ("owners_id", "pet_name", "color", "breed") 
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryTextA, [newPet.owners_id, newPet.pet_name, newPet.color, newPet.breed ])
        .then((result) => {    
    const queryTextB = `INSERT INTO owners ("ow", "pet_name", "color", "breed") 
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryTextB, [newPet.owners_id, newPet.pet_name, newPet.color, newPet.breed ])
        }).then((result) => { 
            console.log('back from DB', result);
            res.sendStatus(200);
        }).catch((err) => {
            console.log('error in router POST', err);
        });
});

module.exports = router; 