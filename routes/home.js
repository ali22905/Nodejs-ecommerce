const express = require('express');
const router = express.Router();
const Product = require('../models/productSchema');



router.get('/', (req, res) => {
  res.redirect('/home')
})


router.get('/home', (req, res) => {
  Product.find()
  .then(async (result) => {
    let renderObj = {title: 'AZ store home', all_products: result}
    for (let i = 0; i < result.length; i++) {
      renderObj[`product${i+1}`] = result[i]
      renderObj[`product${i+1}_id`] = result[i].product_id
      renderObj[`product${i+1}_product_name`] = result[i].product_name
      renderObj[`product${i+1}_price`] = result[i].price
      renderObj[`product${i+1}_img1`] = result[i].img1
      renderObj[`product${i+1}_img2`] = result[i].img2
      renderObj[`product${i+1}_availability`] = result[i].availability
      renderObj[`product${i+1}_id`] = result[i].product_id
    }

    first_lowP = result.reduce((acc, current) => {
      return parseInt(acc.price) < parseInt(current.price) ? acc : current
    })
    result.splice(result.indexOf(first_lowP), 1)
    second_lowP = result.reduce((acc, current) => {
      return parseInt(acc.price) < parseInt(current.price) ? acc : current
    })
    result.splice(result.indexOf(second_lowP), 1)
    third_lowP = result.reduce((acc, current) => {
      return parseInt(acc.price) < parseInt(current.price) ? acc : current
    })
    result.splice(result.indexOf(third_lowP), 1)
    forth_lowP = result.reduce((acc, current) => {
      return parseInt(acc.price) < parseInt(current.price) ? acc : current
    })
    renderObj.first_lowP = first_lowP;
    renderObj.first_lowP_name = first_lowP.product_name;
    renderObj.first_lowP_price = first_lowP.price;
    renderObj.first_lowP_img1 = first_lowP.img1;
    renderObj.first_lowP_img2 = first_lowP.img2;
    renderObj.first_lowP_availability = first_lowP.availability;
    renderObj.first_lowP_id = first_lowP.product_id;
    renderObj.second_lowP = second_lowP;
    renderObj.second_lowP_name = second_lowP.product_name;
    renderObj.second_lowP_price = second_lowP.price;
    renderObj.second_lowP_img1 = second_lowP.img1;
    renderObj.second_lowP_img2 = second_lowP.img2;
    renderObj.second_lowP_availability = second_lowP.availability;
    renderObj.second_lowP_id = second_lowP.product_id;
    renderObj.third_lowP = third_lowP;
    renderObj.third_lowP_name = third_lowP.product_name;
    renderObj.third_lowP_price = third_lowP.price;
    renderObj.third_lowP_img1 = third_lowP.img1;
    renderObj.third_lowP_img2 = third_lowP.img2;
    renderObj.third_lowP_availability = third_lowP.availability;
    renderObj.third_lowP_id = third_lowP.product_id;
    renderObj.forth_lowP = forth_lowP;
    renderObj.forth_lowP_name = forth_lowP.product_name;
    renderObj.forth_lowP_price = forth_lowP.price;
    renderObj.forth_lowP_img1 = forth_lowP.img1;
    renderObj.forth_lowP_img2 = forth_lowP.img2;
    renderObj.forth_lowP_availability = forth_lowP.availability;
    renderObj.forth_lowP_id = forth_lowP.product_id;

    const sorted = await Product.find({}).sort({visits: -1})
    renderObj.popular = sorted
    res.render('index', renderObj)
  })
  .catch((err) => {console.log(err);})
})


router.post('/home', (req, res) => {
  const product = new Product(req.body)
  product
  .save()
  .then(result => {
    res.redirect('/')
  })
  .catch((err) => {console.log(err)})
})





module.exports = router




