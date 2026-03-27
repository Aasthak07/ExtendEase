const mongoose = require('mongoose');

const url = process.env.DB_URL;

mongoose.connect(url)
    .then((result) => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log(err);
    });

module.exports = mongoose;