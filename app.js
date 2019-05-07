// app.js

const express = require('express');
const bodyParser = require('body-parser');

// Imports routes from products
const product = require('./routes/product.route');
// initialize our express app
const app = express();

// Set up our mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:abcd1234@ds151876.mlab.com:51876/productstutorial';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));
app.use('/products', product);

let port = 1234;

app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});
