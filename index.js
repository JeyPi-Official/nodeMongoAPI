const express = require('express');
const path = require('path');
const product = require('./routes/producto');

const cors = require('cors');
const connectMongoDB = require('./connection');

connectMongoDB();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/api', product);

app.use(cors());

const port = 5000;

app.listen(port, () => {
    console.log('Server online');
});