const express = require('express');
const db = require('./data/database');
const path = require('path');

const app = express();

const authRoutes = require("./routes/auth.routes");


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(authRoutes);


db.connectToDatabase().then(function () {
    app.listen(3000);
});