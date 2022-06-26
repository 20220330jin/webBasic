// const resData = require('./util/restaurant-data');
const defaultRoutes = require('./routes/default');
const restaurantRoutes = require('./routes/restaurant');

const uuid = require('uuid');

// const fs = require('fs');

const path = require('path');

const express = require('express');

const app = express();

// replace html to ejs
app.set('views', path.join(__dirname, 'views')) // path template file
app.set('view engine', 'ejs'); // setting ejs template

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use('/', defaultRoutes);
app.use('/', restaurantRoutes);

// 404 error handler
app.use(function (req, res) {
    res.status(404).render('404');
});

// 500 error handler
app.use(function (error, req, res, next) {
    res.status(500).render('500');
})

app.listen(3000);