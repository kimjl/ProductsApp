const Product = require('../models/product.model');

// Simple version, without validation or santitation
exports.test = function (req, res) {
  res.send('Greetings from the Test controller');
};
