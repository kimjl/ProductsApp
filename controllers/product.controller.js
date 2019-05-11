const Product = require('../models/product.model');

// Simple version, without validation or santitation
exports.test = (req, res) => {
  res.send('Greetings from the Test controller');
};

// product create
exports.product_create = (req, res, next) => {
  var product = new Product (
    {
      name: req.body.name,
      price: req.body.price
    }
  );
  product.save((err) => {
    if (err) {
      return next(err);
    }
    res.send('Product Created Successfully')
  })
};

// product details (reading)
exports.product_details = (req, res, next) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) return next(err);
    res.send(product);
  })
};

// product update
exports.product_update = (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, product) => {
    if (err) return next(err);
    res.send('Product updated.');
  });
};

// product delete
exports.product_delete = function (req, res, next) {
  Product.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    res.send('Deleted successfully!');
  })
};
