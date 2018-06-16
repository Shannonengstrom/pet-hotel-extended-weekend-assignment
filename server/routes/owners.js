const express = require('express'); 
const router = express.Router(); 
const pool = require('../modules/pool');


router.get('/', function (req, res) {
    console.log('in router GET');
    const queryText = `SELECT owners.first_name, count(owners_id) FROM owners
    LEFT JOIN pets ON owners.id = pets.owners_id
    GROUP BY owners.first_name;`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('error getting all owners', err);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    console.log('in router.POST to create new owner', req.body );
    const newOwner = req.body; 
    const queryText = `INSERT INTO owners ("first_name", "last_name")  
    VALUES ($1, $2);`;
    pool.query(queryText, [newOwner.first_name, newOwner.last_name ])
        .then((result) => {
        console.log('back from DB', result);
        res.sendStatus(200);
    }).catch((err) => {
        console.log('error in router POST', err);
    });
});

router.delete('/:id', function (req, res) {
    console.log(`DELETE params ID`, req.params.id);
    ownerId = req.params.id
    const queryText = `DELETE FROM owners WHERE id = $1;`;
    pool.query(queryText, [ownerId])
        .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error making owners delete query', error);
        res.sendStatus(500);
    });
});

module.exports = router; 