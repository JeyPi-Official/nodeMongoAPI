const router = require('express').Router();
const Product = require('../models/productModel');

//show products
router.get('/inventory', async (req, res) => {
    try {
        const inventory = await Product.find();
        res.json(inventory);
    } catch (err) {
        console.log(err);
    }
});

//add products
router.post('/add', async (req, res) => {
    try {
        const data = req.body;
        const newProduct = new Product(data);
        await newProduct.save();
        res.json('Added!');
    } catch (err) {
        console.log(err);
    }
});

//delete products
router.post('/delete/:id', async(req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json('Deleted!');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;