const express = require('express');
const router = express.Router();
const Product = require('../models/productSchema');



router.get('/product/:product_id', async (req, res, next) => {
  let result;
  try {
    result = await Product.find({product_id: req.params.product_id})
    res.render('product', {
      title: result[0].product_name,
      product: result[0],
    })
  } catch (error) {
    console.log(error);
  }
  Product.findOneAndUpdate({product_id: req.params.product_id}, {visits: result[0].visits+1}, 
    (err, data) => {if(err) {console.log(err);}}
    )
})
router.put('/product/:id', async (req, res) => {
  Product.findOneAndUpdate(
    {_id: req.params.id},
    {cart: true},
    {new: true},
    (err, data) => {err ? console.log(`ali error PUT req at "product/:id" ==> ${err} `) : res.json(  {link: '/cart'}  )  }
    )
})




module.exports = router




