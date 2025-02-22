const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  url: String,
  currentPrice: Number,
  priceHistory: [{ date: String, price: Number }],
  email: String,
});

module.exports = mongoose.model("Product", ProductSchema);
