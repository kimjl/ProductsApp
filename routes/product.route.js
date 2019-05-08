const express = require('express');
const router = express.Router();

// Require the controller
const product_controller = require('../controllers/product.controller');

// A simple test url to check that all of our files are communicating properly
router.get('/test', product_controller.test);

// routes/products.route.js
router.get('/create', product_controller.product_create);

router.get('/:id', product_controller.product_details);

module.exports = router;
