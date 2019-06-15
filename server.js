const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./server/config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
    .connect(dbConfig.url, {useNewUrlParser: true})
    .then(() => {

        console.log("Successfully connected to the database");
        // console.log("Data", data);
    })
    .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Hurrah...... :) "});
});

require('./server/routes/transactions.routes.js')(app);

// listen for requests
app.listen(4000);