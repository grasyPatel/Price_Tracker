const cron = require("node-cron");
const axios = require("axios");
const cheerio = require("cheerio");
const Product = require("./models/Product");
const sendEmailAlert = require("./utils/sendEmailAlert");

// Function to scrape updated price
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

// Scheduled job to update prices every 6 hours
cron.schedule("0 */6 * * *", async () => {
  console.log("Running scheduled price check...");

  const products = await Product.find();
  for (let product of products) {
    const newPrice = await scrapePrice(product.url);
    if (newPrice && newPrice !== product.currentPrice) {
      product.priceHistory.push({ date: new Date().toISOString(), price: newPrice });
      product.currentPrice = newPrice;
      await product.save();
      sendEmailAlert(product.email, product.name, newPrice);
    }
  }
});

console.log("Price tracking cron job scheduled.");
