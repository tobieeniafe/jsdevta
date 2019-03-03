const express = require('express');
const path = require('path');
const app = express();
const body_parser = require('body-parser');
const cors = require('cors');
const mongoose =  require('mongoose');
const morgan = require('morgan');
const config = require('./config/database');
const product = require('./routes/product');
const port = 4000;

mongoose.connect(config.database, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
	console.log('Connected to ' + config.database);
});

mongoose.connection.on('error', (err) => {
	console.log('DB error ' + err);
});

app.use(cors());


app.use(express.static(path.join(__dirname, 'static')));
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(morgan('dev'));

app.use('/product', product);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.listen(process.env.PORT || port, (err) => {
	if (err) {
		console.log(err);
	} else{
		console.log('Server running on port '+ port);
	}
});
