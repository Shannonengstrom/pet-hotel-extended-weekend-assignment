const express = require('express'); 
const router = express.Router(); 
const pool = require('../modules/pool');


router.get('/', function (req, res) {
    console.log('in router GET');
    const queryText = 'SELECT * FROM pets';
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
    const queryText = `INSERT INTO pets ("owners_id", "pet_name", "color", "breed") 
    VALUES ($1, $2, $3, $4)`;
    
    pool.query(queryText, [newPet.owners_id, newPet.pet_name, newPet.color, newPet.breed ])
        .then((result) => {
            console.log('back from DB', result);
            res.sendStatus(200);
        }).catch((err) => {
            console.log('error in router POST', err);
        });
});

module.exports = router; 