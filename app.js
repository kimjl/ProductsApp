// app.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes from products
const app = express(); // initialize our express app

app.use('/products', product);

let port = 1234;

app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});
