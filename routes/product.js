const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/all', (req, res) => {
	Product.findAllProducts((err, products) => {
		if (err) throw err;

		if (!products){
			res.status(404).send({success: false, message: 'No products found'});
		} else {
			res.json(products);
		}
	});
});

router.get('/:id', (req, res) => {
	var id = req.params.id;
	Product.getProductById(id, (err, product) => {
		if (err) throw err;	

		if (!product){
			res.status(404).send({success: false, message: 'Product not found'});
		} else {
			res.json(product);
		}
	});
});

router.post('/add', (req, res) => {
	var product_object = req.body;
	Product.addProduct(product_object, (err, product) => {
		if (err) throw err;
		res.status(200).send({success: true, message: 'Product added'});
	});
});


module.exports = router;