const express = require('express');
const router = express.Router();
const Product = require('../models/productSchema');





router.get('/home/products-list', async (req, res) => {
  // localhost:8080/home/all-men?gender=men,woman

  if (req.query.gender !== undefined && req.query.size == undefined && req.query.category == undefined) {
    Product.find({gender: req.query.gender.split(',')})
    .then((result) => {
      res.render('products-list', {
        title: 'AZ products',
        all_data: result,
        URL: `/home/products-list?gender=${req.query.gender}`
      })
    })
    .catch((err) => {console.log(err);})
  }else if (req.query.size !== undefined && req.query.gender == undefined && req.query.category == undefined) {
    Product.find({size: req.query.size.split(',')})
    .then((result) => {
      res.render('products-list', {
        title: 'AZ products',
        all_data: result,
        URL: `/home/products-list?size=${req.query.size}`
      })
    })
    .catch((err) => {console.log(err);})
  }else if (req.query.category !== undefined && req.query.gender == undefined && req.query.size == undefined) {
    Product.find({category: req.query.category.split(',')})
    .then((result) => {
      res.render('products-list', {
        title: 'AZ products',
        all_data: result,
        URL: `/home/products-list?size=${req.query.size}`
      })
    })
    .catch((err) => {console.log(err);})
  }else if (req.query.size !== undefined && req.query.gender !== undefined && req.query.category == undefined) {
    Product.find({size: req.query.size.split(','), gender: req.query.gender.split(',')})
    .then((result) => {
      res.render('products-list', {
        title: 'AZ products',
        all_data: result,
        URL: `/home/products-list?size=${req.query.size}&gender=${req.query.gender}`
      })
    })
    .catch((err) => {console.log(err);})
  }else if (req.query.gender !== undefined && req.query.category !== undefined && req.query.size == undefined){
    Product.find({gender: req.query.gender.split(','), category: req.query.category.split(',')})
    .then((result) => {
      res.render('products-list', {
        title: 'AZ products',
        all_data: result,
        URL: `/home/products-list?gender=${req.query.gender}&category=${req.query.category}`
      })
    })
    .catch((err) => {console.log(err);})
  }else if (req.query.size !== undefined && req.query.category !== undefined && req.query.gender == undefined) {
    Product.find({size: req.query.size.split(','), category: req.query.category.split(',')})
    .then((result) => {
      res.render('products-list', {
        title: 'AZ products',
        all_data: result,
        URL: `/home/products-list?size=${req.query.size}&category=${req.query.category}`
      })
    })
    .catch((err) => {console.log(err);})
  }else if (req.query.size !== undefined && req.query.category !== undefined && req.query.gender !== undefined) {
    Product.find({size: req.query.size.split(','), category: req.query.category.split(',')})
    .then((result) => {
      res.render('products-list', {
        title: 'AZ products',
        all_data: result,
        URL: `/home/products-list?size=${req.query.size}&category=${req.query.category}&gender=${req.query.gender}`
      })
    })
    .catch((err) => {console.log(err);})
  }










})
router.post('/home/products-list', async (req, res) => {
  let result = await Product.find();
  search_val = [];
  for (let i = 0; i < result.length; i++) {
    let splited_name = result[i].product_name.split('')
    splited_name.length = req.body.product_name.split('').length
    if (splited_name.join('').toLowerCase() == req.body.product_name.toLowerCase()) {
      search_val.push(result[i])
    }
  }
  res.render('products-list', {
    title: `AZ ${req.body.product_name}`,
    all_data: search_val,
    URL: `/home/products-list?`
  })
})






module.exports = router



