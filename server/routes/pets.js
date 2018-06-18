const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    console.log('in router GET');
    const queryText = `SELECT * FROM pets
    JOIN owners ON pets.owners_id = owners.id;`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('error getting all pets', err);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    console.log('in router.POST to create new pet', req.body);
    const newPet = req.body;
    const queryText = `INSERT INTO pets ("pet_name", "color", "breed", "owners_id", "is_checked_in") 
    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [newPet.pet_name, newPet.color, newPet.breed, newPet.owners_id, newPet.is_checked_in])
        .then((result) => {}).then((result) => {
            console.log('back from DB', result);
            res.sendStatus(200);
        }).catch((err) => {
            console.log('error in router POST', err);
        });
});


router.delete('/:id', (req, res) => {
    console.log(`DELETE params ID`, req.params.id);
    const petId = req.params.id;
    const queryText = `DELETE FROM pets WHERE id=$1;`;
    pool.query(queryText, [petId])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error making pets delete query', error);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    console.log('in router.put', req.params.id);
    const petId = req.params.id;
    const queryText = `UPDATE pets
    SET is_checked_in = CURRENT_TIMESTAMPE(0) WHERE is_checked_in IS NULL AND id=$1;`;
    pool.query(queryText, [petId])
        .then((result) => {
            console.log('updated pet with checkin date', petId);
            res.sendStatus(200);
        }).catch((err) => {
            console.log('error updating pet with checkedin date', petId);
            res.sendStatus(500);
        });
});


router.get('/:id', (req, res) => {
    console.log('in router GET for pet by id');
    const queryText = `SELECT * FROM pets WHERE id=$1;`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('error getting pet by id', err);
        res.sendStatus(500);
    });
});

module.exports = router;