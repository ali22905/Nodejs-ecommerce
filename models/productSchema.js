// get mongoose
const mongoose = require("mongoose");
// get schema
const Schema = mongoose.Schema;


const productSchema = new Schema({
  product_id: String,
  category: String,
  gender: String,
  product_name: String,
  price: Number,
  img1: String,
  img2: String,
  availability: String,
  visits: Number,
  des: String,
  size: String,
  cart: Boolean
});

// Create a model based on that schema
// const Model_name = mongoodse.model("Model_name", schema_name)
const Product = mongoose.model("Product", productSchema);


// export the model
module.exports = Product; 