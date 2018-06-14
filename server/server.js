const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser')

const owner = require('./routes/owner');
const pet = require('./routes/pet');

const port = process.env.PORT || 5000; 

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.use('/pet-dashboard', pet);
app.use( '/owners', owner);

app.listen(port, function() {
    console.log('listening on port', port);
});
