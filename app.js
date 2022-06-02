const express = require('express');
const db = require('./data/database');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

db.connectToDatabase().then(function () {
    app.listen(3000);
});