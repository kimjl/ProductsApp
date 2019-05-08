const Product = require('../models/product.model');

// Simple version, without validation or santitation
exports.test = function (req, res) {
  res.send('Greetings from the Test controller');
};

// product create
exports.product_create = function (req, res, next) {
  var product = new Product (
    {
      name: req.body.name,
      price: req.body.price
    }
  );

  product.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Product Created Successfully')
  })
};

// product details (reading)
exports.product_details = function (req, res, next) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return next(err);
    res.send(product);
  })
};


// product update
exports.product_update = function (req, res, next) {
  Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
    if (err) return next(err);
    res.send('Product updated.');
  });
};
