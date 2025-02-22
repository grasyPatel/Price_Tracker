const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const Product = require("../models/Product");

const router = express.Router();

// Function to scrape price from website
async function scrapePrice(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const priceText = $(".price").first().text().replace("$", "").trim();
    return parseFloat(priceText);
  } catch (error) {
    console.error("Scraping failed", error);
    return null;
  }
}

// Get all tracked products
router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get product by ID
router.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// Track a new product
router.post("/track", async (req, res) => {
  const { name, url, email } = req.body;
  const currentPrice = await scrapePrice(url);

  if (!currentPrice) return res.status(400).json({ message: "Failed to retrieve price" });

  const newProduct = new Product({
    name,
    url,
    currentPrice,
    priceHistory: [{ date: new Date().toISOString(), price: currentPrice }],
    email,
  });

  await newProduct.save();
  res.json(newProduct);
});

module.exports = router;
