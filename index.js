var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
    try {
        //console.log("running")
        await mongoose.connect("mongodb+srv://Webdev:12345@webdevasig.pjajynu.mongodb.net/mongodb://localhost:27017")
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()

const router = require('./routes/index');
app.use('/', router);

app.use(function (req, res, next) {
    next(createError(404));
});

const PORT = 3000;
app.listen(PORT, console.log(`Server running port ${PORT}`));