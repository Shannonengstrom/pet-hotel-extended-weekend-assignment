const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser')

const owner = require('./routes/owners');
const pet = require('./routes/pets');

const port = process.env.PORT || 5000; 

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({encoded: true}));
app.use(bodyParser.json());

app.use('/pet', pet);
app.use( '/owner', owner);

app.listen(port, function() {
    console.log('listening on port', port);
});

