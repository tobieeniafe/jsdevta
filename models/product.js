const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true
	}
});

const Product = module.exports = mongoose.model('Product', ProductSchema);

module.exports.findAllProducts = (callback) => {
 	Product.find(callback);
}

module.exports.getProductById = (id, callback) => {
	Product.findById(id, callback);
}

module.exports.addProduct = (product_object, callback) => {
 	Product.create(product_object, callback);
}

module.exports.deleteProductById = (id, callback) => {
	var query = { 
		_id: id 
	};
	Product.deleteOne(query, callback);
}
