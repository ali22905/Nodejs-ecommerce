const express = require('express');
const router = express.Router();
const Product = require('../models/productSchema');





// ! TODO: watch the freecode camp express course
router.get('/cart', async (req, res, next) => {
  try {
    const result = await Product.find({cart: true});
    res.render('cart', {
      title: "my cart",
      all_data : result,
      URL : '/cart'
    })
  } catch (error) {
    console.log(error);
  }
})
router.put('/cart/:id', async (req, res, next) => {
  Product.findOneAndUpdate(
    {_id: req.params.id},
    {cart: false},
    {new: true},
    (err, data) => {err ? console.log(`error from cart/:id ==> ${err}`) : res.json({link: '/cart'})}
    );
})







module.exports = router


