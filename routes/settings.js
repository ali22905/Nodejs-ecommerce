const express = require('express');
const router = express.Router();
const Product = require('../models/productSchema');



router.get('/settings/:product_id', (req, res) => {  
  Product.find({product_id: req.params.product_id})
  .then((result) => {
    res.render('edit-product', {
      title: 'edit product',
      product_id: result[0].product_id,
      product_name: result[0].product_name,
      price: result[0].price,
      img1: result[0].img1,
      img2: result[0].img2,
      availability: result[0].availability
    })
  })
  .catch((err) => {console.log(err)})
})

// to update data
router.post('/settings/:product_id', async (req, res) => {
  // (to find obj, {what you want to update}, options, callbackfun if there is error)
  Product.findOneAndUpdate(
    {product_id: req.params.product_id}, 
    {
    product_name: req.body.product_name,
    price: req.body.price,
    img1: req.body.img1,
    img2: req.body.img2
    }
    , {new: true /*will make the data in the callback fun = the new obj not the old*/},
    (err, data) => {err ? console.log(err) : res.redirect('/settings')}
  )

})

router.get('/settings', (req, res) => {
  Product
  .find()
  .then((result) => {
    let ids = []
    for(let i = 0; i < result.length; i++) {
      ids.push(result[i].product_id)
    }
    res.render('settings', {
      title : 'settings',
      ids_str: ids
    })
  })
  .catch((err) => {console.log(err);})
})

router.post('/settings', async (req, res) => {
  const result = await Product.find();
  res.json(result)
})





module.exports = router




