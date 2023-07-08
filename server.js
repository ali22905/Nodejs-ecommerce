// settings
// to secure the DB link and credintials
// to get any variable from the .env file use (process.env.variable)
require('dotenv').config();
const express = require('express')
const app = express()
const port = 8080
// to change the path of things
const path = require('path');
// to make a post request
app.use(express.urlencoded({ extended: true }));
// to change the defult path of the views directory
app.set('views', path.join(__dirname, './src/views'))
// to act like you are in the views directory
app.set('view engine','pug');
// to act like we are in the dist folder from the pug file
app.use(express.static('dist'));
// import the product schema
const Product = require('./models/productSchema');
// browser only make post and get request so we installed library to help us
const method_override = require('method-override');
// import routes
const home = require('./routes/home')
const products_list = require('./routes/products-list')
const product = require('./routes/product')
const settings = require('./routes/settings')
const cart = require('./routes/cart')



// connect to mongo data base
const mongoose = require('mongoose');
 
mongoose.connect(process.env.DB_LINK)
  .then( result => {
    app.listen(process.env.PORT  ||  port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  })
  .catch( err => {
    console.log(err);
  }); 
// connected to mongoDB





// for auto refresh 
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));


const connectLivereload = require("connect-livereload");
const { send, render } = require('express/lib/response');
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
}); 
// end auto refresh







app.use(method_override('_method'))
app.use(express.json())



// use Home path
app.use(home)
// use product path
app.use(product)
// use products_list path
app.use(products_list)
// use settings path
app.use(settings)
// ! TODO: make a PUT requset to make the cart key in the DB = true and then render the cart file with all true products
// use cart path
app.use(cart)







app.get('/test', async (req, res) => {


  console.log(`done put request to`);


})


































  // let product;

  // try {
  //   product = await Product.find({product_id: req.params.product_id})
  //   product = req.body
  //   await product.save()
  //   res.redirect('/settings')
  // } catch (error) {
  //   if (product == null) {
  //     console.log("error from 'product.find'");
  //     console.log(error);
  //   }else {
  //     console.log("error from 'product.save'");
  //     console.log(error);
  //   }
    
  // }

  // Product.find({product_id: req.params.product_id})
  // .then((result) => {
  //   let data = req.body;
  //   data._id = result[0]._id;
  //   data.__v = result[0].__v;
  //   data.product_id = req.params.product_id;
  //   data
  //   .save()
  //   .then((result) => {
  //     res.render('/settings')
  //   })
  //   .catch((err) => {console.log(err);})
  // })
  // .catch((err) => {console.log(err);})














app.use((req, res) => {
  res.status(404).render('not-found')
})
